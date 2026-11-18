<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import FaqAccordion from '#lib/components/FaqAccordion.svelte';
	import ServiceCard from '#lib/components/ServiceCard.svelte';
	import JsonLd from '#lib/components/JsonLd.svelte';
	import { SERVICES } from '#lib/data/services';
	import { SITE, inr } from '#lib/data/site';
	import { Check, Clock, ShieldCheck, Phone, AlertTriangle } from 'lucide-svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const service = $derived(data.service);
	const others = $derived(SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3));
	const serviceJson = $derived({
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: `${service.name} — CoolAir AC Service`,
		description: service.description,
		provider: { '@type': 'HVACBusiness', name: SITE.fullName, telephone: SITE.phoneDisplay },
		areaServed: ['Mumbai', 'Thane', 'Navi Mumbai', 'Pune'],
		offers: { '@type': 'Offer', priceCurrency: 'INR', price: service.priceFrom }
	});
	const faqJson = $derived({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: service.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
	});
</script>

<svelte:head>
	<title>{service.name} in Mumbai — From {inr(service.priceFrom)} | CoolAir AC Service</title>
	<meta name="description" content="{service.description} Prices from {inr(service.priceFrom)}. Same-day slots, 90-day warranty." />
	<link rel="canonical" href="{SITE.baseUrl}/services/{service.slug}" />
</svelte:head>

<JsonLd json={serviceJson} />
<JsonLd json={faqJson} />

<PageHero eyebrow="Service" title={service.name} subtitle={service.description} crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: service.name }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid gap-10 lg:grid-cols-3">
		<div class="lg:col-span-2">
			<img src={service.image} alt={service.name} width="1200" height="800" loading="lazy" class="aspect-[3/2] w-full rounded-2xl object-cover shadow-lg" />

			<h2 class="mt-10 text-2xl font-extrabold text-navy-900">Signs you need this service</h2>
			<ul class="mt-4 grid gap-2.5 sm:grid-cols-2">
				{#each service.symptoms as s (s)}
					<li class="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] font-semibold text-navy-900"><AlertTriangle class="mt-0.5 h-5 w-5 shrink-0 text-amber-500" /> {s}</li>
				{/each}
			</ul>

			<h2 class="mt-10 text-2xl font-extrabold text-navy-900">What’s included</h2>
			<ul class="mt-4 space-y-2.5">
				{#each service.included as item (item)}
					<li class="flex items-start gap-2.5 text-[16px] text-ink-600"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> {item}</li>
				{/each}
			</ul>

			<h2 class="mt-10 text-2xl font-extrabold text-navy-900">Frequently asked questions</h2>
			<div class="mt-4"><FaqAccordion faqs={service.faqs} idPrefix="service-faq" /></div>
		</div>

		<aside class="space-y-5">
			<div class="rounded-2xl bg-navy-900 p-6 text-white">
				<p class="text-sm font-semibold text-slate-300">Price range</p>
				<p class="mt-1 font-display text-3xl font-extrabold">{inr(service.priceFrom)}{service.priceTo > 0 ? ` – ${inr(service.priceTo)}` : '+'}</p>
				<p class="mt-1 text-sm text-slate-300">{service.priceNote}</p>
				<p class="mt-4 flex items-center gap-2 text-[15px]"><Clock class="h-5 w-5 text-brand-100" /> Duration: {service.duration}</p>
				<p class="mt-2 flex items-center gap-2 text-[15px]"><ShieldCheck class="h-5 w-5 text-brand-100" /> {service.warranty}</p>
				<a href="/book?service={service.slug}" class="btn btn-primary mt-5 w-full">Book {service.name}</a>
				<a href={SITE.phoneHref} class="btn btn-outline mt-2 w-full !border-white !text-white hover:!bg-navy-800"><Phone class="h-4 w-4" /> {SITE.phoneDisplay}</a>
			</div>
			<div class="rounded-2xl border border-slate-200 bg-brand-50 p-6">
				<h3 class="text-lg font-bold text-navy-900">No hidden charges</h3>
				<p class="mt-1.5 text-[15px] text-ink-600">The technician quotes the exact price after diagnosis. If you decline, you pay only the ₹299 diagnosis fee.</p>
			</div>
		</aside>
	</div>

	<h2 class="mt-16 text-2xl font-extrabold text-navy-900">Other services you may need</h2>
	<div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each others as s (s.slug)}
			<ServiceCard service={s} />
		{/each}
	</div>
</section>
