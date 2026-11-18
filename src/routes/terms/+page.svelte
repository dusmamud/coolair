<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { SITE } from '#lib/data/site';
</script>

<svelte:head>
	<title>Terms of Service | CoolAir AC Service</title>
	<meta name="description" content="CoolAir terms of service: booking, pricing, payment, warranty and cancellation terms. Demo site — mock terms." />
	<link rel="canonical" href="{SITE.baseUrl}/terms" />
</svelte:head>

<PageHero eyebrow="Legal" title="Terms of Service" subtitle="Last updated: 18 November 2026. Demo-site terms — replace with a lawyer-reviewed version at launch." crumbs={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]} />

<section class="mx-auto max-w-3xl px-4 py-12 pb-16 text-[16px] leading-relaxed text-ink-600">
	<h2 class="mt-2 text-2xl font-extrabold text-navy-900">Bookings & pricing</h2>
	<p class="mt-3">Prices on this site are indicative. The final price is quoted by the technician after diagnosis and confirmed by you before work starts. If you decline, only the ₹299 diagnosis fee applies.</p>
	<h2 class="mt-8 text-2xl font-extrabold text-navy-900">Payment</h2>
	<p class="mt-3">Payment is due after the job is complete and cooling is tested. We accept UPI, card and cash. No advance payment is required for standard bookings.</p>
	<h2 class="mt-8 text-2xl font-extrabold text-navy-900">Rescheduling & cancellation</h2>
	<p class="mt-3">You can reschedule or cancel free of charge up to 2 hours before your slot by calling <a href={SITE.phoneHref} class="font-bold text-brand-600">{SITE.phoneDisplay}</a> with your booking ID.</p>
	<h2 class="mt-8 text-2xl font-extrabold text-navy-900">Warranty</h2>
	<p class="mt-3">Labour is warranted for 90 days, fitted parts for 6 months, and installation workmanship for 1 year — see the <a href="/warranty" class="font-bold text-brand-600">Warranty page</a> for full terms.</p>
	<h2 class="mt-8 text-2xl font-extrabold text-navy-900">Limitation</h2>
	<p class="mt-3">Our liability for any job is limited to the amount paid for that job. We are not liable for pre-existing damage or for faults caused by another party’s work after ours.</p>
</section>
