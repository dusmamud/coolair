<script lang="ts">
	import { Calculator, ArrowRight } from 'lucide-svelte';
	import { SERVICES } from '#lib/data/services';
	import { BRAND_NAMES, AC_TYPES, inr } from '#lib/data/site';

	let serviceSlug = $state('ac-repair');
	let acType = $state('Split AC');
	let brand = $state('Daikin');
	let problem = $state('Not cooling');

	const problems = ['Not cooling', 'Water leaking', 'Noise', 'Bad smell', 'Not starting', 'Gas refill needed'];

	const service = $derived(SERVICES.find((s) => s.slug === serviceSlug) ?? SERVICES[0]);
	const quote = $derived.by(() => {
		if (!service) return { low: 0, high: 0 };
		let low = service.priceFrom;
		let high = service.priceTo;
		// Window ACs are cheaper to service; VRF/commercial is quoted on survey.
		if (acType === 'Window AC') {
			low = Math.round(low * 0.8);
			high = Math.round(high * 0.8);
		}
		if (acType === 'VRF / VRV') return { low: 2999, high: 0 };
		if (problem === 'Gas refill needed') {
			low = 2499;
			high = 3999;
		}
		if (problem === 'Not starting') {
			low = Math.max(low, 499);
		}
		return { low, high };
	});
</script>

<div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
	<h3 class="flex items-center gap-2 text-xl font-bold text-navy-900"><Calculator class="h-6 w-6 text-brand-600" /> Instant Quote</h3>
	<p class="mt-1 text-[15px] text-ink-600">Get a price range in seconds — the final quote is confirmed after diagnosis, before any work starts.</p>
	<div class="mt-5 grid gap-4 sm:grid-cols-2">
		<div>
			<label for="q-service" class="mb-1.5 block text-sm font-bold text-navy-900">Service</label>
			<select id="q-service" bind:value={serviceSlug} class="min-h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-base">
				{#each SERVICES as s (s.slug)}
					<option value={s.slug}>{s.name}</option>
				{/each}
			</select>
		</div>
		<div>
			<label for="q-type" class="mb-1.5 block text-sm font-bold text-navy-900">AC Type</label>
			<select id="q-type" bind:value={acType} class="min-h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-base">
				{#each AC_TYPES as t (t)}
					<option value={t}>{t}</option>
				{/each}
			</select>
		</div>
		<div>
			<label for="q-brand" class="mb-1.5 block text-sm font-bold text-navy-900">Brand</label>
			<select id="q-brand" bind:value={brand} class="min-h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-base">
				{#each BRAND_NAMES as b (b)}
					<option value={b}>{b}</option>
				{/each}
			</select>
		</div>
		<div>
			<label for="q-problem" class="mb-1.5 block text-sm font-bold text-navy-900">Problem</label>
			<select id="q-problem" bind:value={problem} class="min-h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-base">
				{#each problems as p (p)}
					<option value={p}>{p}</option>
				{/each}
			</select>
		</div>
	</div>
	<div class="mt-5 rounded-xl bg-navy-900 p-5 text-white" aria-live="polite">
		<p class="text-sm font-semibold text-slate-300">Estimated range — {service?.name} · {acType} · {brand}</p>
		<p class="mt-1 font-display text-3xl font-extrabold">
			{#if quote.high === 0}
				From {inr(quote.low)} <span class="text-base font-semibold text-slate-300">(quoted after free survey)</span>
			{:else}
				{inr(quote.low)} – {inr(quote.high)}
			{/if}
		</p>
		<p class="mt-1 text-sm text-slate-300">Includes visit + diagnosis. No hidden charges — you approve the exact price first.</p>
		<a href="/book?service={serviceSlug}" class="btn btn-primary mt-4 w-full sm:w-auto">Book at this estimate <ArrowRight class="h-4 w-4" /></a>
	</div>
</div>
