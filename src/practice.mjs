// Practice areas. Each becomes its own page (one search intent per page)
// and its `guide` block feeds the "What is your matter about?" hero.
// Legal content is general information and must be reviewed by the advocate.

export const practice = [
  {
    slug: 'divorce-lawyer-pune',
    name: 'Divorce',
    group: 'Family',
    title: 'Divorce Lawyer in Pune: Mutual Consent and Contested',
    description:
      'Mutual consent and contested divorce cases at Pune Family Court, Shivaji Nagar. Process, timelines and documents explained.',
    h1: 'Divorce cases at Pune Family Court',
    short: 'Mutual consent and contested divorce, including alimony and custody arising from it.',
    guide: {
      label: 'Divorce',
      court: 'Family Court, Pune, at Shivaji Nagar, directly in front of our office.',
      first:
        'If you both agree, a joint petition for mutual consent divorce is filed. If not, one spouse files a contested petition and the other is served notice.',
      docs: ['Marriage certificate or wedding invitation and photographs', 'Address proof of both spouses', 'Proof of the date you began living separately', 'Income and asset details of both spouses'],
    },
    body: `
<h2>Mutual consent divorce</h2>
<p>When both spouses agree to end the marriage, they can file a joint petition under Section 13B of the Hindu Marriage Act, 1955, or Section 28 of the Special Marriage Act, 1954. The law asks that you have lived separately for at least one year before filing.</p>
<p>The case moves in two stages. The first motion records your joint statements. The second motion is ordinarily heard six months later. The Supreme Court held in <em>Amardeep Singh v. Harveen Kaur</em> (2017) that this six-month period can be waived where settlement is complete and there is no chance of reconciliation.</p>
<p>Most of the work is in the settlement terms: alimony, the return of jewellery and stridhan, custody and visiting arrangements, and the withdrawal of any pending cases. We draft these terms so they are complete and enforceable.</p>

<h2>Contested divorce</h2>
<p>When only one spouse wants a divorce, the petition must prove a ground recognised by law, such as cruelty, desertion for two years or more, adultery, conversion to another religion, or serious mental disorder. The other spouse files a written statement, both sides lead evidence, and the court decides.</p>
<p>Contested cases take longer and depend heavily on evidence. Messages, emails, medical records and police complaints made at the time are often what decides them.</p>

<h2>Which court hears your case</h2>
<p>Under Section 19 of the Hindu Marriage Act, a petition can be filed where the marriage took place, where the respondent lives, where you last lived together, or where the wife lives if she is the petitioner. For couples in Pune and Pimpri-Chinchwad, this is usually the Family Court at Shivaji Nagar.</p>

<h2>How we work on divorce cases</h2>
<ul>
  <li>A first meeting to understand the marriage, the separation and what you want from the outcome.</li>
  <li>Advice on whether mutual consent is realistic, and what a fair settlement looks like.</li>
  <li>Drafting the petition, affidavits and settlement terms.</li>
  <li>Appearing at the Family Court, including the counselling and mediation stages.</li>
</ul>`,
    faqs: [
      { q: 'How long does a mutual consent divorce take in Pune?', a: 'Usually around six to seven months from filing, because of the six-month gap between the two motions. Where the court waives that period, it can be completed sooner.' },
      { q: 'Do both spouses have to come to court?', a: 'Both spouses are ordinarily present for the first and second motion. Where one spouse lives abroad, courts have allowed appearance by video conference in suitable cases.' },
      { q: 'Can a divorce petition be filed if we married outside Pune?', a: 'Yes, if one of the conditions in Section 19 of the Hindu Marriage Act is met, such as the respondent living in Pune or the couple last living together here.' },
    ],
    related: ['child-custody-lawyer-pune', 'maintenance-alimony-lawyer-pune'],
  },
  {
    slug: 'child-custody-lawyer-pune',
    name: 'Child custody',
    group: 'Family',
    title: 'Child Custody Lawyer in Pune: Custody and Visitation',
    description:
      'Child custody, visitation and guardianship cases at Pune Family Court. How courts decide custody and what you can apply for.',
    h1: 'Child custody and visitation in Pune',
    short: 'Interim and permanent custody, visitation rights and guardianship of minors.',
    guide: {
      label: 'Child custody',
      court: 'Family Court, Pune, at Shivaji Nagar.',
      first:
        'An application for custody or visitation is filed, often with a request for interim arrangements while the case is heard.',
      docs: ["Child's birth certificate", 'School records and fee receipts', "Proof of your income and the child's living arrangements", "Any prior orders about the child"],
    },
    body: `
<h2>What the court looks at</h2>
<p>In every custody case, the welfare of the child comes first. The court considers the child's age, health, schooling, emotional ties with each parent, and the stability of each home. Older children may be asked for their preference.</p>
<p>Under the Hindu Minority and Guardianship Act, 1956, the custody of a child under five years is ordinarily with the mother. This is a starting point, not an absolute rule, and courts depart from it where the child's welfare requires.</p>

<h2>What you can apply for</h2>
<ul>
  <li><strong>Interim custody</strong> while the main case is pending.</li>
  <li><strong>Permanent custody</strong>, decided after evidence.</li>
  <li><strong>Visitation</strong>: day visits, weekend stays, holiday time and video calls for the parent who does not have custody.</li>
  <li><strong>Guardianship</strong> under the Guardians and Wards Act, 1890, including permission to deal with a minor's property.</li>
</ul>

<h2>Custody alongside divorce</h2>
<p>Custody is often decided together with divorce. In mutual consent divorce, parents agree on custody and visiting terms, and the court records them. In contested cases, custody can be decided as part of the divorce or in a separate application.</p>

<h2>How we help</h2>
<p>We help you put together a realistic parenting plan, gather the school, medical and financial records the court will ask for, and present the case in a way that keeps the focus on the child.</p>`,
    faqs: [
      { q: 'Can a father get custody of a young child?', a: 'Yes. The rule for children under five is a starting point. Courts award custody to the father where that better serves the welfare of the child.' },
      { q: 'Can a custody order be changed later?', a: 'Yes. Custody orders can be modified when circumstances change, for example a change of school, residence or the health of a parent.' },
      { q: 'What if the other parent does not allow the agreed visits?', a: 'You can apply to the Family Court to enforce the visitation order. Repeated breaches can affect how the court views custody.' },
    ],
    related: ['divorce-lawyer-pune', 'maintenance-alimony-lawyer-pune'],
  },
  {
    slug: 'maintenance-alimony-lawyer-pune',
    name: 'Maintenance and alimony',
    group: 'Family',
    title: 'Maintenance and Alimony Lawyer in Pune',
    description:
      'Maintenance for wife, children and parents under Section 144 BNSS, interim maintenance and permanent alimony. Pune Family Court.',
    h1: 'Maintenance and alimony cases in Pune',
    short: 'Maintenance for a wife, children or parents, interim maintenance and permanent alimony.',
    guide: {
      label: 'Maintenance',
      court: 'Family Court, Pune, at Shivaji Nagar.',
      first:
        'An application for maintenance is filed with an affidavit disclosing your income, assets and expenses. The court can order interim maintenance early in the case.',
      docs: ['Salary slips, bank statements and income tax returns', 'Proof of household and child expenses', "Any evidence of the other spouse's income", 'Marriage proof and address proof'],
    },
    body: `
<h2>Who can claim maintenance</h2>
<p>Under Section 144 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (earlier Section 125 of the Code of Criminal Procedure), a wife, children and parents who are unable to maintain themselves can claim maintenance from a person with sufficient means who neglects or refuses to maintain them.</p>
<p>Maintenance can also be claimed under Section 24 (during a case) and Section 25 (permanent alimony) of the Hindu Marriage Act, under Section 20 of the Protection of Women from Domestic Violence Act, 2005, and under the Hindu Adoptions and Maintenance Act, 1956.</p>

<h2>How the amount is decided</h2>
<p>In <em>Rajnesh v. Neha</em> (2020), the Supreme Court made it compulsory for both sides to file an affidavit disclosing their assets and liabilities. The court considers both incomes, the standard of living during the marriage, the needs of the children, and reasonable expenses. It also held that maintenance is ordinarily payable from the date of the application.</p>

<h2>If maintenance is not paid</h2>
<p>An order for maintenance can be enforced through the court. Arrears can be recovered, and the court has power to issue a warrant against a person who fails to pay without sufficient cause.</p>

<h2>How we help</h2>
<p>Most maintenance cases turn on proof of income. We help you prepare an accurate disclosure affidavit and gather evidence of the other side's real earnings, whether you are claiming maintenance or responding to a claim.</p>`,
    faqs: [
      { q: 'Can a working wife claim maintenance?', a: 'Earning an income does not automatically bar a claim. The court compares both incomes and the standard of living, and may award maintenance where her income is not enough to maintain that standard.' },
      { q: 'How soon can interim maintenance be ordered?', a: 'Courts can order interim maintenance early in the case, based on the disclosure affidavits, without waiting for the final decision.' },
      { q: 'Can maintenance be claimed under more than one law?', a: 'Yes, but the court takes into account amounts already awarded under another law, so the claims are adjusted against each other.' },
    ],
    related: ['divorce-lawyer-pune', 'domestic-violence-lawyer-pune'],
  },
  {
    slug: 'domestic-violence-lawyer-pune',
    name: 'Domestic violence',
    group: 'Family',
    title: 'Domestic Violence Lawyer in Pune: DV Act Cases',
    description:
      'Cases under the Protection of Women from Domestic Violence Act, 2005 in Pune: protection orders, residence orders and monetary relief.',
    h1: 'Domestic violence cases in Pune',
    short: 'Protection, residence and monetary relief under the Domestic Violence Act, 2005, for complainants and respondents.',
    guide: {
      label: 'Domestic violence',
      court: "Judicial Magistrate First Class, Pune, at Shivaji Nagar.",
      first:
        'An application is filed under Section 12 of the Domestic Violence Act, with or without a Domestic Incident Report from a Protection Officer. Urgent interim orders can be asked for.',
      docs: ['Any police complaints or medical records', 'Messages, emails or recordings', 'Proof of the shared household', 'Details of expenses and income'],
    },
    body: `
<h2>What the law covers</h2>
<p>The Protection of Women from Domestic Violence Act, 2005, covers physical, sexual, verbal, emotional and economic abuse by a husband, partner or their relatives in a shared household.</p>

<h2>Orders the Magistrate can pass</h2>
<ul>
  <li><strong>Protection orders</strong> (Section 18) to stop acts of violence and contact.</li>
  <li><strong>Residence orders</strong> (Section 19) so the woman is not dispossessed from the shared household.</li>
  <li><strong>Monetary relief</strong> (Section 20) for expenses, loss of earnings and maintenance.</li>
  <li><strong>Custody orders</strong> (Section 21) for children, on a temporary basis.</li>
  <li><strong>Compensation</strong> (Section 22) for injuries, including mental torture.</li>
</ul>
<p>The Magistrate can pass interim and ex parte orders when the situation is urgent.</p>

<h2>Domestic violence and criminal cases</h2>
<p>A case under the Domestic Violence Act is civil in nature. Cruelty by a husband or his relatives is separately an offence under Section 85 of the Bharatiya Nyaya Sanhita, 2023 (earlier Section 498A of the Indian Penal Code), which is pursued through a police complaint.</p>

<h2>If you are the respondent</h2>
<p>We also represent husbands and family members who have been named in a domestic violence application, from filing a reply to contesting interim orders and leading evidence.</p>`,
    faqs: [
      { q: 'Is a police complaint needed before filing?', a: 'No. An application under Section 12 can be filed directly before the Magistrate. A Protection Officer can also help prepare a Domestic Incident Report.' },
      { q: 'Can the woman stay in the house during the case?', a: 'The Magistrate can pass a residence order protecting her right to stay in the shared household, whether or not she owns it.' },
      { q: 'Can relatives of the husband be named?', a: 'Relatives can be named, but courts have warned against naming relatives without specific allegations against them, and such names can be challenged.' },
    ],
    related: ['maintenance-alimony-lawyer-pune', 'criminal-lawyer-pune'],
  },
  {
    slug: 'criminal-lawyer-pune',
    name: 'Bail and criminal defence',
    group: 'Criminal',
    title: 'Criminal Lawyer in Pune: Bail and Anticipatory Bail',
    description:
      'Anticipatory bail, regular bail, FIR quashing and criminal trials in Pune under the BNS, BNSS and BSA.',
    h1: 'Bail and criminal defence in Pune',
    short: 'Anticipatory and regular bail, FIR quashing, and defence at trial.',
    guide: {
      label: 'Bail or FIR',
      court: 'Sessions Court, Pune, at Shivaji Nagar, or the Bombay High Court.',
      first:
        'If arrest is feared, an application for anticipatory bail is filed. If someone is already in custody, a regular bail application is filed before the Magistrate or Sessions Court.',
      docs: ['Copy of the FIR or complaint, if available', 'Any notice received from the police', 'Identity and address proof', 'Documents supporting your version of events'],
    },
    body: `
<h2>The new criminal laws</h2>
<p>Since 1 July 2024, criminal cases are governed by the Bharatiya Nyaya Sanhita (which replaced the Indian Penal Code), the Bharatiya Nagarik Suraksha Sanhita (which replaced the Code of Criminal Procedure) and the Bharatiya Sakshya Adhiniyam (which replaced the Indian Evidence Act). Offences committed before that date continue under the old laws.</p>

<h2>Anticipatory bail</h2>
<p>If you fear arrest in a non-bailable offence, you can apply for anticipatory bail under Section 482 of the BNSS (earlier Section 438 CrPC) to the Sessions Court or the High Court. If it is granted, you are released on bail if arrested, usually on conditions such as joining the investigation.</p>

<h2>Regular bail</h2>
<p>A person already in custody can apply for regular bail under Sections 480 and 483 of the BNSS. The court considers the nature of the offence, the evidence, the risk of the accused fleeing or tampering with evidence, and the time already spent in custody.</p>

<h2>Quashing of FIRs</h2>
<p>The High Court can quash an FIR or criminal proceedings under its inherent powers, now in Section 528 of the BNSS (earlier Section 482 CrPC), for example where the allegations do not disclose an offence or where the parties have settled a matrimonial dispute.</p>

<h2>How we help</h2>
<p>Criminal matters move quickly in the first days. We advise on your rights when the police issue a notice, prepare and argue bail applications, and defend the case at trial.</p>`,
    faqs: [
      { q: 'Should I apply for anticipatory bail before the FIR is registered?', a: 'You can apply when you have a reasonable belief that you may be arrested, even before an FIR. The application must show specific facts behind that belief.' },
      { q: 'Is a cruelty case under Section 85 BNS bailable?', a: 'Cruelty by a husband or relatives under Section 85 BNS is non-bailable. Anticipatory bail is commonly sought in such matters.' },
      { q: 'Can a matrimonial criminal case be closed after settlement?', a: 'Where the dispute is essentially private and the parties have genuinely settled, the High Court can quash the proceedings.' },
    ],
    related: ['domestic-violence-lawyer-pune', 'cheque-bounce-lawyer-pune'],
  },
  {
    slug: 'cheque-bounce-lawyer-pune',
    name: 'Cheque bounce',
    group: 'Criminal',
    title: 'Cheque Bounce Lawyer in Pune: Section 138 NI Act',
    description:
      'Cheque bounce cases under Section 138 of the Negotiable Instruments Act in Pune: legal notice, complaint, deadlines and defence.',
    h1: 'Cheque bounce cases under Section 138',
    short: 'Legal notices, complaints and defence in cheque dishonour cases.',
    guide: {
      label: 'Cheque bounce',
      court: 'Judicial Magistrate First Class, Pune, where your bank branch is.',
      first:
        'A legal demand notice must be sent within 30 days of receiving the bank’s return memo. If the amount is not paid within 15 days of the notice, a complaint can be filed.',
      docs: ['The original dishonoured cheque', "The bank's return memo", 'Proof of the debt: agreement, invoices or messages', 'Your bank statement showing the return'],
    },
    body: `
<h2>The deadlines that decide the case</h2>
<p>A cheque bounce case under Section 138 of the Negotiable Instruments Act, 1881 depends on strict time limits. Missing one can end the case before it starts.</p>
<ol>
  <li>The cheque must be presented within its validity, which is three months from its date.</li>
  <li>After it is returned unpaid, a written demand notice must be sent within 30 days of receiving the return memo.</li>
  <li>The drawer has 15 days from receiving the notice to pay.</li>
  <li>If payment is not made, the complaint must be filed within one month after those 15 days end.</li>
</ol>

<h2>Where to file</h2>
<p>Under Section 142(2), the complaint is filed in the court with jurisdiction over the bank branch where the payee presented the cheque for collection. For most Pune account holders, this is the Magistrate's court in Pune.</p>

<h2>What the court can order</h2>
<p>The offence is punishable with imprisonment of up to two years, a fine of up to twice the cheque amount, or both. The court can order the accused to pay interim compensation of up to 20% of the cheque amount under Section 143A. Many cases end in a settlement once the complaint is filed.</p>

<h2>If you received the notice</h2>
<p>A reply to the notice and a defence at trial can rely on points such as the cheque not being for a legally enforceable debt, or the notice being defective. We act for both payees and drawers.</p>`,
    faqs: [
      { q: 'Can the notice be sent on WhatsApp or email?', a: 'Courts have accepted notices sent by email and messaging apps in some cases, but registered post or speed post with tracking remains the safest proof of service.' },
      { q: 'What if I miss the 30-day notice deadline?', a: 'If the cheque is still within its three-month validity, it can often be presented again, which starts a fresh cause of action.' },
      { q: 'Can the case be settled?', a: 'Yes. The offence is compoundable, so the parties can settle at any stage, and the court records the compromise.' },
    ],
    related: ['criminal-lawyer-pune', 'property-civil-lawyer-pune'],
  },
  {
    slug: 'property-civil-lawyer-pune',
    name: 'Property and civil disputes',
    group: 'Civil',
    title: 'Property and Civil Lawyer in Pune',
    description:
      'Property and civil disputes in Pune: partition suits, injunctions, specific performance, succession and recovery of money.',
    h1: 'Property and civil disputes in Pune',
    short: 'Partition, injunctions, sale agreements, succession and recovery suits.',
    guide: {
      label: 'Property',
      court: 'Civil Court, Pune, at Shivaji Nagar.',
      first:
        'We review the title papers and the dispute. Many matters begin with a legal notice; urgent ones begin with a suit and an application for a temporary injunction.',
      docs: ['Sale deed, 7/12 extract or property card', 'Agreements and payment receipts', 'Index II and mutation entries', 'Any notices exchanged'],
    },
    body: `
<h2>Common property disputes</h2>
<ul>
  <li><strong>Partition</strong> of family or ancestral property between heirs.</li>
  <li><strong>Injunctions</strong> to stop encroachment, construction or a sale while a dispute is decided.</li>
  <li><strong>Specific performance</strong> of an agreement for sale under the Specific Relief Act, 1963.</li>
  <li><strong>Succession</strong>: succession certificates, probate of wills and letters of administration.</li>
  <li><strong>Recovery</strong> of money lent or owed under a contract.</li>
</ul>

<h2>Title documents in Maharashtra</h2>
<p>Most property disputes in and around Pune start with the papers: the sale deed, the 7/12 extract for agricultural land, the property card in city areas, mutation entries and the Index II from the sub-registrar. We begin every property matter by reviewing these.</p>

<h2>Time limits</h2>
<p>The Limitation Act, 1963 sets deadlines for most civil claims. A suit for specific performance, for example, must ordinarily be filed within three years. If you have a dispute, it is worth getting advice before the period runs out.</p>

<h2>How we help</h2>
<p>We advise on title and on whether a dispute is better settled or litigated, send legal notices, file suits and urgent injunction applications, and represent you through trial.</p>`,
    faqs: [
      { q: 'Do daughters have a share in ancestral property?', a: 'Yes. Since the 2005 amendment to the Hindu Succession Act, daughters are coparceners with the same rights as sons, as confirmed by the Supreme Court in Vineeta Sharma v. Rakesh Sharma (2020).' },
      { q: 'Can a sale be stopped while a dispute is pending?', a: 'The court can grant a temporary injunction restraining a sale or transfer while the suit is decided, if a prima facie case is shown.' },
      { q: 'What is the first step in a property dispute?', a: 'Collecting the title documents and land records. Most of the strategy depends on what they show.' },
    ],
    related: ['cheque-bounce-lawyer-pune', 'divorce-lawyer-pune'],
  },
];
