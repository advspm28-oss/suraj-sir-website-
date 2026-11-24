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

- Buy the domain, then set it in `src/site.mjs` (`url`) or as the `SITE_URL` environment variable on the host.
- Confirm the address ("Supreme Tower"), PIN code and office hours in `src/site.mjs`.
- When the Google Business Profile is ready, paste its link into `gbpUrl` and its map embed address into `mapEmbedUrl` (see `google-business-profile/README.md`, Step 4).
- Have the advocate review the practice pages, guides and privacy policy.

## Deploying on Cloudflare Pages (recommended, free, allows business use)

1. Create a free account at https://dash.cloudflare.com/sign-up.
2. **Workers & Pages > Create > Pages > Connect to Git**, and choose this GitHub repository.
3. Settings:
   - Production branch: the branch holding the site (merge it into `main` first, or pick the current branch).
   - Build command: `node build.mjs`
   - Build output directory: `dist`
   - Environment variable: `SITE_URL` = `https://www.yourdomain.com`
4. Deploy. The site gets a free `*.pages.dev` address with HTTPS.
5. **Custom domains > Set up a domain**: add `yourdomain.com` and `www.yourdomain.com`. If the domain was bought at Cloudflare, this is automatic; otherwise change the domain's nameservers at the registrar to the two Cloudflare gives you.
6. Turn on **Web Analytics** for the site (free, no cookies) to count visits.
7. In Google Search Console (https://search.google.com/search-console), add the domain, verify it through Cloudflare DNS, and submit `https://www.yourdomain.com/sitemap.xml`.

Every push to the production branch rebuilds and republishes the site. `_headers` sets basic security headers, and `404.html` is served for missing pages.

`vercel.json` is also included, but Vercel's free Hobby plan is for non-commercial use only, so a law firm would need its paid plan.
