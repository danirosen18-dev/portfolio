# Portfolio V1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Daniel Rosen's personal portfolio as a Next.js 15 + Tailwind CSS single-page site with UF Gator colors, deployed to Vercel.

**Architecture:** Single Next.js App Router project at `C:\Users\danie\portfolio`. One page (`app/page.tsx`) imports all section components. No backend, no CMS, no database.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 3, Inter font via next/font/google

---

### Task 1: Project config files

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.ts`

- [ ] Write package.json with Next 15, React 19, Tailwind 3 deps
- [ ] Write tsconfig.json with `@/*` path alias
- [ ] Write next.config.ts (empty config, just typed)
- [ ] Write postcss.config.mjs with tailwindcss + autoprefixer
- [ ] Write tailwind.config.ts with UF color extensions and app/** content glob
- [ ] Run `npm install`

---

### Task 2: App shell

**Files:**
- Create: `app/globals.css`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`

- [ ] Write globals.css with Tailwind directives + smooth scroll
- [ ] Write layout.tsx with Inter font + metadata
- [ ] Write page.tsx importing all section components

---

### Task 3: Nav component

**Files:**
- Create: `components/Nav.tsx`

- [ ] Write Nav with: fixed positioning, DR monogram, desktop links, mobile hamburger, scroll shadow effect

---

### Task 4: Hero component

**Files:**
- Create: `components/Hero.tsx`

- [ ] Write Hero: full viewport, name, title, subtitle, two CTA buttons (View Work + LinkedIn), bounce scroll arrow

---

### Task 5: About component

**Files:**
- Create: `components/About.tsx`

- [ ] Write About: circular photo placeholder (DR initials), bio paragraph, 3 stat cards (GPA/Year/Languages)

---

### Task 6: Experience component

**Files:**
- Create: `components/Experience.tsx`

- [ ] Write Experience: VLX card (orange border, Current badge), BECI card (blue border), then Leadership grid (TAMID, MLT, SHPE)

---

### Task 7: Projects component

**Files:**
- Create: `components/Projects.tsx`

- [ ] Write Projects: 3 placeholder cards with dashed border, + icon, hover to orange

---

### Task 8: Skills component

**Files:**
- Create: `components/Skills.tsx`

- [ ] Write Skills: 4 category cards + UF education callout block at bottom

---

### Task 9: Footer component

**Files:**
- Create: `components/Footer.tsx`

- [ ] Write Footer: dark bg, "Let's Connect" heading, email + LinkedIn buttons, copyright

---

### Task 10: Git and verify

- [ ] `git init`
- [ ] `git add .`
- [ ] `git commit -m "feat: initial portfolio v1"`
- [ ] `npm run build` — verify no errors
