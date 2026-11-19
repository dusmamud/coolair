<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import { BLOG_POSTS } from '#lib/data/blog';
	import { SITE } from '#lib/data/site';
	import { Clock, ArrowRight, ArrowLeft } from 'lucide-svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const post = $derived(data.post);
	const related = $derived(BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3));
	function fmt(d: string) {
		return new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
	}
</script>

<svelte:head>
	<title>{post.title} | CoolAir Blog</title>
	<meta name="description" content={post.excerpt} />
	<link rel="canonical" href="{SITE.baseUrl}/blog/{post.slug}" />
	<meta property="og:url" content="{SITE.baseUrl}/blog/{post.slug}" />
</svelte:head>

<PageHero eyebrow="{post.category} · {fmt(post.date)}" title={post.title} subtitle={post.excerpt} crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />

<article class="mx-auto max-w-3xl px-4 py-12">
	<Picture src={post.image} alt={post.title} width="1200" height="800" sizes="(max-width: 1023px) 92vw, 800px" class="aspect-[3/2] w-full rounded-2xl object-cover shadow-lg" />
	<p class="mt-4 flex items-center gap-1.5 text-sm text-ink-500"><Clock class="h-4 w-4" /> {post.readMinutes} min read · By the CoolAir team</p>
	{#each post.sections as s (s.heading)}
		<h2 class="mt-10 text-2xl font-extrabold text-navy-900">{s.heading}</h2>
		<p class="mt-3 text-[17px] leading-relaxed text-ink-600">{s.body}</p>
	{/each}
	<div class="mt-12 rounded-2xl bg-brand-600 p-7 text-white">
		<h2 class="font-display text-2xl font-extrabold">Need a technician for this?</h2>
		<p class="mt-2 text-[16px] text-brand-100">Book a visit — diagnosis from ₹299, same-day slots in Mumbai, Thane, Navi Mumbai & Pune.</p>
		<a href="/book" class="btn btn-white mt-5">Book a Service</a>
	</div>
	<p class="mt-8"><a href="/blog" class="inline-flex items-center gap-1.5 font-bold text-brand-600"><ArrowLeft class="h-4 w-4" /> Back to all guides</a></p>
</article>

<section class="mx-auto max-w-7xl px-4 pb-16">
	<h2 class="text-2xl font-extrabold text-navy-900">Keep reading</h2>
	<div class="mt-6 grid gap-5 md:grid-cols-3">
		{#each related as p (p.slug)}
			<article class="card-lift rounded-2xl border border-slate-200 bg-white p-5">
				<p class="text-xs font-bold tracking-wide text-brand-600 uppercase">{p.category}</p>
				<h3 class="mt-2 font-bold leading-snug text-navy-900"><a href="/blog/{p.slug}">{p.title}</a></h3>
				<a href="/blog/{p.slug}" class="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-600">Read <ArrowRight class="h-4 w-4" /></a>
			</article>
		{/each}
	</div>
</section>
