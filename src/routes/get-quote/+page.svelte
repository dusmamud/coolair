<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import QuoteCalculator from '#lib/components/QuoteCalculator.svelte';
	import { SITE } from '#lib/data/site';
</script>

<svelte:head>
	<title>Instant AC Quote — Price in Seconds | CoolAir</title>
	<meta name="description" content="Get an instant AC service price range: pick service, AC type, brand and problem. Transparent ranges from ₹299 — final quote confirmed after diagnosis." />
	<link rel="canonical" href="{SITE.baseUrl}/get-quote" />
	<meta property="og:url" content="{SITE.baseUrl}/get-quote" />
</svelte:head>

<PageHero eyebrow="Instant Quote" title="Know the Price Before You Book" subtitle="Pick your service, AC type, brand and problem — get a price range in seconds. The final quote is confirmed after diagnosis, before any work starts." crumbs={[{ label: 'Home', href: '/' }, { label: 'Instant Quote' }]} />

<section class="mx-auto max-w-3xl px-4 py-12 pb-16">
	<QuoteCalculator />
	<p class="mt-6 text-center text-[15px] text-ink-600">Quotes are estimates from our standard rate card. <a href="/prices" class="font-bold text-brand-600">See the full price list →</a></p>
</section>
