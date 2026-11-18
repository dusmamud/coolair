<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import BeforeAfterSlider from '#lib/components/BeforeAfterSlider.svelte';
	import { SITE } from '#lib/data/site';

	const shots = [
		{ src: '/images/service-installation.webp', alt: 'Split AC installation in progress', label: 'Installation' },
		{ src: '/images/service-repair.webp', alt: 'Technician diagnosing a split AC with a meter', label: 'Repair' },
		{ src: '/images/service-cleaning.webp', alt: 'Deep cleaning of an AC filter and coil', label: 'Deep Cleaning' },
		{ src: '/images/service-gas.webp', alt: 'Gas refill on an outdoor condenser unit', label: 'Gas Filling' },
		{ src: '/images/commercial.webp', alt: 'Cassette AC inspection in an office', label: 'Commercial' },
		{ src: '/images/team.webp', alt: 'The CoolAir technician team', label: 'Our Team' }
	];
</script>

<svelte:head>
	<title>Gallery — Our Work, Before & After | CoolAir</title>
	<meta name="description" content="CoolAir gallery: real job photos — installation, repair, deep cleaning, gas filling and commercial work — plus a before/after cleaning slider. Mock photos for this demo site." />
	<link rel="canonical" href="{SITE.baseUrl}/gallery" />
</svelte:head>

<PageHero eyebrow="Gallery" title="Our Work, Up Close" subtitle="Job photos from real visits — and a before/after slider that shows what a deep clean actually does. Photos are mock images for this demo site." crumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<h2 class="text-2xl font-extrabold text-navy-900">Before & After — Deep Cleaning</h2>
	<p class="mt-2 max-w-2xl text-[16px] text-ink-600">Drag the handle to compare a dusty coil with the same coil after our ₹999 deep jet cleaning.</p>
	<div class="mt-6 max-w-3xl"><BeforeAfterSlider /></div>

	<h2 class="mt-14 text-2xl font-extrabold text-navy-900">From the Field</h2>
	<div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each shots as s (s.src)}
			<figure class="card-lift overflow-hidden rounded-2xl border border-slate-200 bg-white">
				<img src={s.src} alt={s.alt} width="1200" height="800" loading="lazy" class="aspect-[3/2] w-full object-cover" />
				<figcaption class="px-5 py-4 font-bold text-navy-900">{s.label}</figcaption>
			</figure>
		{/each}
	</div>
	<p class="mt-8 text-center"><a href="/book" class="btn btn-primary">Book Your Service</a></p>
</section>
