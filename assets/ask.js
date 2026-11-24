// "Ask a question": searches the site's own practice pages, guides and FAQs in
// the visitor's browser. No AI and no outside service: answers are passages we
// have published, ranked with BM25 and linked to the section they come from.
(() => {
  const form = document.querySelector('[data-ask]');
  const results = document.querySelector('[data-results]');
  if (!form || !results) return;
  const input = form.querySelector('input');
  const waLink = document.querySelector('[data-ask-wa]');
  const waBase = waLink ? waLink.getAttribute('href').split('?')[0] : '';
  const initial = results.innerHTML;

  // ---------- text processing ----------
  const STOP = new Set(
    ('a an and are as at be been being but by can could did do does for from get got had has have how i if in into is it its just me my ' +
      'of on or our shall should so some than that the their them then there these they this to too under was we were what when where ' +
      'which who whom why will with would you your am also any all about after before more most may might must not no now very ' +
      'want need tell know please case cases sir madam sent send sending got gave given came come son daughter brother sister father mother friend someone person ' +
      'कसा कशी कसे काय किती कधी कोण कुठे मिळेल मिळतो मिळते लागतो लागेल लागते आहे आहेत का मला माझा माझे माझी आणि हे ते साठी होईल करावे करायचे ' +
      'kaise kya kab kitna kitne mera meri mujhe hai ka ki ke mein se ko milega milegi कैसे क्या कब कितना कितने मेरा मेरी मुझे है की के में से को मिलेगा मिलेगी लगेगा').split(' '),
  );
  // Aliases: old section numbers, common misspellings, and Hindi and Marathi words.
  const ALIAS = {
    poxo: ['pocso'], pocso: ['pocso'], posco: ['pocso'], minor: ['child', 'pocso'], girl: ['child'],
    mocca: ['mcoca'], mokka: ['mcoca'], makoka: ['mcoca'], mcoca: ['mcoca', 'organised'], gang: ['mcoca', 'syndicate'], gangster: ['mcoca', 'syndicate'],
    atrocity: ['atrocities'], atrocities: ['atrocities'], caste: ['caste', 'atrocities'], dalit: ['atrocities'], sc: ['atrocities'], st: ['atrocities'],
    drug: ['ndps', 'narcotic'], drugs: ['ndps', 'narcotic'], ganja: ['ndps'], charas: ['ndps'], mdma: ['ndps'], narcotics: ['ndps'],
    jamin: ['bail'], jameen: ['bail'], zamin: ['bail'], zamanat: ['bail'], jamanat: ['bail'], 'जामीन': ['bail'], 'जमानत': ['bail'],
    atak: ['arrest'], giraftari: ['arrest'], 'अटक': ['arrest'], 'गिरफ्तारी': ['arrest'], arrested: ['arrest'],
    '438': ['482', 'anticipatory'], '439': ['483'], '167': ['187', 'default'], '41a': ['35', 'notice'], '498a': ['498a', '85', 'cruelty'],
    '420': ['318', 'cheating'], '406': ['breach'], '125': ['144', 'maintenance'], '304b': ['80', 'dowry'],
    chargesheet: ['chargesheet'], challan: ['chargesheet'], chalan: ['chargesheet'], statutory: ['default'],
    dowry: ['dowry', 'cruelty'], hunda: ['dowry'], 'हुंडा': ['dowry'], dahej: ['dowry'],
    talaq: ['divorce'], 'वेळ': ['long', 'time'], 'समय': ['long', 'time'], 'तलाक': ['divorce'], 'घटस्फोट': ['divorce'], potgi: ['maintenance'], 'पोटगी': ['maintenance'], kharcha: ['maintenance'], alimony: ['maintenance'],
    'गुन्हा': ['fir', 'offence'], 'पोलीस': ['police'], 'पोलिस': ['police'], 'नोटीस': ['notice'], summons: ['notice'], summoned: ['notice'],
    quash: ['quashing'], quashed: ['quashing'], cancel: ['quashing'], false: ['quashing', 'false'],
    deposit: ['mpid', 'deposit'], deposits: ['mpid', 'deposit'], investment: ['mpid', 'deposit'], scheme: ['mpid'], ponzi: ['mpid'], eow: ['economic', 'mpid'],
    check: ['cheque'], bounced: ['bounce', 'dishonour'], bounce: ['bounce', 'dishonour'],
    anticipatory: ['anticipatory'], abail: ['anticipatory'], pre: ['anticipatory'],
  };
  const stem = (w) => {
    if (w.length < 5 || /^\d/.test(w) || /[^\x00-\x7f]/.test(w)) return w;
    return w.replace(/ies$/, 'y').replace(/(ing|ings)$/, '').replace(/ed$/, '').replace(/([^s])s$/, '$1');
  };
  const words = (text) => text.toLowerCase().normalize('NFC').split(/[^\p{L}\p{M}\p{N}]+/u).filter(Boolean);
  const tokens = (text) => words(text).filter((w) => !STOP.has(w) && (w.length > 1 || /\d/.test(w))).map(stem);

  // ---------- index ----------
  let docs = null;
  let df = new Map();
  let avgLen = 1;
  const loadIndex = fetch(form.getAttribute('action').replace(/ask\.html$/, 'assets/search-index.json'))
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
    .then((data) => {
      docs = data.docs.map((d) => {
        const tf = new Map();
        const add = (text, weight) => tokens(text).forEach((t) => tf.set(t, (tf.get(t) || 0) + weight));
        add(d.h, d.k === 'Question' ? 2.5 : 2);
        add(d.p, 1);
        add(d.t, 1);
        let len = 0;
        tf.forEach((v) => (len += v));
        return { ...d, tf, len };
      });
      docs.forEach((d) => d.tf.forEach((_, t) => df.set(t, (df.get(t) || 0) + 1)));
      avgLen = docs.reduce((n, d) => n + d.len, 0) / docs.length;
    });

  const editWithin = (a, b, max) => {
    if (Math.abs(a.length - b.length) > max) return false;
    let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const cur = [i];
      let rowMin = i;
      for (let j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        rowMin = Math.min(rowMin, cur[j]);
      }
      if (rowMin > max) return false;
      prev = cur;
    }
    return prev[b.length] <= max;
  };

  // Query terms with weights: the words typed (1), their aliases (0.8) and close spellings (0.7).
  const queryTerms = (q) => {
    const terms = new Map();
    const set = (t, w, origin) => {
      const cur = terms.get(t);
      if (!cur || cur.w < w) terms.set(t, { w, origin });
    };
    const raw = words(q).filter((w) => !STOP.has(w) && (w.length > 1 || /\d/.test(w)));
    raw.forEach((w) => {
      const s = stem(w);
      if (df.has(s)) set(s, 1, w);
      (ALIAS[w] || []).forEach((a) => set(stem(a), 1, w));
      if (!df.has(s) && !ALIAS[w] && s.length >= 5) {
        const max = s.length >= 8 ? 2 : 1;
        for (const v of df.keys()) if (v.length >= 4 && editWithin(s, v, max)) set(v, 0.7, w);
      }
    });
    return { terms, asked: new Set(raw) };
  };

  const search = (q) => {
    const { terms, asked } = queryTerms(q);
    if (!terms.size) return { hits: [], asked };
    const N = docs.length;
    const idf = (t) => Math.log(1 + (N - df.get(t) + 0.5) / (df.get(t) + 0.5));
    const maxIdf = Math.log(1 + (N - 0.5) / 1.5);
    // How much each typed word matters: its rarest matching term, or the maximum if nothing matches it.
    const importance = new Map([...asked].map((w) => [w, 0]));
    terms.forEach(({ origin }, t) => importance.set(origin, Math.max(importance.get(origin) || 0, idf(t))));
    importance.forEach((v, w) => { if (!v) importance.set(w, maxIdf); });
    const total = [...importance.values()].reduce((a, b) => a + b, 0);
    const hits = [];
    for (const d of docs) {
      let score = 0;
      const covered = new Set();
      terms.forEach(({ w, origin }, t) => {
        const f = d.tf.get(t);
        if (!f) return;
        score += w * idf(t) * ((f * 2.2) / (f + 1.2 * (0.5 + 0.5 * (d.len / avgLen))));
        covered.add(origin);
      });
      if (score > 0) {
        const coverage = [...covered].reduce((a, w) => a + importance.get(w), 0) / total;
        const head = new Set(tokens(d.h + ' ' + d.p));
        const inHead = [...terms.keys()].filter((t) => head.has(t)).length / terms.size;
        hits.push({ d, score: score * (0.4 + 0.6 * coverage) * (1 + 0.6 * inHead), coverage });
      }
    }
    hits.sort((a, b) => b.score - a.score);
    return { hits, terms, asked };
  };

  // ---------- rendering ----------
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const highlight = (text, terms) =>
    text
      .split(/([\p{L}\p{M}\p{N}]+)/u)
      .map((part, i) => (i % 2 && terms.has(stem(part.toLowerCase())) ? `<mark>${esc(part)}</mark>` : esc(part)))
      .join('');
  const excerpt = (text, terms, max = 340) => {
    const sentences = text.match(/[^.!?]+[.!?]*(\s|$)/g) || [text];
    let best = 0;
    let bestScore = -1;
    sentences.forEach((s, i) => {
      const n = words(s).filter((w) => terms.has(stem(w))).length;
      if (n > bestScore) { bestScore = n; best = i; }
    });
    let out = sentences[best].trim();
    for (let i = best + 1; i < sentences.length && out.length + sentences[i].length <= max; i++) out += ' ' + sentences[i].trim();
    return out.length > max + 60 ? out.slice(0, max).replace(/\s+\S*$/, '') + '…' : out;
  };
  const href = (u) => form.getAttribute('action').replace(/ask\.html$/, '') + u;

  const render = (q) => {
    const { hits, terms } = search(q);
    const matched = new Set(terms ? terms.keys() : []);
    if (waLink) waLink.href = `${waBase}?text=${encodeURIComponent(`Hello, I have a question: ${q}\n\n(Sent from the website)`)}`;
    const top = hits[0];
    if (!top || top.score < 1.5 || top.coverage < 0.5) {
      results.innerHTML = `
        <div class="ask-empty">
          <h2 class="ask-h">We haven't written about that yet</h2>
          <p>None of our pages answers <q>${esc(q)}</q> closely enough. Try different words, or send the question to the office.</p>
          <p><a class="btn btn-ink" href="${esc(waLink ? waLink.href : '#')}">Send this question on WhatsApp</a></p>
          <p><a class="text-link" href="${href('practice-areas.html')}">Browse all practice areas</a></p>
        </div>`;
      return;
    }
    const strong = top.coverage >= 0.75 && top.score >= 4;
    const isQ = top.d.k === 'Question';
    const body = isQ ? top.d.t : excerpt(top.d.t, matched, 520);
    const seen = new Set([top.d.u.split('#')[0] + '|' + top.d.h]);
    const more = [];
    for (const h of hits.slice(1)) {
      if (h.score < top.score * 0.25 || more.length >= 5) break;
      const key = h.d.u.split('#')[0] + '|' + h.d.h;
      if (seen.has(key)) continue;
      seen.add(key);
      more.push(h);
    }
    const calcTip = /default|chargesheet|charge sheet|60 days|90 days|187|167/i.test(q)
      ? `<a class="ask-tool" href="${href('index.html#default-bail')}"><strong>Default bail date calculator</strong><span>Enter the date of first remand to see the chargesheet deadline.</span></a>`
      : '';
    results.innerHTML = `
      <article class="ask-answer">
        <p class="ask-label">${strong ? 'Answer from our pages' : 'Closest match in our pages'}</p>
        <h2>${esc(top.d.h)}</h2>
        <p class="ask-body">${highlight(body, matched)}</p>
        <p class="ask-source">From <a href="${href(top.d.u)}">${esc(top.d.p)}</a><span>${esc(top.d.k === 'Question' ? 'Common question' : top.d.k)}</span></p>
      </article>
      ${calcTip}
      ${more.length ? `<h2 class="ask-h">More from our pages</h2><ul class="ask-more">${more
        .map((h) => `<li><a href="${href(h.d.u)}"><span class="ask-more-page">${esc(h.d.p)}</span><span class="ask-more-h">${esc(h.d.h)}</span><span class="ask-more-t">${highlight(excerpt(h.d.t, matched, 220), matched)}</span></a></li>`)
        .join('')}</ul>` : ''}
      <p class="small">This is general information from our published pages, not legal advice. Your own facts may change the answer.</p>`;
  };

  const run = (q) => {
    q = q.trim().slice(0, 300);
    if (!q) { results.innerHTML = initial; return; }
    input.value = q;
    results.innerHTML = '<p class="ask-loading">Searching our pages…</p>';
    loadIndex
      .then(() => render(q))
      .catch(() => {
        results.innerHTML = '<p>The search could not load. Please refresh the page, or browse the <a href="legal-guides.html">legal guides</a>.</p>';
      });
    try { history.replaceState(null, '', `?q=${encodeURIComponent(q)}`); } catch (e) {}
  };

  form.addEventListener('submit', (e) => { e.preventDefault(); run(input.value); });
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-q]');
    if (!b) return;
    run(b.dataset.q);
    form.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  });

  let q0 = '';
  try { q0 = new URLSearchParams(location.search).get('q') || sessionStorage.getItem('ask-q') || ''; sessionStorage.removeItem('ask-q'); } catch (e) {}
  if (q0) run(q0);
})();
