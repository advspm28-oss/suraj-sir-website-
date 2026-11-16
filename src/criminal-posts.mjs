// Criminal law guides. Each targets one question people search for, by its
// section number. General information only: the advocate must review them.

export const criminalPosts = [
  {
    slug: 'default-bail-section-187-bnss',
    title: 'Default bail under Section 187(3) BNSS: the 60 and 90-day rule',
    description:
      'When an accused gets default bail because the chargesheet was not filed in 60 or 90 days, how the days are counted, and the longer periods under NDPS and MCOCA.',
    date: '2026-11-14',
    practice: 'bail-lawyer-pune',
    readMinutes: 6,
    summary: 'How the 60 and 90 days are counted, why the application must come before the chargesheet, and the longer periods under special Acts.',
    body: `
<p>If the police keep someone in custody but fail to file a chargesheet in time, the law gives the accused a right to be released on bail. This is called default bail, or statutory bail. Since 1 July 2024, it is governed by Section 187(3) of the Bharatiya Nagarik Suraksha Sanhita, which replaced Section 167(2) of the Code of Criminal Procedure.</p>

<h2>The time limits</h2>
<ul>
  <li><strong>90 days</strong> where the investigation relates to an offence punishable with death, imprisonment for life, or imprisonment for a term of ten years or more.</li>
  <li><strong>60 days</strong> for any other offence.</li>
</ul>
<p>Whether an offence punishable with imprisonment "up to ten years" falls in the 60 or 90-day category has been argued in many cases. Check the exact punishment for each section in the FIR with your advocate.</p>

<h2>How the days are counted</h2>
<p>The period runs from the date the Magistrate first authorises detention (the first remand), not from the date of arrest. In <em>Enforcement Directorate v. Kapil Wadhawan</em> (2023), the Supreme Court held that the date of remand is included in the count. So for a 60-day case where the first remand was on 1 March, the 60th day is 29 April, and the right accrues on 30 April if no chargesheet has been filed.</p>
<p>Our <a href="../index.html#default-bail">default bail date calculator</a> does this count for you.</p>

<h2>The right must be claimed in time</h2>
<p>The right is called "indefeasible", but it has to be exercised. The accused must apply for default bail after the period ends and before the chargesheet is filed. If the police file the chargesheet first, the right is lost. In <em>M. Ravindran v. Intelligence Officer, DRI</em> (2021), the Supreme Court held that once the accused has applied, filing the chargesheet afterwards does not defeat the right. In practice, this means the application should be ready to file on the first day the right arises.</p>

<h2>Longer periods under special Acts</h2>
<table class="table">
  <thead><tr><th>Law</th><th>Period</th></tr></thead>
  <tbody>
    <tr><td>NDPS Act: commercial quantity, or Sections 19, 24, 27A</td><td>180 days, extendable to one year by the Special Court</td></tr>
    <tr><td>MCOCA</td><td>90 days, extendable to 180 days by the Special Court</td></tr>
    <tr><td>Unlawful Activities (Prevention) Act</td><td>90 days, extendable to 180 days by the court</td></tr>
  </tbody>
</table>
<p>An extension is valid only if the Public Prosecutor files a report showing the progress of the investigation and the specific reasons for more time, and the court grants it before the original period ends. In Pune, the Special MCOCA Court has released accused persons on default bail where these requirements were not met.</p>

<h2>Conditions</h2>
<p>Default bail is granted on furnishing bail. The court can impose conditions, but it cannot refuse default bail on the merits of the case once the right has accrued and been claimed in time.</p>`,
  },
  {
    slug: 'sc-st-act-anticipatory-bail-section-18',
    title: 'SC/ST Act anticipatory bail: Section 18 and its limits',
    description:
      'Section 18 of the SC/ST Act bars anticipatory bail, but courts grant it where no prima facie case is made out. What the Supreme Court has said.',
    date: '2026-11-12',
    practice: 'sc-st-atrocities-act-lawyer-pune',
    readMinutes: 5,
    summary: 'The bar in Section 18, the 2018 amendment, and the Supreme Court rulings that allow anticipatory bail where no prima facie case exists.',
    body: `
<p>A complaint under the Scheduled Castes and the Scheduled Tribes (Prevention of Atrocities) Act, 1989 is one of the few situations where the law says anticipatory bail is not available. That bar is real, but it is not absolute.</p>

<h2>What Section 18 says</h2>
<p>Section 18 provides that the anticipatory bail provision (Section 438 CrPC, now Section 482 BNSS) does not apply to anyone accused of an offence under the Act.</p>

<h2>Mahajan, the 2018 amendment, and Prathvi Raj Chauhan</h2>
<p>In <em>Subhash Kashinath Mahajan v. State of Maharashtra</em> (2018), the Supreme Court diluted the bar and required a preliminary enquiry before registering an FIR. Parliament responded by inserting Section 18A, which says no preliminary enquiry or approval is needed, and that the anticipatory bail provision does not apply notwithstanding any judgment. The Court later recalled the Mahajan directions.</p>
<p>In <em>Prathvi Raj Chauhan v. Union of India</em> (2020), the Supreme Court upheld Section 18A. But it also recognised that where the complaint does not make out a prima facie case under the Act, the bar does not apply, and courts can grant anticipatory bail.</p>

<h2>When no prima facie case is made out</h2>
<p>Courts look at the FIR as it stands and ask whether, if every word is true, it shows an offence under the Act. Common reasons it may not:</p>
<ul>
  <li><strong>No caste element.</strong> In <em>Hitesh Verma v. State of Uttarakhand</em> (2020), the Court held that an insult is not an offence under the Act merely because the person insulted belongs to an SC or ST. It must be because of caste.</li>
  <li><strong>No intent to humiliate.</strong> In <em>Shajan Skaria v. State of Kerala</em> (2024), the Court granted anticipatory bail because the allegations did not show intent to humiliate on the basis of caste.</li>
  <li><strong>Not in public view.</strong> The main insult and intimidation offences require the act to happen in a place within public view.</li>
</ul>

<h2>How to approach it</h2>
<p>An anticipatory bail application in an Atrocities Act case must first persuade the court that no prima facie case exists. That turns on a careful reading of the FIR: who was present, where it happened, what exactly was said, and whether the dispute has a history unrelated to caste. If the FIR does disclose a prima facie case, the remedy is regular bail before the Special Court, and an appeal under Section 14A to the High Court if it is refused.</p>`,
  },
  {
    slug: 'bail-in-pocso-cases',
    title: 'Bail in POCSO cases: what courts look at',
    description:
      'How bail works under the POCSO Act: no blanket bar, the Section 29 presumption, age determination, notice to the informant, and anticipatory bail limits.',
    date: '2026-11-10',
    practice: 'pocso-act-lawyer-pune',
    readMinutes: 5,
    summary: 'No blanket bar on bail, but the presumption of guilt, the child’s safety and the age records all shape the outcome.',
    body: `
<p>The Protection of Children from Sexual Offences Act, 2012 does not contain any provision barring bail. But POCSO cases are treated with particular seriousness, and bail is never routine.</p>

<h2>Factors courts weigh</h2>
<ul>
  <li>The nature of the offence alleged and the punishment it carries.</li>
  <li>The age of the child, and the age of the accused.</li>
  <li>Whether the accused is in a position to pressure the child or the family, for example as a relative, neighbour or teacher.</li>
  <li>The stage of the case: whether the child's evidence has been recorded.</li>
  <li>The time already spent in custody.</li>
</ul>

<h2>The presumption under Section 29</h2>
<p>For the main offences, Section 29 requires the court to presume the accused committed the offence unless the contrary is proved. The presumption applies at trial once the prosecution establishes the foundational facts. It does not mean bail must be refused, but it shapes how courts view the strength of the case.</p>

<h2>Age of the victim</h2>
<p>Because the Act applies only to children under 18, age is often decisive, particularly where the victim is 16 or 17. Age is determined under Section 94 of the Juvenile Justice Act, 2015, using school or matriculation records first, then a municipal birth certificate, and only then a medical test. Conflicting records can matter at the bail stage and at trial.</p>

<h2>Relationships between adolescents</h2>
<p>Consent is not a defence under POCSO, because a person under 18 cannot legally consent. Even so, where the case involves a relationship between two adolescents close in age, courts have taken that context into account when deciding bail.</p>

<h2>Notice to the informant</h2>
<p>In serious sexual offences, the informant or a person authorised by them must be given notice and be present when the bail application is heard. Bail orders passed without this can be set aside.</p>

<h2>Anticipatory bail</h2>
<p>Anticipatory bail is excluded for the most serious offences of rape against girls under 16 and gang rape against girls under 18, under Section 482(4) BNSS. In other POCSO cases, an application can be made to the Sessions Court or High Court.</p>

<h2>Bail conditions</h2>
<p>Courts commonly direct the accused to stay away from the child and the child's residence and school, not to contact the family, and to report to the police station.</p>`,
  },
  {
    slug: 'mpid-act-explained',
    title: 'The MPID Act explained: for depositors, directors and employees',
    description:
      'How the MPID Act works: who can be prosecuted, attachment of property, the Designated Court, and what depositors can do to recover money.',
    date: '2026-11-08',
    practice: 'mpid-act-lawyer-pune',
    readMinutes: 5,
    summary: 'Who is liable when a deposit scheme defaults, how property is attached and sold, and how depositors get their money back.',
    body: `
<p>When an investment or deposit scheme in Pune stops paying, the case is usually registered under the Maharashtra Protection of Interest of Depositors (in Financial Establishments) Act, 1999, known as the MPID Act, alongside cheating and breach of trust under the BNS.</p>

<h2>What is a "financial establishment"?</h2>
<p>Almost any person or entity that accepts deposits under a scheme or arrangement: a company, a firm, an association, or an individual. Government-owned corporations and banks regulated under banking law are outside the Act.</p>

<h2>Who can be prosecuted</h2>
<p>Section 3 makes it an offence for a financial establishment to fraudulently default in repaying deposits or the promised returns, or to fail to provide the promised service. Every person responsible for the management or conduct of the business, including promoters, partners, directors, managers and employees, can be prosecuted. The punishment is imprisonment of up to six years and a fine of up to one lakh rupees.</p>
<p>For a director or employee, the key questions are what their role was and when. A person who had no part in accepting deposits, or who left before the default, may have a strong defence.</p>

<h2>Attachment of property</h2>
<ol>
  <li>The State Government issues a notification attaching money and property of the establishment, and of persons connected with it, including property held in other people's names.</li>
  <li>A Competent Authority takes charge of the attached property.</li>
  <li>The Competent Authority applies to the Designated Court, which hears objections and decides whether to make the attachment absolute.</li>
  <li>Property can then be sold and the money distributed to depositors.</li>
</ol>

<h2>For depositors</h2>
<ul>
  <li>File a complaint with the police with your deposit receipts, agreements and bank records. In Pune, larger cases go to the Economic Offences Wing.</li>
  <li>Keep copies of every document showing the deposit and any returns received.</li>
  <li>Follow the attachment and claims process before the Designated Court, so that your claim is counted when the property is distributed.</li>
</ul>

<h2>For the accused</h2>
<p>Bail in MPID cases often depends on the amount involved, the repayments already made, cooperation with the investigation and any credible repayment plan. Objections to attachment should be prepared early, with documents showing how each property was acquired.</p>`,
  },
  {
    slug: 'police-notice-section-35-bnss',
    title: 'Got a police notice under Section 35 BNSS? What to do',
    description:
      'What a notice of appearance under Section 35(3) BNSS (earlier 41A CrPC) means, whether you can be arrested, and your rights if you are.',
    date: '2026-11-06',
    practice: 'criminal-lawyer-pune',
    readMinutes: 4,
    summary: 'What the notice means, why you must comply, and your rights at the police station and on arrest.',
    body: `
<p>A notice under Section 35(3) of the Bharatiya Nagarik Suraksha Sanhita (earlier Section 41A CrPC) asks you to appear before the police in connection with a case. It is issued instead of arresting you, usually for offences punishable with up to seven years.</p>

<h2>Do I have to go?</h2>
<p>Yes. Under Section 35(5) and (6), if you comply with the notice you should not be arrested unless the police record reasons. If you fail to comply, or refuse to identify yourself, the police can arrest you.</p>

<h2>Before you go</h2>
<ul>
  <li>Speak to an advocate and show them the notice and any copy of the FIR.</li>
  <li>Carry identity proof and the notice.</li>
  <li>Carry copies, not originals, of documents relevant to your version.</li>
  <li>If you fear arrest despite the notice, discuss whether to apply for anticipatory bail first.</li>
</ul>

<h2>Your rights if you are arrested</h2>
<ul>
  <li><strong>Grounds of arrest.</strong> You must be told the grounds of arrest and, in a bailable offence, that you are entitled to bail (Section 47 BNSS). The Supreme Court held in <em>Vihaan Kumar v. State of Haryana</em> (2025) that failure to inform the grounds of arrest makes the arrest illegal.</li>
  <li><strong>Inform a relative.</strong> The police must inform a relative or friend you nominate (Section 48 BNSS).</li>
  <li><strong>Meet an advocate.</strong> You may meet an advocate of your choice during interrogation, though not throughout it (Section 38 BNSS).</li>
  <li><strong>Produced within 24 hours.</strong> You must be produced before a Magistrate within 24 hours, excluding travel time (Section 58 BNSS).</li>
  <li><strong>Medical examination.</strong> You can ask to be medically examined.</li>
</ul>

<h2>Senior citizens and the infirm</h2>
<p>For offences punishable with less than three years, a person who is infirm or above 60 years of age cannot be arrested without the prior permission of an officer not below the rank of Deputy Superintendent of Police (Section 35(7) BNSS).</p>`,
  },
];
