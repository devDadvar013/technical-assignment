# NovaPay — Interactive Scrolling Experience

A Next.js landing page with scroll-driven interactions, built as a Frontend Technical Assignment.

## Links

- **GitHub:** [github.com/devDadvar013/technical-assignment](https://github.com/devDadvar013/technical-assignment)
- **Live Demo:** [Deploy to Vercel](#deploy-on-vercel) (see instructions below)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FdevDadvar013%2Ftechnical-assignment&project-name=technical-assignment&framework=nextjs)

## Project Overview

**NovaPay** is a storytelling landing page for a fictional fintech product. As the user scrolls, content transforms interactively:

- **Hero** — Parallax background orbs, fade-out on scroll, animated balance card
- **Features** — 6 feature cards with staggered scroll-reveal animations
- **Journey** — Sticky section with timeline progress, step highlighting, and phone mockup synced to scroll
- **CTA** — Parallax orbs and email signup form

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** | App Router framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Scroll animations, parallax, sticky effects |
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

## Deploy on Vercel

### Option 1 — One-click (recommended)

Click the **Deploy with Vercel** button above, sign in, and confirm import from GitHub. Vercel auto-detects Next.js settings.

### Option 2 — Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `devDadvar013/technical-assignment`
3. Keep default settings (Framework: Next.js)
4. Click **Deploy**

### Option 3 — Vercel CLI

```bash
npx vercel login
npx vercel --prod
```

After deploy, add your live URL here: `https://your-project.vercel.app`

## Interactive Scrolling Features

| Feature | Implementation |
|---|---|
| **Parallax effects** | Hero orbs, features background, CTA orbs — `useScroll` + `useTransform` |
| **Scroll-based animations** | Feature cards reveal on viewport entry; journey steps change color with scroll |
| **Sticky sections** | Journey section stays pinned while timeline progresses over 300vh |
| **Smooth transitions** | Framer Motion spring animations + CSS transitions |
| **Scroll progress bar** | Fixed top bar showing page scroll progress |

## Design Decisions

1. **Dark fintech theme** — Purple/teal accents inspired by modern wallet products like [Hero Wallet](https://herowallet.com)
2. **Storytelling funnel** — Hero → Features → User Journey → CTA guides the user through a natural conversion path
3. **Component architecture** — Each section is isolated with its own hook for scroll logic
4. **Mobile-first responsive** — Sticky journey degrades to stacked layout on mobile
5. **Typography** — Space Grotesk for headings, Inter for body (via `next/font`)

## AI Usage Disclosure

Built with assistance from **Cursor AI (Claude)**.

| Area | AI Contribution | Manual Changes |
|---|---|---|
| **Project scaffolding** | Next.js + TypeScript + Tailwind setup | Verified config, dependencies |
| **Components** | Initial section components with Framer Motion | Journey scroll fix, hydration fixes, Tailwind refactor |
| **Custom hooks** | Scroll animation patterns | Journey step progress synced to container scroll |
| **CSS / styling** | Tailwind class mappings | Responsive breakpoints, hover states |
| **README** | Documentation structure | Added deploy instructions, design decisions |
| **Creative concept** | NovaPay fintech storytelling theme | Finalized copy and section content |

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/primitives.tsx
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
│   ├── data.ts
│   └── utils.ts
└── types/
    └── index.ts
```

## License

Demo project for a technical assignment. Not intended for commercial use.
