// Page data and copy, ported from design/Product.dc.html.
export const productDefaults = {"product":"mirrors","mobile":false,"brand":"#1E5873"};

export function productData(props = {}, state = {}) {
  const self = { props: { ...productDefaults, ...props }, state, setState() {} };
  return function () {
    const st = this.state || {};
    const brand = this.props.brand ?? '#1E5873';
    const m = !!this.props.mobile || !!st.narrow;
    const B = '/images/';
    const IC = {
      jchannel: 'M4 4h16v14H4zM3 18h18v2H3zM9 4V2M15 4V2',
      cleat: 'M4 6h16v12H4zM7 9l3-3M14 9l3-3',
      standoff: 'M4 4h16v16H4zM7 7h.01M17 7h.01M7 17h.01M17 17h.01',
      mastic: 'M3 4h18v16H3zM7 10h10M7 14h10',
      frame: 'M3 3h18v18H3zM7 7h10v10H7z',
      bracket: 'M3 8h18M6 8v5l4-5M18 8v5l-4-5',
      hidden: 'M3 10h18v3H3zM5 13v2M19 13v2',
      shoe: 'M5 3v14M19 3v14M3 17h18v4H3z',
      post: 'M6 3v18M18 3v18M6 8h12M6 16h12',
      clamp: 'M4 5h16v14H4zM2 9h4M2 15h4M18 9h4M18 15h4',
      hinge: 'M4 3h10v18H4zM14 7h4v3h-4M14 14h4v3h-4',
      slide: 'M3 4h18M5 4v16h7V4M12 6v14h7V6',
      door: 'M6 21V3h12v18M3 21h18M14.5 12h.5',
      frameAlu: 'M3 3h18v18H3zM12 3v18M3 12h18',
      rod: 'M3 6h18M5 6l7 6M19 6l-7 6M3 12h18',
      feet: 'M4 4h16v13H4zM6 17v3M18 17v3M3 20h18',
      seal: 'M4 4h16v16H4zM4 4l16 16'
    };
    const T = {
      clear: { name: 'Clear', text: 'Standard glass with a slight green edge.', fill: '#E3EEEA', texture: 'none' },
      lowiron: { name: 'Low-iron', text: 'Ultra-clear, no green tint.', fill: '#F4F9FA', texture: 'none' },
      etched: { name: 'Acid-etched', text: 'Frosted privacy, soft light.', fill: '#E8ECEE', texture: 'radial-gradient(rgba(15,36,51,0.06) 1px, transparent 1px)' },
      rain: { name: 'Rain', text: 'Textured, obscures view.', fill: '#E6EEF0', texture: 'repeating-linear-gradient(90deg, rgba(15,36,51,0.06) 0 2px, transparent 2px 7px)' },
      gray: { name: 'Gray tint', text: 'Smoky, modern privacy.', fill: '#C7CCCF', texture: 'none' },
      bronze: { name: 'Bronze tint', text: 'Warm tone, cuts glare.', fill: '#C9B9A3', texture: 'none' },
      laminated: { name: 'Laminated', text: 'Holds together if broken.', fill: '#E6F0EE', texture: 'linear-gradient(180deg, transparent 47%, rgba(15,36,51,0.08) 47% 53%, transparent 53%)' },
      tempered: { name: 'Tempered', text: 'Safety glass, 4–5× stronger.', fill: '#E3EEEA', texture: 'none' },
      igu: { name: 'Insulated (IGU)', text: 'Two panes with a sealed air gap.', fill: '#E8F1F1', texture: 'linear-gradient(90deg, transparent 44%, rgba(15,36,51,0.1) 44% 46%, transparent 46% 54%, rgba(15,36,51,0.1) 54% 56%, transparent 56%)' },
      lowe: { name: 'Low-E coated', text: 'Keeps heat where you want it.', fill: '#E2ECEF', texture: 'linear-gradient(135deg, rgba(120,170,190,0.18), transparent 60%)' },
      backpaint: { name: 'Back-painted', text: 'Any color, glossy finish.', fill: '#BFD6D3', texture: 'none' },
      thick: { name: 'Thick clear', text: 'Heavy slabs with a green edge.', fill: '#CFE3DD', texture: 'linear-gradient(90deg, rgba(60,120,100,0.22) 0 8%, transparent 8%)' },
      textured: { name: 'Textured & art glass', text: 'Cast glass with depth and color.', fill: '#BFDCD8', texture: 'radial-gradient(rgba(255,255,255,0.5) 2px, transparent 3px)' },
      ceramic: { name: 'Ceramic glass', text: 'Rated for high heat.', fill: '#E9E6DE', texture: 'none' },
      frosted: { name: 'Frosted', text: 'Soft, diffused look.', fill: '#E8ECEE', texture: 'radial-gradient(rgba(15,36,51,0.06) 1px, transparent 1px)' }
    };
    const EDGES = [
      { name: 'Flat polished', text: 'Clean, square edge. Modern and frameless.', d: 'M8 16h96v8H8z' },
      { name: 'Pencil polished', text: 'Softly rounded edge, comfortable to touch.', d: 'M8 16h92a4 4 0 0 1 0 8H8z' },
      { name: 'Beveled', text: 'Angled border that catches light.', d: 'M8 16h74l22 6v2H8z' },
      { name: 'Seamed', text: 'Safety-sanded edge for framed or channel installs.', d: 'M8 16h94l2 2v4l-2 2H8z' }
    ];
    const HW = [{ name: 'Polished chrome', hex: '#C9CED2' }, { name: 'Brushed nickel', hex: '#B5B1A8' }, { name: 'Matte black', hex: '#232527' }, { name: 'Satin brass', hex: '#B89B5E' }];
    const SS = [{ name: 'Brushed stainless', hex: '#B9BEC1' }, { name: 'Polished stainless', hex: '#CFD4D7' }, { name: 'Matte black', hex: '#232527' }, { name: 'Painted to match', hex: '#E9E6DE' }];
    const ALU = [{ name: 'Clear anodized', hex: '#C4C8CA' }, { name: 'Dark bronze', hex: '#4A3A2E' }, { name: 'Black anodized', hex: '#232527' }, { name: 'Painted to match', hex: '#E9E6DE' }];
    const REL = {
      mirrors: { name: 'Custom Glass Mirrors', text: 'Vanity, gym and feature-wall mirrors.', img: 'off-cape-2.webp', href: 'Product.dc.html' },
      shelves: { name: 'Custom Glass Shelves', text: 'Floating shelves for niches, bars and displays.', img: 'why-a-glass-canopy-is-the-perfect-blend-of-style-and.webp', href: 'Product-Shelves.dc.html' },
      railings: { name: 'Custom Glass Railings', text: 'Stair, deck and pool glass.', img: 'glass-storefront-installation-guide-for-cape-cod-businesses.webp', href: 'Product-Railings.dc.html' },
      windows: { name: 'Custom Glass Windows', text: 'Insulated, tempered and shaped glass.', img: 'glass-repair-in-providence-ri.webp', href: 'Product-Windows.dc.html' },
      storefronts: { name: 'Custom Glass Storefronts', text: 'Storefront glass, framing and doors.', img: 'providence-area-hero.webp', href: 'Product-Storefronts.dc.html' },
      winecellars: { name: 'Custom Glass Wine Cellars', text: 'Glass walls and doors for wine rooms.', img: 'custom-glass-shower-doors-enclosures-the-complete-guide.webp', href: 'Product-WineCellars.dc.html' },
      countertops: { name: 'Custom Glass Countertops', text: 'Tabletops and counter surfaces, cut to fit.', img: 'wine-cellar-glass-enclosure-ideas-and-costs.webp', href: 'Product-Countertops.dc.html' },
      fireplace: { name: 'Fireplace Screens', text: 'Glass screens for fireplaces and fire pits.', img: 'sandwich-area-hero.webp', href: 'Product-Fireplace.dc.html' },
      shower: { name: 'Shower Enclosures', text: 'Frameless and semi-frameless glass.', img: 'off-cape.webp', href: 'Product-Shower.dc.html' },
      canopies: { name: 'Canopies & Skylights', text: 'Overhead glass that brings in daylight.', img: 'falmouth-area-hero.webp', href: 'Product-Canopies.dc.html' }
    };
    const P = {
      mirrors: {
        lede: 'Cut to any size or shape, finished with the edge you choose, and mounted by our installers. For vanities, gyms, closets and full feature walls.',
        specs: [['Mirror types', 'Clear, low-iron, antique, tinted, back-lit'], ['Edges', 'Flat polish, pencil, bevel, seamed'], ['Thickness', '1/4″ standard'], ['Lead time', 'about 3–4 weeks']],
        note: 'See mirror and edge samples at our Hyannis shop, 270 Communication Way.',
        shots: [['Wall-to-wall vanity mirror', 'off-cape-2.webp'], ['Beveled frame mirror, powder room', 'framed-or-frameless-how-to-choose-the-right-glass-windows.webp'], ['Home gym mirror wall', 'glass-shelves-for-cabinets-a-stylish-way-to-display-and.webp'], ['Antique mirror panels, kitchen', 'mashpee-area-hero.webp']],
        uses: ['Bathroom vanities', 'Home gyms & studios', 'Closet & wardrobe doors', 'Dining & feature walls', 'Entryways', 'Fitness clubs & salons'],
        typesH: 'Mirror types',
        types: [
          { name: 'Clear silver', text: 'Classic, bright reflection for any room.', fill: '#DCE6E9', texture: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0 30%, rgba(255,255,255,0) 30% 100%)' },
          { name: 'Low-iron', text: 'Truer color with no green cast.', fill: '#EEF4F6', texture: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0 30%, rgba(255,255,255,0) 30% 100%)' },
          { name: 'Antique', text: 'Hand-aged veining for a vintage feel.', fill: '#C9C4B6', texture: 'radial-gradient(rgba(70,60,40,0.18) 1.5px, transparent 1.5px)' },
          { name: 'Gray or bronze tint', text: 'Warm or smoky tones for feature walls.', fill: '#A9A39A', texture: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0 30%, rgba(255,255,255,0) 30% 100%)' },
          { name: 'Back-lit LED', text: 'Frosted border with built-in lighting.', fill: '#D6E2E6', texture: 'linear-gradient(#F7F3E3, #F7F3E3) center / 82% 82% no-repeat' }
        ],
        edges: EDGES, mountsH: 'Mounting options',
        mounts: [['J-channel & clips', 'Slim bottom channel with top clips. Our most common install.', 'jchannel'], ['Hidden French cleat', 'Floats off the wall with no visible hardware.', 'cleat'], ['Decorative standoffs', 'Polished caps hold the mirror off the wall.', 'standoff'], ['Mastic + safety clips', 'Full-contact adhesive for large gym walls.', 'mastic'], ['Custom frame', 'Wood or metal frame built to your size.', 'frame']],
        finishes: HW, call: ['Rough width × height of the wall or space', 'Outlets, switches or lights in the area', 'A photo or two (you can upload them)'],
        photosH: 'Mirrors we’ve installed', photosLink: 'See all mirror projects',
        photos: [['Framed double-vanity mirrors', 'Cape Cod', 'black-grid-sliding-shower-door.webp'], ['Floor-to-ceiling mirror wall', 'Cape Cod', 'harwich-area-hero.webp'], ['Frameless mirror over marble vanity', 'Cape Cod', 'glass-railing-home-office.webp'], ['Pivoting chrome-frame mirror', 'Cape Cod', 'black-grid-bypass-shower.webp']],
        faqH: 'Mirror questions',
        faqs: [['Can you cut around outlets and light fixtures?', 'Yes. We measure every cutout on site and fabricate the mirror to fit around outlets, switches and sconces.'], ['Are your mirrors safe for a home gym or kids’ room?', 'We anchor every mirror securely for its size and location, and we can talk through safety options for gyms, studios and kids’ rooms.'], ['How long does a custom mirror take?', 'Most mirrors are ready in about 3–4 weeks after the final measure; installation typically takes one to two days.'], ['Can you replace or resize an existing mirror?', 'Yes. We remove old mirrors, including glued-on builder mirrors, and install a new one sized to your updated space.']],
        related: ['shelves', 'shower', 'countertops'], ctaH: 'Have a wall in mind?', ctaP: 'Send a rough size and a photo. We’ll come measure and quote, free.'
      },
      shelves: {
        lede: 'Floating glass shelves cut to your niche or wall, with polished edges and brackets matched to your fixtures.',
        specs: [['Glass types', 'Clear, low-iron, frosted, thick'], ['Edges', 'Flat polish, pencil, bevel'], ['Thickness', '3/8″ · 1/2″'], ['Lead time', 'about 3–4 weeks']],
        note: 'See glass and bracket samples at our Hyannis shop, 270 Communication Way.',
        shots: [['Lit glass bar shelving', 'bent-glass-screen-marble-fireplace.webp'], ['Floating glass bar shelves', 'why-a-glass-canopy-is-the-perfect-blend-of-style-and.webp'], ['Sea-glass kitchen shelves', 'glass-bar-top-shelves.webp'], ['Glass bar top & shelves', 'lit-glass-bar-shelving.webp']],
        uses: ['Home bars', 'Kitchen open shelving', 'Bathroom niches', 'Vanities', 'Retail displays', 'Closets'],
        typesH: 'Glass types', types: ['clear', 'lowiron', 'frosted', 'thick'],
        edges: EDGES, mountsH: 'Support options',
        mounts: [['Steel brackets', 'Slim angled brackets under the shelf.', 'bracket'], ['Hidden supports', 'Concealed rods for a floating look.', 'hidden'], ['Clips & standards', 'Adjustable clips inside niches and cabinets.', 'clamp'], ['Channel', 'A slim wall channel holds the back edge.', 'jchannel']],
        finishes: HW, call: ['Width and depth of the shelf space', 'What the shelves will hold', 'A photo of the wall or niche'],
        photosH: '', photosLink: '', photos: [],
        faqH: 'Glass shelf questions',
        faqs: [['How much weight can a glass shelf hold?', 'It depends on thickness, span and support. We size each shelf for what it will hold.'], ['Can you cut shelves to fit a tiled niche?', 'Yes. We measure the niche and cut the glass to fit, with polished edges.'], ['Can you replace a broken shelf?', 'Yes. Bring the old shelf or its measurements and we’ll cut a new one.'], ['How long do glass shelves take?', 'Most shelves are ready in about 3–4 weeks after the measure.']],
        related: ['mirrors', 'countertops', 'winecellars'], ctaH: 'Need shelves cut to fit?', ctaP: 'Send the size and a photo. We’ll measure and quote, free.'
      },
      railings: {
        lede: 'Tempered and laminated glass panels for stairs, decks, balconies and pools, with the mounting system and hardware to suit.',
        specs: [['Glass types', 'Tempered, laminated, low-iron'], ['Mounting', 'Base shoe, standoffs, posts, clamps'], ['Thickness', '1/2″ · 5/8″ · 3/4″'], ['Lead time', '3–4 weeks']],
        note: 'See railing hardware samples at our Hyannis shop, 270 Communication Way.',
        shots: [['Frameless glass stair railing', 'glass-storefront-installation-guide-for-cape-cod-businesses.webp'], ['Glass pool fence', 'how-to-design-a-stunning-bathroom-with-a-walk-in-shower.webp'], ['Standoff stair & landing railing', 'eastham-area-hero.webp'], ['Glass balcony railings', 'off-cape-3.webp']],
        uses: ['Interior stairs', 'Waterfront decks', 'Balconies', 'Lofts', 'Pool fencing', 'Rooftop terraces'],
        typesH: 'Glass types', types: ['tempered', 'laminated', 'lowiron', 'etched'],
        edges: [], mountsH: 'Mounting systems',
        mounts: [['Base shoe', 'Continuous channel for a fully frameless look.', 'shoe'], ['Standoffs', 'Glass held off the edge on stainless pins.', 'standoff'], ['Posts & clamps', 'Glass clamped between posts.', 'post'], ['Top rail', 'Optional wood or metal cap rail.', 'rod']],
        finishes: SS, call: ['Length and height of the run', 'Deck, stair or pool — inside or out', 'A photo of the area'],
        photosH: 'Railings we’ve installed', photosLink: 'See all railing projects',
        photos: [['Glass deck railing over a pool', 'Cape Cod', 'architectural-glass-railing.webp'], ['Stair railing, black handrail', 'Massachusetts', 'rooftop-glass-railing.webp'], ['Rooftop glass railing', 'Commercial', 'loft-railing-black-top-rail.webp'], ['Loft railing, black top rail', 'Massachusetts', 'frameless-stair-railing.webp']],
        faqH: 'Glass railing questions',
        faqs: [['Are glass railings safe and up to code?', 'Yes. We use tempered or laminated safety glass and hardware sized for guard loads, installed to meet local building code.'], ['Will salt air damage the hardware?', 'We recommend marine-grade stainless for waterfront homes. A quick rinse a few times a season keeps it looking new.'], ['Can you do glass pool fencing?', 'Yes. Glass pool fencing keeps the area safe without blocking the view.'], ['How long do glass railings take?', 'Typically 3–4 weeks from final measure, since every panel is custom-cut.']],
        related: ['windows', 'canopies', 'shower'], ctaH: 'Ready for a clear view?', ctaP: 'Send the length and a photo. We’ll measure and quote, free.'
      },
      windows: {
        lede: 'Replacement panes, insulated glass units and custom-shaped glass, made to fit your existing frames.',
        specs: [['Glass types', 'Insulated, Low-E, tempered, laminated'], ['Shapes', 'Rectangles, arches, triangles, custom'], ['Units', 'Single pane or insulated (IGU)'], ['Lead time', '3–4 weeks']],
        note: 'Bring a broken pane or the sash to our Hyannis shop, 270 Communication Way.',
        shots: [['Waterfront kitchen, floor-to-ceiling glass', 'glass-repair-in-providence-ri.webp'], ['Sunroom windows & skylights', 'custom-glass-sunroom-with-skylights-overlooking-a-cape-cod.webp'], ['Waterfront room, large glass', 'waterfront-room-with-sliding-glass-and-a-frameless-glass.webp'], ['Sliding glass doors', 'orleans-area-hero.webp']],
        uses: ['Foggy insulated units', 'Broken panes', 'Sunrooms', 'Picture windows', 'Patio doors', 'Storefront windows'],
        typesH: 'Glass types', types: ['igu', 'lowe', 'tempered', 'laminated', 'etched'],
        edges: [], mountsH: 'What we replace',
        mounts: [['Insulated units', 'New sealed units for foggy or failed glass.', 'frameAlu'], ['Single panes', 'Glass for older wood and storm windows.', 'frame'], ['Sliding door glass', 'Replacement panels for patio doors.', 'slide'], ['Custom shapes', 'Arches, triangles and transoms cut to fit.', 'seal']],
        finishes: [], call: ['Width × height of the glass', 'Window type and frame material', 'A photo of the window'],
        photosH: 'Windows we’ve glazed', photosLink: 'See all window projects',
        photos: [['Retail storefront windows', 'Massachusetts', 'install-mirrors-for-a-touch-of-luxury-in-your-home.webp']],
        faqH: 'Window glass questions',
        faqs: [['Why is my window foggy between the panes?', 'The seal on the insulated unit has failed. We replace the sealed unit and you keep your existing frame.'], ['Can you replace glass in any window?', 'Most wood, vinyl and aluminum windows, yes. We’ll check on the visit.'], ['What is Low-E glass?', 'Glass with a thin coating that reflects heat, keeping rooms warmer in winter and cooler in summer.'], ['How long does window glass take?', 'Typically 3–4 weeks for insulated units, faster for single panes.']],
        related: ['canopies', 'storefronts', 'railings'], ctaH: 'Foggy or broken glass?', ctaP: 'Send the size and a photo. We’ll measure and quote, free.'
      },
      storefronts: {
        lede: 'Storefront glass, aluminum framing and entrance doors for shops, restaurants and offices.',
        specs: [['Glass types', 'Tempered, insulated, Low-E, laminated'], ['Systems', 'Aluminum, point-supported, standoff'], ['Doors', 'Storefront and all-glass entrances'], ['Lead time', '3–4 weeks']],
        note: 'We schedule commercial installs around your business hours.',
        shots: [['Spider-fitting glass storefront', 'providence-area-hero.webp'], ['Point-supported glass wall & entry', 'brewster-area-hero.webp'], ['Retail storefront windows', 'install-mirrors-for-a-touch-of-luxury-in-your-home.webp'], ['Storefront glass with standoffs', 'rhodeisland-area-hero.webp']],
        uses: ['Retail shops', 'Restaurants', 'Offices', 'Fitness clubs', 'Banks', 'Showrooms'],
        typesH: 'Glass types', types: ['tempered', 'igu', 'lowe', 'laminated', 'gray'],
        edges: [], mountsH: 'Storefront systems',
        mounts: [['Aluminum framing', 'Framed glass and doors, the commercial standard.', 'frameAlu'], ['Point-supported', 'Spider fittings for an all-glass look.', 'standoff'], ['Standoff glass', 'Panels mounted on stainless standoffs.', 'clamp'], ['Entrance doors', 'Doors, closers, pivots and pulls.', 'door']],
        finishes: ALU, call: ['Width × height of the openings', 'New install or replacement', 'Photos of the storefront'],
        photosH: 'Storefronts we’ve installed', photosLink: 'See all storefront projects',
        photos: [['Aluminum entrance doors & transoms', 'Massachusetts', 'glass-storefronts-the-secret-to-modern-inviting-retail.webp'], ['Double entrance doors, retail', 'Massachusetts', 'retail-storefront-windows.webp'], ['Glass entry vestibule, fitness club', 'Commercial', 'glass-wine-room-lounge-bar.webp'], ['Glass entrance canopy', 'Cape Cod', 'wellfleet-area-hero.webp']],
        faqH: 'Storefront questions',
        faqs: [['Can you replace one broken pane?', 'Yes. We measure, board up if needed and replace the pane with matching glass.'], ['Do you work with general contractors?', 'Yes. We work with GCs and property managers on new builds and fit-outs.'], ['Can you match my existing framing?', 'Yes. We match frame profiles and finishes wherever possible.'], ['How long does a storefront take?', 'Typically 3–4 weeks from final measure, depending on the system.']],
        related: ['canopies', 'windows', 'railings'], ctaH: 'Upgrading your storefront?', ctaP: 'Send photos and rough sizes. We’ll visit and quote, free.'
      },
      winecellars: {
        lede: 'Glass walls and doors for wine rooms and cellars, with insulated glass, seals and locking hardware.',
        specs: [['Glass types', 'Insulated, low-iron, Low-E, tempered'], ['Doors', 'Hinged or pivot, lockable'], ['Thickness', '1/2″ or insulated'], ['Lead time', '3–4 weeks']],
        note: 'See glass and hardware samples at our Hyannis shop, 270 Communication Way.',
        shots: [['Glass wine display with pull handles', 'wall-to-wall-vanity-mirror.webp'], ['Glass wine wall, private dining room', 'custom-glass-shower-doors-enclosures-the-complete-guide.webp'], ['Glass wine room & bar top', 'framed-vanity-mirror.webp'], ['Glass wine room & lounge bar', 'are-glass-kitchen-countertops-durable-here-s-what-you-need.webp']],
        uses: ['Home wine cellars', 'Dining rooms', 'Under-stair cellars', 'Restaurants', 'Bars', 'Clubs'],
        typesH: 'Glass types', types: ['igu', 'lowiron', 'lowe', 'tempered'],
        edges: [], mountsH: 'Doors & framing',
        mounts: [['Frameless glass walls', 'Clean glass with slim channels.', 'shoe'], ['Hinged glass doors', 'Sealed doors with locking hardware.', 'hinge'], ['Pivot doors', 'Wide doors that swing on a pivot.', 'door'], ['Door seals', 'Sweeps and seals to hold temperature.', 'seal']],
        finishes: HW, call: ['Width × height of the wall or opening', 'Whether the room is cooled', 'A photo of the space'],
        photosH: '', photosLink: '', photos: [],
        faqH: 'Wine cellar questions',
        faqs: [['Will glass keep my wine room cold?', 'Insulated glass and sealed doors help the room hold temperature. We coordinate with your cooling contractor.'], ['Can a wine room door lock?', 'Yes. We offer locking glass door hardware.'], ['Do you do restaurant wine rooms?', 'Yes. We’ve built glass wine rooms for commercial dining spaces.'], ['How long does a wine room take?', 'Typically 3–4 weeks from final measure.']],
        related: ['countertops', 'shelves', 'mirrors'], ctaH: 'Planning a wine room?', ctaP: 'Send the size and a photo. We’ll measure and quote, free.'
      },
      countertops: {
        lede: 'Glass countertops, bar tops and tabletops, templated on site and finished in our shop.',
        specs: [['Glass types', 'Clear, low-iron, back-painted, textured'], ['Edges', 'Flat polish, pencil, bevel'], ['Thickness', '1/4″ – 3/4″+'], ['Lead time', '3–4 weeks']],
        note: 'See glass and edge samples at our Hyannis shop, 270 Communication Way.',
        shots: [['Glass tabletop on kitchen island', 'wine-cellar-glass-enclosure-ideas-and-costs.webp'], ['Glass tabletop, blue kitchen island', 'frameless-shower-white-subway-tile.webp'], ['Lit glass kitchen island', 'glass-for-stairs-railing-a-sleek-upgrade-for-modern-homes.webp'], ['Art glass kitchen island', 'textured-glass-bar-counter.webp']],
        uses: ['Kitchen islands', 'Bar tops', 'Dining tables', 'Desks', 'Vanities', 'Coffee tables'],
        typesH: 'Glass types', types: ['clear', 'lowiron', 'backpaint', 'textured', 'thick'],
        edges: EDGES, mountsH: 'Install options',
        mounts: [['Table cover', 'Protective glass laid over wood or stone.', 'frame'], ['Full countertop', 'Thick glass as the counter surface.', 'hidden'], ['Raised bar top', 'Glass bar on standoffs or brackets.', 'standoff'], ['Under-lit', 'Glass with lighting below, with your electrician.', 'mastic']],
        finishes: [], call: ['Size and shape (a template or drawing helps)', 'Cutouts for sinks or cooktops', 'A photo of the space'],
        photosH: 'Countertops we’ve installed', photosLink: 'See all countertop projects',
        photos: [['Curved glass breakfast bar', 'Residential', 'art-glass-island-top.webp'], ['Art glass island top', 'Residential', 'countertops-tabletops.webp'], ['Textured glass bar counter', 'Residential', 'thick-glass-island-top.webp'], ['Glass island with integrated sink', 'Residential', 'lit-glass-kitchen-island.webp']],
        faqH: 'Countertop questions',
        faqs: [['Will a glass counter scratch?', 'Glass is very hard, but grit and ceramics can scratch it. Cutting boards and coasters keep it looking new.'], ['Can you match an odd shape?', 'Yes. We template on site so curves, corners and cutouts fit exactly.'], ['What is back-painted glass?', 'Glass painted on the underside so the color shows through a glossy surface.'], ['How thick should a glass top be?', 'Table covers are usually 1/4″; standalone and bar tops are thicker.']],
        related: ['shelves', 'winecellars', 'mirrors'], ctaH: 'Want a glass top?', ctaP: 'Send a template or photo. We’ll measure and quote, free.'
      },
      fireplace: {
        lede: 'Glass screens and guards for fireplaces and fire pits, cut to your opening in heat-rated glass.',
        specs: [['Glass types', 'Tempered, ceramic, low-iron'], ['Styles', 'Freestanding, corner, fixed, fire pit'], ['Thickness', '1/4″ · 3/8″'], ['Lead time', '3–4 weeks']],
        note: 'Bring your fireplace measurements to our Hyannis shop, 270 Communication Way.',
        shots: [['Glass fireplace surround, stone hearth', 'sandwich-area-hero.webp'], ['Bent-glass screen, marble fireplace', 'truro-area-hero.webp'], ['Corner glass fireplace screen', 'bourne-area-hero.webp'], ['Waterfront glass fire pit', 'chatham-area-hero.webp']],
        uses: ['Wood fireplaces', 'Gas fireplaces', 'Corner fireplaces', 'Outdoor fire pits', 'Living rooms', 'Patios'],
        typesH: 'Glass types', types: ['tempered', 'ceramic', 'lowiron'],
        edges: EDGES, mountsH: 'Screen styles',
        mounts: [['Freestanding', 'Bent or flat glass on simple feet.', 'feet'], ['Corner & multi-sided', 'Glass on two or three sides.', 'post'], ['Fixed panels', 'Glass fixed to the fireplace opening.', 'clamp'], ['Fire pit guards', 'Glass wind guards for outdoor fire pits.', 'frame']],
        finishes: HW, call: ['Width × height of the fireplace opening', 'Wood, gas or outdoor fire pit', 'A photo of the fireplace'],
        photosH: '', photosLink: '', photos: [],
        faqH: 'Fireplace screen questions',
        faqs: [['Can glass handle the heat?', 'Yes, with the right glass. We recommend tempered or ceramic glass depending on the fireplace.'], ['Do you make fire pit guards?', 'Yes. Glass wind guards for gas fire pits are a popular Cape project.'], ['How do I clean a glass screen?', 'Once it’s cool, use a non-abrasive glass cleaner.'], ['Can you fit an unusual fireplace?', 'Yes. We measure on site and cut to your opening, including corner fireplaces.']],
        related: ['mirrors', 'countertops', 'shelves'], ctaH: 'Want to see the fire?', ctaP: 'Send the size and a photo. We’ll measure and quote, free.'
      },
      shower: {
        lede: 'Frameless, semi-frameless and sliding shower glass, cut to your opening and installed by our own team.',
        specs: [['Glass types', 'Clear, low-iron, etched, rain, gray'], ['Styles', 'Hinged, sliding, knee wall, tub'], ['Thickness', '3/8″ · 1/2″'], ['Lead time', '3–4 weeks']],
        note: 'See glass and hardware samples at our Hyannis shop, 270 Communication Way.',
        shots: [['Marble shower enclosure, full bath', 'frameless-glass-shower-with-marble-look-tile-and-built-in.webp'], ['Frameless shower, white subway tile', 'off-cape.webp'], ['Black grid bypass shower', 'low-iron-glass-hard-water-stains-maintenance-differences.webp'], ['Tub enclosure, satin brass', 'wet-room-waterproofing-membrane-systems-explained.webp']],
        uses: ['Primary baths', 'Guest baths', 'Tub conversions', 'Steam showers', 'Rentals', 'New construction'],
        typesH: 'Glass types', types: ['clear', 'lowiron', 'etched', 'rain', 'gray'],
        edges: [], mountsH: 'Door & panel styles',
        mounts: [['Frameless hinged', 'Heavy glass with minimal hinges.', 'hinge'], ['Sliding / bypass', 'Rolling doors where swing is tight.', 'slide'], ['Fixed panel', 'A single walk-in glass panel.', 'clamp'], ['Tub enclosure', 'Hinged or sliding glass over a tub.', 'frame']],
        finishes: HW, call: ['Width × height of the shower opening', 'Tile finished or still in progress', 'A photo of the space'],
        photosH: 'Showers we’ve installed', photosLink: 'See all shower projects',
        photos: [['Black grid sliding shower door', 'Portsmouth, RI', 'semi-frameless-vs-framed-shower-doors-which-fits-your-cape.webp'], ['Knee-wall shower, black hardware', 'Centerville, MA', 'glass-wine-room-bar-top.webp'], ['Marble shower with bench & lit niche', 'Cape Cod', 'shower-enclosure.webp'], ['Frameless corner shower, brass hinges', 'Cape Cod', 'why-wall-anchoring-matters-how-much-weight-can-a-wall-stud.webp']],
        faqH: 'Shower glass questions',
        faqs: [['How long does a shower enclosure take?', 'Typically 3–4 weeks from final measure, since every panel is custom-cut.'], ['When should you measure?', 'After tile is finished, so the glass fits the final surfaces.'], ['Frameless or semi-frameless?', 'Frameless uses thicker glass and minimal hardware; semi-frameless adds slim framing and often costs less.'], ['How do I keep the glass clear?', 'Squeegee after each shower. Ask about protective glass coatings.']],
        related: ['mirrors', 'shelves', 'countertops'], ctaH: 'Ready for a new shower?', ctaP: 'Send the size and a photo. We’ll measure and quote, free.'
      },
      canopies: {
        lede: 'Glass canopies, skylights and sunroom roof glass in laminated safety glass, sized for the span and snow load.',
        specs: [['Glass types', 'Laminated, Low-E, frosted, tinted'], ['Supports', 'Rods, brackets, standoffs'], ['Thickness', 'Laminated, per span'], ['Lead time', '3–4 weeks']],
        note: 'We work with your builder on structure and flashing.',
        shots: [['Glass canopy & walkway', 'falmouth-area-hero.webp'], ['Glass entrance canopy', 'wellfleet-area-hero.webp'], ['Sunroom windows & skylights', 'custom-glass-sunroom-with-skylights-overlooking-a-cape-cod.webp']],
        uses: ['Front entrances', 'Walkways', 'Patios', 'Sunrooms', 'Skylights', 'Commercial entries'],
        typesH: 'Glass types', types: ['laminated', 'lowe', 'frosted', 'gray'],
        edges: [], mountsH: 'Support systems',
        mounts: [['Tension rods', 'Stainless rods hang the glass from the wall.', 'rod'], ['Brackets', 'Wall brackets under the glass.', 'bracket'], ['Standoffs', 'Glass held on stainless point fittings.', 'standoff'], ['Skylight frames', 'Glass set into new or existing frames.', 'frameAlu']],
        finishes: SS, call: ['Width and projection of the canopy', 'Wall material', 'A photo of the entry or roof'],
        photosH: '', photosLink: '', photos: [],
        faqH: 'Canopy & skylight questions',
        faqs: [['Is overhead glass safe?', 'We use laminated safety glass overhead, which holds together if it breaks.'], ['Will it hold snow?', 'Glass and supports are sized for the span and expected snow load.'], ['Can you replace skylight glass?', 'Yes, in most cases. We’ll check the frame on the visit.'], ['How long does a canopy take?', 'Typically 3–4 weeks from final measure.']],
        related: ['storefronts', 'windows', 'railings'], ctaH: 'Want shelter and light?', ctaP: 'Send a photo of the entry. We’ll visit and quote, free.'
      }
    };
    const key = P[this.props.product] ? this.props.product : 'mirrors';
    const c = P[key];
    const shots = c.shots.map((x) => ({ label: x[0], img: B + x[1], tone: '#C9D9DE' }));
    const pic = Math.min(st.pic || 0, shots.length - 1);
    const openFaq = st.faq !== undefined ? st.faq : 0;
    const hasEdges = c.edges.length > 0;
    return {
      brand: brand,
      m: m,
      cardMin: m ? '150px' : '200px',
      photoMin: m ? '150px' : '220px',
      name: REL[key].name, lede: c.lede, note: c.note,
      specs: c.specs.map((x) => ({ k: x[0], v: x[1] })),
      active: shots[pic],
      thumbs: shots.map((s, i) => ({ ...s, on: pic === i, ring: pic === i ? brand : 'transparent', pick: () => this.setState({ pic: i }) })),
      uses: c.uses,
      typesH: c.typesH,
      types: c.types.map((t) => typeof t === 'string' ? T[t] : t),
      hasEdges: hasEdges, edges: c.edges,
      hwLabel: hasEdges ? '03 · Hardware' : '02 · Hardware',
      mountsH: c.mountsH,
      mounts: c.mounts.map((x) => ({ name: x[0], text: x[1], d: IC[x[2]] })),
      hasFin: c.finishes.length > 0, finishes: c.finishes,
      callTop: c.finishes.length > 0 ? '28px' : '52px',
      call: c.call,
      hasPhotos: c.photos.length > 0, photosH: c.photosH, photosLink: c.photosLink,
      photos: c.photos.map((x) => ({ title: x[0], town: x[1], img: B + x[2], tone: '#A6BAC2' })),
      faqH: c.faqH,
      faqs: c.faqs.map((f, i) => ({
        q: f[0], a: f[1],
        open: openFaq === i,
        icon: openFaq === i ? 'M5 12h14' : 'M12 5v14M5 12h14',
        toggle: () => this.setState({ faq: openFaq === i ? -1 : i })
      })),
      related: c.related.map((k) => ({ name: REL[k].name, text: REL[k].text, img: B + REL[k].img, href: REL[k].href, tone: '#C9D9DE' })),
      ctaH: c.ctaH, ctaP: c.ctaP
    };
  }.call(self);
}
