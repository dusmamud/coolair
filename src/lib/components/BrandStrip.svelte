<script lang="ts">
	import { BRAND_NAMES } from '#lib/data/site';
</script>

<section class="border-y border-slate-200 bg-slate-50 py-6" aria-label="Brands we service">
	<div class="mx-auto max-w-7xl px-4">
		<p class="text-center text-xs font-bold tracking-[0.18em] text-ink-500 uppercase">We Service All Major Brands</p>
		<div class="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
			{#each BRAND_NAMES as brand (brand)}
				<a href="/brands/{brand.toLowerCase()}" class="font-display text-xl font-extrabold tracking-tight text-navy-900/70 transition-colors hover:text-brand-600 sm:text-2xl">{brand}</a>
			{/each}
		</div>
	</div>
</section>
