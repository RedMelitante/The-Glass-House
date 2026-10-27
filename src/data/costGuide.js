// Page data and copy, ported from design/CostGuide.dc.html.
export const costGuideDefaults = {"mobile":false,"brand":"#1E5873"};

export function costGuideData(props = {}, state = {}) {
  const self = { props: { ...costGuideDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    const rows = [
      { name: 'Custom shower enclosures', sub: 'Inline door & panel, corner showers', href: 'Service.dc.html', img: '/images/frameless-glass-shower-with-marble-look-tile-and-built-in.webp', range: '$1,200 – $3,500+', unit: 'Per project', inc: 'Depends on size, glass thickness, hardware finish and structural cuts' },
      { name: 'Custom mirrors', sub: 'Vanity, gym or accent mirrors', href: 'Product.dc.html', img: '/images/off-cape-2.webp', range: '$300 – $1,500+', unit: 'Per project', inc: 'Depends on dimensions, edge work and cut-outs for outlets or fixtures' },
      { name: 'Glass wine cellars & partitions', sub: 'Custom wine displays, wall partitions', href: 'Service-WineCellars.dc.html', img: '/images/custom-glass-shower-doors-enclosures-the-complete-guide.webp', range: '$3,500 – $9,000+', unit: 'Per project', inc: 'Depends on sealing, door hardware, glass thickness and clarity upgrades' },
      { name: 'Glass stair & pool railings', sub: 'Architectural railing systems', href: 'Service-Railings.dc.html', img: '/images/glass-storefront-installation-guide-for-cape-cod-businesses.webp', range: '$250 – $600+', unit: 'Per linear foot', inc: 'Depends on mounting style, linear footage and reinforcement' }
    ];
    return {
      brand: brand,
      m: m,
      stripMin: m ? '140px' : '220px',
      stripH: m ? '120px' : '180px',
      strip: [{ img: '/images/off-cape.webp', alt: 'Frameless glass shower' }, { img: '/images/off-cape-2.webp', alt: 'Wall-to-wall vanity mirror' }, { img: '/images/glass-storefront-installation-guide-for-cape-cod-businesses.webp', alt: 'Glass stair railing' }, { img: '/images/wine-cellar-glass-enclosure-ideas-and-costs.webp', alt: 'Glass island tabletop' }],
      rows: rows.map((r, i) => ({ ...r, bg: i % 2 ? '#F9FBFB' : '#FFFFFF' })),
      factors: [
        { n: '01', title: 'Glass thickness & type', text: 'Heavier 3/8″ or 1/2″ glass costs more than 1/4″. Low-iron clarity glass and easy-clean protective coatings add a modest upfront cost.' },
        { n: '02', title: 'Layout, dimensions & custom shapes', text: 'Larger pieces cost more. Sloped ceilings, bench cut-outs and out-of-square walls add fabrication time.' },
        { n: '03', title: 'Hardware material & finish', text: 'Premium finishes like matte black, brushed gold and satin brass cost more than chrome or brushed nickel.' },
        { n: '04', title: 'Installation & structural needs', text: 'Some installs, such as stair and pool railings, need structural blocking in walls or floors to meet building code.' }
      ],
      examples: [
        { title: 'Frameless shower enclosure', town: 'Shower enclosures', spec: 'Heavy tempered glass, minimal hinges and clamps, cut to an out-of-square opening.', price: '$1,200 – $3,500+', tone: '#9FB4BE', img: '/images/structural-blocking-for-curbless-walk-in-showers-wet-rooms.webp' },
        { title: 'Modern glass wine cellar', town: 'Wine cellars & partitions', spec: 'Sealed glass walls and door with locking hardware to show off the collection.', price: '$3,500 – $9,000+', tone: '#B3C6CD', img: '/images/custom-glass-shower-doors-enclosures-the-complete-guide.webp' },
        { title: 'Architectural glass railing', town: 'Stair & pool railings', spec: 'Code-compliant tempered glass panels with structural mounting.', price: '$250 – $600+ / ft', tone: '#C2D0D4', img: '/images/architectural-glass-railing.webp' }
      ]
    };
  }.call(self);
}
