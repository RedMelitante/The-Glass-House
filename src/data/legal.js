// Page data and copy, ported from design/Legal.dc.html.
export const legalDefaults = {"mobile":false,"brand":"#1E5873"};

export function legalData(props = {}, state = {}) {
  const self = { props: { ...legalDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    const blk = (b) => Array.isArray(b) ? { isList: true, isP: false, isSub: false, items: b } : (b.charAt(0) === '#' ? { isSub: true, isP: false, isList: false, text: b.slice(1) } : { isP: true, isSub: false, isList: false, text: b });
    const mk = (pairs) => pairs.map((p, i) => ({ id: 's' + i, h: p[0], blocks: (Array.isArray(p[1]) && p[1].length && typeof p[1][0] !== 'string' ? p[1] : (typeof p[1] === 'string' ? [p[1]] : p[1])).map(blk) }));
    const L = (...items) => [items];
    const docs = {
      privacy: { label: 'Privacy Policy', title: 'Privacy Policy', updated: 'March 6, 2026', draft: false, sections: mk([
        ['Introduction', ['The Glass House respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use and safeguard information when you visit our website or communicate with us, including by SMS/text message.', 'By using our website, you agree to the practices described in this policy.']],
        ['Information we collect', ['#Information you provide', ...L('Name', 'Email address', 'Phone number', 'Project details or inquiry information', 'Any other information you choose to submit'), '#Automatically collected information', ...L('IP address', 'Browser type', 'Device type', 'Pages visited', 'Time spent on our site'), 'We may use cookies and analytics tools to improve website performance.']],
        ['How we use your information', ['We use the information we collect to:', ...L('Respond to your inquiries', 'Provide estimates and consultations', 'Schedule and confirm appointments', 'Send service updates', 'Improve website functionality', 'Maintain security and prevent fraud'), 'We do not sell or rent your personal information.']],
        ['SMS communications & messaging policy', ['If you voluntarily provide your mobile number and consent to receive text messages, we may send you texts about:', ...L('Your inquiries', 'Appointment confirmations and reminders', 'Consultation scheduling', 'Service updates', 'Customer care'), 'Message frequency varies. Message and data rates may apply from your carrier.', 'You can opt out at any time by replying STOP. For help, reply HELP or contact us by email or through our website.', 'We do not sell, rent or share mobile numbers or SMS consent data with third parties for marketing purposes. SMS opt-in data is not shared with third parties.']],
        ['Sharing of information', ['We may share information only with:', ...L('Website hosting providers', 'Analytics providers', 'Technology service providers', 'Legal authorities, when required by law'), 'All third parties are required to safeguard your data.']],
        ['Data retention', ['We keep personal information only as long as needed to fulfill the purposes it was collected for, meet legal obligations or resolve disputes. You may request deletion of your information at any time.']],
        ['Your rights', ['You may request to:', ...L('Access the personal information we hold about you', 'Correct your information', 'Delete your information', 'Opt out of communications'), 'To make a request, email ornyb@theghglass.com.']],
        ['Security', ['We use reasonable administrative, technical and physical safeguards to protect your information.']],
        ['Updates to this policy', ['We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised date.']],
        ['Contact us', ['The Glass House', 'Email: ornyb@theghglass.com', 'Website: www.theghglass.com']]
      ]) },
      terms: { label: 'Terms & Conditions', title: 'Terms & Conditions', updated: 'November 14, 2025', draft: false, sections: mk([
        ['SMS terms & conditions', ['These terms apply to text messaging services provided by The Glass House.']],
        ['Program description', ['By providing your mobile number and opting in, you agree to receive text messages from The Glass House about:', ...L('Customer inquiries', 'Appointment confirmations', 'Consultation reminders', 'Service updates', 'Customer care support'), 'This messaging service is not used for unsolicited marketing.']],
        ['Message frequency', ['Message frequency varies depending on your interaction with our services.']],
        ['Message & data rates', ['Message and data rates may apply under your mobile carrier plan.']],
        ['Opt-out instructions', ['You can opt out at any time by replying STOP. After you send STOP, you will receive a confirmation message, and no further messages will be sent unless you re-subscribe.']],
        ['Help instructions', ['For help, reply HELP or contact us:', ...L('Email: ornyb@theghglass.com', 'Website: www.theghglass.com')]],
        ['Privacy Policy', ['Your information is handled under our Privacy Policy, available at theghglass.com/privacy-policy.']],
        ['Carrier disclaimer', ['Carriers are not liable for delayed or undelivered messages.']],
        ['Eligibility', ['You must be the authorized user of the mobile number you provide and be at least 18 years old, or have permission from a parent or guardian.']]
      ]) }
    };
    const cur = st.doc || 'privacy';
    return {
      brand: brand,
      m: m,
      d: !m,
      doc: docs[cur],
      tabs: Object.keys(docs).map((k) => ({ label: docs[k].label, on: cur === k, line: cur === k ? brand : 'transparent', color: cur === k ? '#0F2433' : '#4A5C67', pick: () => this.setState({ doc: k }) }))
    };
  }.call(self);
}
