// Small progressive enhancements. Every page works without this file.
(() => {
  // Bar Council of India disclaimer: shown once per visitor.
  const dialog = document.getElementById('bci-disclaimer');
  let agreed = false;
  try { agreed = localStorage.getItem('bci-agreed') === '1'; } catch (e) {}
  if (dialog && !agreed && typeof dialog.showModal === 'function') {
    dialog.showModal();
    dialog.addEventListener('close', () => {
      try { localStorage.setItem('bci-agreed', '1'); } catch (e) {}
    });
    dialog.addEventListener('cancel', (e) => e.preventDefault()); // must click "I agree"
  }

  // Mobile menu.
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
      nav.classList.toggle('open', open);
    });
  }

  // Tab sets ("What's happening right now?"), with arrow-key support.
  document.querySelectorAll('[data-tabs]').forEach((root) => {
    const tabs = [...root.querySelectorAll('[role="tab"]')];
    const select = (tab, focus) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        panel.hidden = !on;
        if (on) {
          panel.classList.remove('is-entering');
          void panel.offsetWidth;
          panel.classList.add('is-entering');
        }
      });
      if (focus) tab.focus();
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (e) => {
        const next = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
        if (next === undefined) return;
        e.preventDefault();
        select(tabs[(next + tabs.length) % tabs.length], true);
      });
    });
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Hero: a spotlight that follows the pointer, and a slight parallax on the portrait.
  const hero = document.querySelector('[data-hero]');
  if (hero && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    const figure = hero.querySelector('.hero-figure');
    let tx = 72, ty = 42, x = tx, y = ty, raf = 0;
    const tick = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      hero.style.setProperty('--mx', x.toFixed(2) + '%');
      hero.style.setProperty('--my', y.toFixed(2) + '%');
      if (figure) {
        figure.style.setProperty('--px', ((x - 72) * -0.12).toFixed(2) + 'px');
        figure.style.setProperty('--py', ((y - 42) * -0.06).toFixed(2) + 'px');
      }
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.05 ? requestAnimationFrame(tick) : 0;
    };
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width) * 100;
      ty = ((e.clientY - r.top) / r.height) * 100;
      if (!raf) raf = requestAnimationFrame(tick);
    });
    hero.addEventListener('pointerleave', () => {
      tx = 72; ty = 42;
      if (!raf) raf = requestAnimationFrame(tick);
    });
  }

  // Hero: cycle through the section numbers behind the portrait.
  const statute = document.querySelector('[data-statutes]');
  if (statute && !reduceMotion) {
    let list = [];
    try { list = JSON.parse(statute.dataset.statutes); } catch (e) {}
    const num = statute.querySelector('.statute-num');
    const cap = document.querySelector('.statute-caption');
    const sec = document.querySelector('[data-statute-sec]');
    const label = document.querySelector('[data-statute-label]');
    let i = 0;
    if (list.length > 1 && num) {
      setInterval(() => {
        if (document.hidden) return;
        num.classList.add('is-out');
        if (cap) cap.classList.add('is-out');
        setTimeout(() => {
          i = (i + 1) % list.length;
          const [n, s, l] = list[i];
          num.textContent = n;
          num.dataset.len = String(n.length);
          if (sec) sec.textContent = s;
          if (label) label.textContent = l;
          num.classList.remove('is-out');
          if (cap) cap.classList.remove('is-out');
        }, 600);
      }, 3800);
    }
  }

  // Default bail calculator. The remand date counts as day one
  // (Enforcement Directorate v. Kapil Wadhawan, 2023).
  document.querySelectorAll('[data-calc]').forEach((form) => {
    const dateIn = form.querySelector('#calc-date');
    const typeIn = form.querySelector('#calc-type');
    const out = (k) => form.querySelector(`[data-out="${k}"]`);
    const DAY = 86400000;
    const parse = (v) => { const [y, m, d] = v.split('-').map(Number); return new Date(y, m - 1, d); };
    const fmt = (d) => d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const today = new Date(); today.setHours(0, 0, 0, 0);
    if (!dateIn.value) dateIn.value = iso(new Date(today.getTime() - 20 * DAY));
    dateIn.max = iso(today);
    const waBase = out('wa').getAttribute('href').split('?')[0];

    const update = () => {
      if (!dateIn.value) {
        out('due').textContent = 'Choose a date';
        out('claim').textContent = '';
        out('status').textContent = '';
        return;
      }
      const days = Number(typeIn.value);
      const start = parse(dateIn.value);
      const due = new Date(start.getFullYear(), start.getMonth(), start.getDate() + days - 1);
      const claim = new Date(due.getFullYear(), due.getMonth(), due.getDate() + 1);
      const left = Math.round((due - today) / DAY);
      const elapsed = Math.round((today - start) / DAY) + 1;
      out('due').textContent = fmt(due);
      out('claim').textContent = fmt(claim);
      const fill = out('fill');
      fill.style.width = Math.max(0, Math.min(100, (elapsed / days) * 100)) + '%';
      const status = out('status');
      const over = left < 0;
      fill.classList.toggle('is-over', over);
      status.classList.toggle('is-over', over);
      if (left > 1) status.textContent = `${left} days left for the chargesheet (day ${Math.max(elapsed, 1)} of ${days}).`;
      else if (left === 1) status.textContent = 'One day left for the chargesheet.';
      else if (left === 0) status.textContent = 'Today is the last day for the chargesheet.';
      else status.textContent = `The period ended ${-left === 1 ? 'yesterday' : `${-left} days ago`}. If no chargesheet has been filed, apply for default bail now.`;
      out('note').textContent = typeIn.selectedOptions[0].dataset.note || '';
      const text = `Hello, I would like advice on default bail. First remand: ${fmt(start)}. Offence type: ${typeIn.selectedOptions[0].textContent}. Chargesheet due by: ${fmt(due)}.`;
      out('wa').href = `${waBase}?text=${encodeURIComponent(text)}`;
    };
    form.addEventListener('input', update);
    form.addEventListener('submit', (e) => e.preventDefault());
    update();
  });

  // Home page question box: carry the question over to the Ask page, even where
  // the query string is dropped.
  document.querySelectorAll('[data-ask-home]').forEach((f) => {
    f.addEventListener('submit', () => {
      try { sessionStorage.setItem('ask-q', f.querySelector('input').value); } catch (e) {}
    });
  });

  // Links to a common question (#faq-2) open that answer.
  const openHash = () => {
    const el = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (el && el.tagName === 'DETAILS') el.open = true;
  };
  openHash();
  window.addEventListener('hashchange', openHash);

  // Enquiry form: compose one WhatsApp message from the fields.
  document.querySelectorAll('[data-enquiry]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const text = `Hello, my name is ${data.get('name')}. I would like advice about: ${data.get('area')}.\n\n${data.get('text')}`;
      const link = document.createElement('a');
      link.href = `${form.action}?text=${encodeURIComponent(text)}`;
      link.target = '_blank';
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  });

  // Photo gallery: open a larger view in a dialog, with arrow keys and swipe.
  document.querySelectorAll('[data-gallery]').forEach((list) => {
    const box = document.querySelector('[data-lightbox]');
    if (!box || typeof box.showModal !== 'function') return; // links still open the full photo
    const links = [...list.querySelectorAll('[data-full]')];
    const img = box.querySelector('img');
    const cap = box.querySelector('.lightbox-caption');
    let at = 0;
    const show = (i) => {
      at = (i + links.length) % links.length;
      const thumb = links[at].querySelector('img');
      img.src = links[at].href;
      img.alt = thumb.alt;
      cap.textContent = `${thumb.alt} (${at + 1} of ${links.length})`;
    };
    links.forEach((a, i) => a.addEventListener('click', (e) => {
      e.preventDefault();
      show(i);
      box.showModal();
    }));
    box.querySelectorAll('[data-step]').forEach((b) => b.addEventListener('click', () => show(at + Number(b.dataset.step))));
    box.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') show(at + 1);
      if (e.key === 'ArrowLeft') show(at - 1);
    });
    box.addEventListener('click', (e) => { if (e.target === box) box.close(); });
    box.addEventListener('close', () => links[at].focus());
    let x0 = null;
    box.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    box.addEventListener('touchend', (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) show(at + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  });
})();
