# Nexora Agency — Digital Studio Website

> A premium digital agency website built with React + Vite + Tailwind CSS

---

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v3
- **Routing**: React Router DOM v6
- **Fonts**: Syne (display), DM Sans (body), Space Mono (mono)

---

## Features

- Full dark theme with custom color palette
- Fully responsive (mobile, tablet, desktop)
- Multi-page routing (5 pages)
- Custom animations & micro-interactions
- Premium typography system
- Custom scrollbar & text selection
- Contact form with validation & success state
- FAQ accordion component
- Project filter tabs on Work page

---

## Project Structure

```
nexora-agency/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Fixed nav with scroll behavior
│   │   └── Footer.jsx      # Site footer
│   ├── data/
│   │   └── index.js        # All static data
│   ├── pages/
│   │   ├── Home.jsx        # Landing page
│   │   ├── Services.jsx    # Services + pricing
│   │   ├── Work.jsx        # Portfolio + filter
│   │   ├── About.jsx       # Story, team, awards
│   │   └── Contact.jsx     # Form + FAQ
│   ├── App.jsx             # Router setup
│   ├── main.jsx
│   └── index.css           # Tailwind + custom utilities
├── tailwind.config.js
└── package.json
```

---

## Setup & Run

```bash
npm install
npm run dev
npm run build
```

---

## Design System

### Colors
- `ink` #0A0A0F — Page background
- `accent` #C8FF00 — Lime-green primary accent
- `surface` #111118 — Section backgrounds
- `card` #16161F — Card backgrounds
- `text` #E8E8F0 — Body text

### Typography
- Display: **Syne** — headings
- Body: **DM Sans** — paragraphs
- Mono: **Space Mono** — tags, metadata

---

## Pages

| Page | URL | Key Sections |
|------|-----|--------------|
| Home | `/` | Hero, Marquee, Services, Work, Testimonials, CTA |
| Services | `/services` | Service Grid, Process, Pricing |
| Work | `/work` | Filter Tabs, Project Cards |
| About | `/about` | Story, Values, Team, Awards |
| Contact | `/contact` | Form, Info, FAQ |

---

Built for national web competition.
Stack: React + Vite + Tailwind CSS
