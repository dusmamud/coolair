<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import FaqAccordion from '#lib/components/FaqAccordion.svelte';
	import { SITE } from '#lib/data/site';
	import { MapPin, Clock, AlertTriangle, Home } from 'lucide-svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const city = $derived(data.city);
</script>

<svelte:head>
	<title>AC Repair & Service in {city.name} — Same-Day | CoolAir</title>
	<meta name="description" content="CoolAir AC repair, installation & cleaning in {city.name}. {city.tagline} {city.eta}." />
	<link rel="canonical" href="{SITE.baseUrl}/service-areas/{city.slug}" />
	<meta property="og:url" content="{SITE.baseUrl}/service-areas/{city.slug}" />
</svelte:head>

<PageHero eyebrow="Service Area" title="AC Service in {city.name}" subtitle={city.tagline} crumbs={[{ label: 'Home', href: '/' }, { label: 'Service Areas', href: '/service-areas' }, { label: city.name }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<p class="max-w-3xl text-[17px] leading-relaxed text-ink-600">{city.intro}</p>

	<div class="mt-10 grid gap-5 lg:grid-cols-3">
		<article class="rounded-2xl border border-slate-200 bg-white p-6">
			<h2 class="flex items-center gap-2 text-lg font-bold text-navy-900"><Home class="h-5 w-5 text-brand-600" /> Housing here</h2>
			<p class="mt-2 text-[15px] leading-relaxed text-ink-600">{city.housing}</p>
		</article>
		<article class="rounded-2xl border border-slate-200 bg-white p-6">
			<h2 class="flex items-center gap-2 text-lg font-bold text-navy-900"><AlertTriangle class="h-5 w-5 text-amber-500" /> Common faults in {city.name}</h2>
			<ul class="mt-2 space-y-1.5 text-[15px] text-ink-600">
				{#each city.commonFaults as f (f)}<li>• {f}</li>{/each}
			</ul>
		</article>
		<article class="rounded-2xl border border-slate-200 bg-white p-6">
			<h2 class="flex items-center gap-2 text-lg font-bold text-navy-900"><Clock class="h-5 w-5 text-brand-600" /> Response & pricing</h2>
			<p class="mt-2 text-[15px] leading-relaxed text-ink-600">{city.eta}. {city.priceNote}</p>
			<p class="mt-2 flex items-start gap-1.5 text-[15px] text-ink-600"><MapPin class="mt-0.5 h-4 w-4 shrink-0 text-brand-600" /> {city.areas.join(' · ')}</p>
		</article>
	</div>

	<div class="mt-10 rounded-2xl bg-brand-50 p-6 sm:p-8">
		<h2 class="text-xl font-bold text-navy-900">Climate note — {city.name}</h2>
		<p class="mt-2 max-w-3xl text-[16px] leading-relaxed text-ink-600">{city.climate}</p>
	</div>

	<div class="mx-auto mt-12 max-w-4xl">
		<h2 class="text-2xl font-extrabold text-navy-900">{city.name} — frequently asked</h2>
		<div class="mt-5"><FaqAccordion faqs={city.faqs} idPrefix="city-faq" /></div>
		<div class="mt-8 text-center">
			<a href="/book" class="btn btn-primary">Book in {city.name}</a>
			<a href="/service-areas" class="btn btn-outline ml-3">All Areas</a>
		</div>
	</div>
</section>
