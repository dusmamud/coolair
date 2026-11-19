<script lang="ts">
	import { Wrench, Settings, SprayCan, ClipboardCheck, ArrowRight, Check, Phone, ShieldCheck, BadgeIndianRupee, Timer, Star, CalendarCheck, Search, MapPin } from 'lucide-svelte';
	import Hero from '#lib/components/Hero.svelte';
	import ServiceCard from '#lib/components/ServiceCard.svelte';
	import SymptomFinder from '#lib/components/SymptomFinder.svelte';
	import QuoteCalculator from '#lib/components/QuoteCalculator.svelte';
	import BeforeAfterSlider from '#lib/components/BeforeAfterSlider.svelte';
	import ReviewCard from '#lib/components/ReviewCard.svelte';
	import FaqAccordion from '#lib/components/FaqAccordion.svelte';
	import Counters from '#lib/components/Counters.svelte';
	import BrandStrip from '#lib/components/BrandStrip.svelte';
	import JsonLd from '#lib/components/JsonLd.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import { SERVICES } from '#lib/data/services';
	import { REVIEWS } from '#lib/data/reviews';
	import { SITE, inr } from '#lib/data/site';

	const homeFaqs = [
		{ q: 'How much does AC repair cost?', a: 'Diagnosis is ₹299 (adjusted in the repair bill). Most repairs cost ₹499–₹2,499. You approve the exact quote before we start — no hidden charges.' },
		{ q: 'How fast can a technician reach me?', a: 'Same-day slots in Mumbai, Thane, Navi Mumbai and Pune. Emergency calls get priority within 2 hours, 24/7.' },
		{ q: 'Do you repair all brands?', a: 'Yes — Daikin, Voltas, LG, Samsung, Panasonic, Hitachi, Carrier, Haier and more.' },
		{ q: 'Is there a warranty on the work?', a: 'Yes — 90 days on labour and up to 6 months on fitted parts. See the Warranty page for details.' }
	];
	const faqJson = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		'@id': `${SITE.baseUrl}/#faq`,
		mainEntity: homeFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
	};
	const steps = [
		{ icon: CalendarCheck, title: 'Book in 2 minutes', text: 'Pick a service, date and 2-hour arrival window — online or on a call.' },
		{ icon: Search, title: 'We diagnose first', text: 'The technician checks the AC in front of you and quotes a fixed price.' },
		{ icon: Wrench, title: 'We fix it right', text: 'Genuine parts, clean work, and a cooling test before we leave.' },
		{ icon: ShieldCheck, title: 'Covered by warranty', text: '90-day labour warranty. Pay only after the job is done.' }
	];
	const serviceBar = [
		{ icon: Wrench, name: 'AC Installation', text: 'Professional installation for all types of AC.', href: '/services/ac-installation' },
		{ icon: Settings, name: 'AC Repair', text: 'Fast & reliable repair service at your door.', href: '/services/ac-repair' },
		{ icon: SprayCan, name: 'AC Cleaning', text: 'Deep cleaning for better cooling & air quality.', href: '/services/ac-cleaning' },
		{ icon: ClipboardCheck, name: 'AC Maintenance', text: 'AMC plans to keep your AC in top condition.', href: '/services/ac-maintenance' }
	];
	const whyPoints = ['Skilled & Certified Technicians', 'Affordable Pricing', 'Quick Response', '100% Satisfaction Guarantee', 'Use of Genuine Spare Parts'];
</script>

<svelte:head>
	<title>CoolAir AC Service — AC Repair & Service You Can Trust | Mumbai, Thane, Pune</title>
	<meta name="description" content="CoolAir — fast, reliable, affordable AC repair, installation, cleaning & gas filling in Mumbai, Thane, Navi Mumbai & Pune. Same-day slots, 24/7 emergency, transparent prices from ₹299." />
	<meta property="og:title" content="CoolAir AC Service — AC Repair & Service You Can Trust" />
	<meta property="og:description" content="Same-day AC repair & service in Mumbai, Thane, Navi Mumbai & Pune. 24/7 emergency. Prices from ₹299." />
	<meta property="og:image" content="{SITE.baseUrl}/images/og/og-home.jpg" />
	<meta name="twitter:title" content="CoolAir AC Service — AC Repair & Service You Can Trust" />
	<meta name="twitter:image" content="{SITE.baseUrl}/images/og/og-home.jpg" />
	<link rel="canonical" href="{SITE.baseUrl}/" />
	<meta property="og:url" content="{SITE.baseUrl}/" />
