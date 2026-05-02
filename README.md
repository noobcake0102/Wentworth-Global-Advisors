# Wentworth Global Advisors — Static Website

A self-contained static site. Drop the entire folder onto any host that serves
`index.html` from a directory (Netlify, GitHub Pages, Vercel, Cloudflare Pages,
S3+CloudFront, etc.) and clean URLs like `wentworthglobal.net/services/` will
work out of the box.

## Folder structure

```
wentworth-website/
├── index.html                                  → /
├── 404.html                                    → /404 (auto on missing pages)
├── services/index.html                         → /services/
├── about/index.html                            → /about/
├── contact/index.html                          → /contact/
├── case-studies/
│   ├── index.html                              → /case-studies/
│   ├── aerospace-metallurgy-production-ramp/
│   │   └── index.html                          → /case-studies/aerospace-metallurgy-production-ramp/
│   ├── silicon-valley-electronics-turnaround/
│   │   └── index.html                          → /case-studies/silicon-valley-electronics-turnaround/
│   └── leo-meo-satellite-ground-station-recovery/
│       └── index.html                          → /case-studies/leo-meo-satellite-ground-station-recovery/
├── assets/
│   ├── styles.css
│   ├── wentworth-logo-dark.svg
│   ├── wentworth-logo-light.svg
│   ├── wentworth-logo-stacked.svg
│   └── wentworth-mark.svg
├── netlify.toml      ← Netlify build config (security headers, caching)
├── _redirects        ← Netlify redirect rules (legacy URLs + 404)
├── sitemap.xml
├── robots.txt
├── .gitignore
└── README.md         ← this file
```

All internal links and asset references use **root-relative paths**
(`/services/`, `/assets/styles.css`). The site must be deployed at the **root of
a domain**, e.g. `https://wentworthglobal.net/`. If it ever needs to live under
a sub-path (`https://example.com/wentworth/`), the paths would need to be
prefixed.

---

## Deploying via Netlify (recommended)

This site is pre-configured for Netlify. The `netlify.toml`, `_redirects`,
and `404.html` files are already in place.

### One-time setup

1. **Push to GitHub.** From inside this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-user>/<repo>.git
   git push -u origin main
   ```

2. **Connect Netlify to the repo.**
   - Log in at <https://app.netlify.com>.
   - Click **Add new site → Import an existing project**.
   - Authorize GitHub, pick the repo.
   - Build settings:
     - **Build command:** *(leave empty)*
     - **Publish directory:** `.` (the root of the repo)
       *— or, if the `wentworth-website` folder is inside a larger repo, set
       this to `wentworth-website`.*
   - Click **Deploy**. Netlify gives you a temporary URL like
     `https://wentworth-global-advisors.netlify.app`.

3. **Connect the custom domain (`wentworthglobal.net`).**
   - In Netlify: **Site settings → Domain management → Add custom domain.**
   - Add both `wentworthglobal.net` (apex) and `www.wentworthglobal.net`.
   - At GoDaddy (or whoever hosts your DNS), update records as Netlify
     instructs — typically:
     - Apex `wentworthglobal.net` → either an `ALIAS`/`ANAME` record to
       `apex-loadbalancer.netlify.com`, **or** four `A` records to Netlify's
       load-balancer IPs (Netlify shows the current ones in the dashboard).
     - `www` subdomain → `CNAME` record to `<your-site>.netlify.app`.
   - Once DNS propagates (typically a few minutes to an hour), Netlify will
     auto-provision a Let's Encrypt SSL certificate. Make sure **Force HTTPS**
     is enabled.

4. **Optional — uncomment the host-redirect rule.** Open `_redirects` and
   uncomment the `https://wentworthglobal.netlify.app/* → wentworthglobal.net`
   line so the auto-generated Netlify subdomain doesn't compete with your
   real domain in search results.

### Day-to-day workflow

