<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { Phone, CalendarCheck, ShieldCheck, Headphones, UserCheck, ArrowRight } from 'lucide-svelte';
	import { SITE } from '#lib/data/site';

	const words1 = ['AC', 'REPAIR', '&', 'SERVICE'];
	const words2 = ['YOU', 'CAN', 'TRUST'];
	let headlineEl: HTMLElement | undefined = $state();

	onMount(async () => {
		if (!browser) return;
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const words = headlineEl?.querySelectorAll('.hero-word');
		if (!words?.length) return;
		if (reduced) {
			words.forEach((w) => w.classList.add('in'));
			return;
		}
		try {
			const { gsap } = await import('gsap');
			gsap.fromTo(
				words,
				{ opacity: 0, y: 24 },
				{ opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: 'power3.out', overwrite: true }
			);
		} catch {
			words.forEach((w, i) => setTimeout(() => w.classList.add('in'), 60 * i));
		}
	});
</script>

<section class="bg-gradient-to-b from-brand-50 to-white">
	<div class="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-10 pt-8 lg:grid-cols-2 lg:gap-12 lg:pb-16 lg:pt-14">
		<div>
			<p class="eyebrow">Fast. Reliable. Affordable.</p>
			<h1 bind:this={headlineEl} class="mt-3 text-[42px] font-black leading-[1.05] text-navy-900 sm:text-6xl lg:text-[64px]">
				{#each words1 as w, i (i)}<span class="hero-word">{w}</span>{' '}{/each}<br />
				{#each words2 as w, i (i)}<span class="hero-word text-brand-600">{w}</span>{' '}{/each}
			</h1>
			<p class="mt-4 max-w-lg text-[17px] leading-relaxed text-ink-600">
				We provide professional AC repair, installation, and maintenance services for all types and brands. 100% customer satisfaction guaranteed.
			</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<a href="/book" class="btn btn-primary"><CalendarCheck class="h-5 w-5" /> Book Appointment</a>
				<a href={SITE.phoneHref} class="btn btn-outline"><Phone class="h-5 w-5" /> Call Now</a>
			</div>
			<ul class="mt-8 grid grid-cols-3 divide-x divide-slate-200">
				<li class="flex flex-col items-center gap-1.5 px-2 text-center sm:flex-row sm:text-left">
					<UserCheck class="h-7 w-7 shrink-0 text-brand-600" />
					<span class="text-[13px] font-semibold leading-tight text-navy-900 sm:text-sm">Experienced Technicians</span>
				</li>
				<li class="flex flex-col items-center gap-1.5 px-2 text-center sm:flex-row sm:text-left">
					<ShieldCheck class="h-7 w-7 shrink-0 text-brand-600" />
					<span class="text-[13px] font-semibold leading-tight text-navy-900 sm:text-sm">100% Service Guarantee</span>
				</li>
				<li class="flex flex-col items-center gap-1.5 px-2 text-center sm:flex-row sm:text-left">
					<Headphones class="h-7 w-7 shrink-0 text-brand-600" />
					<span class="text-[13px] font-semibold leading-tight text-navy-900 sm:text-sm">24/7 Emergency Support</span>
				</li>
			</ul>
		</div>

		<div class="relative">
			<img
				src="/images/hero.webp"
				alt="CoolAir technician repairing a wall-mounted split AC"
				width="1600"
				height="1066"
				fetchpriority="high"
				class="aspect-[3/2] w-full rounded-2xl object-cover shadow-xl"
			/>
			<a href="/emergency-ac-repair" class="card-lift absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200 sm:left-8">
				<span class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white"><Headphones class="h-6 w-6" /></span>
				<span>
					<span class="block text-sm font-semibold text-navy-900">Need Immediate Help?</span>
					<span class="block font-display text-lg font-extrabold text-brand-600">24/7 SUPPORT</span>
					<span class="block text-xs text-ink-500">We are always ready to help you!</span>
				</span>
				<ArrowRight class="ml-1 h-5 w-5 text-brand-600" />
			</a>
		</div>
	</div>
</section>
