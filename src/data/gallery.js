// Page data and copy, ported from design/Gallery.dc.html.
export const galleryDefaults = {"mobile":false,"openItem":-1,"brand":"#1E5873"};

export function galleryData(props = {}, state = {}) {
  const self = { props: { ...galleryDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    const all = [
      { title: 'Sliding glass & frameless railing', cat: 'Railings', town: 'Cape Cod waterfront', h: 224, tone: '#C9D9DE', img: '/images/orleans-area-hero.webp' },
      { title: 'Shower fit around a knee wall', cat: 'Showers', town: 'Centerville, MA', h: 460, tone: '#C9D9DE', img: '/images/shower-door-configurations-compared-the-4-types-of-shower.webp' },
      { title: 'Marble bath, frameless shower & mirror', cat: 'Showers', town: 'Cape Cod', h: 491, tone: '#C9D9DE', img: '/images/home-gym-mirror-wall.webp' },
      { title: 'Home gym mirror wall', cat: 'Mirrors', town: 'Cape Cod', h: 277, tone: '#C9D9DE', img: '/images/glass-shelves-for-cabinets-a-stylish-way-to-display-and.webp' },
      { title: 'Double-door tub enclosure, satin brass', cat: 'Tub enclosures', town: 'Hyannis, MA', h: 460, tone: '#C9D9DE', img: '/images/wet-room-waterproofing-membrane-systems-explained.webp' },
      { title: 'Glass wine wall, private dining room', cat: 'Wine cellars', town: 'Commercial', h: 460, tone: '#C9D9DE', img: '/images/custom-glass-shower-doors-enclosures-the-complete-guide.webp' },
      { title: 'Pivoting chrome-frame vanity mirror', cat: 'Mirrors', town: 'Cape Cod', h: 491, tone: '#C9D9DE', img: '/images/black-grid-bypass-shower.webp' },
      { title: 'Black grid bypass shower', cat: 'Showers', town: 'Portsmouth, RI', h: 460, tone: '#C9D9DE', img: '/images/low-iron-glass-hard-water-stains-maintenance-differences.webp' },
      { title: 'Frameless glass stair railing', cat: 'Railings', town: 'Hyannis, MA', h: 460, tone: '#C9D9DE', img: '/images/glass-storefront-installation-guide-for-cape-cod-businesses.webp' },
      { title: 'Frameless corner shower, brass hinges', cat: 'Showers', town: 'Cape Cod', h: 341, tone: '#C9D9DE', img: '/images/why-wall-anchoring-matters-how-much-weight-can-a-wall-stud.webp' },
      { title: 'Frameless shower with built-in bench', cat: 'Showers', town: 'Cape Cod', h: 460, tone: '#C9D9DE', img: '/images/structural-blocking-for-curbless-walk-in-showers-wet-rooms.webp' },
      { title: 'Beveled frame mirror, powder room', cat: 'Mirrors', town: 'Cape Cod', h: 491, tone: '#C9D9DE', img: '/images/framed-or-frameless-how-to-choose-the-right-glass-windows.webp' },
      { title: 'Storefront glass with standoffs', cat: 'Storefronts', town: 'Commercial', h: 223, tone: '#C9D9DE', img: '/images/rhodeisland-area-hero.webp' },
      { title: 'Glass tabletop on kitchen island', cat: 'Countertops & tabletops', town: 'Plymouth, MA', h: 460, tone: '#C9D9DE', img: '/images/wine-cellar-glass-enclosure-ideas-and-costs.webp' },
      { title: 'Glass tabletop, blue kitchen island', cat: 'Countertops & tabletops', town: 'Plymouth, MA', h: 460, tone: '#C9D9DE', img: '/images/frameless-shower-white-subway-tile.webp' },
      { title: 'Frameless shower, white subway tile', cat: 'Showers', town: 'Cape Cod', h: 460, tone: '#C9D9DE', img: '/images/off-cape.webp' },
      { title: 'Floor-to-ceiling mirror wall', cat: 'Mirrors', town: 'Cape Cod', h: 277, tone: '#C9D9DE', img: '/images/harwich-area-hero.webp' },
      { title: 'Bypass shower, textured rain glass', cat: 'Showers', town: 'Dennis, MA', h: 460, tone: '#C9D9DE', img: '/images/what-does-a-wet-room-add-to-a-remodel-budget.webp' },
      { title: 'Marble shower with bench & lit niche', cat: 'Showers', town: 'Cape Cod', h: 460, tone: '#C9D9DE', img: '/images/shower-enclosure.webp' },
      { title: 'Glass wine display with pull handles', cat: 'Wine cellars', town: 'Cape Cod', h: 460, tone: '#C9D9DE', img: '/images/wall-to-wall-vanity-mirror.webp' },
      { title: 'Wall-to-wall vanity mirror', cat: 'Mirrors', town: 'Cape Cod', h: 491, tone: '#C9D9DE', img: '/images/off-cape-2.webp' },
      { title: 'Waterfront room with glass railing', cat: 'Railings', town: 'Cape Cod waterfront', h: 460, tone: '#C9D9DE', img: '/images/waterfront-room-with-sliding-glass-and-a-frameless-glass.webp' },
      { title: 'Home gym mirror wall, second view', cat: 'Mirrors', town: 'Cape Cod', h: 277, tone: '#C9D9DE', img: '/images/frameless-shower-grey-subway-tile.webp' },
      { title: 'Frameless shower, grey subway tile', cat: 'Showers', town: 'Cape Cod', h: 460, tone: '#C9D9DE', img: '/images/shower-curb-height-ledges-wall-anchoring-what-homeowners.webp' },
      { title: 'Glass canopy & walkway', cat: 'Canopies & skylights', town: 'Cape Cod', h: 277, tone: '#C9D9DE', img: '/images/falmouth-area-hero.webp' },
      { title: 'Framed double-vanity mirrors', cat: 'Mirrors', town: 'Cape Cod', h: 491, tone: '#C9D9DE', img: '/images/black-grid-sliding-shower-door.webp' },
      { title: 'Black grid sliding shower door', cat: 'Showers', town: 'Portsmouth, RI', h: 460, tone: '#C9D9DE', img: '/images/semi-frameless-vs-framed-shower-doors-which-fits-your-cape.webp' },
      { title: 'Glass stair railing, before & after', cat: 'Railings', town: 'Hyannis, MA', h: 460, tone: '#C9D9DE', img: '/images/tub-enclosure-with-brass-hinges.webp' },
      { title: 'Tub enclosure with brass hinges', cat: 'Tub enclosures', town: 'Hyannis, MA', h: 460, tone: '#C9D9DE', img: '/images/antique-mirror-panels-kitchen.webp' },
      { title: 'Antique mirror panels, kitchen', cat: 'Mirrors', town: 'Cape Cod', h: 277, tone: '#C9D9DE', img: '/images/mashpee-area-hero.webp' },
      { title: 'Double-vanity mirror install', cat: 'Mirrors', town: 'Cape Cod', h: 277, tone: '#C9D9DE', img: '/images/knee-wall-shower-black-hardware.webp' },
      { title: 'Knee-wall shower, black hardware', cat: 'Showers', town: 'Centerville, MA', h: 460, tone: '#C9D9DE', img: '/images/glass-wine-room-bar-top.webp' },
      { title: 'Glass wine room & bar top', cat: 'Wine cellars', town: 'Commercial', h: 245, tone: '#C9D9DE', img: '/images/framed-vanity-mirror.webp' },
      { title: 'Framed vanity mirror', cat: 'Mirrors', town: 'Cape Cod', h: 491, tone: '#C9D9DE', img: '/images/frameless-shower-door-grey-tile.webp' },
      { title: 'Frameless shower door, grey tile', cat: 'Showers', town: 'Cape Cod', h: 460, tone: '#C9D9DE', img: '/images/neo-angle-corner-shower-enclosures-maximizing-small.webp' },
      { title: 'Frameless mirror over marble vanity', cat: 'Mirrors', town: 'Cape Cod', h: 257, tone: '#C9D9DE', img: '/images/glass-railing-home-office.webp' },
      { title: 'Glass railing, home office', cat: 'Railings', town: 'Cape Cod', h: 338, tone: '#C9D9DE', img: '/images/rain-glass-bypass-rolling-hardware.webp' },
      { title: 'Rain glass bypass, rolling hardware', cat: 'Showers', town: 'Dennis, MA', h: 460, tone: '#C9D9DE', img: '/images/why-cape-cod-shower-glass-needs-protective-coating-well.webp' },
      { title: 'Sunroom windows & skylights', cat: 'Windows & sunrooms', town: 'Cape Cod', h: 247, tone: '#C9D9DE', img: '/images/custom-glass-sunroom-with-skylights-overlooking-a-cape-cod.webp' },
      { title: 'Glass partition doors & stair railing', cat: 'Doors & partitions', town: 'Cape Cod', h: 368, tone: '#C9D9DE', img: '/images/glass-stair-partition.webp' },
      { title: 'Bench shower with window light', cat: 'Showers', town: 'Cape Cod', h: 460, tone: '#C9D9DE', img: '/images/shower-enclosure-2.webp' },
      { title: 'Waterfront kitchen, floor-to-ceiling glass', cat: 'Windows & sunrooms', town: 'Cape Cod waterfront', h: 338, tone: '#C9D9DE', img: '/images/glass-repair-in-providence-ri.webp' },
      { title: 'Marble shower enclosure, full bath', cat: 'Showers', town: 'Cape Cod', h: 460, tone: '#C9D9DE', img: '/images/frameless-glass-shower-with-marble-look-tile-and-built-in.webp' },
      { title: 'Glass entrance canopy, commercial building', cat: 'Canopies & skylights', town: 'Cape Cod', h: 460, tone: '#C9D9DE', img: '/images/wellfleet-area-hero.webp' },
      { title: 'Aluminum entrance doors & transoms', cat: 'Storefronts', town: 'Massachusetts', h: 470, tone: '#C9D9DE', img: '/images/glass-storefronts-the-secret-to-modern-inviting-retail.webp' },
      { title: 'Spider-fitting glass storefront', cat: 'Storefronts', town: 'Cape Cod', h: 277, tone: '#C9D9DE', img: '/images/providence-area-hero.webp' },
      { title: 'Double entrance doors, retail', cat: 'Storefronts', town: 'Massachusetts', h: 460, tone: '#C9D9DE', img: '/images/retail-storefront-windows.webp' },
      { title: 'Retail storefront windows', cat: 'Storefronts', town: 'Massachusetts', h: 460, tone: '#C9D9DE', img: '/images/install-mirrors-for-a-touch-of-luxury-in-your-home.webp' },
      { title: 'Point-supported glass wall & entry', cat: 'Storefronts', town: 'Cape Cod', h: 277, tone: '#C9D9DE', img: '/images/brewster-area-hero.webp' },
      { title: 'Floating glass bar shelves', cat: 'Shelves', town: 'Cape Cod', h: 460, tone: '#C9D9DE', img: '/images/why-a-glass-canopy-is-the-perfect-blend-of-style-and.webp' },
      { title: 'Sea-glass kitchen shelves', cat: 'Shelves', town: 'Cape Cod', h: 460, tone: '#C9D9DE', img: '/images/glass-bar-top-shelves.webp' },
      { title: 'Glass bar top & shelves', cat: 'Countertops & tabletops', town: 'Cape Cod', h: 460, tone: '#C9D9DE', img: '/images/lit-glass-bar-shelving.webp' },
      { title: 'Lit glass bar shelving', cat: 'Shelves', town: 'Cape Cod', h: 460, tone: '#C9D9DE', img: '/images/bent-glass-screen-marble-fireplace.webp' },
      { title: 'Bent-glass screen, marble fireplace', cat: 'Fireplaces', town: 'Boston', h: 480, tone: '#C9D9DE', img: '/images/truro-area-hero.webp' },
      { title: 'Corner glass fireplace screen', cat: 'Fireplaces', town: 'Massachusetts', h: 277, tone: '#C9D9DE', img: '/images/bourne-area-hero.webp' },
      { title: 'Glass fireplace surround, stone hearth', cat: 'Fireplaces', town: 'Massachusetts', h: 277, tone: '#C9D9DE', img: '/images/sandwich-area-hero.webp' },
      { title: 'Waterfront glass fire pit', cat: 'Fireplaces', town: 'Cape Cod', h: 480, tone: '#C9D9DE', img: '/images/chatham-area-hero.webp' },
      { title: 'Glass deck railing over a pool', cat: 'Railings', town: 'Massachusetts', h: 277, tone: '#C9D9DE', img: '/images/architectural-glass-railing.webp' },
      { title: 'Glass pool fence', cat: 'Railings', town: 'Massachusetts', h: 277, tone: '#C9D9DE', img: '/images/how-to-design-a-stunning-bathroom-with-a-walk-in-shower.webp' },
      { title: 'Standoff stair & landing railing', cat: 'Railings', town: 'Massachusetts', h: 480, tone: '#C9D9DE', img: '/images/eastham-area-hero.webp' },
      { title: 'Glass balcony railings', cat: 'Railings', town: 'Massachusetts', h: 277, tone: '#C9D9DE', img: '/images/off-cape-3.webp' },
      { title: 'Stair railing, black handrail', cat: 'Railings', town: 'Massachusetts', h: 480, tone: '#C9D9DE', img: '/images/rooftop-glass-railing.webp' },
      { title: 'Rooftop glass railing', cat: 'Railings', town: 'Massachusetts', h: 360, tone: '#C9D9DE', img: '/images/loft-railing-black-top-rail.webp' },
      { title: 'Loft railing, black top rail', cat: 'Railings', town: 'Massachusetts', h: 480, tone: '#C9D9DE', img: '/images/frameless-stair-railing.webp' },
      { title: 'Frameless stair railing', cat: 'Railings', town: 'Massachusetts', h: 460, tone: '#C9D9DE', img: '/images/terrace-glass-balustrade.webp' },
      { title: 'Terrace glass balustrade', cat: 'Railings', town: 'Massachusetts', h: 270, tone: '#C9D9DE', img: '/images/glass-office-partitions-loft.webp' },
      { title: 'Glass office partitions, loft', cat: 'Doors & partitions', town: 'Massachusetts', h: 277, tone: '#C9D9DE', img: '/images/boston-area-hero.webp' },
      { title: 'Glass lounge room, fitness club', cat: 'Doors & partitions', town: 'Massachusetts', h: 277, tone: '#C9D9DE', img: '/images/glass-dining-dividers-restaurant.webp' },
      { title: 'Glass dining dividers, restaurant', cat: 'Doors & partitions', town: 'Massachusetts', h: 277, tone: '#C9D9DE', img: '/images/glass-counter-partitions-retail-shop.webp' },
      { title: 'Glass counter partitions, retail shop', cat: 'Doors & partitions', town: 'Massachusetts', h: 277, tone: '#C9D9DE', img: '/images/glass-entry-vestibule-fitness-club.webp' },
      { title: 'Glass entry vestibule, fitness club', cat: 'Storefronts', town: 'Massachusetts', h: 460, tone: '#C9D9DE', img: '/images/glass-wine-room-lounge-bar.webp' },
      { title: 'Glass wine room & lounge bar', cat: 'Wine cellars', town: 'Massachusetts', h: 277, tone: '#C9D9DE', img: '/images/are-glass-kitchen-countertops-durable-here-s-what-you-need.webp' },
      { title: 'Art glass kitchen island', cat: 'Countertops & tabletops', town: 'Massachusetts', h: 277, tone: '#C9D9DE', img: '/images/textured-glass-bar-counter.webp' },
      { title: 'Textured glass bar counter', cat: 'Countertops & tabletops', town: 'Massachusetts', h: 277, tone: '#C9D9DE', img: '/images/thick-glass-island-top.webp' },
      { title: 'Thick glass island top', cat: 'Countertops & tabletops', town: 'Massachusetts', h: 277, tone: '#C9D9DE', img: '/images/glass-island-with-integrated-sink.webp' },
      { title: 'Glass island with integrated sink', cat: 'Countertops & tabletops', town: 'Massachusetts', h: 460, tone: '#C9D9DE', img: '/images/lit-glass-kitchen-island.webp' },
      { title: 'Lit glass kitchen island', cat: 'Countertops & tabletops', town: 'Massachusetts', h: 277, tone: '#C9D9DE', img: '/images/glass-for-stairs-railing-a-sleek-upgrade-for-modern-homes.webp' },
      { title: 'Curved glass breakfast bar', cat: 'Countertops & tabletops', town: 'Massachusetts', h: 460, tone: '#C9D9DE', img: '/images/art-glass-island-top.webp' },
      { title: 'Art glass island top', cat: 'Countertops & tabletops', town: 'Massachusetts', h: 360, tone: '#C9D9DE', img: '/images/countertops-tabletops.webp' }
    ];
    const cats = ['All', 'Showers', 'Tub enclosures', 'Mirrors', 'Railings', 'Windows & sunrooms', 'Countertops & tabletops', 'Storefronts', 'Wine cellars', 'Doors & partitions', 'Canopies & skylights', 'Shelves', 'Fireplaces'];
    const cat = st.cat || 'All';
    const list = cat === 'All' ? all : all.filter((p) => p.cat === cat);
    const open = st.open !== undefined ? st.open : (this.props.openItem ?? -1);
    const lbOpen = open >= 0 && open < list.length;
    const lb = lbOpen ? list[open] : list[0] || all[0];
    return {
      brand: brand,
      m: m,
      cols: m ? '2' : '3',
      filters: cats.map((c) => ({
        label: c,
        count: c === 'All' ? all.length : all.filter((p) => p.cat === c).length,
        on: cat === c,
        style: cat === c ? 'background: #0F2433; color: #FFFFFF; border: 1px solid #0F2433' : 'background: #FFFFFF; color: #0F2433; border: 1px solid #D6E0E4',
        pick: () => this.setState({ cat: c, open: -1 })
      })),
      items: list.map((p, i) => ({ ...p, h: (m ? Math.round(p.h * 0.62) : p.h) + 'px', open: () => this.setState({ open: i }) })),
      shownCount: list.length,
      totalCount: all.length,
      lbOpen: lbOpen,
      lb: lb,
      lbIndex: open + 1,
      lbCatDisplay: m ? 'none' : 'inline',
      closeLb: () => this.setState({ open: -1 }),
      prev: () => this.setState({ open: (open - 1 + list.length) % list.length }),
      next: () => this.setState({ open: (open + 1) % list.length })
    };
  }.call(self);
}
