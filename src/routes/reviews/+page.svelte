<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import ReviewCard from '#lib/components/ReviewCard.svelte';
	import { REVIEWS } from '#lib/data/reviews';
	import { SITE } from '#lib/data/site';
	import { Star } from 'lucide-svelte';

	let filter = $state('All');
	const services = ['All', ...new Set(REVIEWS.map((r) => r.service))];
	const shown = $derived(filter === 'All' ? REVIEWS : REVIEWS.filter((r) => r.service === filter));
	const avg = (REVIEWS.reduce((a, r) => a + r.rating, 0) / REVIEWS.length).toFixed(1);
</script>

<svelte:head>
	<title>Customer Reviews | CoolAir AC Service</title>
	<meta name="description" content="Read CoolAir customer reviews from Mumbai, Thane, Navi Mumbai & Pune — repair, installation, cleaning and AMC jobs with technician names. Mock reviews for this demo site." />
	<link rel="canonical" href="{SITE.baseUrl}/reviews" />
	<meta property="og:url" content="{SITE.baseUrl}/reviews" />
</svelte:head>

<PageHero eyebrow="Reviews" title="What Customers Say" subtitle="Every review below names the job, the locality and the technician — because a review without details is just a star." crumbs={[{ label: 'Home', href: '/' }, { label: 'Reviews' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="flex flex-wrap items-center gap-4 rounded-2xl bg-brand-50 p-5 sm:p-6">
		<p class="flex items-center gap-2 font-display text-3xl font-extrabold text-navy-900">
			<Star class="h-8 w-8 fill-amber-400 text-amber-400" /> {avg} / 5
		</p>
		<p class="text-[15px] text-ink-600">Average across {REVIEWS.length} published reviews (mock values for this demo site). We publish the good and the average — not only the perfect ones.</p>
	</div>
	<div class="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter reviews by service">
		{#each services as s (s)}
			<button type="button" class="min-h-11 rounded-full border px-4 py-2 text-sm font-bold {filter === s ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300 bg-white text-navy-900 hover:border-brand-600'}" aria-pressed={filter === s} onclick={() => (filter = s)}>{s}</button>
		{/each}
	</div>
	<div class="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each shown as r (r.id)}
			<ReviewCard review={r} />
		{/each}
	</div>
	{#if shown.length === 0}<p class="mt-6 text-center text-ink-600">No reviews for this service yet.</p>{/if}
	<p class="mt-10 rounded-xl bg-slate-50 px-5 py-4 text-center text-sm text-ink-500">All reviews on this page are mock values written for the demo. At launch, replace them with real customer feedback collected after each job.</p>
</section>
