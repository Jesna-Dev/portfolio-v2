# Jesna K Elizabeth Jolly — Portfolio

A modern, award-style portfolio for **Jesna K Elizabeth Jolly**, a UI/UX Designer & Frontend Developer based in Kochi, India. A warm, editorial take on "playful" — coral as the single bold accent over refined earthy tones, with smooth scroll-driven motion and full mobile responsiveness.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**. No WebGL/canvas — it's fast and light.

---

## ✨ Highlights

- **Lightweight, fast** — no canvas/WebGL. The hero uses CSS/DOM shapes only; all motion runs through Framer Motion.
- **Framer Motion throughout** — kinetic headline reveal, scroll-in section reveals, animated stat counters, magnetic buttons, and a playful custom cursor (desktop).
- **Refined palette** — coral pop + deep pine, with muted clay / ochre / sage / sand supports. Calm and editorial, not candy.
- **Native smooth scrolling** with anchor-aware navigation (no scroll-hijacking library).
- **Self-hosted fonts** (Bricolage Grotesque, Inter, Space Mono via Fontsource) — no external requests, fast and privacy-friendly.
- **Accessible & resilient** — respects `prefers-reduced-motion`, keyboard-friendly, semantic HTML, and degrades gracefully.
- **Static export-ready** — the whole site prerenders to static HTML.

---

## 🚀 Getting started

> A `node_modules` folder from the initial setup may already be present and is incomplete. Start with a clean install:

```bash
# from the project folder
rm -rf node_modules          # clear the partial setup folder
npm install                  # install dependencies (Node 18.18+ / 20+ recommended)
npm run dev                  # start the dev server
```

Then open **http://localhost:3000**.

Other scripts:

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # lint
```

---

## 🎨 Make it hers — quick customization

Everything is plain data at the top of each component, so editing copy is easy.

| What | Where |
|------|-------|
| Hero name, tagline, intro | `components/Hero.tsx` |
| About story + stats | `components/About.tsx` |
| Project cards | `PROJECTS` array in `components/Work.tsx` |
| Capabilities + skill marquees | `components/Skills.tsx` |
| Experience timeline + education | `TIMELINE` in `components/Experience.tsx` |
| Email, phone, social links, CV | `components/Contact.tsx` |
| Colours & fonts | `tailwind.config.ts` + `app/globals.css` (`:root`) |

### ⚠️ Things to update before going live

1. **Social links** — `components/Contact.tsx` has placeholder URLs:
   ```ts
   const SOCIALS = [
     { label: "LinkedIn", href: "https://www.linkedin.com/" },   // ← her LinkedIn
     { label: "Instagram", href: "https://www.instagram.com/" }, // ← her Instagram
     { label: "Download CV", href: "/Jesna-K-Elizabeth-Jolly-CV.pdf" },
   ];
   ```
2. **CV** — her résumé is already in `public/Jesna-K-Elizabeth-Jolly-CV.pdf`. Replace that file to update the download.
3. **Real project screenshots (optional)** — the project cards currently use abstract gradient visuals. Each card's visual block in `components/Work.tsx` is a ready-made frame: drop in a real screenshot with `next/image` or a plain `<img>` where the gradient `<div>` is, and it will sit perfectly inside the rounded frame.
4. **Headshot (optional)** — there's no photo yet; the design works without one. To add one, the About section is the natural home.

### Colour palette

Defined once in `app/globals.css` (`:root`) and mirrored in `tailwind.config.ts`:

```
cream #F4EEE4   ink  #17130F   coral #FB5A35   pine #1E4A42
clay  #C16A4B   ochre #CE9347   sage  #97A684   sand #E8DBC7
```

---

## 📁 Structure

```
app/
  layout.tsx        # fonts, metadata, global wrappers
  page.tsx          # section order
  globals.css       # theme tokens, base styles, hover effects
components/
  Nav, Hero, About, Skills, Work, Experience, Contact, Footer
  MotionProvider.tsx # Framer Motion config (respects reduced motion)
  Cursor.tsx        # custom cursor (Framer Motion springs)
  Reveal.tsx        # reusable scroll-reveal wrapper
  SplitText.tsx     # kinetic per-character text
  Counter.tsx       # animated number counters
  Marquee.tsx, MagneticButton.tsx
lib/motion.ts       # shared Framer Motion variants
lib/scrollTo.ts     # native smooth anchor scrolling
public/             # CV PDF + static assets
```

> `ThreeScene.tsx` and `SmoothScroll.tsx` remain only as inert stubs (the editor couldn't delete them in place) — they're unused and not bundled. Safe to delete.

---

## ☁️ Deploy

The easiest path is **Vercel**: push the folder to a Git repo and import it — zero config. Any Node host works too (`npm run build` then `npm start`). The site is fully static, so static hosts (Netlify, Cloudflare Pages, GitHub Pages with `output: 'export'`) work as well.

---

## ♿ Notes

- All Framer Motion animation is disabled (or reduced to fades) when the OS requests reduced motion.
- The custom cursor and magnetic effects only activate on fine-pointer (desktop) devices.
- Fonts are bundled locally — no Google Fonts network call at build or runtime.

Made with care — Next.js, Tailwind & Framer Motion.
