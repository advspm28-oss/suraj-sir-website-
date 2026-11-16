// Static site builder: no dependencies. `node build.mjs` writes the site to dist/.
import fs from 'node:fs';
import path from 'node:path';
import { site, fullAddress, waLink } from './src/site.mjs';
import { practice } from './src/practice.mjs';
import { posts } from './src/posts.mjs';
import { gallery } from './src/gallery.mjs';

const OUT = 'dist';
const BUILT = new Date().toISOString().slice(0, 10);
const pages = []; // { file, priority } for the sitemap

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const abs = (file) => `${site.url}/${file === 'index.html' ? '' : file}`;
const fmtDate = (d) => new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
const byPracticeSlug = Object.fromEntries(practice.map((p) => [p.slug, p]));

// ---------- shared pieces ----------

const mark = (cls = 'mark') => `<svg class="${cls}" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
  <circle cx="50" cy="50" r="48" fill="currentColor"/>
  <circle cx="50" cy="50" r="42" fill="none" stroke="var(--mark-line, #fff)" stroke-width="2.5"/>
  <path d="M33 25h34v6H33z M36 33h11.5v39H33z M52.5 33H64l3 39H52.5z" fill="var(--mark-line, #fff)"/>
</svg>`;

const icon = {
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" fill="currentColor"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 4 3.5 1.5.6 2 .7 2.8.6.4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3z" fill="currentColor"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" fill="currentColor"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1zm9 7.2L4.5 7v10.5h15V7z" fill="currentColor"/></svg>',
};

const nav = [
  ['practice-areas.html', 'Practice areas'],
  ['about.html', 'About'],
  ['gallery.html', 'Gallery'],
  ['legal-guides.html', 'Legal guides'],
  ['contact.html', 'Contact'],
];

function header(rel, active) {
  const links = nav
    .map(([href, label]) => `<li><a href="${rel}${href}"${active === href ? ' aria-current="page"' : ''}>${label}</a></li>`)
    .join('');
  return `<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="${rel}index.html">${mark()}<span><strong>${esc(site.shortName)}</strong><small>Advocates, Pune</small></span></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav id="site-nav" class="site-nav" aria-label="Main">
      <ul>${links}</ul>
      <a class="btn btn-ink btn-sm" href="tel:${site.phone}">${icon.phone}<span>Call ${esc(site.phoneDisplay)}</span></a>
    </nav>
  </div>
</header>`;
}

function footer(rel) {
  return `<footer class="site-footer">
  <div class="wrap footer-grid">
    <div>
      <a class="brand brand-light" href="${rel}index.html">${mark()}<span><strong>${esc(site.firm)}</strong></span></a>
      <address>
        ${esc(site.address.line1)}<br>${esc(site.address.line2)}<br>${esc(site.address.locality)}, ${esc(site.address.city)} ${esc(site.address.postalCode)}, ${esc(site.address.region)}
      </address>
      <p><a href="tel:${site.phone}">${esc(site.phoneDisplay)}</a><br><a href="${waLink()}">WhatsApp ${esc(site.whatsappDisplay)}</a><br><a href="mailto:${site.email}">${esc(site.email)}</a></p>
    </div>
    <div>
      <h2 class="footer-h">Practice areas</h2>
      <ul class="footer-links">${practice.map((p) => `<li><a href="${rel}${p.slug}.html">${esc(p.name)}</a></li>`).join('')}</ul>
    </div>
    <div>
      <h2 class="footer-h">The practice</h2>
      <ul class="footer-links">
        <li><a href="${rel}about.html">About the advocate</a></li>
        <li><a href="${rel}gallery.html">Office opening photos</a></li>
        <li><a href="${rel}legal-guides.html">Legal guides</a></li>
        <li><a href="${rel}contact.html">Contact and directions</a></li>
        <li><a href="${rel}disclaimer.html">Disclaimer</a></li>
        <li><a href="${rel}privacy-policy.html">Privacy policy</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap footer-legal">
    <p>${esc(site.enrolment)}. This website is for information only. It is not an advertisement or a solicitation of work, and nothing on it is legal advice or creates an advocate–client relationship.</p>
    <p>© ${new Date().getFullYear()} ${esc(site.firm)}</p>
  </div>
</footer>
<div class="mobile-bar" aria-label="Contact the office">
  <a href="tel:${site.phone}">${icon.phone}<span>Call</span></a>
  <a href="${waLink('Hello, I would like to ask about a legal matter.')}">${icon.whatsapp}<span>WhatsApp</span></a>
</div>
<dialog id="bci-disclaimer" class="disclaimer" aria-labelledby="bci-title">
  <h2 id="bci-title">Before you continue</h2>
  <p>The Bar Council of India does not permit advocates to solicit work or advertise. By continuing, you confirm that:</p>
  <ul>
    <li>you are seeking information about ${esc(site.firm)} on your own initiative;</li>
    <li>there has been no advertisement, solicitation or inducement from us;</li>
    <li>the information on this website is not legal advice and does not create an advocate–client relationship.</li>
  </ul>
  <form method="dialog"><button class="btn btn-ink" value="agree">I agree, continue</button></form>
</dialog>`;
}

