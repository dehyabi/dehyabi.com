# Architecture

## Overview

Personal domain for **dehyabi.com**, currently serving a minimal placeholder page while the full site is being built.

## Concept

- **Placeholder message:** "Soon"
- **Goal:** Clean, modern, personal — not a generic "Under Construction" barrier
- **Approach:** Single intentional landing page that feels finished, just small

## Tech Stack

### Core

| Layer | Technology |
|-------|------------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Deployment | Vercel |

### Supporting Libraries

| Purpose | Library | Notes |
|---------|---------|-------|
| Animation | Framer Motion | Page transitions, hover states, scroll effects |
| Animation (heavy) | GSAP + ScrollTrigger | Timeline-based animations (add later if needed) |
| Content | MDX | Write in Markdown with embedded React components |
| CMS (optional) | Sanity / Notion | Headless backend for writing without deploying code |
| UI Primitives | Radix UI | Unstyled, accessible components (dialogs, dropdowns, tabs) |
| UI Components | shadcn/ui | Copy-pasteable components built on Radix + Tailwind |
| Fonts | `next/font` (built-in) | Optimized loading, zero layout shift |
| Font Family | Geist | Vercel's screen-optimized typeface |
| Icons | Lucide React | Clean SVG icons, tree-shakeable |
| Forms | React Hook Form | Lightweight form handling |
| Validation | Zod | Schema validation, pairs well with TypeScript |
| Email | Resend / React Email | Send emails without a heavy backend |
| Data Fetching | TanStack Query | For dynamic data (GitHub repos, etc.) |
| State | Zustand | Tiny global state manager (add when needed) |
| ORM | Prisma | Type-safe database access |
| Database | Supabase / PlanetScale | Managed database options |
| Auth | Auth.js (NextAuth v5) | For protected routes or dashboard |
| Analytics | Vercel Analytics | Privacy-friendly, minimal setup |
| Analytics (alt) | Plausible / Umami | Lightweight GA alternatives |

## Shortlist for MVP

For the initial "Soon" landing page, keep it minimal:

- Next.js + TypeScript + Tailwind CSS
- `next/font` with Geist or Inter
- Lucide React (if any icons needed)
- Framer Motion (optional, for subtle entrance animation)

Everything else is "add when you need it."

## Design Direction

| Option | Description |
|--------|-------------|
| Brutalist / Editorial | Huge "Soon" in `text-[15vw]`, tightly tracked, monochrome, corner details |
| Atmospheric / Dark | Deep zinc background, thin weight text, slow pulse opacity |
| Living Element | "Soon" + subtle interactive piece (clock, orbiting dot, generative canvas) |
| The Signature | Your name in large type + "Site launching soon." |
| The Colophon | Monospace text explaining the stack and why the site is empty |

Recommended: **Brutalist / Editorial** or **The Signature** — both feel intentional and personal.

## Structure

```
dehyabi.com/
├── app/
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Root layout with metadata + fonts
│   └── globals.css       # Tailwind imports + custom styles
├── components/
│   └── (add as needed)
├── public/
│   └── (static assets)
├── docs/
│   └── ARCHITECTURE.md   # This file
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Notes

- Use the **App Router** — it's the modern Next.js default
- Export `metadata` in `layout.tsx` for intentional search/social previews
- Deploy to **Vercel** for zero-config Next.js hosting with preview deployments
- Keep the placeholder polished; a good placeholder is better than a broken half-site
