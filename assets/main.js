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

  // "What is your matter about?" tabs, with arrow-key support.
  document.querySelectorAll('[data-matter]').forEach((root) => {
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
        const next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
        if (next === undefined) return;
        e.preventDefault();
        select(tabs[(next + tabs.length) % tabs.length], true);
      });
    });
  });

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
})();
