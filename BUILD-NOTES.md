# CoolAir AC Service — Build Notes

Built 2026-11-18 in `~/workspace/coolair`. **Not pushed to GitHub, no repo created** — deploy/publish is Dus's call (ask public/private first, per standing rule).

## Stack (locked, per `~/workspace/svelte-stack-lock.md`)
- Svelte **5.57.3**, SvelteKit **3.2.0**, Vite **8.3.8**, adapter-static **4.0.1**, TypeScript **6.0.3**, Tailwind CSS **4.3.5** + @tailwindcss/vite 4.3.5, @sveltejs/vite-plugin-svelte 7.3.1, Node 24.22.1
- Added deps ONLY: `gsap` 3.15.1, `lenis`, `motion`, `lucide-svelte` 1.0.1, `@fontsource/inter`, `@fontsource/archivo`
- **No Framer Motion** — it is React-only and does not work in SvelteKit. Motion is GSAP + ScrollTrigger-style animation (hero word stagger), Lenis smooth scroll, `svelte/motion`-style rAF count-ups, and CSS transitions. `motion` (Motion.dev) is installed; GSAP is what is actually wired in Hero/Counters.
- Svelte 5 runes only; Tailwind v4 CSS-first (`@theme` in `src/routes/layout.css`, no tailwind.config.js); adapter-static strict + `prerender=true` + `fallback: '404.html'`; dynamic routes use `entries()`.
- Fonts self-hosted: Archivo 700/800/900 + Inter 400/500/600/700 as woff2 in `static/fonts/`, preloaded in `src/app.html`, 1-year immutable cache via `static/_headers`.

## Routes — 54 (55 HTML files incl. 404.html)
Home `/` · About `/about` · Why Us `/why-us` · Team `/team` · Services `/services` + 9 detail pages `/services/[slug]` (ac-repair, ac-installation, ac-cleaning, gas-refilling, ac-maintenance, ac-uninstallation, pcb-compressor-repair, duct-cleaning, commercial-vrf) · Prices `/prices` · AMC `/amc` · Offers `/offers` · Emergency `/emergency-ac-repair` · Booking `/book` · Track Booking `/track-booking` · Instant Quote `/get-quote` · Symptoms `/symptoms` · Service Areas `/service-areas` + 4 city pages (mumbai, thane, navi-mumbai, pune — unique content per city, not templated swaps) · Brands `/brands` + 8 brand pages (daikin, voltas, lg, samsung, panasonic, hitachi, carrier, haier) · Reviews `/reviews` · FAQ `/faq` · Warranty `/warranty` · Gallery `/gallery` · Blog `/blog` + 6 posts · Contact `/contact` · Financing `/financing` · Commercial `/commercial` · Careers `/careers` · Privacy `/privacy` · Terms `/terms` · Disclaimer `/disclaimer` · custom 404 (`+error.svelte`).

## Key features
- **Booking flow** (`/book`, `BookingStepper.svelte`): 5 steps — service → AC type/brand → date + 2-hour arrival slot → pincode checker (12 served pincodes) + address/problem → review → confirmation with generated booking ID (`CA-YYMMDD-####`), saved to `localStorage`; `/track-booking` looks it up.
- **Instant quote calculator** (`/get-quote`, home): service + AC type + brand + problem → ₹ range.
- **Symptom finder** (home + `/symptoms`): 4 quick symptoms + 8-item guide with likely cause, fix, price.
- **Before/after drag slider** (home + `/gallery`): pointer + keyboard + range input, with generated dirty/clean coil photos.
- **Reviews**: 12 mock reviews with name + locality + technician + job, filterable by service, labelled mock.
- **Blog**: 6 full posts with search + category filter.
- **SEO**: HVACBusiness JSON-LD site-wide, Service + FAQPage JSON-LD on service pages, FAQPage on `/faq` + home, BreadcrumbList via visible breadcrumbs, per-page title/meta/OG/canonical, `sitemap.xml` (54 URLs, prerendered `+server.ts`), `robots.txt`, `llms.txt`, OG cards 1200×630 in `static/images/og/`.
- **Images**: 11 AI-generated photos in `static/images/` (hero 1600w + 10 at 1000–1200w), all converted to WebP (39–136 KB each) with width+height attrs; hero `fetchpriority="high"`, below-fold lazy. JPG originals kept alongside. OG cards generated with Python PIL (navy/blue, no overflow).

