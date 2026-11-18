<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { BRANDS } from '#lib/data/brands';
	import { SITE } from '#lib/data/site';
	import { ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>AC Brands We Service — Daikin, Voltas, LG, Samsung & More | CoolAir</title>
	<meta name="description" content="CoolAir repairs and services all major AC brands: Daikin, Voltas, LG, Samsung, Panasonic, Hitachi, Carrier and Haier — split, window, cassette and VRF." />
	<link rel="canonical" href="{SITE.baseUrl}/brands" />
</svelte:head>

<PageHero eyebrow="Brands" title="We Service All Major Brands" subtitle="Brand-trained technicians, common parts in stock, and honest advice on repair vs replacement — for every brand below." crumbs={[{ label: 'Home', href: '/' }, { label: 'Brands' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
		{#each BRANDS as b (b.slug)}
			<article class="card-lift flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
				<h2 class="font-display text-2xl font-extrabold text-navy-900">{b.name}</h2>
				<p class="mt-1.5 flex-1 text-[15px] text-ink-600">{b.tagline}</p>
				<a href="/brands/{b.slug}" class="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">Service details <ArrowRight class="h-4 w-4" /></a>
			</article>
		{/each}
	</div>
	<p class="mt-8 text-center text-[15px] text-ink-600">Your brand not listed? We service most other brands too — call <a href={SITE.phoneHref} class="font-bold text-brand-600">{SITE.phoneDisplay}</a> and ask.</p>
</section>
