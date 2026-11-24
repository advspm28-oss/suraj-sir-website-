// Team members, in the order they appear on the Team page.
// Photos: run scripts/team-photo.py <photo> <slug> to produce assets/img/team/<slug>-*.
// Bios state only what each member has confirmed. Bar Council rules: no self-praise,
// no claims of results or expertise beyond the courts and areas they appear in.
// Set draft: true to keep someone off the site until their details are confirmed.
// links: [{ type: 'linkedin' | 'facebook', url }] — add only profiles the member has confirmed are theirs.

export const team = [
  {
    slug: 'sp-madewad-jamadar',
    name: 'Adv. S. P. Madewad Jamadar',
    role: 'Founder',
    lead: true,
    qualifications: '', // TODO: degrees, e.g. "B.A. LL.B."
    bio: [
      'Adv. S. P. Madewad Jamadar founded the practice and leads its criminal defence work, from anticipatory and regular bail to trials under special Acts such as the MPID, POCSO, SC/ST, MCOCA and NDPS Acts.',
      'Adv. Madewad Jamadar appears before the Magistrate courts, the Sessions Court and the special courts at Shivaji Nagar, Pune, and also handles family and civil matters.',
    ],
    areas: ['Criminal defence', 'Bail and anticipatory bail', 'Special Acts', 'Family law'],
  },
  {
    slug: 'tejas-dhabugade',
    name: 'Adv. Tejas Anandrao Dhabugade',
    role: 'Associate Advocate',
    qualifications: 'LL.B.',
    photo: { w: 800, h: 733 }, // supplied finished; shown uncropped and unedited
    bio: [
      'Adv. Tejas Anandrao Dhabugade is an Associate Advocate in the criminal litigation practice of Adv. S. P. Madewad Jamadar & Associates, Shivaji Nagar, Pune. He handles a broad range of criminal cases, including matters under special Acts, and represents clients before the Sessions Court, the Magistrate courts and other judicial forums.',
      'He also appears before revenue courts, consumer commissions and the Labour Court.',
    ],
    areas: ['Criminal litigation', 'Special Acts', 'Revenue matters', 'Consumer cases', 'Labour cases'],
  },
  {
    // Hidden until confirmed: (1) her bio names "AQUA LEGAL" as her firm; (2) "BALLB" read as B.A. LL.B.;
    // (3) a higher-resolution photo, since the one received is 283 x 511 pixels.
    draft: true,
    slug: 'aishwarya-wani',
    name: 'Adv. Aishwarya Wani',
    role: 'Associate Advocate',
    qualifications: 'B.A. LL.B., LL.M.',
    bio: [
      'Adv. Aishwarya Wani is an Associate Advocate who handles the criminal litigation practice. Her work covers a broad range of criminal cases, including matters under special Acts.',
      'She represents clients before the Sessions Court, the Magistrate courts and other judicial forums, and also appears before consumer commissions and the Labour Court.',
    ],
    areas: ['Criminal litigation', 'Special Acts', 'Consumer cases', 'Labour cases'],
  },
];
