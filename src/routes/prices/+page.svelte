<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import QuoteCalculator from '#lib/components/QuoteCalculator.svelte';
	import { SERVICES } from '#lib/data/services';
	import { SITE, inr } from '#lib/data/site';
	import { Check } from 'lucide-svelte';

	const rows = [
		{ item: 'Diagnosis / inspection visit', price: '₹299', note: 'Adjusted in the repair bill if you proceed' },
		{ item: 'Basic AC service (filter + check)', price: '₹499', note: 'Split or window, per unit' },
		{ item: 'Deep jet cleaning', price: '₹999', note: 'Coils, blower, drain — anti-bacterial included' },
		{ item: 'Gas top-up (R22 / R32 / R410A)', price: '₹2,499', note: 'After leak check; full refill quoted' },
		{ item: 'Split AC installation', price: '₹1,999', note: 'Copper pipe up to 3 m included' },
		{ item: 'Window AC installation', price: '₹1,499', note: 'Mounting + fitting included' },
		{ item: 'AC uninstallation (split)', price: '₹999', note: 'Safe gas pump-down included' },
		{ item: 'PCB repair (board level)', price: '₹1,499+', note: 'Quoted after diagnosis' },
		{ item: 'Cassette AC service', price: '₹1,499', note: 'Per unit, deep clean' },
		{ item: 'Duct cleaning', price: '₹1,999+', note: 'Quoted per system size' },
		{ item: 'AMC Basic (1 year)', price: '₹1,499/yr', note: '2 services + priority slots' },
		{ item: 'AMC Premium (1 year)', price: '₹3,499/yr', note: '4 services + free gas top-up once' }
	];
</script>

<svelte:head>
	<title>AC Service Prices — Transparent Rate Card | CoolAir</title>
	<meta name="description" content="CoolAir transparent prices: diagnosis ₹299, basic service ₹499, deep cleaning ₹999, gas top-up ₹2,499, split installation ₹1,999. No hidden charges — quote before work starts." />
	<meta property="og:image" content="{SITE.baseUrl}/images/og/og-prices.jpg" />
	<link rel="canonical" href="{SITE.baseUrl}/prices" />
	<meta property="og:url" content="{SITE.baseUrl}/prices" />
</svelte:head>

<PageHero eyebrow="Prices" title="Transparent Prices. No Surprises." subtitle="The price you see here is the price you pay. Every job starts with a written quote — approve it, or pay only the ₹299 diagnosis fee." crumbs={[{ label: 'Home', href: '/' }, { label: 'Prices' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid gap-10 lg:grid-cols-3">
		<div class="min-w-0 lg:col-span-2">
			<div class="overflow-x-auto rounded-2xl border border-slate-200">
				<table class="w-full min-w-[560px] bg-white text-left">
					<thead>
						<tr class="bg-navy-900 text-white">
							<th class="px-5 py-4 text-sm font-bold">Service</th>
							<th class="px-5 py-4 text-sm font-bold">Price</th>
							<th class="px-5 py-4 text-sm font-bold">What’s included</th>
						</tr>
					</thead>
					<tbody>
						{#each rows as r, i (r.item)}
							<tr class={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
								<td class="px-5 py-3.5 font-semibold text-navy-900">{r.item}</td>
								<td class="px-5 py-3.5 font-bold whitespace-nowrap text-brand-600">{r.price}</td>
								<td class="px-5 py-3.5 text-[15px] text-ink-600">{r.note}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<div class="mt-6 grid gap-4 sm:grid-cols-3">
				<div class="rounded-xl border border-slate-200 bg-white p-5"><h3 class="font-bold text-navy-900">No hidden charges</h3><p class="mt-1 text-sm text-ink-600">Written quote before work. Nothing added later.</p></div>
				<div class="rounded-xl border border-slate-200 bg-white p-5"><h3 class="font-bold text-navy-900">Pay after the job</h3><p class="mt-1 text-sm text-ink-600">No advance. UPI, card or cash after cooling is tested.</p></div>
				<div class="rounded-xl border border-slate-200 bg-white p-5"><h3 class="font-bold text-navy-900">90-day warranty</h3><p class="mt-1 text-sm text-ink-600">Labour warranty on every repair. Free revisit if it fails.</p></div>
			</div>
			<h2 class="mt-10 text-2xl font-extrabold text-navy-900">Compare: one-time vs AMC</h2>
			<p class="mt-2 text-[16px] text-ink-600">Two services a year at ₹499 each = ₹998, without priority slots or repair discounts. AMC Basic at ₹1,499/year adds priority booking and 10% off repairs — it pays for itself from the second visit. <a href="/amc" class="font-bold text-brand-600">See AMC plans →</a></p>
		</div>
		<div class="space-y-5">
			<QuoteCalculator />
			<div class="rounded-2xl bg-brand-50 p-6">
				<h3 class="text-lg font-bold text-navy-900">What affects the final price?</h3>
				<ul class="mt-3 space-y-2 text-[15px] text-ink-600">
					<li class="flex gap-2"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> AC type & size (split vs window vs cassette)</li>
					<li class="flex gap-2"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> Parts needed (genuine, billed)</li>
					<li class="flex gap-2"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> Extra copper pipe or core cutting</li>
					<li class="flex gap-2"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> Nothing else — no night surcharge, no “urgent” fee</li>
				</ul>
			</div>
		</div>
	</div>
</section>
