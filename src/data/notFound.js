// Page data and copy, ported from design/NotFound.dc.html.
export const notFoundDefaults = {"mobile":false,"brand":"#1E5873"};

export function notFoundData(props = {}, state = {}) {
  const self = { props: { ...notFoundDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    return { brand: brand, m: m };
  }.call(self);
}
