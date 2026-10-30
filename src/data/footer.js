// Page data and copy, ported from design/Footer.dc.html.
export const footerDefaults = {"mobile":false};

export function footerData(props = {}, state = {}) {
  const self = { props: { ...footerDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const so = !!st.svc, po = !!st.prod;
    return {
      servicesOpen: so, productsOpen: po,
      servicesIcon: so ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6', productsIcon: po ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6',
      toggleServices: () => this.setState({ svc: !so }),
      toggleProducts: () => this.setState({ prod: !po }),
      svcList: [{ name: 'Shower Enclosures', href: 'Service.dc.html' }, { name: 'Custom Mirrors', href: 'Service-Mirrors.dc.html' }, { name: 'Glass Railings', href: 'Service-Railings.dc.html' }, { name: 'Glass Storefronts', href: 'Service-Storefronts.dc.html' }, { name: 'Front Entrances', href: 'Service-Entrances.dc.html' }, { name: 'Wall Partitions', href: 'Service-Partitions.dc.html' }, { name: 'Glass Windows', href: 'Service-Windows.dc.html' }, { name: 'Wine Cellars', href: 'Service-WineCellars.dc.html' }, { name: 'Glass Countertops', href: 'Service-Countertops.dc.html' }, { name: 'Canopies & Skylights', href: 'Service-Canopies.dc.html' }, { name: 'Glass Shelves', href: 'Service-Shelves.dc.html' }, { name: 'Fireplace Screens', href: 'Service-Fireplace.dc.html' }],
      prodList: [{ name: 'Custom Glass Mirrors', href: 'Product.dc.html' }, { name: 'Custom Glass Shelves', href: 'Product-Shelves.dc.html' }, { name: 'Custom Glass Railings', href: 'Product-Railings.dc.html' }, { name: 'Custom Glass Windows', href: 'Product-Windows.dc.html' }, { name: 'Custom Glass Storefronts', href: 'Product-Storefronts.dc.html' }, { name: 'Custom Glass Wine Cellars', href: 'Product-WineCellars.dc.html' }, { name: 'Custom Glass Countertops', href: 'Product-Countertops.dc.html' }, { name: 'Fireplace Screens', href: 'Product-Fireplace.dc.html' }, { name: 'Shower Enclosures', href: 'Product-Shower.dc.html' }, { name: 'Canopies & Skylights', href: 'Product-Canopies.dc.html' }],
      bottomPad: this.props.mobile ? '104px' : '32px',
      towns: [{ name: 'Hyannis', href: 'Area-Hyannis.dc.html' }, { name: 'Barnstable', href: 'Area-Barnstable.dc.html' }, { name: 'Boston', href: 'Area-Boston.dc.html' }, { name: 'Bourne', href: 'Area-Bourne.dc.html' }, { name: 'Brewster', href: 'Area-Brewster.dc.html' }, { name: 'Centerville', href: 'Area-Centerville.dc.html' }, { name: 'Chatham', href: 'Area.dc.html' }, { name: 'Cotuit', href: 'Area-Cotuit.dc.html' }, { name: 'Dennis', href: 'Area-Dennis.dc.html' }, { name: 'Eastham', href: 'Area-Eastham.dc.html' }, { name: 'Falmouth', href: 'Area-Falmouth.dc.html' }, { name: 'Harwich', href: 'Area-Harwich.dc.html' }, { name: 'Mashpee', href: 'Area-Mashpee.dc.html' }, { name: 'Orleans', href: 'Area-Orleans.dc.html' }, { name: 'Plymouth', href: 'Area-Plymouth.dc.html' }, { name: 'Portsmouth, RI', href: 'Area-Portsmouth.dc.html' }, { name: 'Providence, RI', href: 'Area-Providence.dc.html' }, { name: 'Provincetown', href: 'Area-Provincetown.dc.html' }, { name: 'Rhode Island', href: 'Area-RhodeIsland.dc.html' }, { name: 'Sandwich', href: 'Area-Sandwich.dc.html' }, { name: 'Truro', href: 'Area-Truro.dc.html' }, { name: 'Wellfleet', href: 'Area-Wellfleet.dc.html' }, { name: 'Yarmouth', href: 'Area-Yarmouth.dc.html' }]
    };
  }.call(self);
}
