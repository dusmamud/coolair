<script lang="ts">
	// Inline brand SVGs — lucide-svelte 1.x removed brand icons.
	let { name, cls = 'h-4 w-4' }: { name: 'facebook' | 'instagram' | 'x' | 'youtube'; cls?: string } = $props();
</script>

{#if name === 'facebook'}
	<svg viewBox="0 0 24 24" fill="currentColor" class={cls} aria-hidden="true"><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7h3Z" /></svg>
{:else if name === 'instagram'}
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class={cls} aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" /></svg>
{:else if name === 'x'}
	<svg viewBox="0 0 24 24" fill="currentColor" class={cls} aria-hidden="true"><path d="M17.7 3H21l-7.3 8.3L22 21h-6.7l-5.2-6.3L4.2 21H1l7.8-8.9L2.4 3h6.9l4.7 5.7L17.7 3Zm-1.2 16h1.9L7.1 4.9H5L16.5 19Z" /></svg>
{:else}
	<svg viewBox="0 0 24 24" fill="currentColor" class={cls} aria-hidden="true"><path d="M22.5 12s0-3.3-.4-4.8c-.2-.9-.9-1.6-1.8-1.8C18.8 5 12 5 12 5s-6.8 0-8.3.4c-.9.2-1.6.9-1.8 1.8C1.5 8.7 1.5 12 1.5 12s0 3.3.4 4.8c.2.9.9 1.6 1.8 1.8 1.5.4 8.3.4 8.3.4s6.8 0 8.3-.4c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.8.4-4.8ZM9.8 15.5v-7l6 3.5-6 3.5Z" /></svg>
{/if}
