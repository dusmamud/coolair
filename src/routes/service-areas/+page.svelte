<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { CITIES } from '#lib/data/cities';
	import { SITE } from '#lib/data/site';
	import { MapPin, ArrowRight, Clock } from 'lucide-svelte';
</script>

<svelte:head>
	<title>AC Service Areas — Mumbai, Thane, Navi Mumbai, Pune | CoolAir</title>
	<meta name="description" content="CoolAir serves Mumbai, Thane, Navi Mumbai and Pune with same-day AC repair, installation and cleaning. Find your area, pincodes and response times." />
	<link rel="canonical" href="{SITE.baseUrl}/service-areas" />
	<meta property="og:url" content="{SITE.baseUrl}/service-areas" />
</svelte:head>

<PageHero eyebrow="Service Areas" title="We Serve Four Cities, Same-Day" subtitle="Same transparent rates in every city. Same-day slots, 2–3 hour emergency response, and technicians who know your area’s buildings." crumbs={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid gap-5 sm:grid-cols-2">
		{#each CITIES as c (c.slug)}
			<article class="card-lift rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
				<h2 class="flex items-center gap-2 text-2xl font-extrabold text-navy-900"><MapPin class="h-6 w-6 text-brand-600" /> {c.name}</h2>
				<p class="mt-2 text-[16px] text-ink-600">{c.tagline}</p>
				<p class="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-600"><Clock class="h-4 w-4" /> {c.eta}</p>
				<p class="mt-3 text-sm text-ink-500">Areas: {c.areas.join(' · ')}</p>
				<a href="/service-areas/{c.slug}" class="btn btn-outline mt-5">About {c.name} service <ArrowRight class="h-4 w-4" /></a>
			</article>
		{/each}
	</div>
	<div class="mt-10 rounded-2xl bg-brand-50 p-6 text-center sm:p-8">
		<h2 class="text-xl font-bold text-navy-900">Outside these four cities?</h2>
		<p class="mx-auto mt-2 max-w-lg text-[15px] text-ink-600">Call us — for large jobs and society contracts we sometimes travel further. For single-home visits, we will honestly tell you if we cannot reach you in time.</p>
		<a href={SITE.phoneHref} class="btn btn-primary mt-4">Call {SITE.phoneDisplay}</a>
	</div>
</section>
