<script lang="ts">
	let { eyebrow, title, subtitle, crumbs = [] as { label: string; href?: string }[] } = $props();
</script>

<section class="bg-navy-900 py-10 text-white sm:py-14">
	<div class="mx-auto max-w-7xl px-4">
		{#if crumbs.length}
			<nav aria-label="Breadcrumb" class="text-sm text-slate-300">
				<ol class="flex flex-wrap gap-1.5">
					{#each crumbs as c, i (c.label)}
						<li class="flex items-center gap-1.5">
							{#if c.href}<a href={c.href} class="hover:text-white">{c.label}</a>{:else}<span aria-current="page" class="text-white">{c.label}</span>{/if}
							{#if i < crumbs.length - 1}<span aria-hidden="true">/</span>{/if}
						</li>
					{/each}
				</ol>
			</nav>
		{/if}
		{#if eyebrow}<p class="mt-4 text-xs font-bold tracking-[0.18em] text-brand-100 uppercase">{eyebrow}</p>{/if}
		<h1 class="mt-2 max-w-3xl text-3xl font-extrabold sm:text-5xl">{title}</h1>
		{#if subtitle}<p class="mt-3 max-w-2xl text-[17px] leading-relaxed text-slate-300">{subtitle}</p>{/if}
	</div>
</section>
