// "What's happening right now?" picker on the home page.
// Plain next steps for the moment someone first searches for a criminal lawyer.

export const situations = [
  {
    id: 'notice',
    label: 'I got a police notice',
    now: [
      'Don’t ignore it. Not appearing can lead to arrest.',
      'Get a copy of the FIR or complaint if you can.',
      'Speak to an advocate before you go, and decide together whether to apply for anticipatory bail first.',
    ],
    law: 'A notice of appearance under Section 35(3) BNSS (earlier 41A CrPC). If you comply, the police must record reasons before arresting you.',
    link: ['legal-guides/police-notice-section-35-bnss.html', 'What to do with a police notice'],
    wa: 'Hello, I have received a police notice and would like advice.',
  },
  {
    id: 'fear-arrest',
    label: 'An FIR is filed, I fear arrest',
    now: [
      'Collect the FIR and every document that supports your version.',
      'Apply for anticipatory bail in the Sessions Court. Interim protection can be granted at the first hearing.',
      'Avoid contacting the complainant or witnesses.',
    ],
    law: 'Anticipatory bail under Section 482 BNSS (earlier 438 CrPC). Barred under the SC/ST Act and MCOCA, with exceptions.',
    link: ['anticipatory-bail-lawyer-pune.html', 'Anticipatory bail in Pune'],
    wa: 'Hello, an FIR has been filed and I fear arrest. I would like advice on anticipatory bail.',
  },
  {
    id: 'arrested',
    label: 'Someone has been arrested',
    now: [
      'Find out which police station and which sections are in the FIR.',
      'They must be produced before a Magistrate within 24 hours. A bail application can be filed then.',
      'Arrange a surety with identity and address proof.',
      'Note the date of the first remand. It starts the clock for default bail.',
    ],
    law: 'Regular bail under Sections 480 and 483 BNSS. Default bail under Section 187(3) if the chargesheet is not filed in 60 or 90 days.',
    link: ['bail-lawyer-pune.html', 'Regular bail and default bail'],
    wa: 'Hello, a family member has been arrested and I need advice on bail.',
  },
  {
    id: 'special-act',
    label: 'The case is under a special Act',
    now: [
      'Check which Act the FIR invokes: MPID, POCSO, SC/ST, MCOCA or NDPS.',
      'Expect stricter bail conditions and a special court.',
      'Look closely at whether the conditions for applying that Act are actually met. It is often the strongest point for bail.',
    ],
    law: 'Each Act has its own court and bail rules, such as Section 21(4) MCOCA, Section 37 NDPS and Section 18 of the SC/ST Act.',
    link: ['criminal-lawyer-pune.html', 'Special Acts we handle'],
    wa: 'Hello, I would like advice about a case under a special Act.',
  },
  {
    id: 'quash',
    label: 'The FIR should be quashed',
    now: [
      'Read the FIR as it stands: does it actually describe an offence?',
      'If the dispute is civil or has been settled, collect the documents that show it.',
      'A petition is filed in the Bombay High Court, which can grant interim protection.',
    ],
    law: 'Quashing under Section 528 BNSS (earlier 482 CrPC) and Article 226 of the Constitution.',
    link: ['fir-quashing-lawyer-pune.html', 'Quashing an FIR'],
    wa: 'Hello, I would like advice about getting an FIR quashed.',
  },
];

// Options for the default bail calculator: days allowed for the chargesheet.
export const bailPeriods = [
  { id: 'general', days: 60, label: 'Most offences (punishable with less than 10 years)', note: '60 days under Section 187(3) BNSS.' },
  { id: 'serious', days: 90, label: 'Death, life imprisonment, or 10 years or more', note: '90 days under Section 187(3) BNSS.' },
  { id: 'ndps', days: 180, label: 'NDPS: commercial quantity, or Sections 19, 24, 27A', note: '180 days, which the Special Court can extend to one year.' },
  { id: 'mcoca', days: 90, label: 'MCOCA', note: '90 days, which the Special Court can extend to 180 days on the Public Prosecutor’s report.' },
];
