# The Glass House — theghglass.com

Static marketing site for The Glass House (Hyannis, MA), built with [Astro](https://astro.build) 7 and
Tailwind CSS 4 from the approved Claude Design handoff in [`design-handoff/`](design-handoff/).

## Getting started

```bash
nvm use            # Node 22 (>= 22.22)
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run preview    # serve dist/
npm run check      # type-check the site and the Worker
npm run preview:worker   # build, then serve through the Cloudflare Worker locally (wrangler dev)
npm run deploy     # manual deploy to Cloudflare (needs CLOUDFLARE_API_TOKEN); merges to main deploy automatically
```

## How the design was ported

The design files (`design-handoff/design/*.dc.html`) are HTML with inline styles, `{{data}}` holes,
`sc-for` / `sc-if` blocks and a data script per page. They were converted 1:1 so styles, layout and copy
match the design exactly:

| Design | Site |
|---|---|
| Page markup (inline styles kept verbatim) | `src/views/*.astro`, `src/components/{Header,Footer,CtaBand}.astro` |
| Each file's `<script data-dc-script>` data/copy | `src/data/*.js` (one module per design file) |
| Desktop (1440px) / mobile (390px) variants | Both are in the HTML; `.dc-d` / `.dc-m` in `src/styles/global.css` switch at **760px**, the design's own breakpoint. Sizes that differ per breakpoint are CSS variables in each view's `<style>` block. |
| Design-tool interactions (`setState`) | Small vanilla scripts: `src/scripts/disclosure.ts` (accordions, footer lists, TOC), `src/scripts/filter.ts` (filter chips), plus page scripts (header menus, gallery lightbox, FAQ/blog/area search, product gallery, quote summary, photo uploads). |
| Design tokens | `@theme` in `src/styles/global.css` (Tailwind colours/fonts). Tailwind's preflight reset is intentionally **not** loaded: the design was drawn on browser defaults. |

`src/lib/routes.ts` maps design file names (e.g. `Service-Mirrors.dc.html`) to live URLs.

## Pages and routes

All old WordPress URLs are preserved (slugs taken from the live site's sitemap):

- Main pages: `/`, `/glass-services/`, `/custom-glass-products/`, `/product-quote/`, `/glassworks-areas-we-serve/`,
  `/project-gallery/`, `/about-us-glass-installation/`, `/contact/`, `/faq/`, `/cost-guide/`, `/get-free-estimate/`,
  `/privacy-policy/`, `/terms-and-conditions/`, `/thank-you/`, `404`
- 12 services — `src/pages/glass-services/[slug].astro` (`SERVICE_SLUGS`)
- 10 products — `src/pages/custom-glass-products/[slug].astro` (`PRODUCT_SLUGS`)
- 19 areas — `src/pages/glassworks-areas-we-serve/[slug].astro` (`AREA_SLUGS`)
- Blog — `/blog/` (+ `/blog/page/N/`), category archives at `/category/<slug>/`, posts at `/<post-slug>/`

Old URLs without a new equivalent are 301-redirected in `public/_redirects`.

## Blog

Posts are Markdown in `src/content/blog/` (content collection defined in `src/content.config.ts`).
Images that were on the old WordPress host were downloaded to `public/images/blog/` and the posts point at the
local copies. Listing: 9 posts per page, newest first, newest post featured; search covers every post. To add a
post, drop a new `.md` file with the same frontmatter (`title`, `description`, `pubDate`, `author`,
`categories`, `heroImage`, `slug`, `readingTime`).

## Forms

Estimate, quick estimate (home), service-page estimate, contact, product quote and newsletter forms all
`POST` to `/thank-you/` with a hidden `form-name` field and a `bot-field` honeypot. The Worker
(`worker/index.ts`) drops honeypot hits, forwards each submission to the URL in the `FORM_WEBHOOK_URL`
secret, and redirects the visitor to `/thank-you/`.

**Until `FORM_WEBHOOK_URL` is set, submissions are only logged in the Worker's logs and not delivered.**

### Form emails from the Glass House Google account (theghglass@gmail.com)

`google-apps-script/form-email.gs` is a Google Apps Script that emails every submission to
theghglass@gmail.com, sent from that same account. Uploaded photos are attached, and Reply goes to the
customer's email. Setup, signed in to Google as **theghglass@gmail.com**:

1. Go to [script.google.com](https://script.google.com) → **New project**. Name it "Website form emails",
   delete the sample code and paste in `google-apps-script/form-email.gs`. Save.
2. **Project Settings** (gear icon) → **Script properties** → **Add script property**: name `SHARED_SECRET`,
   value a long random string (e.g. from a password generator). Save.
3. Back in the editor, choose `sendTestEmail` in the function menu and click **Run**. Google asks for
   permission to send email as you: approve it. If it shows "Google hasn't verified this app", click
   **Advanced** → **Go to Website form emails**; it's your own script. A test email arrives in the inbox.
4. **Deploy** → **New deployment** → type **Web app**; *Execute as*: **Me**; *Who has access*: **Anyone**.
   Deploy and copy the **Web app URL** (ends in `/exec`).
5. Give the Worker the URL and the same secret. Either in Cloudflare (Worker → Settings → Variables and
   Secrets → add two secrets), or with wrangler:

   ```bash
   npx wrangler secret put FORM_WEBHOOK_URL      # paste the Web app URL
   npx wrangler secret put FORM_WEBHOOK_SECRET   # paste the SHARED_SECRET value
   ```

6. Send a test from the website's contact form and check the inbox.

Notes:
- To change the script later, edit it, then **Deploy → Manage deployments → Edit → Version: New version**.
  The URL stays the same.
- Gmail lets a personal account's scripts send about 100 emails a day, far more than the site needs.
- Photos over 15 MB in total aren't attached; the email lists their names instead.
- To send to a different inbox, change `NOTIFY_EMAIL` at the top of the script and deploy a new version.

**If an email doesn't arrive**, check Cloudflare → Worker → Observability → Logs for the form's line:

| Log line | Meaning / fix |
|---|---|
| `Form "contact" emailed.` | Sent: check Spam and the Sent folder. |
| `FORM_WEBHOOK_URL is not set` | Add the `FORM_WEBHOOK_URL` secret on the Worker. |
| `FORM_WEBHOOK_SECRET is not set` / `rejected by the Apps Script: unauthorized` | The Worker's `FORM_WEBHOOK_SECRET` must exactly match the script's `SHARED_SECRET`. |
| `…permission to call MailApp.sendEmail…` | Run `sendTestEmail` in the script editor and approve the mail permission. |
| `Sign in - Google Accounts` | The deployment's access must be **Anyone**: Deploy → Manage deployments → Edit. |
| `webhook returned 404` | `FORM_WEBHOOK_URL` isn't the Web app URL ending in `/exec`. |

### Other form services

If `FORM_WEBHOOK_URL` points anywhere other than Google Apps Script (Formspree, Make, Zapier, a CRM), the
Worker forwards the original multipart form, uploads included, and `FORM_WEBHOOK_SECRET` isn't used.

## SEO

Per-page titles/descriptions, canonical URLs, Open Graph/Twitter tags, `LocalBusiness` JSON-LD on every page
(`src/lib/site.ts`), `FAQPage` JSON-LD on the FAQ, service and product pages, `BlogPosting` on posts,
`sitemap-index.xml` (`@astrojs/sitemap`) and `robots.txt`. Images below the fold are lazy-loaded.

## Deployment (Cloudflare Workers + static assets)

`wrangler.jsonc` deploys the Worker `the-glass-house`, which serves `./dist` through the `ASSETS` binding:

- `html_handling: auto-trailing-slash`: `/contact` redirects to `/contact/`, which serves `contact/index.html`.
- `not_found_handling: 404-page`: unknown URLs get `404.html` with a 404 status.
- `run_worker_first` for `/thank-you/` so form POSTs reach the Worker (the asset layer only answers GET/HEAD).
- `public/_redirects` (301s for retired URLs) and `public/_headers` (security and cache headers) are applied
  by Cloudflare.

### Automatic deploys (Workers Builds)

The Worker is connected to this GitHub repo in Cloudflare (Worker → Settings → Build). Every push or merge to
`main` builds and deploys the site:

| Setting | Value |
|---|---|
| Production branch | `main` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Root directory | `/` |

A merge is live a minute or two after it lands. Check progress under Worker → Deployments. If a merge doesn't
produce a new build there, re-check Cloudflare's GitHub app access to the repo (Settings → Build → Manage).
If a build fails on the Node version, add the build variable `NODE_VERSION` = `22`.

### Manual deploy

Only needed if automatic builds are off:

```bash
export CLOUDFLARE_API_TOKEN=...   # token from the "Edit Cloudflare Workers" template
export CLOUDFLARE_ACCOUNT_ID=...  # only needed if the token can see several accounts
npm run deploy                    # builds, then deploys
```

Deploy from an up-to-date checkout of `main`. `npx wrangler deploy` on its own uploads whatever is already in
`dist/` without rebuilding.

The site is served at `https://the-glass-house.<your-subdomain>.workers.dev`. To serve www.theghglass.com, add
it as a Custom Domain on the Worker in the Cloudflare dashboard (the domain's DNS must be on Cloudflare).

## Open items before launch

- Areas hub map is the design's stylised placeholder ("Interactive service-area map (Google Maps)") — swap in a
  Google Maps embed if wanted.
- Known soft photos to replace: Orleans, Truro, Eastham and Rhode Island area heroes.
- Finish the form-email setup above and send a test submission from each form.
