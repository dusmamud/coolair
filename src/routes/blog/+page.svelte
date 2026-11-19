<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import { BLOG_POSTS } from '#lib/data/blog';
	import { SITE } from '#lib/data/site';
	import { Search, ArrowRight, Clock } from 'lucide-svelte';

	let query = $state('');
	let category = $state('All');
	const categories = ['All', ...new Set(BLOG_POSTS.map((p) => p.category))];
	const shown = $derived(
		BLOG_POSTS.filter(
			(p) =>
				(category === 'All' || p.category === category) &&
				(p.title + p.excerpt + p.category).toLowerCase().includes(query.toLowerCase())
		)
	);
	function fmt(d: string) {
		return new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
	}
</script>

<svelte:head>
	<title>AC Care Blog — Guides, Tips & Troubleshooting | CoolAir</title>
	<meta name="description" content="CoolAir blog: AC troubleshooting, maintenance checklists, buying guides and seasonal tips — written in plain words by technicians." />
	<meta property="og:image" content="{SITE.baseUrl}/images/og/og-blog.jpg" />
	<link rel="canonical" href="{SITE.baseUrl}/blog" />
	<meta property="og:url" content="{SITE.baseUrl}/blog" />
</svelte:head>

<PageHero eyebrow="Blog" title="AC Care Guides & Tips" subtitle="Troubleshooting, maintenance and buying advice — written by the technicians who do the work, in plain words." crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="flex flex-col gap-4 sm:flex-row sm:items-center">
		<div class="relative flex-1">
			<Search class="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-500" />
			<label class="sr-only" for="blog-search">Search articles</label>
			<input id="blog-search" type="search" bind:value={query} placeholder="Search guides…" class="min-h-12 w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 text-base" />
		</div>
		<div class="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
			{#each categories as c (c)}
				<button type="button" class="min-h-11 rounded-full border px-4 py-2 text-sm font-bold {category === c ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300 bg-white text-navy-900 hover:border-brand-600'}" aria-pressed={category === c} onclick={() => (category = c)}>{c}</button>
			{/each}
		</div>
	</div>

	<div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each shown as p (p.slug)}
			<article class="card-lift flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
				<Picture src={p.image} alt="" width="1200" height="800" sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 31vw" class="aspect-[3/2] w-full object-cover" />
				<div class="flex flex-1 flex-col p-6">
					<p class="text-xs font-bold tracking-wide text-brand-600 uppercase">{p.category} · {fmt(p.date)}</p>
					<h2 class="mt-2 text-xl font-bold leading-snug text-navy-900"><a href="/blog/{p.slug}">{p.title}</a></h2>
					<p class="mt-2 flex-1 text-[15px] leading-relaxed text-ink-600">{p.excerpt}</p>
					<p class="mt-4 flex items-center justify-between">
						<span class="flex items-center gap-1.5 text-sm text-ink-500"><Clock class="h-4 w-4" /> {p.readMinutes} min read</span>
						<a href="/blog/{p.slug}" class="inline-flex items-center gap-1 text-sm font-bold text-brand-600">Read <ArrowRight class="h-4 w-4" /></a>
					</p>
				</div>
			</article>
		{/each}
	</div>
	{#if shown.length === 0}<p class="mt-8 text-center text-ink-600">No articles match — try a different search.</p>{/if}
</section>
