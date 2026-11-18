<script lang="ts">
	import { Search, Thermometer, Droplets, Volume2, Wind, ArrowRight } from 'lucide-svelte';
	import { inr } from '#lib/data/site';

	interface Symptom {
		id: string;
		label: string;
		icon: typeof Thermometer;
		cause: string;
		fix: string;
		priceFrom: number;
		serviceSlug: string;
	}

	const SYMPTOMS: Symptom[] = [
		{ id: 'not-cooling', label: 'AC not cooling', icon: Thermometer, cause: 'Most likely: dirty filters, low gas, or a faulty capacitor. Ice on the pipes points to low gas.', fix: 'Filter wash + gas pressure test. If gas is low, we find the leak before refilling.', priceFrom: 299, serviceSlug: 'ac-repair' },
		{ id: 'leaking', label: 'Water leaking inside', icon: Droplets, cause: 'Most likely: blocked drain pipe or dirty filter icing the coil.', fix: 'Drain flush + tray clean. If it returns, a gas check follows.', priceFrom: 499, serviceSlug: 'ac-cleaning' },
		{ id: 'noisy', label: 'Noisy / rattling AC', icon: Volume2, cause: 'Most likely: loose fan blade, worn motor bearing, or a loose outdoor bracket.', fix: 'Fan and bracket inspection, motor check, tightening and lubrication.', priceFrom: 299, serviceSlug: 'ac-repair' },
		{ id: 'smell', label: 'Bad smell', icon: Wind, cause: 'Most likely: mould and bacteria on the coil and blower from months of dust.', fix: 'Deep jet cleaning with anti-bacterial treatment — smell usually gone the same day.', priceFrom: 999, serviceSlug: 'ac-cleaning' }
	];

	let selected = $state<Symptom | null>(null);
	let query = $state('');
	const filtered = $derived(
		SYMPTOMS.filter((s) => s.label.toLowerCase().includes(query.toLowerCase()))
	);
</script>

<div class="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
	<label class="sr-only" for="symptom-search">Search your AC problem</label>
	<div class="relative">
		<Search class="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-500" />
		<input
			id="symptom-search"
			type="search"
			bind:value={query}
			placeholder="What is wrong with your AC? e.g. not cooling"
			class="min-h-12 w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 text-base focus:border-brand-600"
		/>
	</div>
	<div class="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
		{#each filtered as s (s.id)}
			<button
				type="button"
				class="flex min-h-[76px] flex-col items-center justify-center gap-1.5 rounded-xl border px-2 py-3 text-sm font-bold transition-colors {selected?.id === s.id ? 'border-brand-600 bg-brand-50 text-brand-600' : 'border-slate-200 text-navy-900 hover:border-brand-600'}"
				aria-pressed={selected?.id === s.id}
				onclick={() => (selected = s)}
			>
				<s.icon class="h-6 w-6" />
				{s.label}
			</button>
		{/each}
	</div>
	{#if filtered.length === 0}
		<p class="mt-4 text-center text-[15px] text-ink-600">No match — describe it when you book, or call us and we will diagnose it for you.</p>
	{/if}
	{#if selected}
		<div class="mt-5 rounded-xl bg-brand-50 p-5">
			<h3 class="text-lg font-bold text-navy-900">{selected.label} — likely cause</h3>
			<p class="mt-1.5 text-[15px] text-ink-600">{selected.cause}</p>
			<p class="mt-2 text-[15px] text-ink-600"><strong class="text-navy-900">Fix:</strong> {selected.fix}</p>
			<p class="mt-2 text-[15px] font-bold text-brand-600">Diagnosis from {inr(selected.priceFrom)}</p>
			<div class="mt-4 flex flex-wrap gap-2">
				<a href="/book?service={selected.serviceSlug}" class="btn btn-primary !min-h-11 !px-4 !py-2 !text-sm">Book this fix <ArrowRight class="h-4 w-4" /></a>
				<a href="/symptoms" class="btn btn-outline !min-h-11 !px-4 !py-2 !text-sm">All symptoms</a>
			</div>
		</div>
	{/if}
</div>
