// Page data and copy, ported from design/About.dc.html.
export const aboutDefaults = {"mobile":false,"brand":"#1E5873"};

export function aboutData(props = {}, state = {}) {
  const self = { props: { ...aboutDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    return {
      brand: brand,
      m: m,
work: [
        { img: '/images/falmouth-area-hero.webp', cap: 'Glass canopy & walkway', alt: 'Glass canopy and glass walkway at a shingle-style home', pos: '50% 50%' },
        { img: '/images/waterfront-room-with-sliding-glass-and-a-frameless-glass.webp', cap: 'Waterfront slider & railing', alt: 'Floor-to-ceiling sliding glass and frameless railing overlooking the water', pos: '60% 50%' },
        { img: '/images/mashpee-area-hero.webp', cap: 'Mirrored panels & glass cabinets', alt: 'White kitchen with antique mirror panels and glass-front cabinets', pos: '60% 50%' },
        { img: '/images/barnstable-area-hero.webp', cap: 'Glass conservatory', alt: 'Bright conservatory with a glass roof and sliding glass walls', pos: '50% 50%' },
        { img: '/images/glass-stair-partition.webp', cap: 'Glass stair partition', alt: 'Black-framed glass partition doors beside a glass stair railing', pos: '50% 50%' },
        { img: '/images/custom-glass-sunroom-with-skylights-overlooking-a-cape-cod.webp', cap: 'Sunroom & skylights', alt: 'Sunroom with skylights overlooking a marsh', pos: '50% 50%' }
      ].slice(0, m ? 5 : 6).map((w, i) => ({ ...w, span: i === 0 ? (m ? 'grid-column: span 2' : 'grid-column: span 2; grid-row: span 2') : '' })),
      mosaicCols: m ? 2 : 4,
      mosaicRow: m ? '160px' : '260px',
      heroRatio: m ? '4 / 3' : '21 / 8',
      teamMin: m ? '150px' : '240px',
      timeline: [
        { year: '1995', text: 'The Glass House opens as a family-owned glass and mirror shop on Cape Cod.' },
        { year: '2001', text: 'Orny Beltrame begins his career in custom glass, now 25+ years of hands-on experience.' },
        { year: '2025', text: '30 years in business, still family-owned and locally operated in Hyannis.' },
        { year: 'Today', text: '1,000+ projects across Cape Cod, Southeastern Massachusetts and Rhode Island.' }
      ],
      values: [
        { title: 'Licensed & insured', text: 'Fully covered for residential and commercial work.', d: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4' },
        { title: 'Honest pricing', text: 'Clear written quotes before anything is ordered.', d: 'M3 12V3h9l9 9-9 9zM7.5 7.5h.01' },
        { title: 'Free design help', text: 'On-site consultations at no cost.', d: 'M3 21l6-6M14 4l6 6-11 11H3v-6zM12 6l6 6' },
        { title: 'Fast turnaround', text: 'Local fabrication keeps lead times short.', d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2' }
      ],
      team: [
        { name: 'Orny Beltrame', role: 'Project & Design Consultant · 25+ years', tone: '#B7C9D0', img: '/images/orny-beltrame-2.webp' }
      ].map((t) => ({ ...t, hasImg: !!t.img, noImg: !t.img })),
      trusted: [
        { name: 'Planet Fitness', img: '/images/planet-fitness.webp' },
        { name: 'E.B. Norris & Son Builders', img: '/images/pincus-construction-2.webp' },
        { name: 'Pincus Construction', img: '/images/pincus-construction.webp' },
        { name: 'Alexandra Construction', img: '/images/alexandra-construction.webp' },
        { name: 'ALine Architecture', img: '/images/aline-architecture.webp' },
        { name: 'Brazilian Grill', img: '/images/brazilian-grill.webp' },
        { name: 'World Tech Auto Center', img: '/images/world-tech-auto-center.webp' }
      ]
    };
  }.call(self);
}
