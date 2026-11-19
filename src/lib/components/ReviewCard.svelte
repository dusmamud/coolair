<script lang="ts">
	import { Star, BadgeCheck } from 'lucide-svelte';
	import type { Review } from '#lib/data/reviews';

	let { review }: { review: Review } = $props();
</script>

<figure class="card-lift flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
	<div class="flex items-center gap-1" role="img" aria-label="Rated {review.rating} out of 5">
		{#each Array.from({ length: 5 }, (_, i) => i) as i (i)}
			<Star class="h-4 w-4 {i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}" />
		{/each}
	</div>
	<blockquote class="mt-3 flex-1 text-[15px] leading-relaxed text-ink-600">“{review.text}”</blockquote>
	<figcaption class="mt-4 border-t border-slate-100 pt-4">
		<p class="flex items-center gap-1.5 font-bold text-navy-900">
			{review.name}
			<BadgeCheck class="h-4 w-4 text-brand-600" aria-label="Verified job" />
		</p>
		<p class="text-sm text-ink-500">{review.locality} · {review.service} · {review.date}</p>
		<p class="mt-1 text-sm text-ink-500">Technician: {review.technician}</p>
	</figcaption>
</figure>
