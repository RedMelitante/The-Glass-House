# The Glass House — design package for building in Cowork

Everything needed to build the new theghglass.com in Astro (ScrewFast starter).

## What's inside
| Folder / file | What it is |
|---|---|
| `BUILD-BRIEF.md` | **Start here.** Business facts, colors, fonts, every page and its URL, components, launch checklist |
| `design/` | The full Claude Design: 120 page files (`*.dc.html`, desktop + mobile) and `canvas.json` |
| `public/images/` | All 102 photos used in the design, with descriptive names (drop straight into Astro's `public/`) |
| `image-manifest.csv` | Every image, its description (alt text) and which pages use it |
| `src/content/blog/` | 69 blog posts as Markdown, ready for an Astro content collection |
| `blog-index.csv` / `blog-images-to-download.csv` | Blog post list and the blog images still hosted on the old site |

## How to use it in Cowork
1. Unzip this folder into the folder you'll build the site in (or next to your ScrewFast project).
2. Open Claude in Cowork with that folder connected.
3. Paste the prompt below.

## Starter prompt

```
I'm building the new website for The Glass House (theghglass.com) in Astro using the ScrewFast starter.
The approved design is in this folder: read BUILD-BRIEF.md first, then use the files in design/ as
the source of truth for layout, copy and styling (desktop 1440px + mobile 390px versions of every page).

1. Set up a ScrewFast project (or use the one in this folder) and replace its colors and fonts with the
   tokens in the brief.
2. Build the shared Header, Footer and CTA band first.
3. Build the main pages, then the Service, Product and Area templates and generate all 12 service,
   10 product and 19 area pages from their data with getStaticPaths().
4. Move images from public/images and the 69 blog posts from src/content/blog into the project and build
   the blog index and post layout.
5. Use the URL routes in the brief so old Google links keep working.
Work page by page, run the dev server and compare each page against its design file before moving on.
```

Design files are Claude Design format: page markup is normal HTML with inline styles; `{{name}}` are data holes,
`sc-for` / `sc-if` are loops and conditionals, and each file's data lives in the `<script data-dc-script>` block
at the bottom.
