<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Counters from '#lib/components/Counters.svelte';
	import { SITE } from '#lib/data/site';
	import { ShieldCheck, BadgeIndianRupee, Timer, UserCheck, Wrench, PhoneCall } from 'lucide-svelte';

	const reasons = [
		{ icon: UserCheck, title: 'Skilled & Certified Technicians', text: 'Every technician is brand-trained and background-checked. The person who arrives is the person qualified for your AC — not a day hire.' },
		{ icon: BadgeIndianRupee, title: 'Affordable, Transparent Pricing', text: 'Diagnosis ₹299, basic service ₹499, deep cleaning ₹999. The price is quoted before work starts and printed on your bill.' },
		{ icon: Timer, title: 'Quick Response', text: 'Same-day slots in all four cities and a 2-hour emergency response. We call 30 minutes before arrival, and we arrive inside your window.' },
		{ icon: ShieldCheck, title: '100% Satisfaction Guarantee', text: '90-day warranty on labour, up to 6 months on fitted parts. If a repair fails in warranty, we come back and fix it free.' },
		{ icon: Wrench, title: 'Genuine Spare Parts', text: 'OEM or equivalent parts with bills. We show you the old part and the new one — nothing is swapped silently.' },
		{ icon: PhoneCall, title: 'Real Humans, 24/7', text: 'A person answers the phone at 2 AM, not a recording. Emergency calls get priority dispatch, nights and holidays included.' }
	];
</script>

<svelte:head>
	<title>Why Choose CoolAir? | CoolAir AC Service</title>
	<meta name="description" content="Certified technicians, transparent pricing from ₹299, same-day slots, genuine parts and a 90-day warranty. Six reasons Mumbai, Thane, Navi Mumbai & Pune choose CoolAir." />
	<link rel="canonical" href="{SITE.baseUrl}/why-us" />
</svelte:head>

<PageHero eyebrow="Why Us" title="Why 10,000+ Customers Choose CoolAir" subtitle="Not the cheapest quote on the internet — the one you can trust when the AC dies on the hottest day of the year." crumbs={[{ label: 'Home', href: '/' }, { label: 'Why Us' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each reasons as r (r.title)}
			<article class="card-lift rounded-2xl border border-slate-200 bg-white p-6">
				<r.icon class="h-10 w-10 text-brand-600" />
				<h2 class="mt-4 text-xl font-bold text-navy-900">{r.title}</h2>
				<p class="mt-2 text-[15px] leading-relaxed text-ink-600">{r.text}</p>
			</article>
		{/each}
	</div>
</section>

<Counters />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid gap-6 lg:grid-cols-2">
		<div class="rounded-2xl bg-navy-900 p-7 text-white sm:p-9">
			<h2 class="font-display text-2xl font-extrabold">Our Promise, In One Line</h2>
			<p class="mt-3 text-[17px] leading-relaxed text-slate-300">“If we cannot fix it properly, we will tell you — and we will not charge you for trying.” That is the whole business model.</p>
			<a href="/book" class="btn btn-primary mt-6">Book a Service</a>
		</div>
		<div class="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
			<h2 class="font-display text-2xl font-extrabold text-navy-900">Compare Before You Book</h2>
			<ul class="mt-4 space-y-3 text-[15px] text-ink-600">
				<li class="flex justify-between gap-4 border-b border-slate-100 pb-3"><span>Diagnosis fee</span><strong class="text-navy-900">₹299 — adjusted in bill</strong></li>
				<li class="flex justify-between gap-4 border-b border-slate-100 pb-3"><span>Labour warranty</span><strong class="text-navy-900">90 days</strong></li>
				<li class="flex justify-between gap-4 border-b border-slate-100 pb-3"><span>Emergency response</span><strong class="text-navy-900">Within 2 hours, 24/7</strong></li>
				<li class="flex justify-between gap-4"><span>Advance payment</span><strong class="text-navy-900">None — pay after the job</strong></li>
			</ul>
			<a href="/prices" class="mt-5 inline-flex font-bold text-brand-600">See the full price list →</a>
		</div>
	</div>
</section>
