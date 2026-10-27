// Business facts — single source for the layout, structured data and contact details.
export const SITE = {
  name: 'The Glass House',
  url: 'https://www.theghglass.com',
  phone: '(508) 685-2770',
  phoneHref: 'tel:+15086852770',
  email: 'ornyb@theghglass.com',
  address: {
    street: '270 Communication Way',
    city: 'Hyannis',
    region: 'MA',
    postalCode: '02601',
    country: 'US',
  },
  geo: { lat: 41.6819473, lng: -70.2955211 },
  mapsUrl: 'https://maps.app.goo.gl/vZfV7rE3CSp9vrpHA',
  hours: 'Mon–Fri 9:00–5:00 · Sat–Sun closed',
  rating: { value: 5, count: 5 },
  social: [
    'https://www.facebook.com/profile.php?id=61577765273149',
    'https://www.instagram.com/the_glass_house_cape_cod/',
    'https://youtube.com/@TheGlassHouseGlass',
  ],
  defaultImage: '/images/orleans-area-hero.webp',
  logo: '/images/the-glass-house.png',
} as const;

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  url: `${SITE.url}/`,
  logo: `${SITE.url}${SITE.logo}`,
  image: `${SITE.url}${SITE.defaultImage}`,
  telephone: '+1-508-685-2770',
  email: SITE.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  hasMap: SITE.mapsUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  areaServed: ['Cape Cod, MA', 'Southeastern Massachusetts', 'Rhode Island'],
  sameAs: SITE.social,
};

/** FAQPage schema from [question, answer] pairs. */
export function faqSchema(faqs: Array<[string, string]>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
