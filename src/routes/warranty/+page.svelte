<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { SITE } from '#lib/data/site';
	import { ShieldCheck, Wrench, Package, Check } from 'lucide-svelte';

	const rows = [
		{ icon: Wrench, item: 'Labour (all repairs & services)', cover: '90 days', note: 'If the same fault returns, we revisit and fix it free.' },
		{ icon: Package, item: 'Fitted parts (capacitor, PCB, motor, etc.)', cover: '6 months', note: 'Genuine parts with bill. Manufacturing defects replaced free.' },
		{ icon: ShieldCheck, item: 'Installation workmanship', cover: '1 year', note: 'Mounting, piping and drainage. Gas leaks from our joints covered.' },
		{ icon: Check, item: 'Deep cleaning work', cover: '30 days', note: 'Smell or weak airflow returning from the same cause — free re-clean.' }
	];
</script>

<svelte:head>
	<title>Warranty — Labour vs Parts, In Plain Words | CoolAir</title>
	<meta name="description" content="CoolAir warranty: 90 days on labour, 6 months on fitted parts, 1 year on installation workmanship. What is covered, what is not, and how to claim." />
	<link rel="canonical" href="{SITE.baseUrl}/warranty" />
</svelte:head>

<PageHero eyebrow="Warranty" title="Warranty, In Plain Words" subtitle="No fine print games. Here is exactly what is covered, for how long, and how to claim it." crumbs={[{ label: 'Home', href: '/' }, { label: 'Warranty' }]} />

<section class="mx-auto max-w-5xl px-4 py-12 sm:py-16">
	<div class="grid gap-5 sm:grid-cols-2">
		{#each rows as r (r.item)}
			<article class="rounded-2xl border border-slate-200 bg-white p-6">
				<r.icon class="h-9 w-9 text-brand-600" />
				<h2 class="mt-3 text-lg font-bold text-navy-900">{r.item}</h2>
				<p class="mt-1 font-display text-2xl font-extrabold text-brand-600">{r.cover}</p>
				<p class="mt-2 text-[15px] text-ink-600">{r.note}</p>
			</article>
		{/each}
	</div>

	<div class="mt-10 grid gap-5 lg:grid-cols-2">
		<div class="rounded-2xl bg-brand-50 p-6 sm:p-7">
			<h2 class="text-xl font-bold text-navy-900">How to claim</h2>
			<ol class="mt-3 list-decimal space-y-2 pl-5 text-[15px] text-ink-600">
				<li>Call <a href={SITE.phoneHref} class="font-bold text-brand-600">{SITE.phoneDisplay}</a> with your booking ID or bill number.</li>
				<li>Describe the problem — if it is the same fault, the revisit is free.</li>
				<li>We schedule the revisit, usually within 24 hours.</li>
			</ol>
		</div>
		<div class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
			<h2 class="text-xl font-bold text-navy-900">What is NOT covered</h2>
			<ul class="mt-3 space-y-2 text-[15px] text-ink-600">
				<li>• Damage from another technician’s work after ours</li>
				<li>• Voltage damage without a stabiliser (where one was advised)</li>
				<li>• Normal wear of consumables (filters, remote batteries)</li>
				<li>• Manufacturer warranty claims — we help you file them, but the brand decides</li>
			</ul>
		</div>
	</div>
	<p class="mt-8 text-center text-[15px] text-ink-600">Your manufacturer warranty stays valid — we use genuine parts and follow brand service practice. Keep your bill: it is your warranty proof.</p>
</section>
