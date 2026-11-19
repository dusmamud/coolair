<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import FaqAccordion from '#lib/components/FaqAccordion.svelte';
	import { SITE, inr } from '#lib/data/site';
	import { Check, X } from 'lucide-svelte';

	const tiers = [
		{
			name: 'AMC Basic', price: 1499, tag: 'For 1–2 ACs at home',
			features: [
				{ text: '2 scheduled services / year', yes: true },
				{ text: 'Priority booking slots', yes: true },
				{ text: '10% off all repairs', yes: true },
				{ text: 'Free gas top-up (once)', yes: false },
				{ text: 'Free diagnosis visits', yes: false },
				{ text: 'Same-day emergency response', yes: false }
			]
		},
		{
			name: 'AMC Premium', price: 3499, tag: 'For 3+ ACs or heavy use', popular: true,
			features: [
				{ text: '4 scheduled services / year', yes: true },
				{ text: 'Priority booking slots', yes: true },
				{ text: '20% off all repairs', yes: true },
				{ text: 'Free gas top-up (once)', yes: true },
				{ text: 'Free diagnosis visits', yes: true },
				{ text: 'Same-day emergency response', yes: true }
			]
		}
	];
	const faqs = [
		{ q: 'Is an AMC worth it for one AC?', a: 'For a single AC used lightly, pay-per-visit is fine. For 2+ ACs or daily 8-hour use, AMC Basic at ₹1,499/year is cheaper than two separate ₹499 services plus a repair discount on top.' },
		{ q: 'What is NOT covered?', a: 'Parts and gas beyond the stated free top-up are billed at the standard rate card, with the AMC discount applied. Compressor replacement is discounted, not free.' },
		{ q: 'Can I cancel my AMC?', a: 'Yes — unused months are refunded pro-rata within the first 6 months. Services already used are deducted at the standard ₹499 rate.' },
		{ q: 'Do you offer AMC for offices and societies?', a: 'Yes — commercial AMC is quoted per site after a free survey. See the Commercial page.' }
	];
</script>

<svelte:head>
	<title>AMC Plans — Annual Maintenance from ₹1,499/yr | CoolAir</title>
	<meta name="description" content="CoolAir AMC: Basic ₹1,499/yr (2 services, priority slots, 10% off repairs) and Premium ₹3,499/yr (4 services, free gas top-up, 20% off). Compare and choose." />
	<link rel="canonical" href="{SITE.baseUrl}/amc" />
	<meta property="og:url" content="{SITE.baseUrl}/amc" />
</svelte:head>

<PageHero eyebrow="AMC Plans" title="Annual Maintenance, Zero Summer Panic" subtitle="Scheduled services, priority slots and discounted repairs — one plan, all year, no breakdown roulette." crumbs={[{ label: 'Home', href: '/' }, { label: 'AMC Plans' }]} />

<section class="mx-auto max-w-5xl px-4 py-12 sm:py-16">
	<div class="grid gap-6 md:grid-cols-2">
		{#each tiers as t (t.name)}
			<article class="relative rounded-2xl border-2 {t.popular ? 'border-brand-600 shadow-xl' : 'border-slate-200'} bg-white p-7">
				{#if t.popular}<span class="absolute -top-3.5 left-6 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wide">Most Popular</span>{/if}
				<h2 class="font-display text-2xl font-extrabold text-navy-900">{t.name}</h2>
				<p class="mt-1 text-[15px] text-ink-500">{t.tag}</p>
				<p class="mt-4"><span class="font-display text-4xl font-extrabold text-navy-900">{inr(t.price)}</span><span class="text-ink-500"> / year / AC</span></p>
				<ul class="mt-6 space-y-3">
					{#each t.features as f (f.text)}
						<li class="flex items-start gap-2.5 text-[15px] {f.yes ? 'text-navy-900' : 'text-ink-500 line-through'}">
							{#if f.yes}<Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />{:else}<X class="mt-0.5 h-5 w-5 shrink-0 text-slate-300" />{/if}
							{f.text}
						</li>
					{/each}
				</ul>
				<a href="/book?service=ac-maintenance" class="btn {t.popular ? 'btn-primary' : 'btn-outline'} mt-7 w-full">Choose {t.name}</a>
			</article>
		{/each}
	</div>
	<p class="mt-6 text-center text-[15px] text-ink-600">Prices are per AC, per year. Multi-AC homes get a discount — call <a href={SITE.phoneHref} class="font-bold text-brand-600">{SITE.phoneDisplay}</a> for a quote.</p>

	<h2 class="mt-14 text-2xl font-extrabold text-navy-900">AMC questions, answered</h2>
	<div class="mt-5"><FaqAccordion faqs={faqs} idPrefix="amc-faq" /></div>
</section>
