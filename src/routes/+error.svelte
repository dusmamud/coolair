<script lang="ts">
	import { page } from '$app/state';
	import { SITE } from '#lib/data/site';
	import { SearchX } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Page Not Found (404) | CoolAir AC Service</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
	<SearchX class="mx-auto h-16 w-16 text-brand-600" />
	<h1 class="mt-6 text-4xl font-extrabold text-navy-900 sm:text-5xl">Page Not Found</h1>
	<p class="mx-auto mt-4 max-w-md text-[17px] text-ink-600">
		The page <code class="rounded bg-slate-100 px-2 py-0.5 text-sm">{page.url.pathname}</code> does not exist — it may have moved, or the link may be mistyped.
	</p>
	<div class="mt-8 flex flex-wrap justify-center gap-3">
		<a href="/" class="btn btn-primary">Back to Home</a>
		<a href="/services" class="btn btn-outline">Browse Services</a>
		<a href={SITE.phoneHref} class="btn btn-dark">Call {SITE.phoneDisplay}</a>
	</div>
</section>
