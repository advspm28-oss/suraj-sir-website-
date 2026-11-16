# Google Business Profile: setup kit

Everything needed to create the Google Business Profile for **Adv. S. P. Madewad Jamadar & Associates**. Each field below is written to match the website exactly, because Google compares the two.

The profile must be created by the advocate, signed in to the Google account that will own it (`advspm28@gmail.com` is the natural choice). Google then verifies that the advocate really runs the office, so this part can't be done by anyone else.

**Time needed:** about 15 minutes to fill in, plus verification, which usually takes a few days.

---

## Before you start

- **Signboard.** Google checks that the office has a permanent sign showing the business name. If there isn't one at Office No. 2, put one up first. The profile name must match it exactly.
- **Check for an existing listing.** Search Google Maps for the office. If a listing already appears, claim it ("Own this business?") rather than creating a second one. Duplicates get suspended.
- **Confirm the details marked "confirm" below** (PIN code, hours). Whatever goes on the profile must also be on the website.

---

## Step 1: Create the profile

Go to **business.google.com**, sign in, and choose **Add business**. Enter these values when asked.

### Business name

```
Adv. S. P. Madewad Jamadar & Associates
```

Use exactly this, matching the visiting card and signboard. Don't add words like "Best Divorce Lawyer Pune". Google suspends profiles with keywords in the name.

### Business category

Choose **one primary category**, the one that describes most of the work:

| If most work is… | Primary category |
|---|---|
| Family Court matters (likely, given the office location) | `Family law attorney` |
| A mix of everything | `Lawyer` |

