<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { SITE } from '#lib/data/site';
	import { Star, MapPin } from 'lucide-svelte';

	// Mock team — invented names for the demo.
	const team = [
		{ name: 'Rahul Verma', role: 'Senior AC Technician · 9 yrs', area: 'Mumbai West', skills: 'Inverter splits, PCB repair', rating: 4.9, jobs: 3200 },
		{ name: 'Imran Khan', role: 'Installation Lead · 8 yrs', area: 'Thane & Navi Mumbai', skills: 'Installations, VRF', rating: 4.8, jobs: 2900 },
		{ name: 'Vikram Singh', role: 'AC Technician · 7 yrs', area: 'Mumbai East', skills: 'Gas & compressor', rating: 4.9, jobs: 2600 },
		{ name: 'Sanjay Patil', role: 'AC Technician · 6 yrs', area: 'Pune', skills: 'Deep cleaning, duct', rating: 4.8, jobs: 2100 },
		{ name: 'Asha Nair', role: 'Service Coordinator', area: 'All cities', skills: 'Bookings, AMC & support', rating: 5.0, jobs: 0 },
		{ name: 'Devang Shah', role: 'Commercial & VRF Lead · 10 yrs', area: 'Offices & societies', skills: 'VRF, cassette, AMC', rating: 4.9, jobs: 1800 }
	];
</script>

<svelte:head>
	<title>Meet the CoolAir Team | CoolAir AC Service</title>
	<meta name="description" content="Meet CoolAir's certified AC technicians — background-checked, brand-trained, and rated by customers after every job. Mock team for this demo site." />
	<link rel="canonical" href="{SITE.baseUrl}/team" />
</svelte:head>

<PageHero eyebrow="Our Team" title="Meet the People Who Fix Your AC" subtitle="Certified, background-checked and brand-trained. Every technician is rated by customers after every job — and the ratings are published here." crumbs={[{ label: 'Home', href: '/' }, { label: 'Team' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<img src="/images/team.webp" alt="The CoolAir technician team in navy uniforms" width="1200" height="800" loading="lazy" class="aspect-[21/9] w-full rounded-2xl object-cover shadow-lg" />
	<p class="mt-3 text-center text-sm text-ink-500">Mock team photo for this demo site.</p>
	<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each team as m (m.name)}
			<article class="card-lift rounded-2xl border border-slate-200 bg-white p-6">
				<div class="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 font-display text-xl font-extrabold text-white">{m.name.split(' ').map((w) => w[0]).join('')}</div>
				<h2 class="mt-4 text-xl font-bold text-navy-900">{m.name}</h2>
				<p class="text-[15px] font-semibold text-brand-600">{m.role}</p>
				<p class="mt-2 flex items-center gap-1.5 text-sm text-ink-500"><MapPin class="h-4 w-4" /> {m.area}</p>
				<p class="mt-1 text-sm text-ink-500">Specialises in: {m.skills}</p>
				<p class="mt-3 flex items-center gap-2 text-sm font-bold text-navy-900">
					<Star class="h-4 w-4 fill-amber-400 text-amber-400" /> {m.rating.toFixed(1)} customer rating
					{#if m.jobs > 0}<span class="font-medium text-ink-500">· {m.jobs.toLocaleString('en-IN')} jobs</span>{/if}
				</p>
			</article>
		{/each}
	</div>
	<p class="mt-8 rounded-xl bg-brand-50 px-5 py-4 text-center text-[15px] text-ink-600">All technician names, photos and ratings on this page are mock values for the demo. <a href="/careers" class="font-bold text-brand-600">Want to join the team? See Careers →</a></p>
</section>
