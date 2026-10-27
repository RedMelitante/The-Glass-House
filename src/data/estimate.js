// Page data and copy, ported from design/Estimate.dc.html.
export const estimateDefaults = {"mobile":false,"sent":false,"brand":"#1E5873"};

export function estimateData(props = {}, state = {}) {
  const self = { props: { ...estimateDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    const sent = st.sent !== undefined ? st.sent : !!this.props.sent;
    const kind = st.kind || 'Residential';
    const picked = st.svc || { 'Shower enclosure': true };
    const onStyle = 'background: #0F2433; color: #FFFFFF; border: 1px solid #0F2433';
    const offStyle = 'background: #FFFFFF; color: #0F2433; border: 1px solid #B7C6CD';
    const services = ['Shower enclosure', 'Custom mirror', 'Glass railing', 'Storefront', 'Entrance / door', 'Window', 'Wine cellar', 'Countertop', 'Canopy / skylight', 'Wall partition', 'Glass shelves', 'Fireplace screen', 'Not sure yet'];
    return {
      brand: brand,
      m: m,
      sent: sent,
      notSent: !sent,
      submit: (e) => { if (e && e.preventDefault) e.preventDefault(); this.setState({ sent: true }); },
      reset: () => this.setState({ sent: false }),
      kinds: ['Residential', 'Commercial'].map((k) => ({
        label: k,
        on: kind === k,
        style: kind === k ? 'background: #0F2433; color: #FFFFFF' : 'background: #FFFFFF; color: #0F2433',
        pick: () => this.setState({ kind: k })
      })),
      svc: services.map((s) => ({
        label: s,
        on: !!picked[s],
        style: picked[s] ? onStyle : offStyle,
        pick: () => { const next = Object.assign({}, picked); next[s] = !picked[s]; this.setState({ svc: next }); }
      })),
      towns: ['Hyannis', 'Barnstable', 'Bourne', 'Brewster', 'Chatham', 'Dennis', 'Eastham', 'Falmouth', 'Harwich', 'Mashpee', 'Orleans', 'Provincetown', 'Sandwich', 'Truro', 'Wellfleet', 'Yarmouth', 'Boston area', 'Providence, RI', 'Rhode Island (other)'],
      uploads: [
        { name: 'bathroom-1.jpg', tone: '#B3C6CD', img: '/images/shower-curb-height-ledges-wall-anchoring-what-homeowners.webp' },
        { name: 'shower-opening.heic', tone: '#C2D0D4', img: '/images/neo-angle-corner-shower-enclosures-maximizing-small.webp' }
      ]
    };
  }.call(self);
}
