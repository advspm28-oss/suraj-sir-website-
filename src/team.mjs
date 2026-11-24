// Team members, in the order they appear on the Team page.
// Photos: run scripts/team-photo.py <photo> <slug> to produce assets/img/team/<slug>-*.
// Bios state only what each member has confirmed. Bar Council rules: no self-praise,
// no claims of results or expertise beyond the courts and areas they appear in.
// Set draft: true to keep someone off the site until their details are confirmed.
// links: [{ type: 'linkedin' | 'facebook' | 'instagram', url }] — add only profiles the member has confirmed are theirs.

export const team = [
  {
    slug: 'sp-madewad-jamadar',
    name: 'Adv. S. P. Madewad Jamadar',
    alternateName: 'Adv. Suraj Madewad Jamadar',
    role: 'Founder',
    lead: true,
    qualifications: 'B.A. LL.B. (2020)',
    education: [
      'B.A. LL.B., SCLC, Savitribai Phule Pune University (2020)',
      'Member of the Pune Bar Association since December 2020',
      'Diploma in journalism',
    ],
    bio: [
      'Adv. Suraj Madewad Jamadar founded Adv. S. P. Madewad Jamadar & Associates in Shivaji Nagar, Pune, and practises on both the criminal and civil sides. He graduated with a B.A. LL.B. from SCLC, Savitribai Phule Pune University, in 2020 and joined the Pune Bar Association in December 2020.',
      'His training began with internships in 2018 under Adv. Rohan P. Shetty and Adv. Bipin Pathole, and in 2019 under Adv. Rohit Pandey, Secretary of the Supreme Court Bar Association, New Delhi. After enrolment he practised under Adv. Rohan Shetty and Adv. Tarak Patil, and went on to work with Adv. Harshal Sunil Patil of the Bombay High Court and civil lawyer Adv. Sudip Kenjalkar, before establishing his own practice.',
      'He also holds a diploma in journalism and has worked with newspapers and electronic media. Active in public life since 2016, he has served as a spokesperson for ABVP, worked with NSUI, the Youth Congress and the Congress Legal Cell, and served as Secretary of the Youth Congress, Pune City. He has served three consecutive terms as Secretary of the Bidar Jilha Pune Rahiwasi Social Foundation.',
      'That mix of courtroom training, media work and years of community service shapes how he works with clients. People usually reach the firm at a difficult moment: a police notice, an arrest in the family, or a dispute that has turned into a court case. He makes time to explain where the matter stands and what each step involves, in plain language, so that clients can take decisions with a clear picture. With associates who appear from the Pune courts to the Bombay High Court and the Supreme Court, he leads a team that can carry a matter through every stage.',
    ],
    areas: ['Criminal defence', 'Civil litigation', 'Bail and anticipatory bail', 'Special Acts'],
    links: [
      { type: 'facebook', url: 'https://www.facebook.com/share/1LMCJEFdSQ/' },
      { type: 'instagram', url: 'https://www.instagram.com/surajmad8268/' },
    ],
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
