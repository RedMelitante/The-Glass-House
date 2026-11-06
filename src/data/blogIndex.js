// Page data and copy, ported from design/BlogIndex.dc.html.
export const blogIndexDefaults = {"mobile":false,"brand":"#1E5873"};

export function blogIndexData(props = {}, state = {}) {
  const self = { props: { ...blogIndexDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    const all = [
      { title: "Linear Drain vs. Point Drain: Which Is Right for Your Wet Room", cat: "Shower Enclosure", date: "Sep 16, 2026", read: "4 min read", tone: '#D3E0E4', img: '/images/frameless-hinged.webp' },
      { title: "What Does a Wet Room Add to a Remodel Budget?", cat: "Shower Enclosure", date: "Sep 14, 2026", read: "4 min read", tone: '#D3E0E4', img: '/images/sliding-bypass.webp' },
      { title: "Wet Room Waterproofing: Membrane Systems Explained", cat: "Shower Enclosure", date: "Sep 11, 2026", read: "5 min read", tone: '#D3E0E4', img: '/images/bench-corner-seat.webp' },
      { title: "Structural Blocking for Curbless Walk-in Showers & Wet Rooms Glass Hardware", cat: "Shower Enclosure", date: "Sep 9, 2026", read: "4 min read", tone: '#D3E0E4', img: '/images/marble-shower-lit-niche.webp' },
      { title: "Does Low-Iron Glass Cost More? A Real Price Breakdown", cat: "Shower Enclosure", date: "Sep 7, 2026", read: "5 min read", tone: '#D3E0E4', img: '/images/black-grid-bypass-shower.webp' },
      { title: "Low-Iron Glass & Hard Water Stains: Maintenance Differences", cat: "Shower Enclosure", date: "Sep 4, 2026", read: "4 min read", tone: '#D3E0E4', img: '/images/tub-enclosure.webp' },
      { title: "Tinted, Bronze & Gray Glass: When Iron Content Doesn't Matter", cat: "Shower Enclosure", date: "Sep 1, 2026", read: "4 min read", tone: '#D3E0E4', img: '/images/shower-curb-height-ledges-wall-anchoring-what-homeowners.webp' },
      { title: "Shower Curb Height, Ledges & Wall Anchoring: What Homeowners Should Know", cat: "Shower Enclosure", date: "Aug 24, 2026", read: "5 min read", tone: '#D3E0E4', img: '/images/fit-around-a-knee-wall.webp' },
      { title: "Shower Door Configurations Compared: The 4 Types of Shower Doors", cat: "Shower Enclosure", date: "Aug 21, 2026", read: "4 min read", tone: '#D3E0E4', img: '/images/corner-shower-brass-hinges.webp' },
      { title: "Why Wall Anchoring Matters: How Much Weight Can a Wall Stud Hold?", cat: "Shower Enclosure", date: "Aug 19, 2026", read: "4 min read", tone: '#D3E0E4', img: '/images/neo-angle-corner-shower-enclosures-maximizing-small.webp' },
      { title: "Neo-Angle & Corner Shower Enclosures: Maximizing Small Bathrooms", cat: "Shower Enclosure", date: "Aug 17, 2026", read: "4 min read", tone: '#D3E0E4', img: '/images/black-grid-bypass-shower-2.webp' },
      { title: "Semi-Frameless vs. Framed Shower Doors: Which Fits Your Cape Cod Bathroom?", cat: "Shower Enclosure", date: "Aug 14, 2026", read: "4 min read", tone: '#D3E0E4', img: '/images/shower-enclosure.webp' },
      { title: "Does a Frameless Shower Door Increase Home Value? Bathroom Remodel ROI & What Buyers Prefer", cat: "Shower Enclosure", date: "Aug 12, 2026", read: "5 min read", tone: '#D3E0E4', img: '/images/why-cape-cod-shower-glass-needs-protective-coating-well.webp' },
      { title: "Why Cape Cod Shower Glass Needs Protective Coating: Well Water Hard Water", cat: "Shower Enclosure", date: "Aug 10, 2026", read: "5 min read", tone: '#D3E0E4', img: '/images/frameless-glass-shower-with-marble-look-tile-and-built-in.webp' },
      { title: "When to Schedule Your Shower Glass Measurement: A Bathroom Renovation Timeline Guide", cat: "Shower Enclosure", date: "Aug 7, 2026", read: "5 min read", tone: '#D3E0E4', img: '/images/frameless-hinged.webp' },
      { title: "Why Out-of-Plumb Walls Change Your Frameless Shower Glass Fabrication", cat: "Shower Enclosure", date: "Aug 5, 2026", read: "6 min read", tone: '#D3E0E4', img: '/images/sliding-bypass.webp' },
      { title: "3/8″ vs. 1/2″ Shower Door Glass Thickness: Which Do You Actually Need?", cat: "Shower Enclosure", date: "Aug 3, 2026", read: "5 min read", tone: '#D3E0E4', img: '/images/bench-corner-seat.webp' },
      { title: "Frameless Shower Door Hardware Finish Guide: Matte Black, Nickel, Chrome, Brass & Gunmetal Compared", cat: "Shower Enclosure", date: "Jul 31, 2026", read: "6 min read", tone: '#D3E0E4', img: '/images/marble-shower-lit-niche.webp' },
      { title: "Structural Blocking for Glass Hardware: A Builder's Reference", cat: "Shower Enclosure", date: "Jul 29, 2026", read: "5 min read", tone: '#D3E0E4', img: '/images/black-grid-bypass-shower.webp' },
      { title: "EnduroShield Shower Glass Coating: What It Does, How Long It Lasts", cat: "Shower Enclosure", date: "Jul 27, 2026", read: "6 min read", tone: '#D3E0E4', img: '/images/tub-enclosure.webp' },
      { title: "Low Iron Glass vs. Clear: A Visual & Technical Comparison", cat: "Shower Enclosure", date: "Jul 24, 2026", read: "6 min read", tone: '#D3E0E4', img: '/images/shower-curb-height-ledges-wall-anchoring-what-homeowners.webp' },
      { title: "Curbless Walk-In Showers & Wet Rooms: Planning Slope, Drainage & Fixed Glass Layout", cat: "Shower Enclosure", date: "Jul 22, 2026", read: "9 min read", tone: '#D3E0E4', img: '/images/fit-around-a-knee-wall.webp' },
      { title: "Glass Countertop vs. Quartz vs. Granite Comparison", cat: "Glass Countertops", date: "Jul 20, 2026", read: "3 min read", tone: '#D3E0E4', img: '/images/glass-tabletop-on-kitchen-island.webp' },
      { title: "Wine Cellar Glass Enclosure Ideas and Costs", cat: "Glass Wine Cellar", date: "Jul 17, 2026", read: "3 min read", tone: '#D3E0E4', img: '/images/glass-wine-walls.webp' },
      { title: "Custom Glass Shower Doors & Enclosures: The Complete Guide", cat: "Shower Enclosure", date: "Jul 14, 2026", read: "16 min read", tone: '#D3E0E4', img: '/images/corner-shower-brass-hinges.webp' },
      { title: "How to Maintain and Clean Glass Railings", cat: "Glass Railings", date: "Jul 13, 2026", read: "3 min read", tone: '#D3E0E4', img: '/images/frameless-glass-stair-railing.webp' },
      { title: "Glass Storefront Installation Guide for Cape Cod Businesses", cat: "Glass Storefronts", date: "Jul 6, 2026", read: "4 min read", tone: '#D3E0E4', img: '/images/providence-area-hero.webp' },
      { title: "Cost of Glass Shower Enclosures in Cape Cod", cat: "Shower Enclosure", date: "Jul 6, 2026", read: "4 min read", tone: '#D3E0E4', img: '/images/neo-angle-corner-shower-enclosures-maximizing-small.webp' },
      { title: "Why Glass Windows Crack in Cape Cod Weather", cat: "Glass Windows", date: "Apr 22, 2026", read: "6 min read", tone: '#D3E0E4', img: '/images/glass-repair-in-providence-ri.webp' },
      { title: "Glass Repair in Providence, RI", cat: "Custom Glass Installation", date: "Apr 22, 2026", read: "7 min read", tone: '#D3E0E4', img: '/images/glass-repair-in-providence-ri.webp' },
      { title: "Window Installation in Cape Cod: Energy-Efficient Glass Options", cat: "Glass Windows", date: "Apr 22, 2026", read: "8 min read", tone: '#D3E0E4', img: '/images/skylights-sunroom-roofs.webp' },
      { title: "Frameless Glass Shower Doors in Cape Cod", cat: "Shower Enclosure", date: "Apr 22, 2026", read: "7 min read", tone: '#D3E0E4', img: '/images/black-grid-bypass-shower-2.webp' },
      { title: "Glass Repair in Orleans, MA: Fast & Reliable Solutions", cat: "Custom Glass Installation", date: "Apr 22, 2026", read: "6 min read", tone: '#D3E0E4', img: '/images/picture-floor-to-ceiling.webp' },
      { title: "Best Glass Company in Brewster, MA for Custom Shower & Windows", cat: "Shower Enclosure", date: "Apr 22, 2026", read: "6 min read", tone: '#D3E0E4', img: '/images/shower-enclosure.webp' },
      { title: "Glass Installation in Chatham, MA: Costs, Options & What to Expect", cat: "Custom Glass Installation", date: "Apr 22, 2026", read: "6 min read", tone: '#D3E0E4', img: '/images/sliding-door-glass.webp' },
      { title: "From Cape Cod to Providence: Precision Glass Solutions for Every Space", cat: "Custom Glass Installation", date: "Mar 19, 2026", read: "3 min read", tone: '#D3E0E4', img: '/images/frameless-glass-stair-railing.webp' },
      { title: "Transforming Cape Cod: Why The Glass House is the Region’s Trusted Choice for Custom Glass and Mirrors", cat: "Custom Mirrors", date: "Mar 19, 2026", read: "3 min read", tone: '#D3E0E4', img: '/images/wall-to-wall-vanity-mirror-2.webp' },
      { title: "Elevate Your Space: The Ultimate Guide to Custom Glass Installation in Cape Cod and Beyond", cat: "Custom Glass Installation", date: "Mar 19, 2026", read: "3 min read", tone: '#D3E0E4', img: '/images/skylights-sunroom-roofs.webp' },
      { title: "Reflecting Excellence: Professional Custom Mirror Installation in Cape Cod and Southeastern Massachusetts", cat: "Custom Mirrors", date: "Mar 19, 2026", read: "3 min read", tone: '#D3E0E4', img: '/images/beveled-frame-mirror-powder-room.webp' },
      { title: "Framed or Frameless? How to Choose the Right Glass Windows for Your Home", cat: "Glass Windows", date: "Jul 30, 2025", read: "4 min read", tone: '#D3E0E4', img: '/images/picture-floor-to-ceiling.webp' },
      { title: "Why Glass Partitions Are the Smart Choice for Office Interiors", cat: "Glass Partitions", date: "Jul 30, 2025", read: "3 min read", tone: '#D3E0E4', img: '/images/boston-area-hero.webp' },
      { title: "Glass Doors: The Ultimate Upgrade for a Modern Front Entrance", cat: "Glass Entrances", date: "Jul 30, 2025", read: "4 min read", tone: '#D3E0E4', img: '/images/aluminum-entrance-doors-transoms.webp' },
      { title: "Glass Storefronts: The Secret to Modern, Inviting Retail Spaces", cat: "Glass Storefronts", date: "Jul 30, 2025", read: "4 min read", tone: '#D3E0E4', img: '/images/retail-storefront-windows.webp' },
      { title: "Install Mirrors for a Touch of Luxury in Your Home", cat: "Custom Mirrors", date: "Jul 30, 2025", read: "4 min read", tone: '#D3E0E4', img: '/images/gym-studio-walls.webp' },
      { title: "Glass Shelves for Cabinets: A Stylish Way to Display and Organize", cat: "Glass Shelves", date: "Jul 25, 2025", read: "4 min read", tone: '#D3E0E4', img: '/images/home-bars.webp' },
      { title: "Why a Glass Canopy Is the Perfect Blend of Style and Function for Modern Homes", cat: "Glass Canopies", date: "Jul 25, 2025", read: "4 min read", tone: '#D3E0E4', img: '/images/falmouth-area-hero.webp' },
      { title: "Glass Fireplace Screens: The Modern Upgrade Your Living Room Needs", cat: "Fireplace Screens", date: "Jul 25, 2025", read: "5 min read", tone: '#D3E0E4', img: '/images/sandwich-area-hero.webp' },
      { title: "The Art of Display: Styling Your Modern Glass Wine Cellar Like a Pro", cat: "Glass Wine Cellar", date: "Jul 25, 2025", read: "4 min read", tone: '#D3E0E4', img: '/images/glass-wine-room-lounge-bar.webp' },
      { title: "Are Glass Kitchen Countertops Durable? Here’s What You Need to Know", cat: "Glass Countertops", date: "Jul 25, 2025", read: "4 min read", tone: '#D3E0E4', img: '/images/lit-glass-kitchen-island.webp' },
      { title: "Glass for Stairs Railing: A Sleek Upgrade for Modern Homes", cat: "Glass Railings", date: "Jul 25, 2025", read: "4 min read", tone: '#D3E0E4', img: '/images/pool-patio.webp' },
      { title: "How to Design a Stunning Bathroom with a Walk-In Shower Enclosure", cat: "Shower Enclosure", date: "Jul 3, 2025", read: "4 min read", tone: '#D3E0E4', img: '/images/why-cape-cod-shower-glass-needs-protective-coating-well.webp' },
      { title: "Why a Corner Shower Enclosure Is the Smartest Choice for Modern Bathrooms", cat: "Shower Enclosure", date: "Jul 3, 2025", read: "3 min read", tone: '#D3E0E4', img: '/images/frameless-glass-shower-with-marble-look-tile-and-built-in.webp' },
      { title: "Benefits of Upgrading to Premium Shower Doors for Shower Enclosure", cat: "Shower Enclosure", date: "Jul 3, 2025", read: "4 min read", tone: '#D3E0E4', img: '/images/frameless-hinged.webp' },
      { title: "How Glass Shower Enclosures with Half Walls Can Transform Your Bathroom", cat: "Shower Enclosure", date: "Jul 3, 2025", read: "4 min read", tone: '#D3E0E4', img: '/images/sliding-bypass.webp' },
      { title: "How Frameless Shower Enclosures Can Boost Your Home’s Value", cat: "Shower Enclosure", date: "Jul 3, 2025", read: "4 min read", tone: '#D3E0E4', img: '/images/bench-corner-seat.webp' },
      { title: "Upgrade Your Bathroom with Stunning Glass Shower Enclosures", cat: "Shower Enclosure", date: "Jul 2, 2025", read: "7 min read", tone: '#D3E0E4', img: '/images/marble-shower-lit-niche.webp' },
      { title: "Why Choose Custom Glass Installation", cat: "Custom Glass Installation", date: "May 15, 2025", read: "3 min read", tone: '#D3E0E4', img: '/images/glass-stair-partition.webp' },
      { title: "The Ultimate Guide to Picking the Right Glass for Your Needs", cat: "Custom Glass Installation", date: "May 15, 2025", read: "3 min read", tone: '#D3E0E4', img: '/images/glass-repair-in-providence-ri.webp' },
      { title: "Custom Glass Myths Exposed: What You Really Need to Know", cat: "Custom Glass Installation", date: "May 15, 2025", read: "3 min read", tone: '#D3E0E4', img: '/images/picture-floor-to-ceiling.webp' },
      { title: "Types of Custom Glass and Their Uses", cat: "Guide", date: "May 15, 2025", read: "6 min read", tone: '#D3E0E4', img: '/images/sliding-door-glass.webp' },
      { title: "Everything You Need to Know About Custom Shower Enclosures", cat: "Shower Enclosure", date: "May 15, 2025", read: "3 min read", tone: '#D3E0E4', img: '/images/black-grid-bypass-shower.webp' },
      { title: "Holiday Ready: Transforming Homes with Custom Glass Installation", cat: "Custom Glass Installation", date: "May 15, 2025", read: "3 min read", tone: '#D3E0E4', img: '/images/frameless-glass-stair-railing.webp' },
      { title: "How Custom Glass Enhances Holiday Décor and Winter Warmth", cat: "Custom Glass Installation", date: "May 15, 2025", read: "3 min read", tone: '#D3E0E4', img: '/images/skylights-sunroom-roofs.webp' },
      { title: "New Year, New Views: Transform Your Space with Custom Glass", cat: "Custom Glass Installation", date: "May 15, 2025", read: "3 min read", tone: '#D3E0E4', img: '/images/glass-stair-partition.webp' },
      { title: "February Focus: Let the Light In!", cat: "Custom Glass Installation", date: "May 15, 2025", read: "3 min read", tone: '#D3E0E4', img: '/images/glass-repair-in-providence-ri.webp' },
      { title: "Spring Forward: How Custom Glass Enhances Natural Light", cat: "Custom Glass Installation", date: "May 15, 2025", read: "3 min read", tone: '#D3E0E4', img: '/images/picture-floor-to-ceiling.webp' },
      { title: "5 Surprising Ways Glass Can Make Your Home Feel Bigger and Bright", cat: "Custom Glass Installation", date: "May 15, 2025", read: "3 min read", tone: '#D3E0E4', img: '/images/sliding-door-glass.webp' },
      { title: "5 Ways Custom Glass Railings Can Elevate Your Deck This Spring", cat: "Custom Glass Installation", date: "May 15, 2025", read: "3 min read", tone: '#D3E0E4', img: '/images/frameless-glass-stair-railing.webp' }
    ];
    const names = ['All', 'Shower Enclosure', 'Custom Glass Installation', 'Glass Windows', 'Glass Storefronts', 'Custom Mirrors', 'Glass Railings'];
    const cat = st.cat || 'All';
    const on = 'background: #0F2433; color: #FFFFFF; border: 1px solid #0F2433';
    const off = 'background: #FFFFFF; color: #0F2433; border: 1px solid #D6E0E4';
    return {
      brand: brand,
      m: m,
      cats: names.map((n) => ({ label: n, on: cat === n, style: cat === n ? on : off, pick: () => this.setState({ cat: n }) })),
      posts: (cat === 'All' ? all : all.filter((p) => p.cat === cat)).slice(0, 9),
      allPosts: all
    };
  }.call(self);
}
