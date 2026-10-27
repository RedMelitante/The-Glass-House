# The Glass House — Build Brief (Astro + ScrewFast)

This package is the approved Claude Design for the new **theghglass.com**. Rebuild it as a static Astro site
on the **ScrewFast** starter, matching the design files in `design/` as closely as possible.

Live design (for visual reference): https://claude.ai/artifact/AGRwLFjtugLy1tbjN19qAd

---

## 1. Business facts (use everywhere — header, footer, schema, contact page)

| | |
|---|---|
| Business name | The Glass House |
| Address | 270 Communication Way, Hyannis, MA 02601 |
| Google Maps link | https://maps.app.goo.gl/vZfV7rE3CSp9vrpHA |
| Phone | (508) 685-2770 |
| Email | ornyb@theghglass.com |
| Hours | Mon–Fri 9:00–5:00 · Sat–Sun closed |
| Google rating | 5.0 on Google · 5 reviews |
| Footer credit | Powered by [Digital Services Master](https://www.digitalservicesmaster.com/) Copyright © 2024. All rights reserved |

Add `LocalBusiness` JSON-LD (name, address, phone, hours, geo, sameAs social links from `design/Footer.dc.html`).

---

## 2. Design tokens

**Fonts** (Google Fonts)
- Headings: **Newsreader** (serif) — weights 400/500/600, italic 400, optical size 6–72
- Body/UI: **Instrument Sans** — weights 400/500/600/700

**Colors**
| Token | Hex | Use |
|---|---|---|
| ink | `#0F2433` | headings, dark sections, primary text |
| brand | `#1E5873` | primary buttons, links, accents |
| body | `#4A5C67` | paragraph text |
| line | `#D6E0E4` | borders, dividers |
| mist | `#F4F7F8` | light section backgrounds |
| frost | `#E3EAED` / `#E4EEF0` | card fills, tints |
| brass | `#9C7430` | small accent (quotes, eyebrows) |
| teal alt | `#2F6B69` | swatch / alt accent |
| footer link | `#7FD3D9` | "Digital Services Master" link on dark footer |
| white | `#FFFFFF` | |

Set these as CSS variables / Tailwind theme colors in ScrewFast and replace its default palette.
`design/Main.dc.html` is the design-system page (buttons, cards, form fields, type scale) — copy styles from it.

**Breakpoints:** desktop artboards are 1440px wide; mobile artboards are 390px. Every page has both.

---

## 3. Pages and routes

Keep old WordPress URLs where they exist so Google rankings carry over.

### Main pages
| Design file | Route |
|---|---|
| Home.dc.html | `/` |
| Services.dc.html | `/glass-services/` |
| Products.dc.html | `/custom-glass-products/` |
| ProductQuote.dc.html | `/product-quote/` |
| Areas.dc.html | `/glassworks-areas-we-serve/` |
| Gallery.dc.html (+ Gallery-Lightbox) | `/project-gallery/` |
| About.dc.html | `/about-us-glass-installation/` |
| Contact.dc.html | `/contact/` |
| Faq.dc.html | `/faq/` |
| CostGuide.dc.html | `/cost-guide/` |
| BlogIndex.dc.html | `/blog/` |
| Blog.dc.html | blog post layout → `/<post-slug>/` (root level, same as WordPress) |
| Estimate.dc.html | `/get-free-estimate/` |
| Legal.dc.html (Privacy tab) | `/privacy-policy/` |
| Legal.dc.html (Terms tab) | `/terms-and-conditions/` *(check old slug)* |
| ThankYou.dc.html | `/thank-you/` |
| NotFound.dc.html | `404.astro` |
| Sitemap.dc.html | design index only — generate `sitemap.xml` with `@astrojs/sitemap` instead |

### 12 service pages — one template: `design/Service.dc.html` (data object `S`)
| key | Route |
|---|---|
| shower | `/glass-services/shower-enclosures/` |
| mirrors | `/glass-services/custom-mirrors/` |
| railings | `/glass-services/glass-railings/` |
| storefronts | `/glass-services/glass-storefront/` |
| entrances | `/glass-services/glass-front-entrance/` |
| partitions | `/glass-services/glass-wall-partitions/` |
| windows | `/glass-services/glass-windows/` |
| winecellars | `/glass-services/glass-wine-cellar/` |
| countertops | `/glass-services/glass-countertops/` |
| canopies | `/glass-services/canopies-skylights/` |
| shelves | `/glass-services/glass-shelves/` |
| fireplace | `/glass-services/fireplace-screens/` |

### 10 product pages — one template: `design/Product.dc.html` (data object `P`)
Keys: mirrors, shelves, railings, windows, storefronts, winecellars, countertops, fireplace, shower, canopies.
Route: `/custom-glass-products/<slug>/` — **match the slugs on the live old site** before launch.

### 19 service-area pages — one template: `design/Area.dc.html` (data `TW`, `EX`, `RG`, `PJ`)
Towns: Chatham, Hyannis, Barnstable, Yarmouth, Dennis, Bourne, Sandwich, Falmouth, Mashpee, Brewster,
Harwich, Orleans, Eastham, Wellfleet, Truro, Provincetown, Boston, Providence, Rhode Island.
Route: `/glassworks-areas-we-serve/<town>/` — **match the old site's town slugs** before launch.

The `*-Mobile.dc.html` and `Service-Mirrors.dc.html`-style files are tiny wrappers that just load the
template with a key — you don't need to build them separately. Build each template once and generate the
pages with `getStaticPaths()` from the data.

---

## 4. Shared components (build once)
- **Header** (`Header.dc.html`): top bar with hours + clickable address (Google Maps), phone; main nav with
  Services and Products mega-menus (open on hover on desktop, tap on mobile), plain links incl. Contact, CTA button
  "Get a free estimate"; full mobile menu with the same lists.
- **Footer** (`Footer.dc.html`): Services and Products expandable lists, page links (About, Services, Products,
  Gallery, Blog, FAQ, Cost guide, Contact us, Estimate), all 19 town links, social icons, hours, clickable address,
  bottom bar with the Digital Services Master credit + Privacy and Terms links.
- **CtaBand** (`CtaBand.dc.html`): the closing call-to-action band used on most pages.
- Cards, buttons, FAQ accordion, photo grid, review cards, glass swatches — styles in `Main.dc.html`.

---

## 5. Content sources
- **All page copy** lives inside the design files (text in the markup, plus the data objects in each file's
  `<script data-dc-script>` block). Move the data objects into Astro content collections or `src/data/*.ts`.
- **Blog:** `src/content/blog/*.md` — 69 posts already converted from WordPress with frontmatter
  (title, description, pubDate, author, categories, tags, heroImage, originalUrl, slug, readingTime).
  Their `heroImage` values are still the old WordPress URLs — download them using `blog-images-to-download.csv`
  and point `heroImage` to the local files. `blog-index.csv` lists every post.
- Blog index filters: All, Shower Enclosure, Custom Glass Installation, Glass Windows, Glass Storefronts,
  Custom Mirrors, Glass Railings. 9 posts per page, newest first, newest post featured.
- Home page shows the 3 newest posts.

## 6. Images
- `public/images/` — all 102 images used in the design, renamed with descriptive file names.
- `image-manifest.csv` — each image, a description (use as alt text), and which pages use it.
- In the design files, every image path already points to `/images/<file>` so they work as-is in Astro's `public/`.
- Prefer Astro's `<Image>` component (move to `src/assets/` if you want automatic resizing).
- Known soft photos to replace later: Orleans, Truro, Eastham and Rhode Island area heroes.

## 7. Forms
Estimate, Contact and Product Quote forms → wire to the chosen form handler (Netlify Forms, Formspree, or
the CRM webhook) and redirect to `/thank-you/`.

## 8. Things that are placeholders in the design
- Blog share buttons and blog pagination are visual only — make them work.
- Design-system sample buttons in `Main.dc.html` are samples, not real links.

## 9. Launch checklist
- 301 redirects for any old URL whose slug changes.
- Titles + meta descriptions per page, Open Graph images, `sitemap.xml`, `robots.txt`.
- LocalBusiness + FAQPage schema (FAQ page and service-page FAQs).
- Lighthouse 90+ on mobile; all images lazy-loaded below the fold.
