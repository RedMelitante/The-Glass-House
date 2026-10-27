// Route table. Maps the design file names used in the page data (e.g. "Service-Mirrors.dc.html")
// to the live URLs, which keep the old WordPress slugs so existing links and rankings carry over.

export const ROUTES: Record<string, string> = {
  "Home.dc.html": "/",
  "Services.dc.html": "/glass-services/",
  "Products.dc.html": "/custom-glass-products/",
  "ProductQuote.dc.html": "/product-quote/",
  "Areas.dc.html": "/glassworks-areas-we-serve/",
  "Gallery.dc.html": "/project-gallery/",
  "Gallery-Lightbox.dc.html": "/project-gallery/",
  "About.dc.html": "/about-us-glass-installation/",
  "Contact.dc.html": "/contact/",
  "Faq.dc.html": "/faq/",
  "CostGuide.dc.html": "/cost-guide/",
  "BlogIndex.dc.html": "/blog/",
  "Blog.dc.html": "/blog/",
  "Estimate.dc.html": "/get-free-estimate/",
  "Legal.dc.html": "/privacy-policy/",
  "ThankYou.dc.html": "/thank-you/",
  "NotFound.dc.html": "/404/",
  "Sitemap.dc.html": "/",
  "Main.dc.html": "/",
  "Service.dc.html": "/glass-services/shower-enclosures/",
  "Service-Mirrors.dc.html": "/glass-services/custom-mirrors/",
  "Service-Railings.dc.html": "/glass-services/glass-railings/",
  "Service-Storefronts.dc.html": "/glass-services/glass-storefront/",
  "Service-Entrances.dc.html": "/glass-services/glass-front-entrance/",
  "Service-Partitions.dc.html": "/glass-services/glass-wall-partitions/",
  "Service-Windows.dc.html": "/glass-services/glass-windows/",
  "Service-WineCellars.dc.html": "/glass-services/glass-wine-cellar/",
  "Service-Countertops.dc.html": "/glass-services/glass-countertops/",
  "Service-Canopies.dc.html": "/glass-services/canopies-skylights/",
  "Service-Shelves.dc.html": "/glass-services/glass-shelves/",
  "Service-Fireplace.dc.html": "/glass-services/fireplace-screens/",
  "Product.dc.html": "/custom-glass-products/glass-mirror-products/",
  "Product-Shelves.dc.html": "/custom-glass-products/custom-glass-shelves/",
  "Product-Railings.dc.html": "/custom-glass-products/glass-for-stairs-railing/",
  "Product-Windows.dc.html": "/custom-glass-products/premium-glass-windows/",
  "Product-Storefronts.dc.html": "/custom-glass-products/commercial-storefront-glass/",
  "Product-WineCellars.dc.html": "/custom-glass-products/custom-glass-wine-cellar/",
  "Product-Countertops.dc.html": "/custom-glass-products/custom-glass-countertops/",
  "Product-Fireplace.dc.html": "/custom-glass-products/glass-fireplace-screen/",
  "Product-Shower.dc.html": "/custom-glass-products/enclosures-for-shower/",
  "Product-Canopies.dc.html": "/custom-glass-products/glass-canopies-roof-skylight/",
  "Area.dc.html": "/glassworks-areas-we-serve/chatham-glass-and-mirror-installation/",
  "Area-Hyannis.dc.html": "/glassworks-areas-we-serve/hyannis/",
  "Area-Barnstable.dc.html": "/glassworks-areas-we-serve/barnstable-glass-window-replacement/",
  "Area-Yarmouth.dc.html": "/glassworks-areas-we-serve/yarmouth-glass-shower-enclosure/",
  "Area-Dennis.dc.html": "/glassworks-areas-we-serve/dennis-glass-door-installation/",
  "Area-Bourne.dc.html": "/glassworks-areas-we-serve/bourne-door-installation/",
  "Area-Sandwich.dc.html": "/glassworks-areas-we-serve/sandwich-glass-company/",
  "Area-Falmouth.dc.html": "/glassworks-areas-we-serve/falmouth-commercial-glass-repairs/",
  "Area-Mashpee.dc.html": "/glassworks-areas-we-serve/mashpee-glass-replacement/",
  "Area-Brewster.dc.html": "/glassworks-areas-we-serve/brewster-commercial-glass-installers/",
  "Area-Harwich.dc.html": "/glassworks-areas-we-serve/harwich-mirror-installation/",
  "Area-Orleans.dc.html": "/glassworks-areas-we-serve/orleans-glass-door-installation/",
  "Area-Eastham.dc.html": "/glassworks-areas-we-serve/eastham-glass-installer/",
  "Area-Wellfleet.dc.html": "/glassworks-areas-we-serve/wellfleet-glass-window-repair/",
  "Area-Truro.dc.html": "/glassworks-areas-we-serve/truro-glass-contractors/",
  "Area-Provincetown.dc.html": "/glassworks-areas-we-serve/provincetown-glass-repair-service/",
  "Area-Boston.dc.html": "/glassworks-areas-we-serve/boston-glass-installation-services/",
  "Area-Providence.dc.html": "/glassworks-areas-we-serve/providence-glass-repair/",
  "Area-RhodeIsland.dc.html": "/glassworks-areas-we-serve/rhode-island-mirror-replacement/"
};