// ---------- structured data ----------

const firmId = `${site.url}/#firm`;
const personId = `${site.url}/#advocate`;

const firmSchema = () => ({
  '@type': 'LegalService',
  '@id': firmId,
  name: site.firm,
  url: abs('index.html'),
  image: abs('assets/img/advocate-square-600.jpg'),
  logo: abs('assets/favicon.svg'),
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: `${site.address.locality}, ${site.address.city}`,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  openingHours: site.hoursSchema,
  areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
  founder: { '@id': personId },
  knowsAbout: practice.map((p) => p.name),
  ...(site.gbpUrl ? { hasMap: site.gbpUrl, sameAs: [site.gbpUrl] } : {}),
});

const personSchema = () => ({
  '@type': 'Person',
  '@id': personId,
  name: site.advocate,
  jobTitle: 'Advocate',
  image: abs('assets/img/advocate-square-600.jpg'),
  worksFor: { '@id': firmId },
  url: abs('about.html'),
});

const crumbsSchema = (crumbs) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map(([name, file], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(file) })),
});

const crumbsHtml = (rel, crumbs) =>
  `<nav class="crumbs" aria-label="Breadcrumb"><ol>${crumbs
    .map(([name, file], i) => (i === crumbs.length - 1 ? `<li aria-current="page">${esc(name)}</li>` : `<li><a href="${rel}${file}">${esc(name)}</a></li>`))
    .join('')}</ol></nav>`;

// ---------- page shell ----------

