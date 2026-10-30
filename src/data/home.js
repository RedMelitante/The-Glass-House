// Page data and copy, ported from design/Home.dc.html.
export const homeDefaults = {"mobile":false,"brand":"#1E5873"};

export function homeData(props = {}, state = {}) {
  const self = { props: { ...homeDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    const cat = st.cat || 'All';
    const filters = ['All', 'Showers', 'Mirrors', 'Railings', 'Storefronts', 'Wine cellars'].map((label) => ({
      label: label,
      on: cat === label,
      style: cat === label ? 'background: #0F2433; color: #FFFFFF; border: 1px solid #0F2433' : 'background: #FFFFFF; color: #0F2433; border: 1px solid #D6E0E4',
      pick: () => this.setState({ cat: label })
    }));
    const allGallery = [
      { title: 'Frameless glass railing, home office', cat: 'Railings', town: 'Cape Cod', photo: '', tone: '#9FB4BE', img: '/images/rain-glass-bypass-rolling-hardware.webp' },
      { title: 'Wall-to-wall vanity mirror', cat: 'Mirrors', town: 'Cape Cod', photo: '', tone: '#C2D0D4', img: '/images/glass-railing-home-office.webp' },
      { title: 'Storefront glass with standoffs', cat: 'Storefronts', town: 'Commercial', photo: '', tone: '#A9BCC4', img: '/images/rhodeisland-area-hero.webp' },
      { title: 'Frameless corner shower, brass hinges', cat: 'Showers', town: 'Cape Cod', photo: '', tone: '#ACC0C7', img: '/images/why-wall-anchoring-matters-how-much-weight-can-a-wall-stud.webp' },
      { title: 'Glass wine room & bar top', cat: 'Wine cellars', town: 'Commercial', photo: '', tone: '#B9C9CF', img: '/images/framed-vanity-mirror.webp' },
      { title: 'Sunroom glass & skylights', cat: 'Windows', town: 'Cape Cod', photo: '', tone: '#B3C6CD', img: '/images/custom-glass-sunroom-with-skylights-overlooking-a-cape-cod.webp' }
    ].map((g) => ({ ...g, hasImg: !!g.img, noImg: !g.img }));
    let gallery = cat === 'All' ? allGallery : allGallery.filter((g) => g.cat === cat);
    if (m && cat === 'All') gallery = gallery.slice(0, 4);
    return {
      brand: brand,
      m: m,
      d: !m,
      townMin: m ? '150px' : '260px',
      filters: filters,
      gallery: gallery,
      trusted: [
        { name: 'Planet Fitness', img: '/images/planet-fitness.webp' },
        { name: 'E.B. Norris & Son Builders', img: '/images/pincus-construction-2.webp' },
        { name: 'Pincus Construction', img: '/images/pincus-construction.webp' },
        { name: 'Alexandra Construction', img: '/images/alexandra-construction.webp' },
        { name: 'ALine Architecture', img: '/images/aline-architecture.webp' },
        { name: 'Brazilian Grill', img: '/images/brazilian-grill.webp' },
        { name: 'World Tech Auto Center', img: '/images/world-tech-auto-center.webp' }
      ],
      services: [
        { name: 'Shower Enclosures', href: 'Service.dc.html', blurb: 'Frameless, semi-frameless and sliding glass, cut to fit your bath.', d: 'M4 3h16v18H4zM12 3v18M14.5 11v2' },
        { name: 'Custom Mirrors', href: 'Service-Mirrors.dc.html', blurb: 'Vanity, wall and gym mirrors with polished, beveled or antiqued edges.', d: 'M12 3c3.9 0 7 3.6 7 8s-3.1 8-7 8-7-3.6-7-8 3.1-8 7-8zM9 21h6M9.5 8.5l3-2.5' },
        { name: 'Glass Railings', href: 'Service-Railings.dc.html', blurb: 'Stair, deck and pool railings that keep the view open.', d: 'M3 6h18M3 6v13M21 6v13M3 19h18M9 6v13M15 6v13' },
        { name: 'Storefronts', href: 'Service-Storefronts.dc.html', blurb: 'Commercial storefront glass and framing for shops and offices.', d: 'M3 9l2-5h14l2 5M4 9v11h16V9M9 20v-6h6v6M3 9h18' },
        { name: 'Entrances & Doors', href: 'Service-Entrances.dc.html', blurb: 'All-glass entrances, interior doors and hardware.', d: 'M6 21V3h12v18M3 21h18M14.5 12h.5' },
        { name: 'Glass Windows', href: 'Service-Windows.dc.html', blurb: 'Replacement panes, insulated units and custom shapes.', d: 'M4 4h16v16H4zM12 4v16M4 12h16' },
        { name: 'Wine Cellars', href: 'Service-WineCellars.dc.html', blurb: 'Glass walls and doors that put the collection on display.', d: 'M10 2h4M10.5 2v5L8 10v11h8V10l-2.5-3V2M8 14h8' },
        { name: 'Wall Partitions', href: 'Service-Partitions.dc.html', blurb: 'Light-sharing glass walls for offices and open homes.', d: 'M3 4h18M3 20h18M7 4v16M12 4v16M17 4v16' },
        { name: 'Canopies & Skylights', href: 'Service-Canopies.dc.html', blurb: 'Overhead glass that brings daylight in and keeps weather out.', d: 'M3 10l9-6 9 6zM6 10v10M18 10v10M3 20h18' }
      ],
      whys: [
        { title: 'Licensed & insured', text: 'Fully licensed and insured for residential and commercial work.', d: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4' },
        { title: 'Honest, upfront pricing', text: 'A clear written quote before any glass is ordered.', d: 'M3 12V3h9l9 9-9 9zM7.5 7.5h.01' },
        { title: 'Free design consultations', text: 'On-site visit, measure and options review at no cost.', d: 'M3 21l6-6M14 4l6 6-11 11H3v-6zM12 6l6 6' },
        { title: 'Fast turnaround', text: 'Local fabrication keeps lead times short. Typically 3–4 weeks to fabricate, 1–2 days to install.', d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2' }
      ],
      towns: [
        { name: 'Hyannis', region: 'Home base', img: '/images/barnstable.webp' },
        { name: 'Barnstable', region: 'Mid Cape', img: '/images/bourne.webp' },
        { name: 'Bourne', region: 'Upper Cape', img: '/images/boston-2.webp' },
        { name: 'Boston', region: 'Beyond the Cape', img: '/images/boston.webp' }
      ].map((t) => ({ ...t, show: true, href: ({'Chatham': 'Area.dc.html', 'Hyannis': 'Area-Hyannis.dc.html', 'Barnstable': 'Area-Barnstable.dc.html', 'Yarmouth': 'Area-Yarmouth.dc.html', 'Dennis': 'Area-Dennis.dc.html', 'Bourne': 'Area-Bourne.dc.html', 'Sandwich': 'Area-Sandwich.dc.html', 'Falmouth': 'Area-Falmouth.dc.html', 'Mashpee': 'Area-Mashpee.dc.html', 'Brewster': 'Area-Brewster.dc.html', 'Harwich': 'Area-Harwich.dc.html', 'Orleans': 'Area-Orleans.dc.html', 'Eastham': 'Area-Eastham.dc.html', 'Wellfleet': 'Area-Wellfleet.dc.html', 'Truro': 'Area-Truro.dc.html', 'Provincetown': 'Area-Provincetown.dc.html', 'Boston': 'Area-Boston.dc.html', 'Rhode Island': 'Area-RhodeIsland.dc.html', 'Providence': 'Area-Providence.dc.html', 'Providence, RI': 'Area-Providence.dc.html', 'Cotuit': 'Area-Cotuit.dc.html', 'Centerville': 'Area-Centerville.dc.html', 'Plymouth': 'Area-Plymouth.dc.html', 'Portsmouth, RI': 'Area-Portsmouth.dc.html'})[t.name] || 'Areas.dc.html' })),
      townImgH: m ? '120px' : '220px',
      moreTowns: ['Chatham', 'Falmouth', 'Mashpee', 'Sandwich', 'Orleans', 'Provincetown', 'Brewster', 'Dennis', 'Eastham', 'Harwich', 'Truro', 'Wellfleet', 'Yarmouth', 'Centerville', 'Cotuit', 'Plymouth', 'Providence', 'Portsmouth, RI', 'Rhode Island'].map((n) => ({ name: n, href: ({'Chatham': 'Area.dc.html', 'Hyannis': 'Area-Hyannis.dc.html', 'Barnstable': 'Area-Barnstable.dc.html', 'Yarmouth': 'Area-Yarmouth.dc.html', 'Dennis': 'Area-Dennis.dc.html', 'Bourne': 'Area-Bourne.dc.html', 'Sandwich': 'Area-Sandwich.dc.html', 'Falmouth': 'Area-Falmouth.dc.html', 'Mashpee': 'Area-Mashpee.dc.html', 'Brewster': 'Area-Brewster.dc.html', 'Harwich': 'Area-Harwich.dc.html', 'Orleans': 'Area-Orleans.dc.html', 'Eastham': 'Area-Eastham.dc.html', 'Wellfleet': 'Area-Wellfleet.dc.html', 'Truro': 'Area-Truro.dc.html', 'Provincetown': 'Area-Provincetown.dc.html', 'Boston': 'Area-Boston.dc.html', 'Rhode Island': 'Area-RhodeIsland.dc.html', 'Providence': 'Area-Providence.dc.html', 'Providence, RI': 'Area-Providence.dc.html', 'Cotuit': 'Area-Cotuit.dc.html', 'Centerville': 'Area-Centerville.dc.html', 'Plymouth': 'Area-Plymouth.dc.html', 'Portsmouth, RI': 'Area-Portsmouth.dc.html'})[n] || 'Areas.dc.html' })),
      reviews: [
        { quote: 'The Glass House did a very fine job on my stand-in shower project in Cotuit MA…', name: 'Jason', meta: 'Renaissance Restoration', initial: 'J' },
        { quote: 'We have used the Glass House on several of our bathroom remodeling projects…', name: 'Constantin Tabla', meta: 'Google review', initial: 'C' },
        { quote: 'This Cape based glass company has an awesome staff, for they leverage great designers…', name: 'Paul Paolillo', meta: 'Google review', initial: 'P' }
      ],
      posts: [
        { title: "Wet Room vs. Traditional Shower: Which Fits Your Bathroom?", cat: "Shower Enclosure", date: "Sep 18, 2026", read: "4 min read", photo: "Wet Room vs. Traditional Shower: Which Fits Your Bathroom?", tone: '#D3E0E4', img: '/images/frameless-glass-shower-with-marble-look-tile-and-built-in.webp' },
        { title: "Linear Drain vs. Point Drain: Which Is Right for Your Wet Room", cat: "Shower Enclosure", date: "Sep 16, 2026", read: "4 min read", photo: "Linear Drain vs. Point Drain: Which Is Right for Your Wet Room", tone: '#D3E0E4', img: '/images/off-cape.webp' },
        { title: "What Does a Wet Room Add to a Remodel Budget?", cat: "Shower Enclosure", date: "Sep 14, 2026", read: "4 min read", photo: "What Does a Wet Room Add to a Remodel Budget?", tone: '#D3E0E4', img: '/images/what-does-a-wet-room-add-to-a-remodel-budget.webp' }
      ]
    };
  }.call(self);
}
