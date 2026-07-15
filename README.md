# NovaPay — Interactive Scrolling Experience

A Next.js landing page with scroll-driven interactions, built as a Frontend Technical Assignment.

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** | App Router framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Scroll animations & parallax |
| **Custom Hooks** | Extracted scroll & UI logic |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css          # Tailwind directives + base resets
├── components/
│   ├── ui/primitives.tsx    # Shared Button, Container, SectionHeader
│   ├── HeroSection.tsx
│   ├── FeaturesSection.tsx
│   ├── JourneySection.tsx
│   ├── CTASection.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ScrollProgress.tsx
├── hooks/
│   ├── useScrollProgress.ts
│   ├── useNavbar.ts
│   ├── useHeroScroll.ts
│   ├── useFeaturesScroll.ts
│   ├── useJourneyScroll.ts
│   └── useCtaScroll.ts
├── lib/
│   ├── data.ts              # Static content
│   └── utils.ts             # cn() helper
└── types/
    └── index.ts             # TypeScript interfaces
```

## Architecture Decisions

- **Tailwind CSS** — All styling uses Tailwind utilities; only `globals.css` remains for base resets and `prefers-reduced-motion`
- **Custom Hooks** — Scroll parallax, navbar state, and journey animations are extracted into reusable hooks
- **TypeScript** — All components, hooks, and data are fully typed
- **Component separation** — UI primitives (`Button`, `Container`, `SectionHeader`) shared across sections

## AI Usage Disclosure

Built with assistance from **Cursor AI (Claude)**. AI generated initial scaffolding, hook patterns, and Tailwind class mappings. Manual refinements include animation tuning, responsive behavior, and TypeScript type definitions.
