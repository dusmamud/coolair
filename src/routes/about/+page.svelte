<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Counters from '#lib/components/Counters.svelte';
	import { SITE } from '#lib/data/site';
	import { Check, ShieldCheck, Users, Award } from 'lucide-svelte';
</script>

<svelte:head>
	<title>About CoolAir — AC Service Experts in Mumbai | CoolAir AC Service</title>
	<meta name="description" content="CoolAir has served Mumbai, Thane, Navi Mumbai & Pune for 8+ years with certified technicians, genuine parts and honest pricing. Meet the team behind 12,500+ jobs." />
	<meta property="og:image" content="{SITE.baseUrl}/images/og/og-about.jpg" />
	<link rel="canonical" href="{SITE.baseUrl}/about" />
	<meta property="og:url" content="{SITE.baseUrl}/about" />
</svelte:head>

<PageHero eyebrow="About Us" title="The AC People Mumbai Calls First" subtitle="Eight years, 12,500+ jobs, one rule: quote the price before we start, and stand behind the work after we leave." crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid items-center gap-10 lg:grid-cols-2">
		<Picture src="/images/about-workshop.webp" alt="Inside the CoolAir service workshop" width="1200" height="800" sizes="(max-width: 1023px) 92vw, 620px" class="aspect-[3/2] w-full rounded-2xl object-cover shadow-lg" />
		<div>
			<p class="eyebrow">Our Story</p>
			<h2 class="mt-2 text-3xl font-extrabold text-navy-900">Started With One Van. Built on Word of Mouth.</h2>
			<p class="mt-4 text-[17px] leading-relaxed text-ink-600">CoolAir began in Andheri West with a single technician and a simple frustration: AC companies that quoted one price on the phone and another at the door. We decided to do the opposite — fixed prices, written quotes, and technicians who explain the fault before touching a screwdriver.</p>
			<p class="mt-3 text-[17px] leading-relaxed text-ink-600">Today our 28 certified technicians cover Mumbai, Thane, Navi Mumbai and Pune, from single-window ACs in rented rooms to VRF systems in office towers. The rule has not changed.</p>
			<ul class="mt-5 space-y-2.5">
				<li class="flex gap-2.5 font-semibold text-navy-900"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> Fixed price quoted before work starts</li>
				<li class="flex gap-2.5 font-semibold text-navy-900"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> Genuine parts with bills</li>
				<li class="flex gap-2.5 font-semibold text-navy-900"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> 90-day warranty on labour</li>
				<li class="flex gap-2.5 font-semibold text-navy-900"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> Background-checked technicians</li>
			</ul>
		</div>
	</div>
</section>

<section class="bg-brand-50 py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4">
		<h2 class="text-center text-3xl font-extrabold text-navy-900">What We Stand For</h2>
		<div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			<div class="rounded-2xl border border-slate-200 bg-white p-6"><ShieldCheck class="h-9 w-9 text-brand-600" /><h3 class="mt-3 text-lg font-bold text-navy-900">Honest Pricing</h3><p class="mt-1.5 text-[15px] text-ink-600">The quote you approve is the bill you pay. No “extra gas” surprises.</p></div>
			<div class="rounded-2xl border border-slate-200 bg-white p-6"><Users class="h-9 w-9 text-brand-600" /><h3 class="mt-3 text-lg font-bold text-navy-900">Real Technicians</h3><p class="mt-1.5 text-[15px] text-ink-600">Certified, background-checked, and trained on every major brand.</p></div>
			<div class="rounded-2xl border border-slate-200 bg-white p-6"><Award class="h-9 w-9 text-brand-600" /><h3 class="mt-3 text-lg font-bold text-navy-900">Genuine Parts</h3><p class="mt-1.5 text-[15px] text-ink-600">OEM or equivalent parts with bills — never unlabelled substitutes.</p></div>
			<div class="rounded-2xl border border-slate-200 bg-white p-6"><Check class="h-9 w-9 text-brand-600" /><h3 class="mt-3 text-lg font-bold text-navy-900">We Come Back</h3><p class="mt-1.5 text-[15px] text-ink-600">If a repair fails within warranty, we return and fix it free.</p></div>
		</div>
	</div>
</section>

<Counters />

<section class="mx-auto max-w-7xl px-4 py-12 text-center sm:py-16">
	<h2 class="text-3xl font-extrabold text-navy-900">Ready When Your AC Isn’t</h2>
	<p class="mx-auto mt-3 max-w-lg text-[17px] text-ink-600">Book online in 2 minutes, or call us any time — day or night.</p>
	<div class="mt-6 flex flex-wrap justify-center gap-3">
		<a href="/book" class="btn btn-primary">Book a Service</a>
		<a href="/team" class="btn btn-outline">Meet the Team</a>
	</div>
</section>
