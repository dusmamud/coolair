<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import SymptomFinder from '#lib/components/SymptomFinder.svelte';
	import FaqAccordion from '#lib/components/FaqAccordion.svelte';
	import { SITE, inr } from '#lib/data/site';

	const guide = [
		{ problem: 'AC not cooling', cause: 'Dirty filter, low gas, faulty capacitor, or iced coil', fix: 'Filter wash + gas pressure test + capacitor check', price: 'From ₹299', href: '/services/ac-repair' },
		{ problem: 'Water leaking inside', cause: 'Blocked drain pipe, dirty filter icing the coil, or low gas', fix: 'Drain flush + tray clean; gas check if it returns', price: 'From ₹499', href: '/services/ac-cleaning' },
		{ problem: 'Loud / rattling noise', cause: 'Loose fan blade, worn motor bearing, loose outdoor bracket', fix: 'Fan & bracket inspection, motor check, tightening', price: 'From ₹299', href: '/services/ac-repair' },
		{ problem: 'Bad smell when running', cause: 'Mould & bacteria on coil and blower', fix: 'Deep jet cleaning + anti-bacterial treatment', price: 'From ₹999', href: '/services/ac-cleaning' },
		{ problem: 'AC not starting', cause: 'Power supply, PCB fault, or failed capacitor', fix: 'Electrical + PCB diagnosis, component repair', price: 'From ₹499', href: '/services/pcb-compressor-repair' },
		{ problem: 'AC trips the MCB', cause: 'Short circuit, compressor overload, or wiring fault', fix: 'Switch off first, then electrical diagnosis — do not keep resetting', price: 'From ₹499', href: '/services/ac-repair' },
		{ problem: 'Cooling fades after weeks', cause: 'Slow gas leak — refill alone will not last', fix: 'Leak detection + fix, then refill', price: 'From ₹2,499', href: '/services/gas-refilling' },
		{ problem: 'Remote not working', cause: 'Dead batteries, faulty sensor, or remote failure', fix: 'Battery + sensor check; replacement remote if needed', price: 'From ₹299', href: '/services/ac-repair' }
	];
	const faqs = [
		{ q: 'Can I fix it myself?', a: 'Filter washing, remote batteries and clearing space around the outdoor unit are safe DIY. Gas, electrical and PCB work are not — refrigerant and 240V power need a trained technician.' },
		{ q: 'My AC shows an error code. What now?', a: 'Note the code (e.g. E1, U4, CH05) and switch the AC off. Tell us the code when you book — it tells the technician which part to bring.' },
		{ q: 'Is a smell dangerous?', a: 'Usually it is mould on the coil — unpleasant and bad for allergies, but not an emergency. A deep clean fixes it. A burning smell is different: switch off and call us immediately.' }
	];
</script>

<svelte:head>
	<title>AC Symptom Finder — Diagnose Your AC Problem | CoolAir</title>
	<meta name="description" content="AC not cooling, leaking, noisy or smelling? Find the likely cause, the fix and the price for 8 common AC problems — then book the repair." />
	<link rel="canonical" href="{SITE.baseUrl}/symptoms" />
</svelte:head>

<PageHero eyebrow="Symptom Finder" title="What’s Wrong With Your AC?" subtitle="Tap a symptom below, or read the full guide — likely cause, fix and price for the 8 most common AC problems." crumbs={[{ label: 'Home', href: '/' }, { label: 'Symptoms' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<SymptomFinder />
	<h2 class="mt-14 text-2xl font-extrabold text-navy-900 sm:text-3xl">The Full Symptom Guide</h2>
	<div class="mt-6 grid gap-5 md:grid-cols-2">
		{#each guide as g (g.problem)}
			<article class="card-lift rounded-2xl border border-slate-200 bg-white p-6">
				<h3 class="text-lg font-bold text-navy-900">{g.problem}</h3>
				<p class="mt-2 text-[15px] text-ink-600"><strong class="text-navy-900">Likely cause:</strong> {g.cause}</p>
				<p class="mt-1.5 text-[15px] text-ink-600"><strong class="text-navy-900">Fix:</strong> {g.fix}</p>
				<div class="mt-4 flex items-center justify-between gap-3">
					<span class="font-bold text-brand-600">{g.price}</span>
					<a href={g.href} class="btn btn-outline !min-h-10 !px-4 !py-2 !text-xs">Book this fix</a>
				</div>
			</article>
		{/each}
	</div>
	<div class="mx-auto mt-12 max-w-4xl">
		<h2 class="text-2xl font-extrabold text-navy-900">Safety first</h2>
		<div class="mt-4"><FaqAccordion faqs={faqs} idPrefix="symptom-faq" /></div>
		<p class="mt-6 text-center text-[15px] text-ink-600">Diagnosis from {inr(299)} — <a href="/book" class="font-bold text-brand-600">book a visit →</a></p>
	</div>
</section>
