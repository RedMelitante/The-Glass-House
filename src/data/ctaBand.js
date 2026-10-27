// Page data and copy, ported from design/CtaBand.dc.html.
export const ctaBandDefaults = {"heading":"Tell us about your project.","sub":"Free estimates across Cape Cod, Southeastern MA and Rhode Island."};

export function ctaBandData(props = {}, state = {}) {
  const self = { props: { ...ctaBandDefaults, ...props }, state, setState() {} };
  return function () {
    return {
      heading: this.props.heading ?? 'Tell us about your project.',
      sub: this.props.sub ?? 'Free estimates across Cape Cod, Southeastern MA and Rhode Island.'
    };
  }.call(self);
}
