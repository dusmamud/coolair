<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { SITE } from '#lib/data/site';
</script>

<svelte:head>
	<title>Disclaimer | CoolAir AC Service</title>
	<meta name="description" content="CoolAir disclaimer: demo site — all contact details, prices, reviews and technician names are mock values." />
	<link rel="canonical" href="{SITE.baseUrl}/disclaimer" />
	<meta property="og:url" content="{SITE.baseUrl}/disclaimer" />
</svelte:head>

<PageHero eyebrow="Legal" title="Disclaimer" subtitle="Last updated: 18 November 2026." crumbs={[{ label: 'Home', href: '/' }, { label: 'Disclaimer' }]} />

<section class="mx-auto max-w-3xl px-4 py-12 pb-16 text-[16px] leading-relaxed text-ink-600">
	<p class="mt-2">This website is a demonstration site for CoolAir AC Service. All contact details (phone, email, address), technician names, customer reviews, ratings, statistics and photographs are <strong class="text-navy-900">mock values</strong> created for demonstration purposes and do not represent real people, real reviews or a real business at this address.</p>
	<p class="mt-4">Prices shown are indicative examples for the demo. Before launch, the site owner must replace all mock values with real business details, real reviews (with consent), and a lawyer-reviewed privacy policy and terms of service.</p>
	<p class="mt-4">The troubleshooting guidance on this site is general information only. AC systems use high-voltage electricity and pressurised refrigerant — do not attempt gas, electrical or PCB work yourself. For anything beyond filter cleaning, book a certified technician.</p>
	<p class="mt-4">Brand names (Daikin, Voltas, LG, Samsung, Panasonic, Hitachi, Carrier, Haier) are trademarks of their respective owners. Mention here means only that CoolAir services those brands; it does not imply authorisation or affiliation.</p>
</section>