function render({ file, title, description, body, active, schema = [], crumbs, ogType = 'website', priority = 0.7, noindex = false }) {
  const rel = '../'.repeat(file.split('/').length - 1);
  const graph = [...schema];
  if (crumbs) graph.push(crumbsSchema(crumbs));
  const suffixed = `${title} | ${site.shortName}`;
  const fullTitle = file === 'index.html' || suffixed.length > 65 ? title : suffixed;
  const html = `<!doctype html>
<html lang="${site.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${abs(file)}">`}
<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${abs(file)}">
<meta property="og:image" content="${abs('assets/img/og.jpg')}">
<meta property="og:locale" content="en_IN">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#231f20">
<link rel="icon" href="${rel}assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;600;700&family=Tiro+Devanagari+Marathi:ital@0;1&display=swap">
<link rel="stylesheet" href="${rel}assets/styles.css">
${graph.length ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>` : ''}
</head>
<body>
${header(rel, active)}
<main id="main">
${body(rel)}
</main>
${footer(rel)}
<script src="${rel}assets/main.js" defer></script>
</body>
</html>
`;
  const out = path.join(OUT, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  if (!noindex) pages.push({ file, priority });
}

const contactAside = (rel, label) => `<aside class="aside-card">
  <h2>Talk to us about your matter</h2>
  <p>Call the office or send a message about what has happened.</p>
  <a class="btn btn-ink" href="tel:${site.phone}">${icon.phone}<span>Call ${esc(site.phoneDisplay)}</span></a>
  <a class="btn btn-line" href="${waLink(`Hello, I would like advice about a ${label.toLowerCase()} matter.`)}">${icon.whatsapp}<span>Message on WhatsApp</span></a>
  <p class="aside-note">${icon.pin}<span>${esc(site.address.line1)}, behind the Family Court, Shivaji Nagar</span></p>
</aside>`;

const faqHtml = (faqs) =>
  `<section class="faq" aria-labelledby="faq-h"><h2 id="faq-h">Common questions</h2>${faqs
    .map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`)
    .join('')}</section>`;

const guideRows = (rel, list) =>
  `<ul class="guide-list">${list
    .map(
      (p) => `<li><a href="${rel}legal-guides/${p.slug}.html"><span class="guide-title">${esc(p.title)}</span><span class="guide-meta"><time datetime="${p.date}">${fmtDate(p.date)}</time>, ${p.readMinutes} min read</span><span class="guide-sum">${esc(p.summary)}</span></a></li>`,
    )
    .join('')}</ul>`;

// ---------- home ----------

render({
  file: 'index.html',
  title: `Advocates in Pune | ${site.shortName}`,
  description: 'Advocates behind the Family Court, Shivaji Nagar, Pune, for divorce, custody, maintenance, domestic violence, bail, cheque bounce and property cases.',
  priority: 1.0,
  schema: [firmSchema(), personSchema(), { '@type': 'WebSite', '@id': `${site.url}/#website`, url: abs('index.html'), name: site.firm, inLanguage: site.lang, publisher: { '@id': firmId } }],
  body: (rel) => `
<section class="hero" aria-labelledby="hero-h">
  <div class="wrap hero-grid">
    <div class="hero-copy">
<p class="hero-firm">${esc(site.firm)}</p>
      <h1 id="hero-h">Advocates in Pune for family, criminal and property matters</h1>
      <p class="hero-lede">Our office is right behind the Family Court in Shivaji Nagar. Tell us what your matter is about and we'll explain what happens next.</p>
      <div class="hero-actions">
        <a class="btn btn-band" href="tel:${site.phone}">${icon.phone}<span>Call ${esc(site.phoneDisplay)}</span></a>
        <a class="btn btn-ghost" href="${waLink('Hello, I would like to ask about a legal matter.')}">${icon.whatsapp}<span>WhatsApp ${esc(site.whatsappDisplay)}</span></a>
      </div>
    </div>
    <figure class="hero-portrait">
      <picture>
        <source type="image/webp" srcset="${rel}assets/img/advocate-portrait-480.webp 480w, ${rel}assets/img/advocate-portrait-800.webp 800w" sizes="(min-width: 960px) 34vw, 80vw">
        <img src="${rel}assets/img/advocate-portrait-800.jpg" width="800" height="1000" alt="${esc(site.advocate)} in advocate's robes and bands" fetchpriority="high">
      </picture>
      <figcaption>${esc(site.advocate)}<span>Advocate, Pune</span></figcaption>
    </figure>
  </div>
  <div class="wrap">
      <div class="matter" data-matter>
        <h2 class="matter-q" id="matter-q">What is your matter about?</h2>
        <div class="matter-tabs" role="tablist" aria-labelledby="matter-q">
          ${practice
            .map((p, i) => `<button type="button" role="tab" id="tab-${p.slug}" aria-controls="panel-${p.slug}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(p.guide.label)}</button>`)
            .join('')}
        </div>
        ${practice
          .map(
            (p, i) => `<div class="matter-panel" role="tabpanel" id="panel-${p.slug}" aria-labelledby="tab-${p.slug}"${i === 0 ? '' : ' hidden'}>
          <dl>
            <div><dt>Where it's heard</dt><dd>${esc(p.guide.court)}</dd></div>
            <div><dt>What usually happens first</dt><dd>${esc(p.guide.first)}</dd></div>
            <div class="matter-docs"><dt>Bring these to the first meeting</dt><dd><ul>${p.guide.docs.map((d) => `<li>${esc(d)}</li>`).join('')}</ul></dd></div>
          </dl>
          <div class="matter-actions">
            <a class="btn btn-band" href="${waLink(`Hello, I would like advice about a ${p.guide.label.toLowerCase()} matter.`)}">${icon.whatsapp}<span>Ask about ${esc(p.guide.label.toLowerCase())} on WhatsApp</span></a>
            <a class="text-link" href="${rel}${p.slug}.html">Read about ${esc(p.name.toLowerCase())} cases</a>
          </div>
        </div>`,
          )
          .join('')}
      </div>
  </div>
</section>

<section class="section" aria-labelledby="areas-h">
  <div class="wrap split">
    <div class="split-head">
      <h2 id="areas-h">Practice areas</h2>
      <p>Most of our work is at the Family Court, the District and Sessions Court and the Civil Court, all in Shivaji Nagar.</p>
      <a class="text-link" href="${rel}practice-areas.html">All practice areas</a>
    </div>
    <ul class="area-list">
      ${practice
        .map((p) => `<li><a href="${rel}${p.slug}.html"><span class="area-name">${esc(p.name)}</span><span class="area-short">${esc(p.short)}</span></a></li>`)
        .join('')}
    </ul>
  </div>
