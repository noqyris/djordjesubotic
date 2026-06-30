# djordjesubotic.com

Personal portfolio of **Djordje Subotic** — full-stack engineer & founder of
[noqyris](https://noqyris.com).

**Stack:** Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 ·
Framer Motion · Lenis · deployed on **Vercel**.

Design direction: _cinematic / aurora_ — animated gradient backdrop, glass
cards with cursor-tracking spotlights, smooth-scroll and scroll-reveal motion
throughout. Fully responsive and respects `prefers-reduced-motion`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Editing content

All copy lives in `src/content/` — components never hold text:

| File | What it controls |
|---|---|
| `site.ts` | Name, role, tagline, intro, email, location, hero stats, `cvUrl`, social links |
| `capabilities.ts` | "What I do" capability cards (order, stack chips, accent hue, evidence) |
| `experience.ts` | Professional timeline (newest first; full-time / part-time) |
| `skills.ts` | Stack groups + the hero marquee strip |
| `profile.ts` | The recruiter "facts" panel (experience, English, work type, salary…) + languages |

> Several `profile.ts` / `experience.ts` values are sensible **defaults marked
> `CONFIRM` / `[confirm]`** (English level, exact part-time dates, salary stance).
> Replace them with your real answers before sharing widely.

The CV/résumé lives at **`/cv`** — a print-optimised page generated from the same
content (`site.cvUrl` defaults to `/cv`; point it at a real PDF in `/public` to
serve that instead). Sections, in order: Hero · Capabilities · Experience · Stack
· About (How I work) · Profile · Contact.

## Project layout

| Path | What's there |
|---|---|
| `src/app/` | Root layout, global CSS, SEO (`sitemap`, `robots`, `opengraph-image`, `icon`) |
| `src/app/(site)/` | Home page + its visual chrome layout (aurora, nav, smooth-scroll) |
| `src/app/cv/` | Printable `/cv` résumé (kept clean — no aurora/nav) |
| `src/components/` | Sections (Nav, Hero, Capabilities, Experience, Stack, About, Profile, Contact, Footer) + `SpotlightCard` |
| `src/components/motion/` | Reusable motion primitives (Aurora, SmoothScroll, Reveal, Magnetic) |
| `src/components/ui/` | Small shared UI (SectionLabel) |
| `src/lib/` | `cn()` class merge helper |

## Deploying to Vercel

1. Push to the GitHub repo (`noqyris/djordjesubotic`).
2. Import the repo in Vercel — it auto-detects Next.js, no config needed.
3. Add the custom domain `djordjesubotic.com` in **Project → Settings → Domains**
   and point the domain's DNS at Vercel (A/CNAME records Vercel shows you).

No environment variables are required.
