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
npm run check      # type-check .astro / .ts files
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

Estimate, quick estimate (home), service-page estimate, contact, product quote and newsletter forms use
**Netlify Forms** (`data-netlify`, honeypot field) and redirect to `/thank-you/`. On another host, point each
form's `action` at your handler (Formspree, CRM webhook, …).

## SEO

Per-page titles/descriptions, canonical URLs, Open Graph/Twitter tags, `LocalBusiness` JSON-LD on every page
(`src/lib/site.ts`), `FAQPage` JSON-LD on the FAQ, service and product pages, `BlogPosting` on posts,
`sitemap-index.xml` (`@astrojs/sitemap`) and `robots.txt`. Images below the fold are lazy-loaded.

## Deployment

`netlify.toml` builds with `npm run build` and publishes `dist/`. Any static host works; `_redirects` is the
Netlify / Cloudflare Pages format.

## Open items before launch

- Areas hub map is the design's stylised placeholder ("Interactive service-area map (Google Maps)") — swap in a
  Google Maps embed if wanted.
- Known soft photos to replace: Orleans, Truro, Eastham and Rhode Island area heroes.
- Confirm the Netlify form notifications (email/CRM) after the first deploy.
