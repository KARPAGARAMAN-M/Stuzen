# Stuzen Technologies Official Corporate Website

Production-grade React.js frontend implementation of the **STUZEN TECHNOLOGIES** corporate website, accurately converted from the official Google Stitch UI/UX design specifications (Project ID: `591234649501704003`).

---

## 🚀 Technology Stack

- **Framework**: React.js 18
- **Bundler & Dev Server**: Vite 6
- **Routing**: React Router DOM 6
- **Styling**: Tailwind CSS 3 & CSS3 Design Tokens
- **Icons**: Lucide React & Material Symbols
- **Typography**: Manrope (Headings), Inter (Body & Labels)

---

## 📄 Implemented Pages & Routes

All 8 independent pages are fully implemented with strict design preservation:

| Route | Page Component | Description |
|---|---|---|
| `/` | `Home.jsx` | Full corporate landing page with interactive telemetry mockup, core capabilities, 4-milestone execution flow, featured projects, testimonials, and conversion CTA |
| `/about` | `About.jsx` | Company philosophy, mission & vision, 4 guiding pillars, interactive practice matrix with tab switching, culture & team metrics |
| `/services` | `Services.jsx` | Full-lifecycle capability overview, 3 asymmetric deep-dive blocks, 4-phase delivery model, transparent engagement model comparison table |
| `/services/website-development` | `WebsiteDevelopment.jsx` | Web engineering focus, performance telemetry mockup (Lighthouse 100 badges), 6 web solutions, 5-step delivery process, case studies, interactive FAQ accordion |
| `/services/custom-software` | `CustomSoftware.jsx` | Deterministic software engineering, off-the-shelf vs. bespoke comparison, 6 solution domains, 6 lifecycle stages, enterprise case studies, interactive FAQ accordion |
| `/services/ai-automation` | `AIAutomation.jsx` | Pragmatic cognitive systems, autonomous pipeline flowchart mockup, 5 AI practice areas, 4 delivery phases, featured deployments, interactive FAQ accordion |
| `/portfolio` | `Portfolio.jsx` | Project showcase with live category filter tabs (`All`, `Web`, `Software`, `AI`), architectural deep-dive for Apex Financial Core, confidentiality callout |
| `/contact` | `Contact.jsx` | Corporate headquarters coordinates, copy-to-clipboard email trigger, direct phone links, interactive project inquiry brief with client-side validation and success state |

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Design System & Preservation

The codebase preserves the complete Stitch Design System tokens:

- **Primary Colors**: Brand Blue (`#005bb3`), Primary Container (`#0073e0`), Fixed Tints (`#d6e3ff`)
- **Secondary Colors**: Cyan Node (`#006879`), Cyan Container (`#41defd`), Fixed Accents (`#a9edff`)
- **Surfaces**: Clinical White (`#ffffff`), Muted Backdrops (`#f9f9ff`, `#f1f3ff`, `#e8eeff`)
- **Typography**: Manrope for display and section headers; Inter for sustained technical reading
- **Responsive Breakpoints**: Seamless fluid reflow from 360px mobile viewports to 4K ultrawide monitors
- **Interactive States**: Mobile hamburger drawer, hover transitions, services dropdown, portfolio category filtering, FAQ accordions, and client-side form validation

