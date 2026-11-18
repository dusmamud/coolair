<script lang="ts">
	let { json }: { json: Record<string, unknown> } = $props();
	const text = $derived(JSON.stringify(json));
</script>

{@html `<script type="application/ld+json">${text}</${'script>'}`}
