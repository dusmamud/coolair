<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	let { faqs, idPrefix = 'faq' }: { faqs: { q: string; a: string }[]; idPrefix?: string } = $props();
	let openIdx = $state<number | null>(0);
</script>

<div class="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
	{#each faqs as item, i (item.q)}
		<div>
			<button
				type="button"
				class="flex w-full min-h-[56px] items-center justify-between gap-4 px-5 py-4 text-left"
				aria-expanded={openIdx === i}
				aria-controls="{idPrefix}-{i}"
				onclick={() => (openIdx = openIdx === i ? null : i)}
			>
				<span class="text-base font-semibold text-navy-900">{item.q}</span>
				<ChevronDown class="h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200 {openIdx === i ? 'rotate-180' : ''}" />
			</button>
			{#if openIdx === i}
				<p id="{idPrefix}-{i}" class="px-5 pb-5 text-[15px] leading-relaxed text-ink-600">{item.a}</p>
			{/if}
		</div>
	{/each}
</div>
