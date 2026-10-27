// Page data and copy, ported from design/ThankYou.dc.html.
export const thankYouDefaults = {"mobile":false,"brand":"#1E5873"};

export function thankYouData(props = {}, state = {}) {
  const self = { props: { ...thankYouDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    return { brand: brand, m: m };
  }.call(self);
}
