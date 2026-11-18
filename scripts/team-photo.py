"""Turn a basic photo into a team portrait in the site's studio style.

Usage:
    python3 scripts/team-photo.py <input-photo> <slug>

Writes assets/img/team/<slug>-480.webp, -800.webp and -800.jpg (4:5 portraits).

Steps: cut the person out (rembg), even out the colour and exposure, sharpen
lightly, then place them on the same grey studio backdrop as the lead
advocate's portrait, framed the same way every time. It only relights and
reframes the real photo; it does not add or change clothing.

Needs: pip install "rembg[cpu]" pillow numpy
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageOps
from rembg import new_session, remove

W, H = 800, 1000  # 4:5 portrait


def studio_backdrop(w, h):
    """Soft grey studio light: brighter behind the head, falling off to the edges."""
    y, x = np.mgrid[0:h, 0:w]
    cx, cy = w * 0.5, h * 0.32
    d = np.sqrt(((x - cx) / (w * 0.75)) ** 2 + ((y - cy) / (h * 0.75)) ** 2)
    light = np.clip(1 - d, 0, 1) ** 1.4
    base = np.array([200, 203, 207], float)  # edges
    peak = np.array([236, 237, 239], float)  # behind the head
    img = base + (peak - base) * light[..., None]
    img += np.random.default_rng(7).normal(0, 1.2, img.shape)  # fine grain to avoid banding
    return Image.fromarray(np.clip(img, 0, 255).astype(np.uint8), 'RGB')


def balance(rgb):
    """Gentle grey-world white balance and auto-contrast on the person only."""
    a = np.asarray(rgb).astype(float)
    means = a.reshape(-1, 3).mean(0)
    a *= (means.mean() / means) ** 0.5  # half-strength correction keeps skin tones natural
    out = Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))
    out = ImageOps.autocontrast(out, cutoff=0.5)
    return out.filter(ImageFilter.UnsharpMask(radius=1.6, percent=60, threshold=2))


def main(src, slug):
    im = ImageOps.exif_transpose(Image.open(src)).convert('RGB')
    if max(im.size) > 2000:
        im.thumbnail((2000, 2000), Image.LANCZOS)
    small = max(im.size) < 1000
    if small:
        # Low-resolution photos (for example from WhatsApp): enlarge first, and skip
        # edge refinement, which turns small, compressed hair edges blocky.
        im = im.resize((im.width * 2, im.height * 2), Image.LANCZOS)
    cut = remove(im, session=new_session('isnet-general-use'), alpha_matting=not small,
                 alpha_matting_foreground_threshold=240, alpha_matting_background_threshold=20, alpha_matting_erode_size=8)
    # The cut-out can leave parts of a black gown semi-transparent, letting the old
    # background show through as a haze. Below the neck, make dark pixels solid.
    a = np.asarray(cut.getchannel('A')).copy()
    luma = np.asarray(im.convert('L'))
    rows = np.where((a > 200).any(1))[0]
    if rows.size:
        neck = rows[0] + round((rows[-1] - rows[0]) * 0.4)
        lower = np.zeros_like(a, dtype=bool)
        lower[neck:] = True
        a[lower & (a > 15) & (luma < 110)] = 255
    # Keep only the person: drop stray fragments of people or objects in the background.
    solid = a > 40
    h, w = a.shape
    if (a[-1] > 200).any():  # seed in the body: bottom row, nearest the middle
        xs = np.nonzero(a[-1] > 200)[0]
        seed = (int(xs[np.argmin(np.abs(xs - w / 2))]), h - 1)
    else:  # body does not reach the bottom: lowest solid pixel
        ys, xs = np.nonzero(a > 200)
        i = int(np.argmax(ys))
        seed = (int(xs[i]), int(ys[i]))
    mask = Image.fromarray((solid * 255).astype(np.uint8))
    ImageDraw.floodfill(mask, seed, 128)
    stray = np.asarray(mask) == 255  # solid but not connected to the body
    if stray.sum() < solid.sum() * 0.5:  # safety: never remove most of the figure
        a[stray] = 0
    alpha = Image.fromarray(a)
    person = balance(cut.convert('RGB'))
    person.putalpha(alpha)

    # Frame: shoulders slightly wider than the frame, body running off the bottom edge,
    # so photo edges and cut-off sleeves fall outside the picture. Head about 9% from the top.
    l, t, r, b = alpha.point(lambda v: 255 if v > 40 else 0).getbbox()
    person = person.crop((l, t, r, b))
    scale = W * 1.08 / person.width
    if person.height * scale < H * 0.93:  # short crop: grow until it reaches the bottom
        scale = H * 0.93 / person.height
    person = person.resize((round(person.width * scale), round(person.height * scale)), Image.LANCZOS)
    top = round(H * 0.09)
    canvas = studio_backdrop(W, H)
    canvas.paste(person, ((W - person.width) // 2, top), person)

    out = Path('assets/img/team')
    out.mkdir(parents=True, exist_ok=True)
    canvas.save(out / f'{slug}-800.jpg', quality=86, optimize=True)
    canvas.save(out / f'{slug}-800.webp', quality=84)
    canvas.resize((480, 600), Image.LANCZOS).save(out / f'{slug}-480.webp', quality=82)
    print('wrote', *(out / f'{slug}{s}' for s in ('-800.jpg', '-800.webp', '-480.webp')))


if __name__ == '__main__':
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
