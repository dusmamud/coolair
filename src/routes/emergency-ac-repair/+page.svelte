<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { SITE } from '#lib/data/site';
	import { Phone, Zap, Moon, ShieldCheck, Check } from 'lucide-svelte';

	const steps = [
		{ title: 'Call or WhatsApp now', text: 'Tell us the problem and your area. A real person answers, 24/7.' },
		{ title: 'We dispatch the nearest technician', text: 'Priority dispatch — target arrival within 2 hours in Mumbai, 3 hours elsewhere.' },
		{ title: 'Diagnose, quote, fix', text: 'Fixed quote before work. Most emergencies are fixed in the same visit.' }
	];
</script>

<svelte:head>
	<title>24/7 Emergency AC Repair — Within 2 Hours | CoolAir</title>
	<meta name="description" content="Emergency AC repair 24/7 in Mumbai, Thane, Navi Mumbai & Pune. Night, Sunday and holiday service. Call +91 98765 43210 — technician within 2 hours." />
	<link rel="canonical" href="{SITE.baseUrl}/emergency-ac-repair" />
</svelte:head>

<PageHero eyebrow="Emergency — 24/7" title="AC Broke at Midnight? We’re Awake." subtitle="Emergency AC repair across Mumbai, Thane, Navi Mumbai and Pune — nights, Sundays and holidays. No night surcharge." crumbs={[{ label: 'Home', href: '/' }, { label: 'Emergency AC Repair' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid items-center gap-10 lg:grid-cols-2">
		<div>
			<div class="flex flex-wrap gap-3">
				<a href={SITE.phoneHref} class="btn btn-primary !px-6 !py-4 !text-base"><Phone class="h-5 w-5" /> Call {SITE.phoneDisplay}</a>
				<a href={SITE.whatsappHref} target="_blank" rel="noopener" class="btn btn-outline !px-6 !py-4 !text-base">WhatsApp Us</a>
			</div>
			<div class="mt-8 space-y-5">
				{#each steps as s, i (s.title)}
					<div class="flex gap-4">
						<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-lg font-extrabold text-white">{i + 1}</span>
						<div><h2 class="text-lg font-bold text-navy-900">{s.title}</h2><p class="mt-1 text-[15px] text-ink-600">{s.text}</p></div>
					</div>
				{/each}
			</div>
		</div>
		<div class="rounded-2xl bg-navy-900 p-7 text-white sm:p-9">
			<h2 class="flex items-center gap-2 font-display text-2xl font-extrabold"><Zap class="h-7 w-7 text-brand-100" /> What counts as an emergency?</h2>
			<ul class="mt-5 space-y-3 text-[16px] text-slate-200">
				<li class="flex gap-2.5"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-100" /> AC tripping the MCB / burning smell — switch it off and call</li>
				<li class="flex gap-2.5"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-100" /> Complete no-cooling with a baby, elderly or ill person at home</li>
				<li class="flex gap-2.5"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-100" /> Heavy indoor water leakage damaging walls or electronics</li>
				<li class="flex gap-2.5"><Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-100" /> Commercial breakdown — server room, clinic, restaurant</li>
			</ul>
			<p class="mt-6 flex items-start gap-2 rounded-xl bg-navy-800 p-4 text-[15px] text-slate-200"><Moon class="mt-0.5 h-5 w-5 shrink-0 text-brand-100" /> Night calls (10 PM – 8 AM) are handled by the on-duty technician — same standard rates, no night surcharge.</p>
			<p class="mt-4 flex items-start gap-2 text-[15px] text-slate-300"><ShieldCheck class="mt-0.5 h-5 w-5 shrink-0 text-brand-100" /> Emergency repairs carry the same 90-day labour warranty.</p>
		</div>
	</div>
</section>
