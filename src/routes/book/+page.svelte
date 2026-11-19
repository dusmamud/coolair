<script lang="ts">
	import { browser } from '$app/env';
	import PageHero from '#lib/components/PageHero.svelte';
	import BookingStepper from '#lib/components/BookingStepper.svelte';
	import { SITE } from '#lib/data/site';

	let initial = $state('ac-repair');

	$effect(() => {
		if (!browser) return;
		const s = new URLSearchParams(window.location.search).get('service');
		if (s) initial = s;
	});
</script>

<svelte:head>
	<title>Book AC Service Online — 2 Minutes | CoolAir</title>
	<meta name="description" content="Book AC repair, installation, cleaning or gas filling online. Pick a service, date and 2-hour arrival window. No advance payment — pay after the job." />
	<meta property="og:image" content="{SITE.baseUrl}/images/og/og-book.jpg" />
	<link rel="canonical" href="{SITE.baseUrl}/book" />
	<meta property="og:url" content="{SITE.baseUrl}/book" />
</svelte:head>

<PageHero eyebrow="Book a Service" title="Book Your AC Service in 2 Minutes" subtitle="Pick a service, a date and a 2-hour arrival window. No advance payment — pay after the job is done and cooling is tested." crumbs={[{ label: 'Home', href: '/' }, { label: 'Book a Service' }]} />

<section class="mx-auto max-w-4xl px-4 py-10 pb-16 sm:py-14">
	{#key initial}
		<BookingStepper initialService={initial} />
	{/key}
	<p class="mt-6 text-center text-[15px] text-ink-600">Prefer to talk? Call <a href={SITE.phoneHref} class="font-bold text-brand-600">{SITE.phoneDisplay}</a> — 24/7. Already booked? <a href="/track-booking" class="font-bold text-brand-600">Track your booking →</a></p>
</section>