</svelte:head>

<JsonLd json={faqJson} />
<Hero />

<!-- Dark navy service bar (from design) -->
<section class="px-4 pb-2" aria-label="Core services">
	<div class="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-2xl bg-navy-800 sm:grid-cols-2 lg:grid-cols-4">
		{#each serviceBar as item (item.name)}
			<a href={item.href} class="flex items-center gap-4 bg-navy-900 p-5 transition-colors hover:bg-navy-800">
				<span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white"><item.icon class="h-7 w-7" /></span>
				<span>
					<span class="block font-display text-base font-extrabold tracking-wide text-white uppercase">{item.name}</span>
					<span class="mt-0.5 block text-sm leading-snug text-slate-300">{item.text}</span>
				</span>
			</a>
		{/each}
	</div>
</section>

<!-- Our AC Services -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="reveal text-center">
		<p class="eyebrow">What We Offer</p>
		<h2 class="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">OUR AC SERVICES</h2>
		<p class="mx-auto mt-3 max-w-xl text-[17px] text-ink-600">Every job by certified technicians, with upfront pricing and a 90-day warranty.</p>
	</div>
	<div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
		{#each SERVICES.slice(0, 5) as s (s.slug)}
			<ServiceCard service={s} />
		{/each}
	</div>
	<div class="mt-8 text-center">
		<a href="/services" class="btn btn-primary">View All Services <ArrowRight class="h-4 w-4" /></a>
	</div>
</section>

<!-- How it works -->
<section class="bg-brand-50 py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4">
		<div class="reveal text-center">
			<p class="eyebrow">Simple & Transparent</p>
			<h2 class="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">How It Works</h2>
		</div>
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each steps as s, i (s.title)}
				<div class="reveal relative rounded-2xl border border-slate-200 bg-white p-6">
					<span class="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 font-display text-base font-extrabold text-white">{i + 1}</span>
					<s.icon class="mt-3 h-9 w-9 text-brand-600" />
					<h3 class="mt-3 text-lg font-bold text-navy-900">{s.title}</h3>
					<p class="mt-1.5 text-[15px] text-ink-600">{s.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Why choose us + booking banner -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid gap-6 lg:grid-cols-5">
		<div class="reveal rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-2">
			<div class="flex gap-5">
				<div class="min-w-0 flex-1">
					<p class="eyebrow">Why Choose Us?</p>
					<ul class="mt-4 space-y-3">
						{#each whyPoints as point (point)}
							<li class="flex items-start gap-2.5 text-[15px] font-semibold text-navy-900">
								<Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> {point}
							</li>
						{/each}
					</ul>
				</div>
				<Picture src="/images/service-maintenance.webp" alt="CoolAir technician giving a thumbs-up after a job" width="1200" height="800" sizes="144px" class="hidden w-36 shrink-0 self-start rounded-xl object-cover sm:block" />
			</div>
			<a href="/why-us" class="mt-6 inline-flex items-center gap-1.5 font-bold text-brand-600">More about why customers choose us <ArrowRight class="h-4 w-4" /></a>
		</div>

		<div class="reveal rounded-2xl bg-brand-600 p-6 text-white sm:p-8 lg:col-span-3">
			<h2 class="font-display text-2xl font-extrabold sm:text-3xl">SCHEDULE YOUR SERVICE TODAY!</h2>
			<p class="mt-1.5 text-[15px] text-brand-100">Book an appointment online and get instant confirmation.</p>
			<form class="mt-5 grid gap-3 sm:grid-cols-3" action="/book" method="get">
				<label class="sr-only" for="home-name">Your name</label>
				<input id="home-name" name="name" type="text" placeholder="Your Name" class="min-h-12 rounded-lg border-0 px-4 text-base text-navy-900 placeholder:text-ink-500" />
				<label class="sr-only" for="home-phone">Phone number</label>
				<input id="home-phone" name="phone" type="tel" placeholder="Phone Number" class="min-h-12 rounded-lg border-0 px-4 text-base text-navy-900 placeholder:text-ink-500" />
				<button type="submit" class="btn btn-dark !min-h-12">Book Now</button>
			</form>
			<ul class="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
				<li class="flex items-center gap-2"><BadgeIndianRupee class="h-5 w-5" /> No Hidden Charges</li>
				<li class="flex items-center gap-2"><Timer class="h-5 w-5" /> On-Time Service</li>
				<li class="flex items-center gap-2"><Star class="h-5 w-5" /> Trusted by 1000+ Customers</li>
			</ul>
		</div>
	</div>
</section>

<BrandStrip />
<Counters />

<!-- Symptom finder + quote -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="reveal text-center">
		<p class="eyebrow">Find the Problem</p>
		<h2 class="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">What’s Wrong With Your AC?</h2>
		<p class="mx-auto mt-3 max-w-xl text-[17px] text-ink-600">Tap a symptom for the likely cause, the fix, and the price — then book it in two minutes.</p>
	</div>
	<div class="mt-8 grid gap-6 lg:grid-cols-2">
		<SymptomFinder />
		<QuoteCalculator />
	</div>
</section>

<!-- Before / after -->
<section class="bg-slate-50 py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4">
		<div class="grid items-center gap-8 lg:grid-cols-2">
			<div class="reveal">
				<p class="eyebrow">Real Results</p>
				<h2 class="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">See the Difference a Deep Clean Makes</h2>
				<p class="mt-3 text-[17px] leading-relaxed text-ink-600">A dusty coil can cut cooling by 25% and push your bill up. Our ₹999 deep jet cleaning restores airflow, removes the smell, and makes the AC feel new again.</p>
				<ul class="mt-4 space-y-2.5">
					<li class="flex gap-2.5 text-[15px] font-semibold text-navy-900"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> Coil, blower & drain tray jet-washed</li>
					<li class="flex gap-2.5 text-[15px] font-semibold text-navy-900"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> Anti-bacterial treatment included</li>
					<li class="flex gap-2.5 text-[15px] font-semibold text-navy-900"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> No mess — wash-bag keeps your room dry</li>
				</ul>
				<a href="/services/ac-cleaning" class="btn btn-primary mt-6">Book Deep Cleaning — {inr(999)}</a>
			</div>
			<div class="reveal"><BeforeAfterSlider /></div>
		</div>
	</div>
</section>

<!-- Reviews -->
<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="reveal flex flex-wrap items-end justify-between gap-4">
		<div>
			<p class="eyebrow">Customer Reviews</p>
			<h2 class="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">Loved Across the City</h2>
			<p class="mt-2 text-[15px] text-ink-500">Mock reviews for this demo site — real reviews will replace them at launch.</p>
		</div>
		<a href="/reviews" class="btn btn-outline">Read All Reviews</a>
	</div>
	<div class="mt-8 grid gap-5 md:grid-cols-3">
		{#each REVIEWS.slice(0, 3) as r (r.id)}
			<ReviewCard review={r} />
		{/each}
	</div>
</section>

<!-- Service areas strip -->
<section class="mx-auto max-w-7xl px-4 pb-12 sm:pb-16">
	<div class="reveal flex flex-col items-start justify-between gap-4 rounded-2xl bg-navy-900 p-6 text-white sm:flex-row sm:items-center sm:p-8">
		<div>
			<h2 class="font-display text-2xl font-extrabold">We Serve Your Neighbourhood</h2>
			<p class="mt-1.5 flex items-center gap-1.5 text-[15px] text-slate-300"><MapPin class="h-4 w-4" /> Mumbai · Thane · Navi Mumbai · Pune — same-day slots</p>
		</div>
		<a href="/service-areas" class="btn btn-white shrink-0">Find Your Area</a>
	</div>
</section>

<!-- FAQ -->
<section class="mx-auto max-w-4xl px-4 pb-16">
	<div class="reveal text-center">
		<p class="eyebrow">Good to Know</p>
		<h2 class="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">Frequently Asked Questions</h2>
	</div>
	<div class="mt-8"><FaqAccordion faqs={homeFaqs} /></div>
	<p class="mt-6 text-center text-[15px] text-ink-600">Still unsure? Call <a href={SITE.phoneHref} class="font-bold text-brand-600">{SITE.phoneDisplay}</a> — 24/7.</p>
</section>
