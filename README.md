# ETHCAN Events — World Tourism Day 2026

A premium event website for **ETHCAN Events**, Ethiopia's premium events company, showcasing the **World Tourism Day 2026 Celebration** in Addis Ababa (24–27 September 2026) under the global theme *"Digital Agenda and Artificial Intelligence to Redesign Tourism."*

## Tech Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (custom Ethiopian-inspired palette: gold, green, terracotta)
- **Framer Motion** (reveals, parallax, 3D tilt, lightbox, marquee, counters)
- **next/image** for optimized images
- **EmailJS** for form delivery to `ethcanevents@gmail.com`

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 📧 EmailJS Setup (Required for Forms)

All four forms (Attend, Exhibit, Partner/Sponsor, General Enquiry) send submissions to **ethcanevents@gmail.com** via EmailJS. Setup takes ~5 minutes:

### 1. Create an EmailJS account
Go to https://www.emailjs.com and sign up (free tier: 200 emails/month).

### 2. Add an email service
- Dashboard → **Email Services** → **Add New Service** → choose **Gmail**
- Connect the **ethcanevents@gmail.com** Google account
- Copy the **Service ID** (e.g. `service_abc123`)

### 3. Create an email template
- Dashboard → **Email Templates** → **Create New Template**
- Set **To Email** to: `ethcanevents@gmail.com` (or use `{{to_email}}`)
- Set **Subject** to: `ETHCAN Website — {{form_type}}`
- Set the **Content** body to something like:

```
New submission from the ETHCAN Events website

Form: {{form_type}}
Name: {{full_name}}
Email: {{email}}
Phone: {{phone}}
Country: {{country}}
Organization: {{organization}}
Participant type: {{participant_type}}
Interest: {{interest}}
Exhibition category: {{exhibit_category}}
Booth: {{booth}}
Partnership type: {{partnership_type}}
Subject: {{subject}}
Message: {{message}}
```

(Unused variables simply render blank — one template covers all four forms.)
- Copy the **Template ID** (e.g. `template_xyz789`)

### 4. Get your public key
- Dashboard → **Account** → **General** → copy the **Public Key**

### 5. Configure the project
Copy `.env.local.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the dev server. Forms will now deliver to ethcanevents@gmail.com.

## Project Structure

```
app/
  layout.tsx          # Fonts (Playfair Display + Plus Jakarta Sans), metadata
  page.tsx            # Section composition (mirrors the reference site flow)
  globals.css         # Tailwind layers, buttons, fields, Ethiopian ribbon
components/
  Navbar.tsx          # Sticky navbar with scroll effect + mobile menu
  Hero.tsx            # Rotating parallax hero, countdown, marquee ticker
  About.tsx           # Company intro, image collage, animated counters
  WorldTourismDay.tsx # ★ Flagship WTD 2026 section (theme + 6 highlights)
  Pillars.tsx         # Five focus-area cards with 3D tilt
  Programme.tsx       # Filterable activities & forums grid
  Participation.tsx   # "Who should attend" tag cloud
  Sponsors.tsx        # Tiered partners grid with hover effects
  Gallery.tsx         # Photo grid + keyboard-navigable lightbox
  Registration.tsx    # 4-tab registration/enquiry forms (EmailJS)
  Footer.tsx          # 4-column footer
  FloatingCTA.tsx     # Floating register button
  motion/             # Reveal, TiltCard, Counter primitives
lib/
  data.ts             # All content data + image assignments
  email.ts            # EmailJS wrapper
public/img/           # event-01.jpg … event-45.jpg (all 45 used on the page)
```

## Production Build

```bash
npm run build
npm start
```

Deploy easily on Vercel — remember to add the three `NEXT_PUBLIC_EMAILJS_*` environment variables in the project settings.
