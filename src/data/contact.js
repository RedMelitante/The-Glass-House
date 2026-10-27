// Page data and copy, ported from design/Contact.dc.html.
export const contactDefaults = {"mobile":false,"brand":"#1E5873"};

export function contactData(props = {}, state = {}) {
  const self = { props: { ...contactDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    return { brand: brand, m: m };
  }.call(self);
}