</section>

<section class="section section-mist" aria-labelledby="steps-h">
  <div class="wrap">
    <h2 id="steps-h">How a first consultation works</h2>
    <ol class="steps">
      <li><h3>Call or message the office</h3><p>Tell us briefly what the matter is about, and we'll fix a time to meet. Please don't send confidential documents over WhatsApp before we've spoken.</p></li>
      <li><h3>Meet with your papers</h3><p>Bring copies of the documents you have. Our <a href="${rel}legal-guides/first-meeting-family-lawyer-checklist.html">first meeting checklist</a> lists what helps.</p></li>
      <li><h3>Understand your options</h3><p>We explain where the case stands, what the law allows, the likely timeline, and our fees, before you decide anything.</p></li>
    </ol>
  </div>
</section>

<section class="section" aria-labelledby="guides-h">
  <div class="wrap split">
    <div class="split-head">
      <h2 id="guides-h">Legal guides</h2>
      <p>Plain explanations of the questions we're asked most often.</p>
      <a class="text-link" href="${rel}legal-guides.html">All guides</a>
    </div>
    ${guideRows(rel, posts.slice(0, 3))}
  </div>
</section>

<section class="section section-ink" aria-labelledby="visit-h">
  <div class="wrap visit">
    <div>
      <h2 id="visit-h">Visit the office</h2>
      <address class="visit-address">${esc(site.address.line1)}<br>${esc(site.address.line2)}<br>${esc(site.address.locality)}, ${esc(site.address.city)} ${esc(site.address.postalCode)}</address>
      <a class="btn btn-band" href="${site.mapsUrl}" rel="noopener">${icon.pin}<span>Get directions</span></a>
    </div>
    <dl class="visit-facts">
      ${site.hours.map((h) => `<div><dt>${esc(h.days)}</dt><dd>${esc(h.label)}</dd></div>`).join('')}
      <div><dt>Phone</dt><dd><a href="tel:${site.phone}">${esc(site.phoneDisplay)}</a></dd></div>
      <div><dt>WhatsApp</dt><dd><a href="${waLink()}">${esc(site.whatsappDisplay)}</a></dd></div>
      <div><dt>Email</dt><dd><a href="mailto:${site.email}">${esc(site.email)}</a></dd></div>
    </dl>
  </div>
</section>`,
});

// ---------- practice areas index ----------

render({
  file: 'practice-areas.html',
  title: 'Practice Areas: Family, Criminal and Civil Law',
  description: 'Family, criminal and civil practice areas of our Pune office: divorce, custody, maintenance, domestic violence, bail, cheque bounce and property.',
  active: 'practice-areas.html',
  priority: 0.9,
  crumbs: [['Home', 'index.html'], ['Practice areas', 'practice-areas.html']],
  body: (rel) => `
<section class="page-head"><div class="wrap">
  ${crumbsHtml(rel, [['Home', 'index.html'], ['Practice areas', 'practice-areas.html']])}
  <h1>Practice areas</h1>
  <p class="lede">We handle family, criminal and civil matters, mostly before the courts in Shivaji Nagar, Pune.</p>
</div></section>
<section class="section"><div class="wrap">
  ${['Family', 'Criminal', 'Civil']
    .map(
      (g) => `<div class="area-group-block"><h2>${g === 'Family' ? 'Family law' : g === 'Criminal' ? 'Criminal law' : 'Civil and property law'}</h2><ul class="area-list">${practice
        .filter((p) => p.group === g)
        .map((p) => `<li><a href="${rel}${p.slug}.html"><span class="area-name">${esc(p.name)}</span><span class="area-short">${esc(p.short)}</span></a></li>`)
        .join('')}</ul></div>`,
    )
    .join('')}
</div></section>`,
});

// ---------- practice pages ----------

for (const p of practice) {
  const crumbs = [['Home', 'index.html'], ['Practice areas', 'practice-areas.html'], [p.name, `${p.slug}.html`]];
  const related = p.related.map((s) => byPracticeSlug[s]);
  const guides = posts.filter((g) => g.practice === p.slug);
  render({
    file: `${p.slug}.html`,
    title: p.title,
    description: p.description,
    active: 'practice-areas.html',
    priority: 0.9,
    crumbs,
    schema: [
      { '@type': 'Service', name: p.name, serviceType: p.name, description: p.description, provider: { '@id': firmId }, areaServed: { '@type': 'City', name: 'Pune' }, url: abs(`${p.slug}.html`) },
    ],
    body: (rel) => `
