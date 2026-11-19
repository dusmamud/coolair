<script lang="ts">
	import { Wrench, SprayCan, Zap, Settings, Package, Cpu, Wind, Building2, ArrowRight } from 'lucide-svelte';
	import type { Service } from '#lib/data/services';
	import { inr } from '#lib/data/site';
	import Picture from '#lib/components/Picture.svelte';

	let { service }: { service: Service } = $props();
	const icons = { wrench: Wrench, spray: SprayCan, zap: Zap, settings: Settings, package: Package, cpu: Cpu, wind: Wind, building: Building2 } as const;
	const Icon = $derived(icons[service.icon as keyof typeof icons] ?? Wrench);
</script>

<article class="card-lift group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
	<div class="relative">
		<Picture src={service.image} alt={service.name} width="1200" height="800" sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 20vw" class="aspect-[3/2] w-full object-cover" />
		<span class="absolute -bottom-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg ring-4 ring-white">
			<Icon class="h-6 w-6" />
		</span>
	</div>
	<div class="flex flex-1 flex-col px-5 pb-5 pt-9 text-center">
		<h3 class="text-lg font-bold text-navy-900">{service.name}</h3>
		<p class="mt-1.5 flex-1 text-[15px] text-ink-600">{service.short}</p>
		<p class="mt-3 text-sm font-bold text-brand-600">From {inr(service.priceFrom)}</p>
		<a href="/services/{service.slug}" class="mt-3 inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg bg-brand-50 px-4 py-2.5 text-sm font-bold text-brand-600 transition-colors hover:bg-brand-100">
			View Details <ArrowRight class="h-4 w-4" />
		</a>
	</div>
</article>
