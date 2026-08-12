# ETHCAN Events — World Tourism Day 2026

A premium event website for **ETHCAN Events**, Ethiopia's premium events company, showcasing the **World Tourism Day 2026 Celebration** in Addis Ababa (24–27 September 2026) under the global theme *"Digital Agenda and Artificial Intelligence to Redesign Tourism."*

## Tech Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (custom Ethiopian-inspired palette: gold, green, terracotta)
- **Framer Motion** (reveals, parallax, 3D tilt, lightbox, marquee, counters)
- **next/image** for optimized images
- **FormSubmit.co** for form delivery to `ethcanevents@gmail.com`

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 📧 FormSubmit.co Setup (Zero Configuration!)

All four forms (Attend, Exhibit, Partner/Sponsor, General Enquiry) send submissions to **ethcanevents@gmail.com** via **FormSubmit.co** — no API keys, no signup required!

### How it works
- FormSubmit.co is a free form backend that forwards submissions to your email
- Zero configuration needed — just deploy and forms work automatically
- Supports custom subject lines, templates, and spam protection

### Optional Configuration
If you want to customize FormSubmit behavior, copy `.env.local.example` to `.env.local` and add:

```env
# Optional customizations
FORMSUBMIT_EMAIL=ethcanevents@gmail.com
FORMSUBMIT_URL=https://formsubmit.co/ajax/ethcanevents@gmail.com
```

That's it! No EmailJS account, no API keys, no template setup required.

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
  email.ts            # FormSubmit wrapper
public/img/           # event-01.jpg … event-45.jpg (all 45 used on the page)
```

## Production Build

```bash
npm run build
npm start
```

Deploy easily on Vercel — no environment variables required! Forms work out of the box with FormSubmit.co.
