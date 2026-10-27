// Page data and copy, ported from design/Header.dc.html.
export const headerDefaults = {"mobile":false,"open":"services","brand":"#1E5873"};

export function headerData(props = {}, state = {}) {
  const self = { props: { ...headerDefaults, ...props }, state, setState() {} };
  return function () {
    const brand = this.props.brand ?? '#1E5873';
    const mobile = !!this.props.mobile;
    const st = this.state || {};
    const open = st.open !== undefined ? st.open : (this.props.open ?? 'services');
    const sub = st.sub !== undefined ? st.sub : 'services';
    const set = (o) => this.setState(o);
    const menuOpen = mobile && open !== 'none';
    const servicesOpen = mobile ? (menuOpen && sub === 'services') : open === 'services';
    const productsOpen = mobile ? (menuOpen && sub === 'products') : open === 'products';
    const up = 'M6 15l6-6 6 6';
    const down = 'M6 9l6 6 6-6';
    return {
      brand: brand,
      mobile: mobile,
      desktop: !mobile,
      menuOpen: menuOpen,
      servicesOpen: servicesOpen,
      productsOpen: productsOpen,
      servicesLine: servicesOpen ? brand : 'transparent',
      productsLine: productsOpen ? brand : 'transparent',
      servicesChevron: servicesOpen ? up : down,
      productsChevron: productsOpen ? up : down,
      menuIcon: menuOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16',
      toggleMenu: () => set({ open: menuOpen ? 'none' : 'menu' }),
      toggleServices: () => mobile ? set({ sub: sub === 'services' ? '' : 'services' }) : set({ open: open === 'services' ? 'none' : 'services' }),
      hoverServices: () => { if (!mobile && open !== 'services') set({ open: 'services' }); },
      hoverProducts: () => { if (!mobile && open !== 'products') set({ open: 'products' }); },
      closeAll: () => { if (!mobile && open !== 'none') set({ open: 'none' }); },
      toggleProducts: () => mobile ? set({ sub: sub === 'products' ? '' : 'products' }) : set({ open: open === 'products' ? 'none' : 'products' }),
      services: [
        { name: 'Shower Enclosures', href: 'Service.dc.html', d: 'M4 3h16v18H4zM12 3v18M14.5 11v2' },
        { name: 'Custom Mirrors', href: 'Service-Mirrors.dc.html', d: 'M12 3c3.9 0 7 3.6 7 8s-3.1 8-7 8-7-3.6-7-8 3.1-8 7-8zM9 21h6M9.5 8.5l3-2.5' },
        { name: 'Glass Railings', href: 'Service-Railings.dc.html', d: 'M3 6h18M3 6v13M21 6v13M3 19h18M9 6v13M15 6v13' },
        { name: 'Storefronts', href: 'Service-Storefronts.dc.html', d: 'M3 9l2-5h14l2 5M4 9v11h16V9M9 20v-6h6v6M3 9h18' },
        { name: 'Entrances & Doors', href: 'Service-Entrances.dc.html', d: 'M6 21V3h12v18M3 21h18M14.5 12h.5' },
        { name: 'Glass Windows', href: 'Service-Windows.dc.html', d: 'M4 4h16v16H4zM12 4v16M4 12h16' },
        { name: 'Wine Cellars', href: 'Service-WineCellars.dc.html', d: 'M10 2h4M10.5 2v5L8 10v11h8V10l-2.5-3V2M8 14h8' },
        { name: 'Glass Countertops', href: 'Service-Countertops.dc.html', d: 'M2 9h20v3H2zM4 12v9M20 12v9' },
        { name: 'Canopies & Skylights', href: 'Service-Canopies.dc.html', d: 'M3 10l9-6 9 6zM6 10v10M18 10v10M3 20h18' },
        { name: 'Wall Partitions', href: 'Service-Partitions.dc.html', d: 'M3 4h18M3 20h18M7 4v16M12 4v16M17 4v16' },
        { name: 'Glass Shelves', href: 'Service-Shelves.dc.html', d: 'M3 7h18M3 13h18M3 19h18M5 7v2M19 7v2' },
        { name: 'Fireplace Screens', href: 'Service-Fireplace.dc.html', d: 'M3 4h18v17H3zM6 21V9h12v12M12 18c-1.7 0-3-1.2-3-2.8 0-1.8 3-3 3-5 1 1.4 3 2.9 3 5 0 1.6-1.3 2.8-3 2.8z' }
      ],
      products: [{ name: 'Custom Glass Mirrors', href: 'Product.dc.html', img: '/images/off-cape-2.webp' }, { name: 'Custom Glass Shelves', href: 'Product-Shelves.dc.html', img: '/images/why-a-glass-canopy-is-the-perfect-blend-of-style-and.webp' }, { name: 'Custom Glass Railings', href: 'Product-Railings.dc.html', img: '/images/glass-storefront-installation-guide-for-cape-cod-businesses.webp' }, { name: 'Custom Glass Windows', href: 'Product-Windows.dc.html', img: '/images/glass-repair-in-providence-ri.webp' }, { name: 'Custom Glass Storefronts', href: 'Product-Storefronts.dc.html', img: '/images/providence-area-hero.webp' }, { name: 'Custom Glass Wine Cellars', href: 'Product-WineCellars.dc.html', img: '/images/custom-glass-shower-doors-enclosures-the-complete-guide.webp' }, { name: 'Custom Glass Countertops', href: 'Product-Countertops.dc.html', img: '/images/wine-cellar-glass-enclosure-ideas-and-costs.webp' }, { name: 'Fireplace Screens', href: 'Product-Fireplace.dc.html', img: '/images/sandwich-area-hero.webp' }, { name: 'Shower Enclosures', href: 'Product-Shower.dc.html', img: '/images/off-cape.webp' }, { name: 'Canopies & Skylights', href: 'Product-Canopies.dc.html', img: '/images/falmouth-area-hero.webp' }]
    };
  }.call(self);
}
