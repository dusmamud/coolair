<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import { SITE } from '#lib/data/site';
	import { Building2, Users, FileText, Clock, Check } from 'lucide-svelte';

	const services = [
		{ icon: Building2, title: 'VRF / VRV Systems', text: 'Installation, repair and AMC for Daikin, LG and Samsung VRF — with brand-trained technicians and genuine parts.' },
		{ icon: Users, title: 'Society AMC', text: 'One contract for a whole housing society: fixed per-visit rates, bulk service days, and a single point of contact.' },
		{ icon: FileText, title: 'Monthly Reporting', text: 'Every visit logged with photos and a written report — so facility managers always know what was done, and what is due.' },
		{ icon: Clock, title: 'After-Hours Servicing', text: 'Weekend and night slots for offices, clinics and restaurants — work never stops for a service visit.' }
	];
</script>

<svelte:head>
	<title>Commercial AC Services — Offices, Societies & VRF | CoolAir</title>
	<meta name="description" content="CoolAir commercial AC: VRF/VRV installation & AMC, society contracts, office cassette servicing with monthly reports and after-hours slots. Free site survey." />
	<link rel="canonical" href="{SITE.baseUrl}/commercial" />
	<meta property="og:url" content="{SITE.baseUrl}/commercial" />
</svelte:head>

<PageHero eyebrow="Commercial" title="AC That Keeps Your Business Cool" subtitle="Offices, shops, clinics, restaurants and housing societies — VRF systems, multi-unit AMC, and service that works around your hours, not ours." crumbs={[{ label: 'Home', href: '/' }, { label: 'Commercial' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<Picture src="/images/commercial.webp" alt="Technicians inspecting a cassette AC in a modern office" width="1200" height="800" sizes="(max-width: 1023px) 92vw, 1200px" class="aspect-[21/9] w-full rounded-2xl object-cover shadow-lg" />
	<div class="mt-10 grid gap-5 sm:grid-cols-2">
		{#each services as s (s.title)}
			<article class="card-lift rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
				<s.icon class="h-10 w-10 text-brand-600" />
				<h2 class="mt-3 text-xl font-bold text-navy-900">{s.title}</h2>
				<p class="mt-2 text-[15px] leading-relaxed text-ink-600">{s.text}</p>
			</article>
		{/each}
	</div>
	<div class="mt-10 grid gap-5 lg:grid-cols-2">
		<div class="rounded-2xl bg-navy-900 p-7 text-white sm:p-9">
			<h2 class="font-display text-2xl font-extrabold">Free Site Survey</h2>
			<p class="mt-3 text-[16px] leading-relaxed text-slate-300">We visit your site, count the units, check load and access, and send a written quote within 48 hours. No obligation, no fee — in Mumbai, Thane, Navi Mumbai and Pune.</p>
			<a href="/contact" class="btn btn-primary mt-6">Request a Survey</a>
		</div>
		<div class="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
			<h2 class="font-display text-2xl font-extrabold text-navy-900">What you get in writing</h2>
			<ul class="mt-4 space-y-2.5 text-[15px] text-ink-600">
				<li class="flex gap-2"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> Fixed per-unit rates for the contract year</li>
				<li class="flex gap-2"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> Response-time SLA (emergency within 2–3 hours)</li>
				<li class="flex gap-2"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> Monthly photo reports for every visit</li>
				<li class="flex gap-2"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> One invoice, one point of contact</li>
			</ul>
		</div>
	</div>
</section>
