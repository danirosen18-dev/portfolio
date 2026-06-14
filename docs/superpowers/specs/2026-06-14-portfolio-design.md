# Daniel Rosen Portfolio — Design Spec

**Goal:** Build a clean, classic-professional personal portfolio website for Daniel Rosen using Next.js, Tailwind CSS, and UF Gator colors (orange #FA4616 + blue #003087) on a neutral background.

**Owner:** Daniel Rosen Benarroch

---

## Sections

1. **Nav** — Fixed top bar, DR monogram left, section links right, collapses to hamburger on mobile
2. **Hero** — Full-screen, name + title + two CTAs (View Work / LinkedIn)
3. **About** — Photo placeholder (circular) + bio + 3 stat cards (GPA, Grad Year, Languages)
4. **Experience** — VLX (current, featured, orange accent) → BECI → Leadership grid (TAMID, MLT, SHPE)
5. **Projects** — 3 placeholder "Coming Soon" cards with dashed borders
6. **Skills** — 4 category cards: Languages, Programming, Tools, Interests + UF education callout block
7. **Footer/Contact** — Dark background, email + LinkedIn buttons, copyright

## Color System

- **Orange accent:** `#FA4616` (UF Orange) — CTAs, section underlines, current-role badge, featured borders
- **Blue primary:** `#003087` (UF Navy) — headings, company names, secondary accents
- **Background:** White `#FFFFFF` and light gray `#F9FAFB` alternating per section
- **Text:** `#111827` dark, `#6B7280` secondary
- **Dark section:** `#111827` for footer

## Typography
- Font: Inter (Google Fonts)
- H1: 5xl–7xl bold
- H2 section titles: 3xl–4xl bold with orange underline bar (h-1 w-16)
- Body: base, leading-relaxed, gray-600

## Key Content

**Name:** Daniel Rosen
**Headline:** Industrial & Systems Engineering @ University of Florida
**Subheadline:** MLT Career Prep Fellow · HSF Scholar · Operations & Product Development
**Email:** daniel.rosen@ufl.edu
**LinkedIn:** linkedin.com/in/daniel-rosen-

**Experience priority:** VLX (current) > BECI > (Locatel de-emphasized / omitted)

**Education:** UF Herbert Wertheim CoE, BS ISE, Expected May 2027, GPA 3.58, Minor Business Admin, Certificate PM

## Architecture

- Next.js 15, App Router, TypeScript
- Tailwind CSS v3
- Single-page (all sections on `/`)
- No database, no CMS, pure static
- Deploy target: Vercel
