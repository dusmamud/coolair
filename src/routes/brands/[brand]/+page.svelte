<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { SITE } from '#lib/data/site';
	import { Check, AlertTriangle } from 'lucide-svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const brand = $derived(data.brand);
</script>

<svelte:head>
	<title>{brand.name} AC Repair & Service in Mumbai | CoolAir</title>
	<meta name="description" content="CoolAir {brand.name} AC repair & service. {brand.about} Common issues and strengths — same-day slots in Mumbai, Thane, Navi Mumbai & Pune." />
	<link rel="canonical" href="{SITE.baseUrl}/brands/{brand.slug}" />
</svelte:head>

<PageHero eyebrow="Brand" title="{brand.name} AC Repair & Service" subtitle={brand.tagline} crumbs={[{ label: 'Home', href: '/' }, { label: 'Brands', href: '/brands' }, { label: brand.name }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<p class="max-w-3xl text-[17px] leading-relaxed text-ink-600">{brand.about}</p>
	<div class="mt-10 grid gap-5 md:grid-cols-2">
		<article class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
			<h2 class="text-xl font-bold text-navy-900">{brand.name} strengths</h2>
			<ul class="mt-3 space-y-2.5">
				{#each brand.strengths as s (s)}<li class="flex gap-2.5 text-[15px] text-ink-600"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> {s}</li>{/each}
			</ul>
		</article>
		<article class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
			<h2 class="text-xl font-bold text-navy-900">Common {brand.name} issues we fix</h2>
			<ul class="mt-3 space-y-2.5">
				{#each brand.commonIssues as s (s)}<li class="flex gap-2.5 text-[15px] text-ink-600"><AlertTriangle class="mt-0.5 h-5 w-5 shrink-0 text-amber-500" /> {s}</li>{/each}
			</ul>
			<p class="mt-4 rounded-lg bg-brand-50 px-4 py-3 text-[15px] text-ink-600">{brand.note}</p>
		</article>
	</div>
	<div class="mt-10 text-center">
		<a href="/book" class="btn btn-primary">Book {brand.name} Service</a>
		<a href="/brands" class="btn btn-outline ml-3">All Brands</a>
	</div>
</section>
