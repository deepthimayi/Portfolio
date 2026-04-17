# Deepthimayi Pesala — Portfolio

Cinematic personal portfolio built with Next.js 14, Tailwind CSS, and Framer Motion. Turquoise/black/white design system with liquid glass UI elements, custom cursor, and scroll-triggered animations.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization Steps

### 1. Add your photo
Drop your photo at:
```
public/images/deepthimayi.jpg
```
Recommended: portrait crop, minimum 800×1000px.

### 2. Add your resume PDF
Drop your resume at:
```
public/Deepthimayi_Resume.pdf
```

### 3. Add CASKO font (optional)
If you have the CASKO font files, place them at:
```
public/fonts/CASKO.woff2
public/fonts/CASKO-Bold.woff2
```
Without the font, it falls back to Cormorant Garamond (loaded from Google Fonts).

### 4. Update content
All content lives in one file:
```
data/portfolio.ts
```
Update your links, projects, skills, and bio there.

### 5. Deploy to Vercel
```bash
git push origin main
```
Then import the repo at [vercel.com/new](https://vercel.com/new). Zero config needed.

## Stack
- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS** + custom CSS variables
- **Framer Motion** — scroll animations, stagger, hover
- **Lucide React** — icons

## Design System
| Token | Value |
|---|---|
| Background | `#050a0a` |
| Accent | `#2dd4d4` (turquoise) |
| Text Primary | `#f0f7f7` |
| Text Secondary | `#7aacac` |
| Font Display | CASKO / Cormorant Garamond |
| Font Body | Outfit |
| Font Mono | Space Mono |
