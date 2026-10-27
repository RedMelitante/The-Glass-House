// Page data and copy, ported from design/Blog.dc.html.
export const blogDefaults = {"mobile":false,"brand":"#1E5873"};

export function blogData(props = {}, state = {}) {
  const self = { props: { ...blogDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    const tocOpen = !!st.toc;
    const items = [
      { id: 'decision-framework-room-size-budget-desi', label: 'Decision Framework: Room Size, Budget & Design Goals' },
      { id: 'resale-value-comparison-in-different-mar', label: 'Resale Value Comparison in Different Markets' },
      { id: 'aging-in-place-accessibility-considerati', label: 'Aging-in-Place & Accessibility Considerations' },
      { id: 'mold-ventilation-long-term-moisture-mana', label: 'Mold, Ventilation & Long-Term Moisture Management' },
      { id: 'who-should-choose-each-configuration', label: 'Who Should Choose Each Configuration' }
    ];
    const activeId = st.active || 'decision-framework-room-size-budget-desi';
    return {
      brand: brand,
      m: m,
      d: !m,
      tocOpen: tocOpen,
      tocIcon: tocOpen ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6',
      toggleToc: () => this.setState({ toc: !tocOpen }),
      toc: items.map((t) => ({
        ...t,
        style: t.id === activeId ? 'color: #0F2433; font-weight: 600; border-left: 2px solid ' + brand : 'color: #4A5C67; border-left: 2px solid transparent'
      })),
      related: [
        { title: 'Linear Drain vs. Point Drain: Which Is Right for Your Wet Room', cat: 'Shower Enclosure', read: '4 min read', tone: '#DCE7EB', img: '/images/what-does-a-wet-room-add-to-a-remodel-budget.webp' },
        { title: 'What Does a Wet Room Add to a Remodel Budget?', cat: 'Shower Enclosure', read: '4 min read', tone: '#DCE7EB', img: '/images/wet-room-waterproofing-membrane-systems-explained.webp' },
        { title: 'Wet Room Waterproofing: Membrane Systems Explained', cat: 'Shower Enclosure', read: '5 min read', tone: '#DCE7EB', img: '/images/shower-enclosure.webp' }
      ]
    };
  }.call(self);
}
