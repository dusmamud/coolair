<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { SITE } from '#lib/data/site';
</script>

<svelte:head>
	<title>Privacy Policy | CoolAir AC Service</title>
	<meta name="description" content="CoolAir privacy policy: what information we collect when you book, how we use it, and your choices. Demo site — mock policy." />
	<link rel="canonical" href="{SITE.baseUrl}/privacy" />
	<meta property="og:url" content="{SITE.baseUrl}/privacy" />
</svelte:head>

<PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: 18 November 2026. This is a demo-site policy — replace with a lawyer-reviewed version at launch." crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />

<section class="mx-auto max-w-3xl px-4 py-12 pb-16 text-[16px] leading-relaxed text-ink-600">
	<h2 class="mt-2 text-2xl font-extrabold text-navy-900">What we collect</h2>
	<p class="mt-3">When you book a service or send a message, we collect your name, phone number, address and the details of your AC problem. Bookings made on this demo site are stored only in your own browser (localStorage) — nothing is sent to a server.</p>
	<h2 class="mt-8 text-2xl font-extrabold text-navy-900">How we use it</h2>
	<p class="mt-3">Only to arrange and complete your service: confirming slots, dispatching technicians, and following up on warranty. We do not sell your information to anyone, and we do not send marketing messages without your permission.</p>
	<h2 class="mt-8 text-2xl font-extrabold text-navy-900">Cookies & analytics</h2>
	<p class="mt-3">This demo site uses no tracking cookies and no analytics. At launch, any analytics will be listed here with an opt-out.</p>
	<h2 class="mt-8 text-2xl font-extrabold text-navy-900">Your choices</h2>
	<p class="mt-3">You can ask us to delete your booking details at any time by calling <a href={SITE.phoneHref} class="font-bold text-brand-600">{SITE.phoneDisplay}</a> or emailing <a href="mailto:{SITE.email}" class="font-bold text-brand-600">{SITE.email}</a> (mock contact details for this demo).</p>
</section>