/** Resolve a design link ("Estimate.dc.html", "Legal.dc.html#terms") or pass a real URL through. */
export function link(href: string | undefined | null): string {
  if (!href) return '#';
  const [file, hash] = href.split('#');
  const route = ROUTES[file];
  if (route) return hash ? `${route}#${hash}` : route;
  return href;
}

/** Service key (data object `S` in the design) -> URL slug under /glass-services/. */
export const SERVICE_SLUGS: Record<string, string> = {
  shower: 'shower-enclosures',
  mirrors: 'custom-mirrors',
  railings: 'glass-railings',
  storefronts: 'glass-storefront',
  entrances: 'glass-front-entrance',
  partitions: 'glass-wall-partitions',
  windows: 'glass-windows',
  winecellars: 'glass-wine-cellar',
  countertops: 'glass-countertops',
  canopies: 'canopies-skylights',
  shelves: 'glass-shelves',
  fireplace: 'fireplace-screens',
};

/** Product key (data object `P`) -> URL slug under /custom-glass-products/ (matches the old site). */
export const PRODUCT_SLUGS: Record<string, string> = {
  mirrors: 'glass-mirror-products',
  shelves: 'custom-glass-shelves',
  railings: 'glass-for-stairs-railing',
  windows: 'premium-glass-windows',
  storefronts: 'commercial-storefront-glass',
  winecellars: 'custom-glass-wine-cellar',
  countertops: 'custom-glass-countertops',
  fireplace: 'glass-fireplace-screen',
  shower: 'enclosures-for-shower',
  canopies: 'glass-canopies-roof-skylight',
};

/** Town key (data object `TW`) -> URL slug under /glassworks-areas-we-serve/ (matches the old site). */
export const AREA_SLUGS: Record<string, string> = {
  chatham: 'chatham-glass-and-mirror-installation',
  hyannis: 'hyannis',
  barnstable: 'barnstable-glass-window-replacement',
  yarmouth: 'yarmouth-glass-shower-enclosure',
  dennis: 'dennis-glass-door-installation',
  bourne: 'bourne-door-installation',
  sandwich: 'sandwich-glass-company',
  falmouth: 'falmouth-commercial-glass-repairs',
  mashpee: 'mashpee-glass-replacement',
  brewster: 'brewster-commercial-glass-installers',
  harwich: 'harwich-mirror-installation',
  orleans: 'orleans-glass-door-installation',
  eastham: 'eastham-glass-installer',
  wellfleet: 'wellfleet-glass-window-repair',
  truro: 'truro-glass-contractors',
  provincetown: 'provincetown-glass-repair-service',
  boston: 'boston-glass-installation-services',
  providence: 'providence-glass-repair',
  rhodeisland: 'rhode-island-mirror-replacement',
};
