<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { SITE } from '#lib/data/site';
	import { Briefcase, GraduationCap, ShieldCheck, IndianRupee } from 'lucide-svelte';

	const roles = [
		{ title: 'AC Technician', location: 'Mumbai / Thane', type: 'Full-time', text: '2+ years experience on split & window ACs. Brand training provided. Two-wheeler + licence required.' },
		{ title: 'Installation Lead', location: 'Navi Mumbai', type: 'Full-time', text: 'Lead a 2-person installation team. VRF experience a plus. Safety harness training provided.' },
		{ title: 'Service Coordinator', location: 'Mumbai (office)', type: 'Full-time', text: 'Take bookings, schedule technicians, follow up with customers. Hindi + English required.' },
		{ title: 'Apprentice Technician', location: 'Pune', type: 'Trainee', text: 'No experience needed — 3 months paid training with a senior technician, then a full-time role.' }
	];
	const perks = [
		{ icon: GraduationCap, text: 'Paid brand training (Daikin, LG, Voltas)' },
		{ icon: ShieldCheck, text: 'Insurance + safety gear provided' },
		{ icon: IndianRupee, text: 'Fixed salary + per-job incentive, paid on time' },
		{ icon: Briefcase, text: 'Growth path: technician → lead → supervisor' }
	];
</script>

<svelte:head>
	<title>Careers at CoolAir — AC Technicians Wanted | CoolAir</title>
	<meta name="description" content="Work at CoolAir: AC technician, installation lead, service coordinator and apprentice roles in Mumbai, Thane, Navi Mumbai & Pune. Paid training, insurance, growth path." />
	<link rel="canonical" href="{SITE.baseUrl}/careers" />
	<meta property="og:url" content="{SITE.baseUrl}/careers" />
</svelte:head>

<PageHero eyebrow="Careers" title="Fix ACs. Build a Career." subtitle="We hire for attitude and train for skill. If you are honest with customers and careful with their homes, you will do well here." crumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<h2 class="text-2xl font-extrabold text-navy-900">Open roles</h2>
	<div class="mt-6 grid gap-5 md:grid-cols-2">
		{#each roles as r (r.title)}
			<article class="card-lift rounded-2xl border border-slate-200 bg-white p-6">
				<div class="flex flex-wrap items-center justify-between gap-2">
					<h3 class="text-xl font-bold text-navy-900">{r.title}</h3>
					<span class="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-600">{r.type}</span>
				</div>
				<p class="mt-1 text-sm font-semibold text-ink-500">{r.location}</p>
				<p class="mt-3 text-[15px] leading-relaxed text-ink-600">{r.text}</p>
				<a href="mailto:{SITE.email}?subject=Application — {r.title}" class="btn btn-outline mt-5">Apply by Email</a>
			</article>
		{/each}
	</div>
	<h2 class="mt-12 text-2xl font-extrabold text-navy-900">Why work here</h2>
	<div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
		{#each perks as p (p.text)}
			<div class="rounded-2xl border border-slate-200 bg-white p-5">
				<p.icon class="h-8 w-8 text-brand-600" />
				<p class="mt-3 text-[15px] font-semibold text-navy-900">{p.text}</p>
			</div>
		{/each}
	</div>
	<p class="mt-8 rounded-xl bg-brand-50 px-5 py-4 text-[15px] text-ink-600">To apply, email your name, role, city and experience to <a href="mailto:{SITE.email}" class="font-bold text-brand-600">{SITE.email}</a> (mock address for this demo). We reply within 3 working days.</p>
</section>