<section class="page-head"><div class="wrap">
  ${crumbsHtml(rel, crumbs)}
  <h1>${esc(p.h1)}</h1>
  <p class="lede">${esc(p.short)}</p>
</div></section>
<div class="wrap with-aside">
  <article class="prose">
    <div class="at-a-glance">
      <h2>At a glance</h2>
      <dl>
        <div><dt>Where it's heard</dt><dd>${esc(p.guide.court)}</dd></div>
        <div><dt>What usually happens first</dt><dd>${esc(p.guide.first)}</dd></div>
      </dl>
    </div>
    ${p.body}
    <h2>Documents to bring</h2>
    <ul>${p.guide.docs.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
    ${faqHtml(p.faqs)}
    ${guides.length ? `<h2>Related guides</h2>${guideRows(rel, guides)}` : ''}
    <p class="small-print">This page is general information about the law, not legal advice. Every case turns on its own facts.</p>
  </article>
  <div class="aside-col">
    ${contactAside(rel, p.guide.label)}
    <nav class="aside-related" aria-label="Related practice areas"><h2>Related areas</h2><ul>${related.map((r) => `<li><a href="${rel}${r.slug}.html">${esc(r.name)}</a></li>`).join('')}</ul></nav>
  </div>
</div>`,
  });
}

// ---------- legal guides ----------

render({
  file: 'legal-guides.html',
  title: 'Legal Guides: Family and Criminal Law in Pune',
  description: 'Plain-language guides to family, criminal and civil law in India, written for people in Pune.',
  active: 'legal-guides.html',
  priority: 0.8,
  crumbs: [['Home', 'index.html'], ['Legal guides', 'legal-guides.html']],
  schema: [{ '@type': 'Blog', name: `Legal guides by ${site.firm}`, url: abs('legal-guides.html'), publisher: { '@id': firmId } }],
  body: (rel) => `
<section class="page-head"><div class="wrap">
  ${crumbsHtml(rel, [['Home', 'index.html'], ['Legal guides', 'legal-guides.html']])}
  <h1>Legal guides</h1>
  <p class="lede">Plain explanations of the questions we're asked most often. General information, not legal advice.</p>
</div></section>
<section class="section"><div class="wrap narrow">${guideRows(rel, posts)}</div></section>`,
});

for (const g of posts) {
  const area = byPracticeSlug[g.practice];
  const crumbs = [['Home', 'index.html'], ['Legal guides', 'legal-guides.html'], [g.title, `legal-guides/${g.slug}.html`]];
  render({
    file: `legal-guides/${g.slug}.html`,
    title: g.title,
    description: g.description,
    active: 'legal-guides.html',
    ogType: 'article',
    priority: 0.7,
    crumbs,
    schema: [
      personSchema(),
      {
        '@type': 'BlogPosting',
        headline: g.title,
        description: g.description,
        datePublished: g.date,
        dateModified: g.date,
        author: { '@id': personId },
        publisher: { '@id': firmId },
        mainEntityOfPage: abs(`legal-guides/${g.slug}.html`),
        image: abs('assets/img/og.jpg'),
        inLanguage: site.lang,
      },
    ],
    body: (rel) => `
<section class="page-head"><div class="wrap narrow">
  ${crumbsHtml(rel, crumbs)}
  <h1>${esc(g.title)}</h1>
  <p class="byline">By <a href="${rel}about.html">${esc(site.advocate)}</a>, <time datetime="${g.date}">${fmtDate(g.date)}</time>, ${g.readMinutes} min read</p>
</div></section>
<div class="wrap with-aside">
  <article class="prose">
    ${g.body}
    <p class="small-print">This guide is general information about the law as it stood on the date above. It is not legal advice. Please speak to an advocate about your own situation.</p>
  </article>
  <div class="aside-col">
    ${contactAside(rel, area.guide.label)}
    <nav class="aside-related" aria-label="Related practice area"><h2>Practice area</h2><ul><li><a href="${rel}${area.slug}.html">${esc(area.name)}</a></li></ul></nav>
  </div>
</div>`,
  });
}

// ---------- about ----------

const photoPicture = (rel, p, sizes) => {
  const base = `${rel}assets/img/office-opening/opening-${p.n}`;
  return `<picture><source type="image/webp" srcset="${base}-800.webp ${p.w}w, ${base}-1600.webp ${p.fw}w" sizes="${sizes}"><img src="${base}-800.jpg" width="${p.w}" height="${p.h}" alt="${esc(p.alt)}" loading="lazy" decoding="async"></picture>`;
};

const todo = (t) => `<span class="todo" title="To be filled in by the advocate">${t}</span>`;

render({
  file: 'about.html',
  title: `About ${site.advocate}`,
  description: `${site.advocate} practises family, criminal and civil law from an office behind the Family Court in Shivaji Nagar, Pune.`,
  active: 'about.html',
  priority: 0.8,
  crumbs: [['Home', 'index.html'], ['About', 'about.html']],
  schema: [personSchema(), firmSchema()],
  body: (rel) => `
<section class="page-head"><div class="wrap">
  ${crumbsHtml(rel, [['Home', 'index.html'], ['About', 'about.html']])}
  <h1>About the advocate</h1>
</div></section>
<section class="section"><div class="wrap about">
  <figure class="about-portrait">
    <picture>
      <source type="image/webp" srcset="${rel}assets/img/advocate-portrait-480.webp 480w, ${rel}assets/img/advocate-portrait-800.webp 800w" sizes="(min-width: 960px) 30vw, 90vw">
      <img src="${rel}assets/img/advocate-portrait-800.jpg" width="800" height="1000" alt="${esc(site.advocate)}" loading="lazy">
    </picture>
  </figure>
  <div class="prose">
    <h2>${esc(site.advocate)}</h2>
    <p>${esc(site.advocate)} practises from an office at the back of the Family Court in Shivaji Nagar, Pune, with a team of associates. The practice handles family, criminal and civil matters, with most of its work before the Family Court, the District and Sessions Court and the Civil Court in Pune.</p>
    <p>${todo('A short paragraph in the advocate’s own words: how the practice began, the kind of cases taken on, and how clients are kept informed.')}</p>
    <h2>Education and enrolment</h2>
    <ul>
      <li>${todo('Law degree, college and year')}</li>
      <li>${esc(site.enrolment)}, enrolment no. ${todo('MAH/____/____')}</li>
      <li>${todo('Practising since ____')}</li>
    </ul>
    <h2>Courts</h2>
    <p>Family Court, Pune; District and Sessions Court, Pune; Civil Court, Pune. ${todo('Add the Bombay High Court or other forums if applicable.')}</p>
    <h2>Languages</h2>
    <p>${todo('e.g. Marathi, Hindi and English')}</p>
    <h2>Associates</h2>
    <p>${todo('Names and enrolment details of associates, if they are to be listed.')}</p>
    <p><a class="btn btn-ink" href="${rel}contact.html"><span>Contact the office</span></a></p>
  </div>
</div></section>
<section class="section section-mist" aria-labelledby="opening-h"><div class="wrap split">
  <div class="split-head">
    <h2 id="opening-h">${esc(gallery.title)}</h2>
    <p>Photos from the day the new office opened.</p>
    <a class="text-link" href="${rel}gallery.html">See all ${gallery.photos.length} photos</a>
  </div>
  <ul class="gallery-strip">${gallery.photos
    .slice(0, 3)
    .map((p) => `<li><a href="${rel}gallery.html#photo-${p.n}">${photoPicture(rel, p, '(min-width: 800px) 22vw, 90vw')}</a></li>`)
    .join('')}</ul>
</div></section>`,
});

// ---------- gallery ----------

render({
  file: 'gallery.html',
  title: `${gallery.title}: Photo Gallery`,
  description: `Photos from the opening of the new office of ${site.firm}, behind the Family Court, Shivaji Nagar, Pune.`,
  active: 'gallery.html',
  priority: 0.5,
  crumbs: [['Home', 'index.html'], ['Gallery', 'gallery.html']],
  schema: [
    {
      '@type': 'ImageGallery',
      name: gallery.title,
      url: abs('gallery.html'),
      about: { '@id': firmId },
      image: gallery.photos.map((p) => ({ '@type': 'ImageObject', contentUrl: abs(`assets/img/office-opening/opening-${p.n}-1600.webp`), description: p.alt })),
    },
  ],
  body: (rel) => `
<section class="page-head"><div class="wrap">
  ${crumbsHtml(rel, [['Home', 'index.html'], ['Gallery', 'gallery.html']])}
  <h1>${esc(gallery.title)}</h1>
  <p class="lede">${esc(gallery.intro)}</p>
</div></section>
<section class="section"><div class="wrap">
  <ul class="gallery" data-gallery>${gallery.photos
    .map(
      (p) => `<li id="photo-${p.n}"><a href="${rel}assets/img/office-opening/opening-${p.n}-1600.webp" data-full>${photoPicture(rel, p, '(min-width: 1100px) 23rem, (min-width: 700px) 45vw, 92vw')}</a></li>`,
    )
    .join('')}</ul>
</div></section>
<dialog class="lightbox" aria-label="Photo viewer" data-lightbox>
  <img alt="">
  <p class="lightbox-caption"></p>
  <form method="dialog"><button class="lightbox-close" aria-label="Close">&times;</button></form>
  <button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous photo" data-step="-1">&lsaquo;</button>
  <button type="button" class="lightbox-nav lightbox-next" aria-label="Next photo" data-step="1">&rsaquo;</button>
</dialog>`,
});

// ---------- contact ----------

render({
  file: 'contact.html',
  title: 'Contact and Directions: Behind Pune Family Court',
  description: `Call, WhatsApp or visit our office at ${site.address.line1}, behind the Family Court, Shivaji Nagar, Pune.`,
  active: 'contact.html',
  priority: 0.9,
  crumbs: [['Home', 'index.html'], ['Contact', 'contact.html']],
  schema: [firmSchema()],
  body: (rel) => `
<section class="page-head"><div class="wrap">
  ${crumbsHtml(rel, [['Home', 'index.html'], ['Contact', 'contact.html']])}
  <h1>Contact the office</h1>
  <p class="lede">Call, send a WhatsApp message or visit us. Tell us briefly what the matter is about and we'll fix a time to meet.</p>
</div></section>
<section class="section"><div class="wrap contact">
  <form class="enquiry" action="https://wa.me/${site.whatsapp}" method="get" data-enquiry>
    <h2>Send an enquiry on WhatsApp</h2>
    <p class="form-note">This opens WhatsApp with your message ready to send. Please keep it brief and don't include confidential details.</p>
    <label for="f-name">Your name</label>
    <input id="f-name" name="name" autocomplete="name" required>
    <label for="f-area">What is it about?</label>
    <select id="f-area" name="area">
      ${practice.map((p) => `<option>${esc(p.name)}</option>`).join('')}
      <option>Something else</option>
    </select>
    <label for="f-msg">Briefly, what happened?</label>
    <textarea id="f-msg" name="text" rows="4" required></textarea>
    <button class="btn btn-ink" type="submit">${icon.whatsapp}<span>Open in WhatsApp</span></button>
  </form>
  <div class="contact-details">
    <h2>Office</h2>
    <address>${esc(site.firm)}<br>${esc(site.address.line1)}<br>${esc(site.address.line2)}<br>${esc(site.address.locality)}, ${esc(site.address.city)} ${esc(site.address.postalCode)}<br>${esc(site.address.region)}</address>
    <a class="btn btn-line" href="${site.mapsUrl}" rel="noopener">${icon.pin}<span>Get directions</span></a>
    <h2>Phone and email</h2>
    <ul class="contact-list">
      <li>${icon.phone}<a href="tel:${site.phone}">${esc(site.phoneDisplay)}</a></li>
      <li>${icon.whatsapp}<a href="${waLink()}">${esc(site.whatsappDisplay)}</a> (WhatsApp)</li>
      <li>${icon.mail}<a href="mailto:${site.email}">${esc(site.email)}</a></li>
    </ul>
    <h2>Office hours</h2>
    <dl class="hours">${site.hours.map((h) => `<div><dt>${esc(h.days)}</dt><dd>${esc(h.label)}</dd></div>`).join('')}</dl>
  </div>
</div></section>`,
});

// ---------- disclaimer, privacy, 404 ----------

render({
  file: 'disclaimer.html',
  title: 'Disclaimer',
  description: `Disclaimer for the website of ${site.firm}, in line with the rules of the Bar Council of India.`,
  priority: 0.3,
  crumbs: [['Home', 'index.html'], ['Disclaimer', 'disclaimer.html']],
  body: (rel) => `
<section class="page-head"><div class="wrap narrow">${crumbsHtml(rel, [['Home', 'index.html'], ['Disclaimer', 'disclaimer.html']])}<h1>Disclaimer</h1></div></section>
<section class="section"><div class="wrap narrow prose">
  <p>The Bar Council of India does not permit advocates to solicit work or advertise. This website is meant only to provide information about ${esc(site.firm)} to people who seek it on their own initiative.</p>
  <p>By using this website, you confirm that there has been no advertisement, personal communication, solicitation, invitation or inducement of any sort from us or any of our members to solicit work through this website.</p>
  <p>The content of this website is general information about the law. It is not legal advice and should not be relied on as such. Using this website or contacting us through it does not create an advocate–client relationship.</p>
  <p>We are not responsible for any action taken on the basis of the content of this website. For advice on your own situation, please consult an advocate.</p>
</div></section>`,
});

render({
  file: 'privacy-policy.html',
  title: 'Privacy Policy',
  description: `How ${site.firm} handles personal information shared through this website.`,
  priority: 0.3,
  crumbs: [['Home', 'index.html'], ['Privacy policy', 'privacy-policy.html']],
  body: (rel) => `
<section class="page-head"><div class="wrap narrow">${crumbsHtml(rel, [['Home', 'index.html'], ['Privacy policy', 'privacy-policy.html']])}<h1>Privacy policy</h1></div></section>
<section class="section"><div class="wrap narrow prose">
  <p>This policy explains how ${esc(site.firm)} handles information you share with us, in line with the Digital Personal Data Protection Act, 2023.</p>
  <h2>What we collect</h2>
  <p>This website does not use forms that store your data on our servers. The enquiry form opens WhatsApp on your device with your message, and you decide whether to send it. When you call, message or email us, we receive the details you choose to share.</p>
  <h2>How we use it</h2>
  <p>Only to respond to your enquiry and, if you instruct us, to act in your matter. We do not sell or share your information for marketing.</p>
  <h2>Confidentiality</h2>
  <p>Information you share with us for the purpose of legal advice is confidential and protected by professional privilege.</p>
  <h2>Your rights</h2>
  <p>You can ask us to correct or delete personal information we hold about you, subject to our legal and professional record-keeping duties. Write to <a href="mailto:${site.email}">${esc(site.email)}</a>.</p>
  <p>${todo('Have this policy reviewed before launch, and add any analytics tools used.')}</p>
</div></section>`,
});

render({
  file: '404.html',
  title: 'Page not found',
  description: 'The page you were looking for could not be found.',
  noindex: true,
  body: (rel) => `
<section class="page-head"><div class="wrap narrow"><h1>We couldn't find that page</h1>
<p class="lede">It may have moved. Try the <a href="${rel}practice-areas.html">practice areas</a>, the <a href="${rel}legal-guides.html">legal guides</a>, or <a href="${rel}contact.html">contact the office</a>.</p></div></section>`,
});

// ---------- assets, sitemap, robots, llms.txt ----------

fs.cpSync('assets', path.join(OUT, 'assets'), { recursive: true });

fs.writeFileSync(
  path.join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(({ file }) => {
    const post = posts.find((g) => file === `legal-guides/${g.slug}.html`);
    return `  <url><loc>${abs(file)}</loc><lastmod>${post ? post.date : BUILT}</lastmod></url>`;
  })
  .join('\n')}
</urlset>
`,
);

fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);

fs.writeFileSync(
  path.join(OUT, 'llms.txt'),
  `# ${site.firm}

> Advocates in Pune, Maharashtra, India, practising family, criminal and civil law from an office behind the Family Court in Shivaji Nagar. ${site.enrolment}.

Address: ${fullAddress()}, ${site.address.region}, India
Phone: ${site.phoneDisplay}
WhatsApp: ${site.whatsappDisplay}
Email: ${site.email}

## Practice areas
${practice.map((p) => `- [${p.name}](${abs(`${p.slug}.html`)}): ${p.short}`).join('\n')}

## Legal guides
${posts.map((g) => `- [${g.title}](${abs(`legal-guides/${g.slug}.html`)}): ${g.summary}`).join('\n')}

## Pages
- [About the advocate](${abs('about.html')})
- [Office opening photos](${abs('gallery.html')})
- [Contact and directions](${abs('contact.html')})
- [Disclaimer](${abs('disclaimer.html')})
`,
);

console.log(`Built ${pages.length + 1} pages into ${OUT}/`);
