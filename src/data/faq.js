// Page data and copy, ported from design/Faq.dc.html.
export const faqDefaults = {"mobile":false,"brand":"#1E5873"};

export function faqData(props = {}, state = {}) {
  const self = { props: { ...faqDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    const data = {
      'General': [
        ['What types of custom glass installations do you offer?', 'We offer a wide range of custom glass solutions, including shower enclosures, mirrors, doors, railings, tabletops, shelving, storefronts, skylights, canopies and partitions. Each project is tailored to your design.'],
        ['How long does the installation process take?', 'Fabrication usually takes about three to four weeks after measurements and design approval, and installation typically takes one to two days. Timelines vary by project complexity.'],
        ['Do you provide free estimates?', 'Yes. We offer free, no-obligation estimates, including a site visit, measurements and a discussion of your design preferences.']
      ],
      'Custom shower enclosures': [
        ['What types of shower enclosures do you install?', 'We install frameless, semi-frameless and framed shower enclosures, with glass options including clear, low-iron and tempered glass.'],
        ['How do I maintain and clean my glass shower enclosure?', 'Use a mild, non-abrasive glass cleaner, and squeegee the glass after each use to prevent water spots and soap scum.'],
        ['Can you create custom designs for shower enclosures?', 'Yes. We tailor every shower enclosure to your vision and your bathroom’s decor.']
      ],
      'Custom mirrors': [
        ['Do you offer custom-cut mirrors?', 'Yes. We cut mirrors to any custom size or shape for bathrooms, gyms and living areas.'],
        ['Can mirrors be framed or beveled?', 'Yes. Mirrors can have framed or beveled edges, with a variety of frame styles and finishes to choose from.'],
        ['How do you install large mirrors safely?', 'Our team uses specialized tools and techniques so large mirrors are properly anchored and safe.']
      ],
      'Installation & maintenance': [
        ['How do you ensure accurate measurements for custom glass installations?', 'We use precise measuring tools and thorough site inspections so every installation fits exactly.'],
        ['What if my glass gets damaged or breaks?', 'We offer repair and replacement services. We’ll assess the damage and recommend the best solution.']
      ],
      'Contact & scheduling': [
        ['How do I schedule an appointment for a consultation or installation?', 'Call us at (508) 685-2770, email ornyb@theghglass.com or use the contact form on our website, and we’ll promptly arrange a convenient time.'],
        ['What areas do you serve?', 'We serve Cape Cod and the surrounding areas of Massachusetts. If you’re not sure whether we cover your location, just contact us.'],
        ['Can you provide references or examples of your previous work?', 'Yes. Our portfolio and customer testimonials are available on request, and you can browse recent work in our Project Gallery.']
      ]
    };
    const names = Object.keys(data);
    const cat = st.cat || names[0];
    const openIdx = st.open !== undefined ? st.open : 0;
    const on = 'background: #0F2433; color: #FFFFFF; border: 1px solid #0F2433';
    const off = 'background: #FFFFFF; color: #0F2433; border: 1px solid #D6E0E4';
    return {
      brand: brand,
      m: m,
      catDir: m ? 'row' : 'column',
      catName: cat,
      cats: names.map((n) => ({ label: n, count: data[n].length, on: cat === n, style: cat === n ? on : off, pick: () => this.setState({ cat: n, open: 0 }) })),
      faqs: data[cat].map((qa, i) => ({
        q: qa[0], a: qa[1], open: openIdx === i,
        icon: openIdx === i ? 'M5 12h14' : 'M12 5v14M5 12h14',
        toggle: () => this.setState({ open: openIdx === i ? -1 : i })
      }))
    };
  }.call(self);
}