## Mock data — central file
**`src/lib/data/site.ts`** holds phone (+91 98765 43210), email (hello@coolair.pages.dev), mock address, stats, pincodes, time slots. Prices: diagnosis ₹299, basic service ₹499, deep cleaning ₹999, gas top-up ₹2,499, split install ₹1,999, window install ₹1,499, AMC Basic ₹1,499/yr, Premium ₹3,499/yr. All technician names, reviews, stats and photos are MOCK — labelled on-site (footer, reviews page, disclaimer). Swap real values in `site.ts` (+ `services.ts`, `reviews.ts`, `cities.ts`, `brands.ts`, `blog.ts`).

## Verification (all done 2026-11-18, before claiming done)
- `npm run build` — exit 0; 55 HTML files; `npm run check` (svelte-check) — **0 errors, 1 warning** (intentional initial-prop capture in BookingStepper).
- `npm run preview` + curl of all 55 built HTML paths — **54 routes 200**; `/404` itself 404s (expected: it is the fallback file, not a route); unknown route 404s with custom page; sitemap 200 (54 URLs); robots/llms 200.
- Playwright (playwright-core + bundled Chromium 1187; `/opt/meta-chromium/chrome` refuses to start in this VM, `vite preview` serves a cached file tree so the server must be restarted after a rebuild) — **19/19 checks passed**: mobile 390px + desktop 1440px home/services/book/prices — 0 horizontal overflow, 0 console errors, sticky mobile bar visible, booking stepper reaches confirmation with a valid booking ID saved to localStorage, track-booking lookup finds it, quote calculator returns a range and updates, before-after slider drags (50→58), FAQ accordion opens. Screenshots: `.verify/shots/` (home-mobile, home-desktop, services-desktop, booking-confirmed-mobile).
- Visual check: home desktop + mobile + services desktop screenshots reviewed — match the design image (navy top bar, snowflake logo, hero headline, trust items, 24/7 card, navy service bar).

## Gotchas fixed during the build (for the next session)
1. **lucide-svelte 1.x removed brand icons** (Facebook/Instagram/Twitter/Youtube no longer exported) — social icons are now inline SVGs in `src/lib/components/SocialIcon.svelte`.
2. **SvelteKit 3: `$app/environment` is deprecated** — use `$app/env` (`browser` etc.). svelte-check failed with "Cannot find module '$app/environment'" until switched.
3. **`page.url.searchParams` cannot be read during prerendering** — `/book` reads the `?service=` param inside a browser-only `$effect` instead.
4. **Unlayered custom CSS beats Tailwind utilities** — `.btn { display: inline-flex }` overrode `hidden`, so the desktop Call button showed on mobile and broke the header. Custom classes now live in `@layer components`.
5. **No `scroll-behavior: smooth` in CSS** — it made programmatic scrolls animate for seconds and broke click hit-testing while Lenis also smooth-scrolls. Removed; Lenis handles wheel smoothness.
6. **`vite preview` caches the file tree at startup** — after any rebuild, restart the preview server or new hashed assets 404.
7. **Never `pkill -f` with a pattern in your own command line** — it kills your own shell (AGENTS.md lesson, re-learned here). Kill the preview server by its session/process id instead.

## Residuals / not done
- No live deployment, no repo, no push (per task — Dus to decide repo name + public/private).
- No real PageSpeed/Lighthouse scores measured (no CrUX/field data; local Lighthouse not run — only the checks above).
- No Google Rich Results / Schema validator run (browser-only tools); JSON-LD verified present in served HTML only.
- Images are AI-generated mock photos; OG cards are PIL-generated graphics (no photos in them).
- `.verify/` holds the Playwright script + screenshots (dev-only, not part of the site build).
- Preview server on port 4173 was stopped after verification.
