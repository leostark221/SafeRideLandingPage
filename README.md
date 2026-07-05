# Safe Ride — Landing Page (saferride.org)

Next.js 15 (App Router, JavaScript) marketing site for the Safe Ride app.
Fully static — `output: 'export'` prerenders every route to plain HTML, so it
deploys anywhere (Vercel, Netlify, Cloudflare Pages) with zero server cost.

## Run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # static export → ./out
```

## Deploy to Cloudflare Pages

The build emits a static site in `out/` — no server, no adapter needed.

**Git-connected (recommended):** connect this repo in the Cloudflare dashboard
(Workers & Pages → Create → Pages) with:

- **Framework preset:** Next.js (Static HTML Export)
- **Build command:** `npm run build`
- **Build output directory:** `out`

**Or one-off from the CLI:**

```bash
npm run build
npx wrangler pages deploy out --project-name saferide-landing
```

After the first deploy, add the `saferride.org` custom domain in the Pages
project's *Custom domains* tab.

## Structure

- `app/layout.js` — fonts (Space Grotesk display + Inter body via next/font), full SEO metadata (OG, Twitter, canonical)
- `app/page.js` — section assembly + JSON-LD structured data
- `app/globals.css` — the entire design system (matches the mobile app: `#252525`/`#211f1f` darks, teal `#30D5C8`, blue `#0273E6`, red reserved for SOS)
- `app/robots.js` / `app/sitemap.js` — generated robots.txt & sitemap.xml
- `components/` — one file per section; interactive pieces are client components

## Interactive pieces

- **Hero.js** — 3D mouse-tilt phone with a *playable* demo: tappable SOS (alert overlay + circle avatars), live ticking check-in countdown with a working "I'm safe" button, rotating notification toasts
- **FeatureScrolly.js** — scrollytelling: sticky phone whose screen morphs (live map → SOS → check-in → route with a dot animating along the path) as you scroll the copy
- **SosDemo.js** — press-and-hold SOS button with progress ring, ripples, and guardians lighting up
- **Plans.js** — cursor-tracking spotlight cards · **PlayButton.js** — magnetic CTA · **CursorGlow.js** — soft page-wide cursor glow · **Nav.js** — scroll progress bar
- All motion respects `prefers-reduced-motion`.

## TODO before launch

1. **Play Store link** — `components/PlayButton.js` has an intentionally empty
   `onClick` (marked with a TODO). Point it at:
   `https://play.google.com/store/apps/details?id=com.leostark.saferide`
2. **OG image** — `public/og-image.png` is the square app icon; replace with a
   1200×630 card for nicer link previews.
3. **Privacy / Terms pages** — footer links to `/privacy` and `/terms`; add
   `app/privacy/page.js` and `app/terms/page.js` (Play Store requires a
   privacy policy URL).
