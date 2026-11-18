<script lang="ts">
	import { Phone, Menu, X, Clock, MapPin } from 'lucide-svelte';
	import SocialIcon from '#lib/components/SocialIcon.svelte';
	import { SITE, NAV_LINKS } from '#lib/data/site';
	import { page } from '$app/state';

	let open = $state(false);
	let servicesOpen = $state(false);
	const current = $derived(page.url.pathname);

	function close() {
		open = false;
		servicesOpen = false;
	}
</script>

<!-- Top bar -->
<div class="bg-navy-900 text-white">
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[13px] sm:text-sm">
		<div class="flex items-center gap-4">
			<span class="inline-flex items-center gap-1.5"><Clock class="h-4 w-4 text-brand-100" /> 24/7 Emergency AC Service</span>
			<span class="hidden items-center gap-1.5 sm:inline-flex"><MapPin class="h-4 w-4 text-brand-100" /> Serving in Your City</span>
		</div>
		<div class="flex items-center gap-3">
			<span class="hidden md:inline text-slate-300">Follow Us:</span>
			<a href="https://facebook.com" target="_blank" rel="noopener" aria-label="CoolAir on Facebook" class="rounded p-1 hover:text-brand-100"><SocialIcon name="facebook" /></a>
			<a href="https://instagram.com" target="_blank" rel="noopener" aria-label="CoolAir on Instagram" class="rounded p-1 hover:text-brand-100"><SocialIcon name="instagram" /></a>
			<a href="https://twitter.com" target="_blank" rel="noopener" aria-label="CoolAir on X" class="rounded p-1 hover:text-brand-100"><SocialIcon name="x" /></a>
			<a href="https://youtube.com" target="_blank" rel="noopener" aria-label="CoolAir on YouTube" class="rounded p-1 hover:text-brand-100"><SocialIcon name="youtube" /></a>
		</div>
	</div>
</div>

<!-- Main header -->
<header class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
		<a href="/" class="flex shrink-0 items-center gap-2.5" aria-label="CoolAir home">
			<svg width="44" height="44" viewBox="0 0 48 48" fill="none" aria-hidden="true" class="text-brand-600">
				<g stroke="currentColor" stroke-width="3.4" stroke-linecap="round">
					<path d="M24 4v40M6 14l36 20M42 14L6 34" />
					<path d="M24 4l-4 6M24 4l4 6M24 44l-4-6M24 44l4-6M6 14l7 1M6 14l1 7M42 34l-7-1M42 34l-1-7M42 14l-7 1M42 14l-1 7M6 34l7-1M6 34l1-7" stroke-width="2.6" />
				</g>
				<circle cx="24" cy="24" r="5" fill="currentColor" stroke="none" />
			</svg>
			<span class="leading-none">
				<span class="block font-display text-[26px] font-extrabold tracking-tight text-navy-900">Cool<span class="text-brand-600">Air</span></span>
				<span class="mt-1 block text-[10px] font-bold tracking-[0.32em] text-ink-500">AC SERVICE</span>
			</span>
		</a>

		<nav class="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
			{#each NAV_LINKS as link (link.href)}
				{#if link.label === 'Services'}
					<div class="relative">
						<button
							type="button"
							class="flex min-h-11 items-center gap-1 rounded-md px-3 py-2 text-[15px] font-semibold text-ink-900 hover:bg-brand-50 hover:text-brand-600"
							aria-expanded={servicesOpen}
							aria-haspopup="true"
							onclick={() => (servicesOpen = !servicesOpen)}
						>
							Services <span aria-hidden="true" class="text-xs">{servicesOpen ? '▲' : '▼'}</span>
						</button>
						{#if servicesOpen}
							<div class="absolute left-0 top-full z-50 mt-1 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
								<a href="/services" class="block rounded-lg px-3 py-2.5 text-[15px] font-semibold hover:bg-brand-50" onclick={close}>All Services</a>
								<a href="/services/ac-repair" class="block rounded-lg px-3 py-2.5 text-[15px] hover:bg-brand-50" onclick={close}>AC Repair</a>
								<a href="/services/ac-installation" class="block rounded-lg px-3 py-2.5 text-[15px] hover:bg-brand-50" onclick={close}>AC Installation</a>
								<a href="/services/ac-cleaning" class="block rounded-lg px-3 py-2.5 text-[15px] hover:bg-brand-50" onclick={close}>AC Cleaning</a>
								<a href="/services/gas-refilling" class="block rounded-lg px-3 py-2.5 text-[15px] hover:bg-brand-50" onclick={close}>Gas Filling</a>
								<a href="/amc" class="block rounded-lg px-3 py-2.5 text-[15px] hover:bg-brand-50" onclick={close}>AMC Plans</a>
							</div>
						{/if}
					</div>
				{:else}
					<a
						href={link.href}
						class="rounded-md px-3 py-2 text-[15px] font-semibold hover:bg-brand-50 hover:text-brand-600 {current === link.href ? 'text-brand-600 underline decoration-2 underline-offset-8' : 'text-ink-900'}"
					>{link.label}</a>
				{/if}
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<a href={SITE.phoneHref} class="btn btn-primary hidden !min-h-12 !py-2.5 md:inline-flex">
				<Phone class="h-5 w-5" />
				<span class="text-left leading-tight normal-case">
					<span class="block text-[11px] font-medium opacity-90">Call Us Anytime</span>
					<span class="block text-[15px]">{SITE.phoneDisplay}</span>
				</span>
			</a>
			<a href={SITE.phoneHref} class="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-600 text-white md:hidden" aria-label="Call CoolAir now">
				<Phone class="h-5 w-5" />
			</a>
			<button type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 text-navy-900 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onclick={() => (open = !open)}>
				{#if open}<X class="h-6 w-6" />{:else}<Menu class="h-6 w-6" />{/if}
			</button>
		</div>
	</div>

	{#if open}
		<nav class="border-t border-slate-200 bg-white px-4 pb-6 pt-2 lg:hidden" aria-label="Mobile navigation">
			{#each NAV_LINKS as link (link.href)}
				<a href={link.href} class="block rounded-lg px-3 py-3.5 text-base font-semibold text-ink-900 hover:bg-brand-50 {current === link.href ? 'text-brand-600' : ''}" onclick={close}>{link.label}</a>
			{/each}
			<div class="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
				<a href="/services/ac-repair" class="rounded-lg bg-brand-50 px-3 py-3 text-center text-sm font-bold text-brand-600" onclick={close}>AC Repair</a>
				<a href="/services/ac-cleaning" class="rounded-lg bg-brand-50 px-3 py-3 text-center text-sm font-bold text-brand-600" onclick={close}>AC Cleaning</a>
				<a href="/services/gas-refilling" class="rounded-lg bg-brand-50 px-3 py-3 text-center text-sm font-bold text-brand-600" onclick={close}>Gas Filling</a>
				<a href="/amc" class="rounded-lg bg-brand-50 px-3 py-3 text-center text-sm font-bold text-brand-600" onclick={close}>AMC Plans</a>
			</div>
			<a href="/book" class="btn btn-primary mt-4 w-full" onclick={close}>Book Appointment</a>
		</nav>
	{/if}
</header>
