<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import ServiceCard from '#lib/components/ServiceCard.svelte';
	import QuoteCalculator from '#lib/components/QuoteCalculator.svelte';
	import { SERVICES } from '#lib/data/services';
	import { SITE } from '#lib/data/site';
</script>

<svelte:head>
	<title>AC Services — Repair, Installation, Cleaning, Gas Filling | CoolAir</title>
	<meta name="description" content="All CoolAir AC services: repair from ₹299, installation from ₹1,499, deep cleaning ₹999, gas filling from ₹2,499, AMC, PCB & compressor repair, duct cleaning and commercial VRF." />
	<meta property="og:image" content="{SITE.baseUrl}/images/og/og-services.jpg" />
	<link rel="canonical" href="{SITE.baseUrl}/services" />
	<meta property="og:url" content="{SITE.baseUrl}/services" />
</svelte:head>

<PageHero eyebrow="What We Offer" title="Our AC Services" subtitle="Nine services, one standard: fixed price quoted first, genuine parts, 90-day warranty. Same-day slots in Mumbai, Thane, Navi Mumbai & Pune." crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each SERVICES as s (s.slug)}
			<ServiceCard service={s} />
		{/each}
	</div>
	<div class="mt-12 grid gap-6 lg:grid-cols-2">
		<QuoteCalculator />
		<div class="rounded-2xl bg-navy-900 p-7 text-white sm:p-9">
			<h2 class="font-display text-2xl font-extrabold">Not Sure Which Service You Need?</h2>
			<p class="mt-3 text-[16px] leading-relaxed text-slate-300">Describe the problem on the Symptoms page, or call us — we will tell you honestly whether you need a repair, a clean, or just a filter wash. Sometimes the answer is free.</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<a href="/symptoms" class="btn btn-white">Find Your Problem</a>
				<a href={SITE.phoneHref} class="btn btn-outline !border-white !text-white hover:!bg-navy-800">Call {SITE.phoneDisplay}</a>
			</div>
		</div>
	</div>
</section>
