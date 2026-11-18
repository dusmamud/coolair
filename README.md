# CoolAir — AC Repair & Service

AC repair, installation, cleaning, gas refilling and AMC service website, built same-to-same from the CoolAir design.

- **Stack:** Svelte 5.57.3, SvelteKit 3.2.0, Vite 8.3.8, TypeScript 6, Tailwind CSS 4.3.5, adapter-static (prerendered, Cloudflare Pages)
- **Motion:** GSAP + Lenis + Motion.dev (Framer Motion is React-only and does not run in SvelteKit)
- **Pages:** 54 routes — home, 9 service detail pages, prices, AMC, offers, emergency, 5-step booking with slot picker + pincode check + booking ID, track booking, instant quote calculator, symptom finder, 4 city pages, 8 brand pages, reviews, FAQ, warranty, gallery with before/after slider, blog, contact, financing, commercial, careers, legal pages, custom 404
- **SEO:** HVACBusiness + Service + FAQPage JSON-LD, sitemap, robots.txt, llms.txt, OG cards

All phone numbers, addresses, technician names, reviews and prices are **mock data** centralised in `src/lib/data/site.ts` — swap real values there.

## Develop

```bash
npm install
npm run dev
npm run build   # output in build/
npm run check   # svelte-check
```