Then add these as **additional categories** (leave out any that don't apply):

- `Divorce lawyer`
- `Criminal justice attorney`
- `Lawyer` (if not chosen as primary)
- `Legal services`

Type the name and pick it from Google's list. Categories can't be typed freely.

### Location customers can visit?

Choose **Yes**, then enter the address in these fields:

| Field | Value |
|---|---|
| Country | India |
| Street address | `Office No. 2, Supreme Tower, Family Court Back Side, Old Tophkhana Line` |
| Area | `Shivaji Nagar` |
| City | `Pune` |
| PIN code | `411005` (confirm) |
| State | `Maharashtra` |

On the next screen, **drag the map pin onto the exact building**. Clients use this pin for directions.

### Do you also serve customers outside this location?

Choose **No**. Clients come to the office.

### Contact details

| Field | Value |
|---|---|
| Phone | `+91 77700 07391` |
| Website | Leave blank until the website is live on its own domain. Then add it (see Step 4). |

---

## Step 2: Verify

Google offers one or more methods depending on the business. The most common for an office is a **video recording**. Record **one continuous video, without cuts**, showing:

1. **Where you are:** the street, the Family Court or nearby landmarks, and the Supreme Tower building.
2. **The business:** the signboard with the business name, and the office entrance.
3. **That you manage it:** unlock the office door, show the inside, and show something only the office would have, such as letterhead or the Bar Council identity card.

Upload it from the Google Maps app or business.google.com, as Google directs. Review usually takes a few days. If Google offers a phone, SMS or email code instead, that is quicker.

---

## Step 3: Complete the profile

After verification, open the profile (search "my business" on Google while signed in, or use business.google.com) and fill in the rest.

### Description (686 of 750 characters)

```
Adv. S. P. Madewad Jamadar & Associates is an advocate's office in Shivaji Nagar, Pune, at the back side of the Family Court. We handle family, criminal and civil matters before the Family Court, the District and Sessions Court and the Civil Court in Pune. Family law work covers mutual consent and contested divorce, child custody and visitation, maintenance and alimony, and cases under the Domestic Violence Act. In criminal matters we act in anticipatory and regular bail, FIR quashing and trials, including cheque bounce cases under Section 138 of the Negotiable Instruments Act. We also handle property disputes, partition, injunctions and succession. Meetings are by appointment.
```

Google doesn't allow links, phone numbers or offers in the description. This one has none, and it makes no claims that conflict with Bar Council rules.

### Hours (confirm)

| Day | Hours |
|---|---|
| Monday to Saturday | 10:30 am to 7:00 pm |
| Sunday | Closed |

Mark **court holidays and Diwali closures as special hours** when they come up. Wrong hours are one of the most common complaints on Maps.

### Additional phone

```
+91 85548 99946
```

This is the WhatsApp number. Google no longer offers chat on profiles, so adding it as a second phone number lets people reach it.

### Services

Open **Services**, add each as a custom service, and paste the description.

| Service name | Description |
|---|---|
| Divorce (mutual consent and contested) | Mutual consent divorce under Section 13B of the Hindu Marriage Act and Section 28 of the Special Marriage Act, and contested divorce petitions at the Family Court, Pune. |
| Child custody and visitation | Interim and permanent custody, visitation rights and guardianship of minors under the Guardians and Wards Act and the Hindu Minority and Guardianship Act. |
| Maintenance and alimony | Maintenance for a wife, children or parents under Section 144 BNSS, interim maintenance and permanent alimony. |
| Domestic violence cases | Protection, residence and monetary relief under the Protection of Women from Domestic Violence Act, 2005, for complainants and respondents. |
| Anticipatory and regular bail | Anticipatory bail under Section 482 BNSS and regular bail before the Sessions Court, Pune and the Bombay High Court. |
| Criminal defence and FIR quashing | Defence at trial and quashing of FIRs and criminal proceedings, including matrimonial disputes under Section 85 BNS. |
| Cheque bounce cases | Legal demand notices, complaints and defence in cheque dishonour cases under Section 138 of the Negotiable Instruments Act. |
| Property and civil disputes | Partition suits, injunctions, specific performance of sale agreements, succession certificates and recovery suits. |

Leave prices blank.

### Opening date

The year the practice started. (Fill in.)

### Attributes

Under **More**, set only the ones that are true, for example whether the entrance is wheelchair accessible and whether online appointments are offered. Don't guess. A wrong attribute can be reported by visitors.

### Photos

Upload these from this folder:

| File | Use as |
|---|---|
| `logo-720.png` | Logo |
| `cover-1280x720.jpg` | Cover photo |
| `advocate-photo-1068.jpg` | Team photo |

Then add **real photos taken at the office**, which help most: the building from the street, the signboard, the entrance, the office inside and the team. Google ranks profiles with recent real photos higher, so add one or two more every month.

---

## Step 4: Once the website is live

1. In the profile, set **Website** to the home page, with this tag added so visits from the profile can be measured:
   ```
   https://YOUR-DOMAIN/?utm_source=google&utm_medium=organic&utm_campaign=gbp
   ```
2. Set **Appointment link** to the contact page: `https://YOUR-DOMAIN/contact.html`
3. Open the profile in Google Maps, tap **Share**, copy the link, and paste it into `gbpUrl` in `src/site.mjs`. The website's "Get directions" buttons and its schema markup then point to the profile.

---

## Running the profile

### Posts

Share each new legal guide as an **Update** post with a **Learn more** button linking to it. Five guides are ready to post now. One post every week or two keeps the profile active.

### Reviews and Bar Council rules

Reviews strongly affect ranking, but the Bar Council of India bars advocates from soliciting work, and asking clients for reviews is risky under that rule. So:

- **Don't ask or reward** anyone for a review, and don't put review requests on the website or visiting cards.
- **Reviews that people post on their own are fine.** Reply politely to each.
- **Never confirm that the reviewer was a client** or mention any detail of a matter, even in reply to a negative review. That would breach professional confidentiality.

A safe reply to any review:

```
Thank you for your feedback. We can't discuss any matter publicly, but you're welcome to call the office on +91 77700 07391 if there's anything we can help with.
```

### Keep it consistent

Whenever the phone number, address or hours change, change them in **three places on the same day**: this profile, `src/site.mjs` on the website, and the visiting card.