After this is set up, every commit you push to `main` triggers an automatic
deploy. Edit a page → `git commit` → `git push` → site updates in seconds.
Netlify also keeps a deploy history, so rolling back is one click.

### What `netlify.toml` does

- Sets `pretty_urls = true` so `/services` and `/services/` both resolve.
- Adds security headers (HSTS, X-Frame-Options, Referrer-Policy, etc.).
- Caches `/assets/*` for one year (CSS and SVG logos rarely change).
- Caches `*.html` for 5 minutes so content updates appear quickly.

### What `_redirects` does

- 301-redirects any legacy `/services.html`-style URL to its clean equivalent
  (in case any old links survive on LinkedIn, Upwork, or in caches).
- Falls back to `/404.html` for any unmatched route.

---

## Deploying via GitHub Pages (alternative)

If you ever want to skip Netlify, GitHub Pages will also work — but
note that GitHub Pages **ignores** `netlify.toml` and `_redirects`. You'd
lose the security headers and legacy-URL redirects.

1. In the repo on GitHub: **Settings → Pages → Build and deployment**
   - Source: `Deploy from a branch`
   - Branch: `main` / `/(root)`
2. Add the custom domain in Pages settings, then point DNS at:
   - Apex (`wentworthglobal.net`): `A` records →
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: `CNAME` → `<your-user>.github.io`

---

## Updating the canonical URL

Every page has a `<link rel="canonical" href="https://www.wentworthglobaladvisors.com/...">`
and JSON-LD schema URLs hard-coded to that domain. Once your live domain is
confirmed (`wentworthglobal.net`), do a project-wide find-and-replace:

```
https://www.wentworthglobaladvisors.com   →   https://wentworthglobal.net
```

Same goes for `sitemap.xml` and `404.html`.

---

## Local preview

Don't open the files with `file://` — root-relative paths (`/assets/...`)
require an HTTP server to resolve correctly. Spin one up from inside this folder:

```bash
# Python (anywhere)
python3 -m http.server 8080

# Node (if you have npx)
npx --yes http-server -p 8080
```

Then visit <http://localhost:8080/>.

---

## What the site contains

- **Home** (`/`) — hero, three practice pillars, industries, case-studies
  teaser, FAQ (with `FAQPage` schema), CTA banner.
- **Services** (`/services/`) — 8 service cards, 5 industry deep-dives, "What
  We Solve" long-tail SEO list.
- **Case Studies** (`/case-studies/`) — hub page + 3 full-detail engagement
  write-ups, each with `Article` schema and quantified outcomes.
- **About** (`/about/`) — Nick Bobay founder/principal page with `Person`
  schema.
- **Contact** (`/contact/`) — inquiry form (currently `mailto:` — swap for
  a Netlify Forms endpoint when ready; see below).
- **404** (`/404.html`) — branded fallback for missing pages.
- **SEO** — per-page `<title>`, meta description, canonical, Open Graph,
  JSON-LD schema, sitemap.xml, robots.txt.

## Brand

- Navy `#0d1b2a` · Gold `#c9a84c`
- Headlines: Cormorant Garamond (serif)
- Body: DM Sans (sans-serif)
- Personality: corporate · minimalistic but thorough · sharp
- Editing styles? Touch `assets/styles.css` only — every page imports it.

## Optional next step: Netlify Forms for the contact form

Right now `/contact/` uses a `mailto:` action — clicking submit opens the
visitor's email client. If you'd prefer the form to submit straight to
Netlify (so Nick gets an email + a backup record in the Netlify dashboard,
no email client required), it's a one-line change:

```html
<!-- Find this in /contact/index.html: -->
<form class="form-grid" action="mailto:..." method="post" enctype="text/plain">

<!-- Replace with: -->
<form class="form-grid" name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- existing fields stay the same -->
</form>
```

Then in Netlify: **Forms → Form notifications** → add Nick's email. Done.

## Updating content

Each page is a single self-contained HTML file. Find the page in its folder,
edit, commit, push. Netlify redeploys automatically.
