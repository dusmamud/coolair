<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { SITE } from '#lib/data/site';

	let el: HTMLElement | undefined = $state();
	let shown = $state(false);
	let jobs = $state(0);
	let customers = $state(0);
	let techs = $state(0);
	let years = $state(0);

	function animate(target: number, setter: (v: number) => void) {
		if (!browser || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			setter(target);
			return;
		}
		const start = performance.now();
		const dur = 1400;
		function tick(now: number) {
			const p = Math.min(1, (now - start) / dur);
			const eased = 1 - Math.pow(1 - p, 3);
			setter(Math.round(target * eased));
			if (p < 1) requestAnimationFrame(tick);
		}
		requestAnimationFrame(tick);
	}

	onMount(() => {
		if (!el) return;
		const io = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting && !shown) {
					shown = true;
					animate(SITE.stats.jobsDone, (v) => (jobs = v));
					animate(SITE.stats.customers, (v) => (customers = v));
					animate(SITE.stats.technicians, (v) => (techs = v));
					animate(SITE.stats.years, (v) => (years = v));
					io.disconnect();
				}
			},
			{ threshold: 0.3 }
		);
		io.observe(el);
		return () => io.disconnect();
	});

	const items = $derived([
		{ value: jobs.toLocaleString('en-IN') + '+', label: 'Jobs Completed' },
		{ value: customers.toLocaleString('en-IN') + '+', label: 'Happy Customers' },
		{ value: techs + '+', label: 'Certified Technicians' },
		{ value: years + '+', label: 'Years of Experience' }
	]);
</script>

<section bind:this={el} class="bg-navy-900 py-12 text-white" aria-label="CoolAir in numbers">
	<div class="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center lg:grid-cols-4">
		{#each items as item (item.label)}
			<div>
				<p class="font-display text-4xl font-extrabold text-white sm:text-5xl">{item.value}</p>
				<p class="mt-2 text-sm font-semibold tracking-wide text-slate-300">{item.label}</p>
			</div>
		{/each}
	</div>
	<p class="mt-8 text-center text-xs text-slate-400">Figures are mock values for this demo site.</p>
</section>
