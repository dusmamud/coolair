<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import StickyMobileBar from '#lib/components/StickyMobileBar.svelte';
	import JsonLd from '#lib/components/JsonLd.svelte';
	import { SITE } from '#lib/data/site';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const orgJson = {
		'@context': 'https://schema.org',
		'@type': 'HVACBusiness',
		name: SITE.fullName,
		description: 'Professional AC repair, installation, cleaning, gas filling and maintenance across Mumbai, Thane, Navi Mumbai and Pune.',
		url: SITE.baseUrl,
		telephone: SITE.phoneDisplay,
		email: SITE.email,
		priceRange: SITE.priceRange,
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Mumbai',
			addressRegion: 'Maharashtra',
			addressCountry: 'IN'
		},
		areaServed: ['Mumbai', 'Thane', 'Navi Mumbai', 'Pune'],
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '08:00',
			closes: '22:00'
		}
	};

	onMount(() => {
		if (!browser) return;
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		// Lenis smooth scroll (skipped under reduced motion)
		if (!reduced) {
			import('lenis')
				.then(({ default: Lenis }) => {
					const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
					function raf(time: number) {
						lenis.raf(time);
						requestAnimationFrame(raf);
					}
					requestAnimationFrame(raf);
				})
				.catch(() => {});
		}
		// Scroll reveals: only animate when JS + motion allowed; content stays visible otherwise
		if (!reduced && 'IntersectionObserver' in window) {
			document.documentElement.classList.add('js-anim');
			const io = new IntersectionObserver(
				(entries) => {
					for (const e of entries) {
						if (e.isIntersecting) {
							e.target.classList.add('in');
							io.unobserve(e.target);
						}
					}
				},
				{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
			);
			// Observe current + future .reveal nodes (pages swap content on navigation)
			const observeAll = () => document.querySelectorAll('.reveal:not(.in)').forEach((n) => io.observe(n));
			observeAll();
			const mo = new MutationObserver(observeAll);
			mo.observe(document.body, { childList: true, subtree: true });
			return () => {
				io.disconnect();
				mo.disconnect();
			};
		}
	});
</script>

<svelte:head>
	<meta name="description" content="CoolAir AC Service — fast, reliable, affordable AC repair, installation, cleaning & gas filling in Mumbai, Thane, Navi Mumbai & Pune. 24/7 emergency. 100% satisfaction guaranteed." />
	<meta property="og:site_name" content="CoolAir AC Service" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

<JsonLd json={orgJson} />
<Header />
<main class="pb-16 md:pb-0">
	{@render children()}
</main>
<Footer />
<StickyMobileBar />
