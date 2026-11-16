// One source of truth for the practice's details.
// Every page, the schema markup and the sitemap read from here, so the
// name, address and phone numbers stay identical everywhere (NAP consistency).
// Items marked TODO need confirming by the advocate before launch.

export const site = {
  // TODO: replace with the real domain once it is bought.
  url: 'https://www.example.com',
  lang: 'en-IN',

  firm: 'Adv. S. P. Madewad Jamadar & Associates',
  shortName: 'Madewad Jamadar & Associates',
  advocate: 'Adv. S. P. Madewad Jamadar',

  // TODO: add the Bar Council of Maharashtra & Goa enrolment number.
  enrolment: 'Enrolled with the Bar Council of Maharashtra & Goa',

  whatsapp: '918554899946',
  whatsappDisplay: '+91 85548 99946',
  phone: '+917770007391',
  phoneDisplay: '+91 77700 07391',
  email: 'advspm28@gmail.com',

  address: {
    // The card reads "Supreme Towar"; assumed to be "Supreme Tower". TODO: confirm.
    line1: 'Office No. 2, Supreme Tower',
    line2: 'Family Court back side, Old Tophkhana Line',
    locality: 'Shivaji Nagar',
    city: 'Pune',
    region: 'Maharashtra',
    // TODO: confirm the PIN code.
    postalCode: '411005',
    country: 'IN',
  },

  // TODO: confirm office hours.
  hours: [
    { days: 'Monday to Saturday', open: '10:30', close: '19:00', label: '10:30 am to 7:00 pm' },
    { days: 'Sunday', label: 'By appointment' },
  ],
  hoursSchema: ['Mo-Sa 10:30-19:00'],

  // TODO: once the Google Business Profile is verified, paste its Google Maps
  // link here (Maps > the profile > Share > Copy link). The "Get directions"
  // buttons and the schema markup then point to the profile.
  gbpUrl: '',
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Supreme Tower, Old Tophkhana Line, Shivaji Nagar, Pune'),
  get mapsUrl() {
    return this.gbpUrl || this.mapsSearchUrl;
  },

  areaServed: ['Pune', 'Pimpri-Chinchwad', 'Shivaji Nagar', 'Kothrud', 'Hadapsar', 'Wakad', 'Hinjawadi', 'Kharadi', 'Baner', 'Viman Nagar'],
};

export const fullAddress = () =>
  `${site.address.line1}, ${site.address.line2}, ${site.address.locality}, ${site.address.city} ${site.address.postalCode}`;

export const waLink = (text) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
