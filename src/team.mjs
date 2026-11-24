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
    slug: 'neha-arjunwadkar',
    name: 'Adv. Neha Arjunwadkar',
    role: 'Associate Advocate and Notary',
    qualifications: 'B.A. LL.B., Notary (Government of India)',
    photo: { w: 800, h: 733 }, // supplied finished; shown uncropped and unedited
    bio: [
      'Adv. Neha Arjunwadkar is an Associate Advocate at Adv. S. P. Madewad Jamadar & Associates, Shivaji Nagar, Pune, and a Notary appointed by the Government of India. In practice since 2010, Adv. Arjunwadkar handles civil litigation, co-operative housing society matters, deemed conveyance and family law cases.',
      'For housing societies in Pune, this includes applications for deemed conveyance, through which a society can obtain title to its land and building when the developer has not executed the conveyance.',
    ],
    areas: ['Civil litigation', 'Co-operative housing societies', 'Deemed conveyance', 'Family law', 'Notary services'],
  },
  {
    slug: 'vaishnavi-wani',
    name: 'Adv. Vaishnavi Wani',
    role: 'Associate Advocate',
    qualifications: 'B.A. LL.B., LL.M.',
    photo: { w: 800, h: 732 }, // supplied finished; shown uncropped and unedited
    bio: [
      'Adv. Vaishnavi Wani is an Associate Advocate at Adv. S. P. Madewad Jamadar & Associates, Shivaji Nagar, Pune. She holds a B.A. LL.B. and a Master of Laws (LL.M.), which she completed in Delhi.',
      'Adv. Wani has appeared in and handled several matters before the Supreme Court of India and the Bombay High Court, and is a key member of the team for matters in the higher courts.',
      'Cases that begin in the Pune courts often go on to the Bombay High Court, through bail applications, appeals, revisions and petitions to quash an FIR. Her work before the higher courts allows the team to take a client\u2019s matter forward from Pune to the Bombay High Court and the Supreme Court.',
    ],
    areas: ['Supreme Court of India', 'Bombay High Court', 'Appeals and petitions'],
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
    slug: 'suraj-ithape',
    name: 'Adv. Suraj Ithape',
    role: 'Associate Advocate',
    qualifications: 'B.Com., LL.B.',
    photo: { w: 800, h: 733 }, // supplied finished; shown uncropped and unedited
    bio: [
      'Adv. Suraj Ithape is an Associate Advocate at Adv. S. P. Madewad Jamadar & Associates, Shivaji Nagar, Pune. A law graduate of Shri Yashwantrao Chavan Law College, Pune, he practises in criminal and civil litigation, matters before the Debts Recovery Tribunal (DRT) and cases under special Acts.',
      'He has also worked on commercial litigation, consumer law and insurance law matters, and assists the firm with filing and listing its matters before the courts so that they are free of procedural defects.',
    ],
    areas: ['Criminal litigation', 'Civil litigation', 'DRT matters', 'Special Acts', 'Commercial litigation', 'Consumer cases', 'Insurance law'],
  },
  {
    // Law student: her photo is without advocate's bands, which only enrolled advocates wear.
    slug: 'pranjal-gaikwad',
    name: 'Miss. Pranjal Gaikwad',
    role: 'Legal Intern',
    qualifications: 'B.A. LL.B. (fourth year)',
    photo: { w: 800, h: 733 }, // supplied finished; shown uncropped and unedited
    bio: [
      'Miss. Pranjal Gaikwad is a fourth-year B.A. LL.B. student at Shri Shivaji Maratha Society\u2019s Law College, Pune, and a Legal Intern at Adv. S. P. Madewad Jamadar & Associates, Shivaji Nagar, Pune.',
      'She assists the advocates with legal research, drafting, case analysis, documentation and court-related work, while building practical experience of litigation.',
    ],
    areas: ['Legal research', 'Drafting', 'Case analysis', 'Documentation'],
  },
  {
    slug: 'ashwini-ovhal',
    name: 'Miss. Ashwini Sanjay Ovhal',
    role: 'Legal Intern',
    qualifications: 'B.A. LL.B. (fourth year)',
    photo: { w: 800, h: 733 }, // supplied finished; shown uncropped and unedited
    bio: [
      'Miss. Ashwini Sanjay Ovhal is a fourth-year B.A. LL.B. student at Shri Shivaji Maratha Society\u2019s Law College, Pune, and a Legal Intern at Adv. S. P. Madewad Jamadar & Associates, Shivaji Nagar, Pune.',
      'Ashwini\u2019s interests lie in criminal law, litigation and courtroom advocacy, legal research and drafting. As an intern, Ashwini is gaining practical experience of court proceedings through hands-on work on the firm\u2019s matters, under the guidance of its advocates.',
    ],
    areas: ['Criminal law', 'Legal research', 'Drafting', 'Court proceedings'],
  },
  {
    // "BALLB" in her original bio read as B.A. LL.B.; "AQUA LEGAL" there was a previous firm.
    slug: 'aishwarya-wani',
    photo: { w: 800, h: 733 }, // supplied finished; shown uncropped and unedited
    name: 'Adv. Aishwarya Wani',
    role: 'Associate Advocate',
    qualifications: 'B.A. LL.B., LL.M.',
    bio: [
      'Adv. Aishwarya Wani is an Associate Advocate in the criminal litigation practice of Adv. S. P. Madewad Jamadar & Associates, Shivaji Nagar, Pune. She handles a broad range of criminal cases, including matters under special Acts, and represents clients before the Sessions Court, the Magistrate courts and other judicial forums.',
      'She also appears before consumer commissions and the Labour Court.',
    ],
    areas: ['Criminal litigation', 'Special Acts', 'Consumer cases', 'Labour cases'],
  },
];
