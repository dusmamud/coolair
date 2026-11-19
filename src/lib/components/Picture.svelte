<script lang="ts">
	import { srcsetFor } from '#lib/images';

	let {
		src,
		alt,
		width,
		height,
		sizes,
		loading = 'lazy',
		fetchpriority,
		class: cls = '',
		style
	}: {
		src: string;
		alt: string;
		width: string;
		height: string;
		sizes: string;
		loading?: 'lazy' | 'eager';
		fetchpriority?: 'high' | 'low' | 'auto';
		class?: string;
		style?: string;
	} = $props();

	const srcset = $derived(srcsetFor(src));
</script>

<img
	{src}
	{alt}
	{width}
	{height}
	{loading}
	{fetchpriority}
	srcset={srcset || undefined}
	{sizes}
	class={cls}
	{style}
/>
