<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { SITE } from '#lib/data/site';
	import { BadgeIndianRupee, Check, CreditCard } from 'lucide-svelte';

	const plans = [
		{ title: 'New AC on EMI', text: 'Buying a new AC through our partner retailers? Split the cost over 3, 6 or 12 months with no-cost EMI on select models (mock example).' },
		{ title: 'Big repairs on instalments', text: 'Compressor or PCB replacement above ₹5,000 can be split into 2–3 monthly payments — ask the technician for the exact split before approving.' },
		{ title: 'AMC on quarterly billing', text: 'AMC Premium can be billed quarterly instead of yearly — ₹999 every 3 months, same benefits.' }
	];
</script>

<svelte:head>
	<title>AC Financing & EMI Options | CoolAir</title>
	<meta name="description" content="CoolAir financing (mock): no-cost EMI on new ACs, instalments on big repairs above ₹5,000, and quarterly AMC billing. No hidden charges." />
	<link rel="canonical" href="{SITE.baseUrl}/financing" />
	<meta property="og:url" content="{SITE.baseUrl}/financing" />
</svelte:head>

<PageHero eyebrow="Financing" title="Big AC Bills, Smaller Monthly Steps" subtitle="EMI and instalment options for new ACs and large repairs — explained honestly, with no hidden charges." crumbs={[{ label: 'Home', href: '/' }, { label: 'Financing' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid gap-5 md:grid-cols-3">
		{#each plans as p (p.title)}
			<article class="card-lift rounded-2xl border border-slate-200 bg-white p-6">
				<BadgeIndianRupee class="h-9 w-9 text-brand-600" />
				<h2 class="mt-3 text-xl font-bold text-navy-900">{p.title}</h2>
				<p class="mt-2 text-[15px] leading-relaxed text-ink-600">{p.text}</p>
			</article>
		{/each}
	</div>
	<div class="mt-10 grid gap-5 lg:grid-cols-2">
		<div class="rounded-2xl bg-brand-50 p-6 sm:p-8">
			<h2 class="flex items-center gap-2 text-xl font-bold text-navy-900"><CreditCard class="h-6 w-6 text-brand-600" /> Example — compressor replacement</h2>
			<p class="mt-3 text-[16px] leading-relaxed text-ink-600">A ₹9,000 compressor job can be split as ₹3,000 now + ₹3,000 next month + ₹3,000 the month after, at no extra cost. The exact split is written on your quote before work starts.</p>
			<ul class="mt-4 space-y-2 text-[15px] text-ink-600">
				<li class="flex gap-2"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> No processing fee on CoolAir instalments</li>
				<li class="flex gap-2"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> Pay by UPI, card or cash</li>
				<li class="flex gap-2"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> Warranty applies in full from day one</li>
			</ul>
		</div>
		<div class="rounded-2xl bg-navy-900 p-6 text-white sm:p-8">
			<h2 class="font-display text-2xl font-extrabold">Honest note</h2>
			<p class="mt-3 text-[16px] leading-relaxed text-slate-300">Financing details on this page are mock wording for the demo site. Real EMI depends on the partner bank or retailer at purchase time. CoolAir never adds interest silently — if a plan costs more, the total is printed on the quote.</p>
			<a href="/contact" class="btn btn-white mt-6">Ask About EMI</a>
		</div>
	</div>
</section>
