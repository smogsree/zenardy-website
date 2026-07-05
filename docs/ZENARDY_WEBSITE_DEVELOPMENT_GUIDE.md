# Zenardy Corporate Website — Complete Development Guide

**Document purpose:** Manager briefing, stakeholder presentation, and technical handoff  
**Project:** Zenardy public marketing website  
**Repository:** `https://github.com/smogsree/zenardy-website`  
**Live site:** `https://smogsree.github.io/zenardy-website/`  
**Last updated:** July 2026  

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Business Goals & What Was Built](#2-business-goals--what-was-built)
3. [Live URLs, Repository & Access](#3-live-urls-repository--access)
4. [Technology Stack](#4-technology-stack)
5. [High-Level Architecture](#5-high-level-architecture)
6. [Frontend Architecture (Detailed)](#6-frontend-architecture-detailed)
7. [Backend & Data Layer](#7-backend--data-layer)
8. [Routing & Page Structure](#8-routing--page-structure)
9. [Home Page Sections (Full Breakdown)](#9-home-page-sections-full-breakdown)
10. [Navigation System](#10-navigation-system)
11. [Component Library](#11-component-library)
12. [Data Files & Content Management](#12-data-files--content-management)
13. [Design System & Styling](#13-design-system--styling)
14. [Animation & Motion System](#14-animation--motion-system)
15. [Media, Images & Public Assets](#15-media-images--public-assets)
16. [Third-Party Integrations](#16-third-party-integrations)
17. [Deployment & CI/CD](#17-deployment--cicd)
18. [GitHub Pages Compatibility](#18-github-pages-compatibility)
19. [Local Development Workflow](#19-local-development-workflow)
20. [Development Timeline (Git History)](#20-development-timeline-git-history)
21. [Features Delivered — Detailed Changelog](#21-features-delivered--detailed-changelog)
22. [Known Limitations & Future Work](#22-known-limitations--future-work)
23. [Manager Q&A — Talking Points](#23-manager-qa--talking-points)
24. [Appendix: File Structure](#24-appendix-file-structure)

---

## 1. Executive Summary

The Zenardy website is a **modern, single-page-application (SPA) marketing site** built with **React 19**, **TypeScript**, and **Vite**. It presents Zenardy as an Oracle NetSuite solution provider with:

- A premium dark-glass visual design
- Animated hero and product mockups (ZenAI copilot)
- Full service, industry, and proprietary solution coverage
- Office locations with embedded Google Maps
- Demo videos for Zen IP solutions
- Mobile-responsive navigation with mega menus
- Automated deployment to **GitHub Pages** on every push to `main`

**Important architectural note:** This is primarily a **static frontend application**. There is no custom server-side backend running in production today. Content is stored in TypeScript data files. Optional Supabase integration exists for a waitlist feature but is **not currently wired to the UI** and requires environment variables to activate.

---

## 2. Business Goals & What Was Built

| Business goal | How the site addresses it |
|---------------|---------------------------|
| Establish credibility as NetSuite partner | Partner logo marquee (Oracle NetSuite, Celigo, Avalara, etc.), awards section, client testimonials |
| Showcase service breadth | Services overview, mega menu, detailed copy for 8 service lines |
| Demonstrate industry expertise | 6 industry category blocks with photography, 8 dedicated industry detail pages |
| Promote proprietary IP (Zen Solutions) | Zen IP spotlight on home page + 5 solution detail pages with YouTube demo embeds |
| Recruit talent | Careers section with open roles across Tampa, Chennai, Hyderabad |
| Drive contact / lead capture | Contact form + 3 office cards with maps (Tampa, Chennai, Hyderabad) |
| Tell the company story | About page with leadership team, culture gallery, company timeline |
| Modern brand positioning | Video background, glassmorphism UI, AI copilot mockup, motion design |

---

## 3. Live URLs, Repository & Access

| Item | Value |
|------|-------|
| **Production URL** | https://smogsree.github.io/zenardy-website/ |
| **GitHub repo** | https://github.com/smogsree/zenardy-website |
| **Default branch** | `main` |
| **Deploy trigger** | Push to `main` or manual workflow dispatch |
| **Local dev URL** | http://localhost:5173/ |

### Key routes on live site

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us + Culture + Contact |
| `/industries/food-beverage` | Industry detail (8 total slugs) |
| `/solutions/zen-catch-weight` | Solution detail (5 total slugs) |
| `/#contact` | Contact section (hash scroll) |
| `/#careers` | Careers section |
| `/#zen-solutions` | Zen IP spotlight |

---

## 4. Technology Stack

### Core framework

| Technology | Version | Role |
|------------|---------|------|
| **React** | 19.2 | UI component library |
| **TypeScript** | 6.0 | Type safety across codebase |
| **Vite** | 8.1 | Build tool, dev server, HMR |
| **React Router DOM** | 7.18 | Client-side routing |
| **Tailwind CSS** | 4.3 | Utility-first styling |
| **Motion** (Framer Motion successor) | 12.42 | Animations & transitions |
| **Lucide React** | 1.22 | Icon system |

### Optional / prepared integrations

| Technology | Role | Status |
|------------|------|--------|
| **Supabase** | Waitlist email storage | Code exists; not connected to UI; needs `.env` keys |

### Build & deploy

| Tool | Role |
|------|------|
| **GitHub Actions** | CI/CD pipeline |
| **GitHub Pages** | Static hosting |
| **Node.js 20** | Build environment in CI |

### External services (runtime, not in repo)

| Service | Usage |
|---------|-------|
| **CloudFront CDN** | Hero background video |
| **Google Fonts** | Inter typeface |
| **Google Maps** | Office location embeds |
| **YouTube** | Zen solution demo videos |

---

## 5. High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER BROWSER                              │
│  https://smogsree.github.io/zenardy-website/                   │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                     GITHUB PAGES (Static Host)                   │
│  Serves: index.html, JS bundle, CSS, images from /dist           │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    REACT SPA (Client-Side)                       │
│                                                                  │
│  App.tsx → React Router → PageLayout → Pages → Components        │
│                                                                  │
│  Data: src/data/*.ts (content loaded at build time)              │
│  Assets: public/ + src/assets/ (bundled or copied)               │
└────────────┬───────────────────────────────┬────────────────────┘
             │                               │
             ▼                               ▼
   ┌──────────────────┐           ┌──────────────────────┐
   │  Google Maps     │           │  YouTube Embeds       │
   │  (iframe)        │           │  (iframe)             │
   └──────────────────┘           └──────────────────────┘
             │
             ▼
   ┌──────────────────┐
   │  CloudFront Video │
   │  (background)     │
   └──────────────────┘

Optional (not active in production):
   ┌──────────────────┐
   │  Supabase        │  ← waitlist table (needs API keys)
   └──────────────────┘
```

### Request flow (how a page loads)

1. User visits GitHub Pages URL
2. Server returns `index.html` + JavaScript bundle
3. React boots, React Router reads URL path
4. Correct page component renders inside `PageLayout`
5. Content is read from imported TypeScript data modules
6. Images use `publicAsset()` helper to prefix correct base path
7. Maps and videos load via third-party iframes

---

## 6. Frontend Architecture (Detailed)

### Entry point chain

```
index.html
  └── src/main.tsx          (React root, mounts App)
        └── src/App.tsx     (BrowserRouter + Routes)
              └── PageLayout (Navbar, Footer, video bg)
                    └── Outlet → Page components
```

### Key architectural decisions

| Decision | Rationale |
|----------|-----------|
| **SPA with React Router** | Fast navigation, smooth animations, no full page reloads |
| **Content in TypeScript files** | Type-safe, version-controlled, no CMS dependency for v1 |
| **Vite over Create React App** | Faster builds, modern ESM, excellent DX |
| **Tailwind CSS v4** | Rapid styling, consistent design tokens |
| **Component primitives folder** | Reusable UI building blocks (buttons, reveals, logos) |
| **Centralized motion config** | Consistent animation feel across all sections |
| **`publicAsset()` helper** | Required for GitHub Pages subpath deployment |

### Folder structure philosophy

```
src/
├── pages/          → Route-level page composers (thin)
├── layouts/        → Shared shell (nav, footer, background)
├── components/     → Feature sections & UI blocks
│   └── primitives/ → Reusable low-level UI
├── data/           → All site content (the "content database")
├── hooks/          → Custom React hooks
├── lib/            → Utilities (motion, assets, YouTube, Supabase)
└── assets/         → Bundled images (team photos, logo)
```

---

## 7. Backend & Data Layer

### There is no traditional backend server

The site is deployed as **static files**. All HTML, CSS, and JavaScript are pre-built and served from GitHub Pages.

### How "data" works

Content is **not fetched from an API at runtime**. Instead, it is:

1. Written in `src/data/*.ts` files
2. Imported directly into React components
3. Bundled into the JavaScript at build time by Vite

This means:
- **Pros:** Fast load times, no database costs, simple deployment, offline-capable after first load
- **Cons:** Content updates require a code change + git push + redeploy

### Supabase (optional backend — prepared but inactive)

**File:** `src/lib/supabase.ts`

```typescript
// Creates Supabase client only if env vars are set
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY

// Function: joinWaitlist(email) → inserts into 'waitlist' table
```

**Current status:**
- Supabase client is configured to gracefully degrade (returns mock success if no keys)
- `joinWaitlist()` is **not called from any component** today
- Contact form shows a thank-you message client-side only (no email is sent or stored)

### Contact form behavior (current)

**File:** `src/components/ContactSection.tsx`

- Collects: name, email, phone, company, reason, message
- On submit: prevents default, sets `submitted = true`, shows thank-you message
- **Does not** send data anywhere yet
- **Future:** Wire to Supabase, Formspree, NetSuite lead capture, or email API

---

## 8. Routing & Page Structure

**File:** `src/App.tsx`

```tsx
<BrowserRouter basename={import.meta.env.BASE_URL}>
  <Routes>
    <Route element={<PageLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/industries/:slug" element={<IndustryPage />} />
      <Route path="/solutions/:slug" element={<SolutionPage />} />
    </Route>
  </Routes>
</BrowserRouter>
```

### `basename` explanation

On GitHub Pages, the site lives at `/zenardy-website/` not at domain root.  
`import.meta.env.BASE_URL` is set to `/zenardy-website/` during CI build.  
This ensures all internal links resolve correctly in production.

### Industry pages (8 slugs)

| Slug | Industry |
|------|----------|
| `food-beverage` | Food & Beverage |
| `e-commerce-distribution` | E-commerce & Distribution |
| `wholesale-distribution` | Wholesale Distribution |
| `retail` | Retail |
| `software-services` | Software Services |
| `manufacturing` | Manufacturing |
| `dmo` | Destination Marketing Organization |
| `software-hightech` | Software/High-Tech |

### Solution pages (5 slugs)

| Slug | Solution |
|------|----------|
| `zen-catch-weight` | Zen Catch Weight |
| `zen-ai-auto-fulfillment` | Zen AI Auto Fulfillment |
| `zen-advanced-budgeting` | Zen Advanced Budgeting |
| `zen-mobile-order-printing` | Zen Mobile Order Printing |
| `zen-aa-advanced-allocations` | Zen AA – Advanced Allocations |

### Hash-based scrolling

**File:** `src/components/ScrollToHash.tsx`

When URL contains `#contact`, `#careers`, etc., the page scrolls to that section. Works on home page and when navigating from other pages.

---

## 9. Home Page Sections (Full Breakdown)

**File:** `src/pages/HomePage.tsx`

| # | Component | Section ID | Purpose |
|---|-----------|------------|---------|
| 1 | `Hero` | — | Main headline, CTA buttons, parallax orbs |
| 2 | `TrustedByMarquee` | — | Infinite scrolling partner logos |
| 3 | `MacMenuBar` | — | Decorative macOS-style menu bar |
| 4 | `ZenCopilotMockup` | — | Interactive ZenAI chat UI mockup |
| 5 | `WhyChooseUs` | — | 3 value pillars |
| 6 | `ServicesOverview` | `#services` | 8 service cards with descriptions |
| 7 | `IndustriesServed` | `#industries` | 6 categories, hero images, industry cards |
| 8 | `ZenSolutionsSpotlight` | `#zen-solutions` | 5 proprietary solution cards |
| 9 | `AwardsSection` | — | Partner awards & recognition images |
| 10 | `SuccessStories` | — | Expandable client case studies |
| 11 | `TestimonialsCarousel` | — | Rotating client quotes |
| 12 | `CareersBlog` | `#careers`, `#blog` | Job openings + culture blog cards |
| 13 | `ContactSection` | `#contact` | Form + 3 office location cards |

---

## 10. Navigation System

**File:** `src/components/Navbar.tsx`

### Desktop navigation (≥ lg breakpoint)

| Element | Behavior |
|---------|----------|
| **Logo** | Links to home; large responsive sizing |
| **Home** | Primary link |
| **About Us** | Links to `/about` |
| **Services** | Hover mega menu → 8 service items |
| **Industries** | Hover mega menu → 8 industry links to detail pages |
| **Zen IP Solutions** | Hover mega menu → 5 solution links |
| **Inside Zenardy** | Hover mega menu → Careers, Culture |
| **Page dim overlay** | Darkens background when mega menu open |
| **Header scrim** | Gradient behind nav for readability over video |

### Mobile navigation (< lg breakpoint)

| Feature | Implementation |
|---------|----------------|
| Hamburger button | Menu / X icon toggle |
| Full-screen drawer | Slide-in panel with scroll |
| Expandable sections | Tap to expand each mega menu category |
| Body scroll lock | Prevents background scroll when open |
| Auto-close | Closes on route change |

### Mega menu data source

**File:** `src/data/content.ts`

- `servicesMega[]`
- `industriesMega[]`
- `zenSolutionsMega[]`
- `insideZenardyMega[]`

Each item has: `label`, `description`, `icon` (Lucide), optional `to` (route)

---

## 11. Component Library

### Layout components

| Component | File | Role |
|-----------|------|------|
| `PageLayout` | `layouts/PageLayout.tsx` | Shell: video bg, navbar, footer, noise filter |
| `ScrollToHash` | `components/ScrollToHash.tsx` | Hash anchor scrolling |

### Page composers

| Component | File |
|-----------|------|
| `HomePage` | `pages/HomePage.tsx` |
| `AboutPage` | `pages/AboutPage.tsx` |
| `IndustryPage` | `pages/IndustryPage.tsx` |
| `SolutionPage` | `pages/SolutionPage.tsx` |

### Feature sections

| Component | Notable features |
|-----------|------------------|
| `Hero` | Mouse parallax orbs, gradient text, reduced motion support |
| `TrustedByMarquee` | CSS marquee animation, partner logos |
| `ZenCopilotMockup` | Fake AI chat interface, conversation list |
| `ServicesOverview` | Service cards with hover effects |
| `IndustriesServed` | Split layout, category hero images, links to detail pages |
| `ZenSolutionsSpotlight` | SVG blob backgrounds, solution cards |
| `AwardsSection` | Award image grid from `/public/awards/` |
| `SuccessStories` | Accordion-style expandable stories |
| `TestimonialsCarousel` | Auto-rotating quotes with dot navigation |
| `CareersBlog` | Careers list + blog post cards |
| `ContactSection` | Form + Google Maps iframes per office |
| `AboutPageContent` | Leadership, timeline, culture sections |
| `LeadershipTeam` | Team member cards with photos |
| `ZenardyCultureSection` | Culture gallery with object-position tuning |
| `CultureTimeline` | Company history timeline |
| `IndustryDetailPage` | Full industry landing page template |
| `SolutionDetailPage` | Benefits, features, demo video, FAQs |
| `Footer` | Multi-column links, social placeholders |

### Primitives (reusable UI)

| Component | File | Role |
|-----------|------|------|
| `FadeInUp` | `primitives/FadeInUp.tsx` | Scroll-triggered fade animation |
| `RevealGroup` | `primitives/RevealGroup.tsx` | Staggered children container |
| `RevealItem` | `primitives/RevealItem.tsx` | Individual staggered item |
| `AppleButton` | `primitives/AppleButton.tsx` | Branded CTA button |
| `SectionEyebrow` | `primitives/SectionEyebrow.tsx` | Small label above headings |
| `LogoMark` | `primitives/LogoMark.tsx` | Zenardy logo image |
| `PartnerLogo` | `PartnerLogo.tsx` | Partner SVG with publicAsset path |

### Custom hooks

| Hook | File | Purpose |
|------|------|---------|
| `useReducedMotion` | `hooks/useReducedMotion.ts` | Respects `prefers-reduced-motion` OS setting |
| `useMouseParallax` | `hooks/useMouseParallax.ts` | Hero orb movement on mouse move |

### Utility libraries

| File | Purpose |
|------|---------|
| `lib/motion.ts` | Animation variants, easing, viewport config |
| `lib/publicAsset.ts` | Prefixes paths for GitHub Pages base URL |
| `lib/youtubeEmbed.ts` | Converts YouTube watch URL → embed URL |
| `lib/gradientStyle.ts` | Brand gradient + noise filter styles |
| `lib/supabase.ts` | Optional waitlist backend |

---

## 12. Data Files & Content Management

All content lives in `src/data/`. To update site copy, edit these files and redeploy.

| File | Contents |
|------|----------|
| `content.ts` | Mega menus, services, team, stats, testimonials, timeline, careers, blog |
| `zenardyContent.ts` | Why choose us, services overview, industry categories, success stories, awards images |
| `industryDetails.ts` | 8 industry detail page content (features, FAQs, testimonials) |
| `solutionDetails.ts` | 5 solution pages (benefits, features, demo video URLs, FAQs) |
| `offices.ts` | Tampa, Chennai, Hyderabad addresses, phones, map embeds |
| `partners.ts` | 9 partner names + logo paths |
| `industryCategoryImages.ts` | Hero photos for 6 industry categories |
| `cultureGallery.ts` | Culture photos, captions, object-position per image |
| `teamPhotos.ts` | Leadership headshot imports |

### How to update common content

| Want to change… | Edit this file |
|-----------------|----------------|
| Office address or map | `src/data/offices.ts` |
| Partner logos | `public/partners/` + `src/data/partners.ts` |
| Service descriptions | `src/data/zenardyContent.ts` or `content.ts` |
| Industry page copy | `src/data/industryDetails.ts` |
| Demo video URL | `src/data/solutionDetails.ts` → `demoVideoUrl` |
| Team members | `src/data/content.ts` → `team[]` |
| Culture photos | `public/culture/` + `src/data/cultureGallery.ts` |

---

## 13. Design System & Styling

### Brand colors

**File:** `tailwind.config.js`

| Token | Hex | Usage |
|-------|-----|-------|
| `brand` | `#3D81E3` | Primary blue, links, accents |
| `brand-red` | `#E63946` | CTA buttons, highlights |
| `brand-red-dim` | `#8B1E2A` | Darker red gradients |

### Typography

- **Font:** Inter (Google Fonts)
- **Weights:** 400–900
- **Headings:** Large, tight tracking (`text-3xl` to `text-6xl`)

### Signature visual effects

**File:** `src/index.css`

| Class | Effect |
|-------|--------|
| `.liquid-glass` | Frosted glass cards — 5% white opacity, blur, inner border gradient |
| `.mega-menu-panel` | Opaque dropdown panels for nav readability |
| `.nav-header-scrim` | Dark gradient behind header |
| `.marquee-track` | Infinite horizontal scroll for logos |
| `.reveal-card` | Subtle hover scale on cards |
| `.scrollbar-hide` | Hidden scrollbar for mobile nav drawer |

### Background

- Full-screen looping **video** (CloudFront CDN) behind all content
- SVG **noise filter** overlay for texture
- Base color: `#0c0c0c`

### Responsive breakpoints

Uses Tailwind defaults: `sm`, `md`, `lg`, `xl`, `2xl`  
Mobile-first design; mega menus collapse to hamburger below `lg`.

---

## 14. Animation & Motion System

**File:** `src/lib/motion.ts`

### Design philosophy

- Premium, smooth easing — no bounce
- Soft blur + lift on reveal (not harsh jumps)
- Staggered children for card grids
- Respects `prefers-reduced-motion` for accessibility

### Key animation primitives

| Export | Used for |
|--------|----------|
| `revealVariants` | Fade up + blur on scroll into view |
| `staggerContainer` / `staggerItem` | Sequential card reveals |
| `slideFromLeft` / `slideFromRight` | Split layouts (culture, industries) |
| `reducedVariants` | Simple fade when motion reduced |
| `accordionSpring` | Success stories expand/collapse |
| `viewport` | Intersection observer config (once, 18% visible) |

### Components using motion

- `FadeInUp`, `RevealGroup`, `RevealItem` — wrapper components
- `Hero` — parallax orbs (disabled when reduced motion)
- `Navbar` — entrance animation, mega menu fade
- `ContactSection` — staggered office cards
- `SolutionDetailPage` — section reveals

---

## 15. Media, Images & Public Assets

### `public/` folder (served as static files)

```
public/
├── awards/           # 9 award/spotlight PNG images
├── culture/          # 30+ culture/event photos (webp, png, jpg)
├── industries/       # 7 industry category hero photos
├── partners/         # 9 partner SVG logos
├── 404.html          # SPA fallback for GitHub Pages
├── favicon.svg
├── icons.svg
└── _redirects        # Netlify-style redirects (unused on GitHub Pages)
```

### `src/assets/` (bundled by Vite)

- `Zenardy_logo.png`
- Leadership team headshots (webp, jpg, png)

### Image path handling

**Problem:** GitHub Pages serves site at `/zenardy-website/`, not `/`  
**Solution:** `publicAsset('/partners/logo.svg')` → `/zenardy-website/partners/logo.svg`

Used in: `PartnerLogo`, `AwardsSection`, `IndustriesServed`, `ZenardyCultureSection`

### Industry hero images

| Category | Image file |
|----------|------------|
| Consumer | `consumer-food-beverage.jpg` |
| Energy, Resources & Industrials | `energy-industrials.jpg` |
| Financial Services | `financial-services.jpg` |
| Government & Public Services | `government-public.jpg` |
| Life Sciences & Health Care | `life-sciences-healthcare.jpg` |
| Technology, Media & Telecom | `technology-media.jpg` |

### Culture gallery tuning

Each image in `cultureGallery.ts` has optional `objectPosition` to prevent bad cropping of faces in cards.

---

## 16. Third-Party Integrations

### Google Maps (office locations)

**Files:** `src/data/offices.ts`, `src/components/ContactSection.tsx`

| Office | Location |
|--------|----------|
| Tampa LLC | 28210 Paseo Drive #214, Wesley Chapel, FL |
| Chennai | Zenardy Technologies Pvt Ltd, Perungudi |
| Hyderabad | EON Hyderabad by Navanaami, Nanakramguda |

Each office has:
- `mapsEmbed` — Google Maps iframe `src`
- `mapsLink` — "Open in Google Maps" external link
- iframe uses `referrerPolicy="strict-origin-when-cross-origin"` per Google requirements

### YouTube (solution demos)

**File:** `src/lib/youtubeEmbed.ts`

Converts watch URLs like `https://www.youtube.com/watch?v=2yke4jI2Hug`  
Into embed URLs: `https://www.youtube.com/embed/2yke4jI2Hug?rel=0&modestbranding=1`

| Solution | Video ID |
|----------|----------|
| Zen Catch Weight | `2yke4jI2Hug` |
| Zen AI Auto Fulfillment | `NrvRS0JrZIE` |
| Zen Advanced Budgeting | `6vDSb8k7yCg` |
| Zen Mobile Order Printing | `XQB3aPi7kCk` |
| Zen AA Advanced Allocations | `XQB3aPi7kCk` |

### Background video

Hosted on AWS CloudFront (external URL in `PageLayout.tsx`). Not stored in repo.

---

## 17. Deployment & CI/CD

### GitHub Actions workflow

**File:** `.github/workflows/deploy.yml`

```
Trigger: push to main/master OR manual dispatch
  ↓
Job 1: build (ubuntu-latest, Node 20)
  ├── checkout
  ├── npm ci
  ├── npm run build (with VITE_BASE_PATH=/zenardy-website/)
  └── upload-pages-artifact (dist folder)
  ↓
Job 2: deploy
  └── deploy-pages → GitHub Pages environment
```

### Build command

```bash
tsc && vite build
```

TypeScript compiles first, then Vite bundles for production.

### Output

Production files go to `dist/`:
- `index.html`
- `assets/index-*.js` (bundled React app)
- `assets/index-*.css`
- Copied `public/` files (images, 404.html, etc.)

### Manual publish script

**File:** `publish-to-github.ps1`

PowerShell script for Windows that:
1. Checks `gh auth login` status
2. Creates repo if missing
3. Pushes to `origin main`
4. Prints GitHub Pages URL

---

## 18. GitHub Pages Compatibility

Special handling required because site is hosted at a **subpath**, not domain root.

| Mechanism | File | Purpose |
|-----------|------|---------|
| `VITE_BASE_PATH` env var | `vite.config.ts` | Sets asset base to `/zenardy-website/` |
| `BrowserRouter basename` | `App.tsx` | Router knows subpath |
| `publicAsset()` helper | `lib/publicAsset.ts` | Prefixes `/public` image paths |
| `404.html` SPA fallback | `public/404.html` | Deep links like `/industries/food-beverage` work |

### 404.html how it works

1. User visits unknown path on GitHub Pages
2. GitHub serves `404.html`
3. Script saves full path to `sessionStorage`
4. Redirects to site root
5. `index.html` reads saved path and restores URL
6. React Router renders correct page

---

## 19. Local Development Workflow

### Prerequisites

- Node.js 18+ (20 recommended)
- npm
- Git

### Commands

```powershell
cd "C:\Users\ZEN74\OneDrive - zenardy.com\WEBSITE"

# Install dependencies (first time)
npm install

# Start dev server
npm run dev
# → http://localhost:5173/

# Production build (local test)
npm run build

# Preview production build locally
npm run preview
```

### Deploy to production

```powershell
git add .
git commit -m "Your message"
git push origin main
# GitHub Actions auto-deploys in ~1 minute
```

### Environment variables (optional)

Copy `.env.example` to `.env.local`:

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

---

## 20. Development Timeline (Git History)

| Commit | Description |
|--------|-------------|
| `08bd084` | Initial commit: Zenardy website with GitHub Pages deploy config |
| `f37f48d` | Add GitHub Pages publish script |
| `65174e3` | Fix public image paths for GitHub Pages base URL |
| `5ada9f3` | Major UX enhancement: mobile nav, industry images, motion system, demo videos, office maps, SPA routing fix |
| `42409b7` | Update Hyderabad office map to EON Hyderabad embed |
| `01ccbfe` | Fix Hyderabad map: street view, correct address, iframe settings |

---

## 21. Features Delivered — Detailed Changelog

### Navigation & layout
- [x] Responsive navbar with logo, primary links, 4 mega menus
- [x] Mega menu readability fix (opaque panels, page dim, header scrim)
- [x] Large logo sizing with spacing tuned between nav items
- [x] Full mobile hamburger menu with drawer, overlay, expandable sections
- [x] Body scroll lock on mobile menu open
- [x] Auto-close nav on route change

### Home page content
- [x] Hero with parallax orbs and gradient headline
- [x] Partner logo marquee (9 partners, larger logos)
- [x] ZenAI copilot interactive mockup
- [x] Services overview (8 services, larger typography)
- [x] Industries served with category hero images (6 categories)
- [x] Industry cards linking to detail pages
- [x] Zen IP solutions spotlight (5 solutions)
- [x] Awards section with partner recognition images
- [x] Success stories accordion
- [x] Testimonials carousel
- [x] Careers + blog section
- [x] Contact form + 3 office maps

### Detail pages
- [x] 8 industry detail pages with features, customization, FAQ, testimonial
- [x] 5 solution detail pages with benefits, features, demo video, FAQ
- [x] About page with leadership, timeline, culture gallery

### Visual design & animation
- [x] Liquid glass design system (5% opacity cards)
- [x] Centralized motion system with reduced-motion support
- [x] Staggered scroll reveals across sections
- [x] Video background with noise texture overlay
- [x] Brand color system (blue + red)

### Media & assets
- [x] Industry category stock photography
- [x] Culture gallery with per-image crop positioning
- [x] Leadership team photos
- [x] Partner SVG logos
- [x] Award images

### Integrations
- [x] Google Maps embeds (Tampa, Chennai, Hyderabad)
- [x] YouTube demo embeds for all Zen solutions
- [x] Supabase waitlist stub (prepared, not active)

### DevOps
- [x] GitHub Actions CI/CD
- [x] GitHub Pages deployment
- [x] SPA routing on GitHub Pages (404.html fallback)
- [x] publicAsset path helper for subpath hosting
- [x] Windows publish script

---

## 22. Known Limitations & Future Work

| Item | Current state | Recommended next step |
|------|---------------|----------------------|
| Contact form | Client-side only, no submission | Connect to email API, Supabase, or CRM |
| Supabase waitlist | Code exists, not used | Wire to a waitlist/newsletter component |
| Footer social links | Placeholder `#` hrefs | Add real LinkedIn/Twitter URLs |
| Custom domain | Uses `*.github.io` URL | Point `zenardy.com` via GitHub Pages DNS |
| CMS | Content in code files | Consider headless CMS for marketing team self-service |
| SEO meta tags | Basic title only | Add per-page meta, Open Graph, structured data |
| Analytics | Not implemented | Add Google Analytics or Plausible |
| Blog posts | Static cards only | Link to real blog or CMS |
| `package.json` name | Still `"aura"` (dev codename) | Rename to `zenardy-website` |
| Accessibility audit | Partial (reduced motion) | Full WCAG audit recommended |

---

## 23. Manager Q&A — Talking Points

### "What did we build?"
A modern, mobile-responsive marketing website for Zenardy that showcases services, industries, proprietary Zen solutions, team, culture, and office locations — deployed live on GitHub Pages with automatic updates on every code push.

### "Is there a backend?"
Not in production today. The site is static and fast. We prepared Supabase integration for a future waitlist/email feature, but all content is currently managed through version-controlled data files.

### "How do we update content?"
Edit the relevant file in `src/data/`, commit, and push to GitHub. The site rebuilds automatically in about one minute.

### "How much does hosting cost?"
GitHub Pages is **free** for public repositories. External costs are minimal (CloudFront video bandwidth if traffic grows).

### "Is it secure?"
Static site with no server attack surface. No user data is collected yet (contact form is display-only). When form submission is added, standard HTTPS and API key practices apply.

### "Does it work on mobile?"
Yes. Full responsive design with dedicated mobile navigation drawer, touch-friendly cards, and scrollable sections.

### "How does this compare to zenardy.com?"
This is a rebuilt modern frontend with improved visuals, animations, structured content architecture, and automated deployment. Content was sourced from the existing Zenardy site and enhanced.

### "What technologies should the team know to maintain it?"
React, TypeScript, Tailwind CSS, and basic Git. No server administration required.

### "What's the biggest risk?"
Content updates require developer involvement until a CMS is added. Contact form does not capture leads yet.

### "What would Phase 2 look like?"
1. Wire contact form to lead capture (email/CRM)
2. Custom domain `zenardy.com`
3. SEO & analytics
4. CMS for marketing team
5. Real blog integration

---

## 24. Appendix: File Structure

```
WEBSITE/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD
├── docs/
│   └── ZENARDY_WEBSITE_DEVELOPMENT_GUIDE.md  # This document
├── public/
│   ├── awards/                     # Award images
│   ├── culture/                    # Culture/event photos
│   ├── industries/                 # Industry hero photos
│   ├── partners/                   # Partner SVG logos
│   ├── 404.html                    # SPA fallback
│   └── favicon.svg
├── src/
│   ├── assets/                     # Bundled images (logo, team)
│   ├── components/
│   │   ├── primitives/             # Reusable UI building blocks
│   │   ├── AboutPageContent.tsx
│   │   ├── AwardsSection.tsx
│   │   ├── CareersBlog.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── IndustriesServed.tsx
│   │   ├── IndustryDetailPage.tsx
│   │   ├── LeadershipTeam.tsx
│   │   ├── Navbar.tsx
│   │   ├── PartnerLogo.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── SolutionDetailPage.tsx
│   │   ├── SuccessStories.tsx
│   │   ├── TestimonialsCarousel.tsx
│   │   ├── TrustedByMarquee.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ZenCopilotMockup.tsx
│   │   ├── ZenSolutionsSpotlight.tsx
│   │   ├── ZenardyCultureSection.tsx
│   │   └── ... (other components)
│   ├── data/
│   │   ├── content.ts              # Mega menus, team, testimonials
│   │   ├── cultureGallery.ts
│   │   ├── industryCategoryImages.ts
│   │   ├── industryDetails.ts
│   │   ├── offices.ts
│   │   ├── partners.ts
│   │   ├── solutionDetails.ts
│   │   ├── teamPhotos.ts
│   │   └── zenardyContent.ts
│   ├── hooks/
│   │   ├── useMouseParallax.ts
│   │   └── useReducedMotion.ts
│   ├── layouts/
│   │   └── PageLayout.tsx
│   ├── lib/
│   │   ├── gradientStyle.ts
│   │   ├── motion.ts
│   │   ├── publicAsset.ts
│   │   ├── supabase.ts
│   │   └── youtubeEmbed.ts
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── IndustryPage.tsx
│   │   └── SolutionPage.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── index.html
├── package.json
├── publish-to-github.ps1
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

*End of document. For questions about this codebase, refer to the repository or the development team.*
