# dehyabi.com

Personal portfolio website of **Dehya Qalbi** — a Full-Stack AI Engineer specializing in LLM pipelines, FastAPI backends, and React/Next.js frontends.

🔗 **Live:** [https://dehyabi.com](https://dehyabi.com)

---

## Overview

This is a modern, SEO-optimized portfolio built with **Next.js 16** and **Tailwind CSS v4**. It features a futuristic dark aesthetic with particle animations, aurora gradients, and responsive design.

### Sections

- **Hero** — Animated particle network, perspective grid floor, scan line, and rotating glow rings
- **About** — Professional summary with categorized skill tags
- **Contact** — Email, LinkedIn, and GitHub links with copy-to-clipboard support
- **Footer** — Minimal footer with social links

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js](https://nextjs.org) 16 (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Fonts | [Geist](https://vercel.com/font) Sans + Mono |
| Icons | [Lucide React](https://lucide.dev) |
| Build | Static export (`output: "export"`) |

---

## Project Structure

```
app/
├── components/
│   ├── Navigation.tsx      # Fixed header with active section tracking
│   ├── HeroSection.tsx     # Futuristic hero with canvas particle network
│   ├── AboutSection.tsx    # Bio and categorized skills
│   ├── ContactSection.tsx  # Contact links with copy-to-clipboard
│   └── Footer.tsx          # Minimal footer
├── globals.css             # Tailwind theme + custom animations
├── layout.tsx              # Root layout with fonts
├── page.tsx                # Homepage with metadata + JSON-LD
├── robots.ts               # Search engine robots config
└── sitemap.ts              # XML sitemap generator
public/
├── favicon.svg             # Hexagon logo favicon
├── apple-touch-icon.png    # iOS home screen icon
└── og-image.png            # Open Graph social preview image
scripts/
└── generate-og-image.js    # Sharp-based OG image generator
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static site is exported to the `dist/` directory.

---

## SEO Features

- Comprehensive metadata (title, description, keywords, author)
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data (Person schema)
- `robots.txt` with sitemap reference
- XML sitemap with change frequency and priority
- Semantic HTML (`<main>`, `<section>`, `<header>`, `<footer>`)

---

## Design Highlights

- **Particle Network** — Canvas-based constellation animation with drifting dots and connecting lines
- **Perspective Grid** — Retro-futuristic wireframe floor fading into the distance
- **Aurora Blobs** — Multi-layer animated gradient orbs (indigo, violet, cyan)
- **Rotating Rings** — Subtle spin-animated glow rings behind the name
- **Scan Line** — Horizontal sweep line for a CRT/monitor aesthetic
- **Responsive** — Mobile-first, works seamlessly across all screen sizes

---

## License

© [Dehya Qalbi](https://dehyabi.com). All rights reserved.
