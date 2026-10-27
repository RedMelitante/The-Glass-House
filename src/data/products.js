// Page data and copy, ported from design/Products.dc.html.
export const productsDefaults = {"mobile":false,"brand":"#1E5873"};

export function productsData(props = {}, state = {}) {
  const self = { props: { ...productsDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    return {
      brand: brand,
      m: m,
      d: !m,
      cardMin: m ? '150px' : '260px',
      photoH: m ? '120px' : '200px',
      products: [
        { name: 'Custom Glass Mirrors', href: 'Product.dc.html', chips: ['Beveled', 'Antique', 'Back-lit'], tone: '#D3E0E4' },
        { name: 'Custom Glass Shelves', href: 'Product-Shelves.dc.html', chips: ['Floating', 'Low-iron', 'Brackets'], tone: '#DCE7EB' },
        { name: 'Custom Glass Railings', href: 'Product-Railings.dc.html', chips: ['Top-mount', 'Standoffs', 'Channel'], tone: '#BFD0D6' },
        { name: 'Custom Glass Windows', href: 'Product-Windows.dc.html', chips: ['Insulated', 'Tempered', 'Shapes'], tone: '#C9D9DE' },
        { name: 'Custom Glass Storefronts', href: 'Product-Storefronts.dc.html', chips: ['Aluminum', 'Doors', 'Tempered'], tone: '#B3C6CD' },
        { name: 'Custom Glass Wine Cellars', href: 'Product-WineCellars.dc.html', chips: ['Walls', 'Doors', 'Low-iron'], tone: '#BCCED4' },
        { name: 'Custom Glass Countertops', href: 'Product-Countertops.dc.html', chips: ['Back-painted', 'Frosted', 'Clear'], tone: '#D0DDE1' },
        { name: 'Fireplace Screens', href: 'Product-Fireplace.dc.html', chips: ['Ceramic', 'Framed', 'Bi-fold'], tone: '#C9CFD1' },
        { name: 'Shower Enclosures', href: 'Product-Shower.dc.html', chips: ['Frameless', 'Sliding', 'Steam'], tone: '#C2D3D9' },
        { name: 'Canopies & Skylights', href: 'Product-Canopies.dc.html', chips: ['Laminated', 'Standoffs', 'Low-E'], tone: '#C5D5DA' }
      ].map((p) => { const im = {'Custom Glass Mirrors': '/images/framed-or-frameless-how-to-choose-the-right-glass-windows.webp', 'Custom Glass Railings': '/images/tub-enclosure-with-brass-hinges.webp', 'Custom Glass Windows': '/images/glass-repair-in-providence-ri.webp', 'Custom Glass Storefronts': '/images/rhodeisland-area-hero.webp', 'Custom Glass Wine Cellars': '/images/custom-glass-shower-doors-enclosures-the-complete-guide.webp', 'Custom Glass Countertops': '/images/frameless-shower-white-subway-tile.webp', 'Shower Enclosures': '/images/low-iron-glass-hard-water-stains-maintenance-differences.webp', 'Canopies & Skylights': '/images/falmouth-area-hero.webp', 'Custom Glass Shelves': '/images/why-a-glass-canopy-is-the-perfect-blend-of-style-and.webp', 'Fireplace Screens': '/images/truro-area-hero.webp'}[p.name]; return { ...p, img: im || '', hasImg: !!im }; }),
      glass: [
        { name: 'Clear', fill: '#E3EEEA' },
        { name: 'Low-iron', fill: '#F4F9FA' },
        { name: 'Acid-etched', fill: '#E8ECEE' },
        { name: 'Gray tint', fill: '#C7CCCF' },
        { name: 'Bronze tint', fill: '#C9B9A3' }
      ]
    };
  }.call(self);
}
