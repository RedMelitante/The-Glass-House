// Page data and copy, ported from design/Services.dc.html.
export const servicesDefaults = {"mobile":false,"brand":"#1E5873"};

export function servicesData(props = {}, state = {}) {
  const self = { props: { ...servicesDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    const all = [
      { name: 'Shower Enclosures', href: 'Service.dc.html', r: 1, c: 0, blurb: 'Frameless, semi-frameless and sliding glass, cut to fit.', d: 'M4 3h16v18H4zM12 3v18M14.5 11v2', tone: '#C9D9DE' },
      { name: 'Custom Mirrors', href: 'Service-Mirrors.dc.html', r: 1, c: 1, blurb: 'Vanity, gym and feature-wall mirrors with custom edges.', d: 'M12 3c3.9 0 7 3.6 7 8s-3.1 8-7 8-7-3.6-7-8 3.1-8 7-8zM9 21h6M9.5 8.5l3-2.5', tone: '#D3E0E4' },
      { name: 'Glass Railings', href: 'Service-Railings.dc.html', r: 1, c: 1, blurb: 'Stair, deck and pool railings that keep the view.', d: 'M3 6h18M3 6v13M21 6v13M3 19h18M9 6v13M15 6v13', tone: '#BFD0D6' },
      { name: 'Glass Storefronts', href: 'Service-Storefronts.dc.html', r: 0, c: 1, blurb: 'Storefront glass and framing for shops and offices.', d: 'M3 9l2-5h14l2 5M4 9v11h16V9M9 20v-6h6v6M3 9h18', tone: '#B3C6CD' },
      { name: 'Front Entrances', href: 'Service-Entrances.dc.html', r: 1, c: 1, blurb: 'All-glass entrances, doors and hardware.', d: 'M6 21V3h12v18M3 21h18M14.5 12h.5', tone: '#C2D3D9' },
      { name: 'Wall Partitions', href: 'Service-Partitions.dc.html', r: 1, c: 1, blurb: 'Glass walls that share light between spaces.', d: 'M3 4h18M3 20h18M7 4v16M12 4v16M17 4v16', tone: '#CCDADF' },
      { name: 'Glass Windows', href: 'Service-Windows.dc.html', r: 1, c: 1, blurb: 'Replacement panes, insulated units, custom shapes.', d: 'M4 4h16v16H4zM12 4v16M4 12h16', tone: '#D8E3E6' },
      { name: 'Wine Cellars', href: 'Service-WineCellars.dc.html', r: 1, c: 1, blurb: 'Glass walls and doors to show off the collection.', d: 'M10 2h4M10.5 2v5L8 10v11h8V10l-2.5-3V2M8 14h8', tone: '#BCCED4' },
      { name: 'Glass Countertops', href: 'Service-Countertops.dc.html', r: 1, c: 1, blurb: 'Tabletops and counter surfaces, cut to fit.', d: 'M2 9h20v3H2zM4 12v9M20 12v9', tone: '#D0DDE1' },
      { name: 'Canopies & Skylights', href: 'Service-Canopies.dc.html', r: 1, c: 1, blurb: 'Overhead glass that brings in daylight.', d: 'M3 10l9-6 9 6zM6 10v10M18 10v10M3 20h18', tone: '#C5D5DA' },
      { name: 'Glass Shelves', href: 'Service-Shelves.dc.html', r: 1, c: 1, blurb: 'Floating shelves for niches, bars and displays.', d: 'M3 7h18M3 13h18M3 19h18M5 7v2M19 7v2', tone: '#DCE7EB' },
      { name: 'Fireplace Screens', href: 'Service-Fireplace.dc.html', r: 1, c: 0, blurb: 'Clean glass fronts for fireplaces.', d: 'M3 4h18v17H3zM6 21V9h12v12M12 18c-1.7 0-3-1.2-3-2.8 0-1.8 3-3 3-5 1 1.4 3 2.9 3 5 0 1.6-1.3 2.8-3 2.8z', tone: '#C9CFD1' }
    ];
    const imgs = {'Shower Enclosures': '/images/off-cape.webp', 'Custom Mirrors': '/images/off-cape-2.webp', 'Glass Railings': '/images/glass-storefront-installation-guide-for-cape-cod-businesses.webp', 'Glass Storefronts': '/images/rhodeisland-area-hero.webp', 'Wall Partitions': '/images/glass-stair-partition.webp', 'Glass Windows': '/images/custom-glass-sunroom-with-skylights-overlooking-a-cape-cod.webp', 'Wine Cellars': '/images/wall-to-wall-vanity-mirror.webp', 'Glass Countertops': '/images/wine-cellar-glass-enclosure-ideas-and-costs.webp', 'Canopies & Skylights': '/images/falmouth-area-hero.webp', 'Front Entrances': '/images/glass-storefronts-the-secret-to-modern-inviting-retail.webp', 'Glass Shelves': '/images/bent-glass-screen-marble-fireplace.webp', 'Fireplace Screens': '/images/sandwich-area-hero.webp'};
    const tab = st.tab || 'All';
    const list = all.filter((s) => tab === 'All' || (tab === 'Residential' ? s.r : s.c));
    return {
      brand: brand,
      m: m,
      d: !m,
      cardMin: m ? '150px' : '260px',
      photoH: m ? '110px' : '170px',
      count: list.length,
      tabs: ['All', 'Residential', 'Commercial'].map((t) => ({
        label: t, on: tab === t,
        style: tab === t ? 'background: #0F2433; color: #FFFFFF' : 'background: #FFFFFF; color: #0F2433',
        pick: () => this.setState({ tab: t })
      })),
      services: list.map((s) => ({ ...s, img: imgs[s.name] || '', hasImg: !!imgs[s.name], tags: s.r && s.c ? 'Residential · Commercial' : (s.r ? 'Residential' : 'Commercial') })),
      steps: [
        { n: '01', title: 'Free consultation', text: 'We visit, listen and talk through options.' },
        { n: '02', title: 'Precise measure', text: 'Exact on-site measurements for a tight fit.' },
        { n: '03', title: 'Custom fabrication', text: 'Glass cut, edged and tempered to spec.' },
        { n: '04', title: 'Professional install', text: 'Our own team installs and cleans up.' }
      ]
    };
  }.call(self);
}
