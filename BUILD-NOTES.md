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

## Deploy — LIVE 2026-11-18 ~20:15 IST
- Repo: https://github.com/dusmamud/coolair (PUBLIC, Dus chose public), init commit 884ef08.
- **Live URL LOCKED: https://coolaiir.pages.dev** — Dus chose coolaiir (double i) because coolair.pages.dev was taken. Pages project name `coolaiir` in `.github/workflows/deploy.yml` (commit 2ed19f2). Repo name stays `coolair`, brand stays CoolAir.
- Deploy run 44327211302: SUCCESS. First run 44324810543 failed on the deploy step only (repo had no Cloudflare secrets yet — Dus added CLOUDFLARE_API_TOKEN + CLOUDFLARE_ACCOUNT_ID himself).
- Live verified: home/services/book/prices/amc/faq/sitemap.xml/robots.txt all 200; home HTML has CoolAir + phone + Book Appointment + 24/7 + OUR AC SERVICES + booking banner + Daikin + HVACBusiness JSON-LD; prices page shows ₹499. One transient 522 on /prices/ right after deploy, 200 on re-check 15s later.

## Residuals / not done
- No real PageSpeed/Lighthouse scores measured (no CrUX/field data; local Lighthouse not run — only the checks above).
- No Google Rich Results / Schema validator run (browser-only tools); JSON-LD verified present in served HTML only.
- Images are AI-generated mock photos; OG cards are PIL-generated graphics (no photos in them).
- `.verify/` holds the Playwright script + screenshots (dev-only, not part of the site build).
- Preview server on port 4173 was stopped after verification.

## Fix round — audit fixes (2026-11-19, Dus approved "sab fix kar do")
Report: .audit/test-report-2026-11-18.md. UI/UX unchanged — same design, copy, prices, mock data.
- P0 domain: baseUrl/email `coolair.pages.dev` → `coolaiir.pages.dev` in src/ + static/ (21 occurrences, 0 left); sitemap/canonicals/OG/JSON-LD/robots/llms now coolaiir.
- P0 /prices overflow at 390px: `min-w-0` on the `lg:col-span-2` grid item — table now scrolls inside its wrapper; verified scrollWidth 390.
- P1 JSON-LD: `@id` on HVACBusiness (`/#business`), Service (`#service`), FAQPage (`#faq`); Service.provider is now `{"@id": ...}`; openingHours 00:00–23:59 (24/7 claim); logo/image added; areaServed as City entities. NOT added (intentional): aggregateRating (no verified rating), geo (no real coordinates), sameAs (no real social URLs).
- P1 meta: `og:url` on all 31 pages (canonical URL); twitter:title + twitter:image on home.
- P1 images: scripts/gen-images.py (PIL) → 34 WebP variants (400/800/1200, hero +1600) in static/images/opt/; shared Picture.svelte + srcsetFor() wired everywhere photos render (hero, cards, detail, gallery, blog, about, team, commercial, before/after slider). Mobile hero now serves hero-800.webp at 390px/2x.
- P1 dead weight: 11 unreferenced photo JPGs (5,075,691 B, 0 literal references) DELETED; 6 OG JPGs kept. static/images/ 6,465,127 B → 3,154,878 B.
- P2 llms-full.txt created (static/llms-full.txt, 200). P2 sitemap: `<lastmod>2026-11-18</lastmod>` on all 54 URLs.
- P2 a11y: slider wrapper role="slider" removed (native range input is the control; the flagged element was actually ReviewCard's star div — now role="img"); header logo aria-label now contains its visible text. Local Lighthouse home mobile A97 → A100, aria-prohibited-attr + label-content-name-mismatch both pass.
- P2 404 JS shell: INTENTIONAL RESIDUAL — SvelteKit 3 renders the adapter-static fallback with ssr:false/csr:true by design (respond.js renders only the root layout node), so no prerendered content is possible without forking the adapter or dropping the fallback (which would break the custom 404 + deep links). No-JS clients see the shell; JS browsers render the full 404 page.
- P2 trailing-slash 308s: no fix needed — 0 internal trailing-slash links in the build (the single absolute trailing-slash URL is the home canonical/og:url root, which is correct).
- Verify: build exit 0; svelte-check 0 errors, 1 warning (pre-existing BookingStepper initial-prop capture); Playwright 27/27 (390 + 1440, booking/track/quote/FAQ/slider); local Lighthouse home mobile P78→P80, LCP 4.4s→4.1s, CLS 0 (VM-throttled; live PageSpeed was P93/LCP 2.7s pre-fix).
