# Adv. S. P. Madewad Jamadar & Associates: website

A static website for an advocate's practice in Shivaji Nagar, Pune. No framework and no dependencies.

## Build and preview

```bash
npm run build   # writes the site to dist/
npm run serve   # builds, then serves dist/ at http://localhost:8080
```

## Where things live

| File | What it holds |
|---|---|
| `src/site.mjs` | Name, address, phone numbers, hours, domain. Every page reads from here. |
| `src/practice.mjs` | One entry per practice area: its page and its card in the home page's matter guide. |
| `src/posts.mjs` | Legal guides (blog posts). Add a post by adding an entry. |
| `build.mjs` | Page templates, schema markup, `sitemap.xml`, `robots.txt` and `llms.txt`. |
| `assets/` | Stylesheet, script, favicon and images. |

## Before launch

- Set the real domain in `src/site.mjs` (`url`).
- Confirm the address ("Supreme Tower"), PIN code and office hours.
- Add the Bar Council enrolment number and fill in the highlighted placeholders on the About page.
- Have the advocate review every practice page and guide for accuracy.

## Deploying

`vercel.json` is set up for Vercel: it runs `node build.mjs` and serves `dist/`. Any static host works the same way.
