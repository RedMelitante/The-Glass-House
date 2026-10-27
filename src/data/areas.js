// Page data and copy, ported from design/Areas.dc.html.
export const areasDefaults = {"mobile":false,"brand":"#1E5873"};

export function areasData(props = {}, state = {}) {
  const self = { props: { ...areasDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    const AH = {'Chatham': 'Area.dc.html', 'Hyannis': 'Area-Hyannis.dc.html', 'Barnstable': 'Area-Barnstable.dc.html', 'Yarmouth': 'Area-Yarmouth.dc.html', 'Dennis': 'Area-Dennis.dc.html', 'Bourne': 'Area-Bourne.dc.html', 'Sandwich': 'Area-Sandwich.dc.html', 'Falmouth': 'Area-Falmouth.dc.html', 'Mashpee': 'Area-Mashpee.dc.html', 'Brewster': 'Area-Brewster.dc.html', 'Harwich': 'Area-Harwich.dc.html', 'Orleans': 'Area-Orleans.dc.html', 'Eastham': 'Area-Eastham.dc.html', 'Wellfleet': 'Area-Wellfleet.dc.html', 'Truro': 'Area-Truro.dc.html', 'Provincetown': 'Area-Provincetown.dc.html', 'Boston': 'Area-Boston.dc.html', 'Rhode Island': 'Area-RhodeIsland.dc.html', 'Providence': 'Area-Providence.dc.html', 'Providence, RI': 'Area-Providence.dc.html'};
    const t = (names) => names.map((n) => ({ name: n, href: AH[n] || '#' }));
    return {
      brand: brand,
      m: m,
      townMin: m ? '140px' : '200px',
      pins: [
        { name: 'Bourne', x: '10%', y: '34%', dot: '#0F2433' },
        { name: 'Sandwich', x: '22%', y: '28%', dot: '#0F2433' },
        { name: 'Falmouth', x: '12%', y: '70%', dot: '#0F2433' },
        { name: 'Hyannis (shop)', x: '38%', y: '58%', dot: brand },
        { name: 'Dennis', x: '52%', y: '48%', dot: '#0F2433' },
        { name: 'Chatham', x: '66%', y: '68%', dot: '#0F2433' },
        { name: 'Orleans', x: '70%', y: '42%', dot: '#0F2433' },
        { name: 'Wellfleet', x: '74%', y: '20%', dot: '#0F2433' },
        { name: 'Provincetown', x: '58%', y: '8%', dot: '#0F2433' }
      ],
      regions: [
        { name: 'Upper Cape', note: 'Closest to the bridges.', towns: t(['Bourne', 'Sandwich', 'Falmouth', 'Mashpee']) },
        { name: 'Mid Cape', note: 'Our home base in Hyannis.', towns: t(['Hyannis', 'Barnstable', 'Yarmouth', 'Dennis']) },
        { name: 'Lower Cape', note: 'Harbors, beaches and historic homes.', towns: t(['Brewster', 'Harwich', 'Chatham', 'Orleans']) },
        { name: 'Outer Cape', note: 'All the way to the tip.', towns: t(['Eastham', 'Wellfleet', 'Truro', 'Provincetown']) },
        { name: 'Beyond the Cape', note: 'Select projects off-Cape.', towns: t(['Boston', 'Providence', 'Rhode Island']) }
      ]
    };
  }.call(self);
}
