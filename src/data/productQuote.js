// Page data and copy, ported from design/ProductQuote.dc.html.
export const productQuoteDefaults = {"mobile":false,"brand":"#1E5873"};

export function productQuoteData(props = {}, state = {}) {
  const self = { props: { ...productQuoteDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    const on = 'background: #0F2433; color: #FFFFFF; border: 1px solid #0F2433';
    const tileOn = 'background: #0F2433; color: #FFFFFF; border: 2px solid #0F2433';
    const tileOff = 'background: #FFFFFF; color: #0F2433; border: 2px solid #D6E0E4';
    const off = 'background: #FFFFFF; color: #0F2433; border: 1px solid #B7C6CD';
    const group = (key, opts, def) => {
      const cur = st[key] || def;
      return { cur: cur, items: opts.map((o) => {
        const label = typeof o === 'string' ? o : o.label;
        return Object.assign({}, typeof o === 'string' ? {} : o, { label: label, on: cur === label, style: cur === label ? on : off, pick: () => { const s = {}; s[key] = label; this.setState(s); } });
      }) };
    };
    const pimg = {'Mirror': '/images/off-cape-2.webp', 'Shelves': '/images/why-a-glass-canopy-is-the-perfect-blend-of-style-and.webp', 'Railing panels': '/images/glass-storefront-installation-guide-for-cape-cod-businesses.webp', 'Window glass': '/images/glass-repair-in-providence-ri.webp', 'Storefront glass': '/images/providence-area-hero.webp', 'Wine cellar': '/images/custom-glass-shower-doors-enclosures-the-complete-guide.webp', 'Countertop': '/images/wine-cellar-glass-enclosure-ideas-and-costs.webp', 'Fireplace screen': '/images/sandwich-area-hero.webp', 'Shower glass': '/images/off-cape.webp', 'Canopy / skylight': '/images/falmouth-area-hero.webp'};
    const p = group('product', Object.keys(pimg).map((k) => ({ label: k, img: pimg[k] })), 'Mirror');
    const g = group('glass', ['Clear', 'Low-iron', 'Acid-etched', 'Tinted', 'Antique mirror'], 'Clear');
    const e = group('edge', ['Flat polished', 'Pencil polished', 'Beveled', 'Seamed', 'Not sure'], 'Beveled');
    const f = group('fulfil', [{ label: 'Installed', note: 'We measure & install' }, { label: 'Pickup', note: 'Hyannis shop' }, { label: 'Delivery', note: 'Ask about your area' }], 'Installed');
    return {
      brand: brand,
      m: m,
      products: p.items.map((o) => ({ ...o, style: o.on ? tileOn : tileOff })),
      tileMin: m ? '130px' : '150px',
      tileH: m ? '72px' : '88px',
      glass: g.items,
      edges: e.items,
      fulfil: f.items,
      sum: { img: pimg[p.cur], product: 'Custom ' + p.cur.toLowerCase(), glass: g.cur, edge: e.cur, fulfil: f.cur }
    };
  }.call(self);
}
