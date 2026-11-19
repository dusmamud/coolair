<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { SITE } from '#lib/data/site';
	import { BadgePercent, Timer, Sun } from 'lucide-svelte';

	// Dated offer — expiry is part of the content; update each season.
	const offers = [
		{
			icon: Sun, title: 'Pre-Summer Deep Clean — ₹799 (was ₹999)', tag: 'Limited time',
			text: 'Book a deep jet cleaning before 31 March 2027 and save ₹200 per AC. Includes coil, blower and drain wash + anti-bacterial treatment.',
			valid: 'Valid till 31 March 2027', code: 'SUMMER799'
		},
		{
			icon: BadgePercent, title: '2 ACs, 1 Visit — 15% off', tag: 'Everyday',
			text: 'Service or deep-clean two or more ACs in the same visit and get 15% off the total bill. Applies to all four cities.',
			valid: 'Ongoing', code: 'COOLAIR2'
		},
		{
			icon: Timer, title: 'First-Time Customer — Free Diagnosis', tag: 'New customers',
			text: 'Your first booking with CoolAir: the ₹299 diagnosis fee is waived. Pay only for the repair or service you approve.',
			valid: 'Ongoing', code: 'FIRSTFREE'
		}
	];
</script>

<svelte:head>
	<title>AC Service Offers & Discounts | CoolAir</title>
	<meta name="description" content="CoolAir offers: pre-summer deep clean ₹799 (till 31 March 2027), 15% off 2+ ACs in one visit, free diagnosis for first-time customers." />
	<link rel="canonical" href="{SITE.baseUrl}/offers" />
	<meta property="og:url" content="{SITE.baseUrl}/offers" />
</svelte:head>

<PageHero eyebrow="Offers" title="Offers That Actually Save You Money" subtitle="No inflated “MRP” games — real discounts on real services, with dates printed on them." crumbs={[{ label: 'Home', href: '/' }, { label: 'Offers' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid gap-5 md:grid-cols-3">
		{#each offers as o (o.title)}
			<article class="card-lift flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
				<span class="inline-flex w-fit items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-600"><o.icon class="h-4 w-4" /> {o.tag}</span>
				<h2 class="mt-4 text-xl font-bold text-navy-900">{o.title}</h2>
				<p class="mt-2 flex-1 text-[15px] leading-relaxed text-ink-600">{o.text}</p>
				<p class="mt-4 text-sm font-semibold text-ink-500">{o.valid}</p>
				<p class="mt-1 text-sm">Use code: <strong class="rounded bg-slate-100 px-2 py-0.5 font-mono text-navy-900">{o.code}</strong></p>
				<a href="/book" class="btn btn-primary mt-5 w-full">Claim This Offer</a>
			</article>
		{/each}
	</div>
	<p class="mt-8 rounded-xl bg-brand-50 px-5 py-4 text-center text-[15px] text-ink-600">Terms: one offer per booking; offers cannot be combined; mention the code while booking or on the call. Prices are mock values for this demo site.</p>
</section>
