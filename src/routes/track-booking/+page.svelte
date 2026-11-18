<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import PageHero from '#lib/components/PageHero.svelte';
	import { SITE } from '#lib/data/site';
	import { Search, PackageSearch } from 'lucide-svelte';

	interface StoredBooking {
		id: string; service: string; acType: string; brand: string; date: string; slot: string; area: string; name: string; phone: string; status?: string;
	}

	let query = $state('');
	let found = $state<StoredBooking | null>(null);
	let searched = $state(false);
	let saved = $state<StoredBooking[]>([]);

	onMount(() => {
		if (!browser) return;
		try {
			saved = JSON.parse(localStorage.getItem('coolair-bookings') ?? '[]') as StoredBooking[];
			const last = localStorage.getItem('coolair-last-booking');
			if (last) query = last;
		} catch { saved = []; }
	});

	function search() {
		searched = true;
		found = saved.find((b) => b.id.toLowerCase() === query.trim().toLowerCase()) ?? null;
	}
</script>

<svelte:head>
	<title>Track Your Booking | CoolAir</title>
	<meta name="description" content="Track your CoolAir AC service booking by booking ID. See service, date, arrival window and status." />
	<link rel="canonical" href="{SITE.baseUrl}/track-booking" />
</svelte:head>

<PageHero eyebrow="Track Booking" title="Where Is My Technician?" subtitle="Enter your booking ID (from your confirmation screen) to see your booking details. Bookings are saved in this browser on this demo site." crumbs={[{ label: 'Home', href: '/' }, { label: 'Track Booking' }]} />

<section class="mx-auto max-w-2xl px-4 py-12 pb-16">
	<div class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
		<label for="track-id" class="mb-1.5 block text-sm font-bold text-navy-900">Booking ID</label>
		<div class="flex gap-2">
			<input id="track-id" bind:value={query} placeholder="e.g. CA-261118-1234" class="min-h-12 w-full rounded-lg border border-slate-300 px-3 font-mono text-base uppercase" />
			<button type="button" class="btn btn-primary shrink-0" onclick={search}><Search class="h-5 w-5" /> Track</button>
		</div>
		{#if searched}
			{#if found}
				<div class="mt-6 rounded-xl bg-brand-50 p-5" role="status">
					<p class="flex items-center gap-2 font-bold text-emerald-700"><PackageSearch class="h-5 w-5" /> Booking found — {found.status ?? 'Confirmed'}</p>
					<dl class="mt-3 space-y-1.5 text-[15px]">
						<div class="flex justify-between gap-4"><dt class="text-ink-500">Booking ID</dt><dd class="font-mono font-bold text-navy-900">{found.id}</dd></div>
						<div class="flex justify-between gap-4"><dt class="text-ink-500">Service</dt><dd class="font-bold text-navy-900">{found.service} · {found.acType} · {found.brand}</dd></div>
						<div class="flex justify-between gap-4"><dt class="text-ink-500">Date & slot</dt><dd class="font-bold text-navy-900">{found.date} · {found.slot}</dd></div>
						<div class="flex justify-between gap-4"><dt class="text-ink-500">Area</dt><dd class="font-bold text-navy-900">{found.area}</dd></div>
						<div class="flex justify-between gap-4"><dt class="text-ink-500">Name</dt><dd class="font-bold text-navy-900">{found.name}</dd></div>
					</dl>
					<p class="mt-3 text-sm text-ink-600">The technician calls 30 minutes before arrival. Need changes? Call <a href={SITE.phoneHref} class="font-bold text-brand-600">{SITE.phoneDisplay}</a> with your booking ID.</p>
				</div>
			{:else}
				<p class="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">No booking found with that ID in this browser. Check the ID, or call us — we can look it up by your phone number.</p>
			{/if}
		{/if}
		{#if saved.length > 0}
			<div class="mt-6">
				<h2 class="text-sm font-bold text-navy-900">Your bookings on this device</h2>
				<ul class="mt-2 space-y-2">
					{#each saved as b (b.id)}
						<li><button type="button" class="w-full rounded-lg border border-slate-200 px-4 py-3 text-left text-[15px] hover:border-brand-600" onclick={() => { query = b.id; search(); }}><span class="font-mono font-bold text-navy-900">{b.id}</span> — {b.service} · {b.date}</button></li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</section>
