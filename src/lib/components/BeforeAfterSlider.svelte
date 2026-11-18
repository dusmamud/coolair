<script lang="ts">
	import { ChevronsLeftRight } from 'lucide-svelte';
	let { before = '/images/before-dirty.webp', after = '/images/after-clean.webp' }: { before?: string; after?: string } = $props();
	let pos = $state(50);
	let dragging = $state(false);
	let box: HTMLDivElement | undefined = $state();

	function update(clientX: number) {
		if (!box) return;
		const r = box.getBoundingClientRect();
		pos = Math.max(4, Math.min(96, ((clientX - r.left) / r.width) * 100));
	}
	function onPointerDown(e: PointerEvent) {
		dragging = true;
		(e.target as HTMLElement).setPointerCapture?.(e.pointerId);
		update(e.clientX);
	}
	function onPointerMove(e: PointerEvent) {
		if (dragging) update(e.clientX);
	}
	function onKey(e: KeyboardEvent) {
		if (e.key === 'ArrowLeft') pos = Math.max(4, pos - 4);
		if (e.key === 'ArrowRight') pos = Math.min(96, pos + 4);
	}
</script>

<div
	bind:this={box}
	class="relative w-full touch-none overflow-hidden rounded-2xl border border-slate-200 select-none"
	role="slider"
	aria-label="Before and after AC cleaning comparison"
	aria-valuenow={Math.round(pos)}
	aria-valuemin={0}
	aria-valuemax={100}
	tabindex="0"
	onpointerdown={onPointerDown}
	onpointermove={onPointerMove}
	onpointerup={() => (dragging = false)}
	onpointercancel={() => (dragging = false)}
	onkeydown={onKey}
>
	<img src={after} alt="AC coil after deep cleaning — clean and shiny" width="1000" height="666" loading="lazy" class="block aspect-[3/2] w-full object-cover" draggable="false" />
	<div class="absolute inset-0 overflow-hidden" style="width: {pos}%">
		<img src={before} alt="AC coil before cleaning — covered in dust" width="1000" height="666" loading="lazy" class="block aspect-[3/2] w-full max-w-none object-cover" style="width: {box ? box.clientWidth + 'px' : '100%'}" draggable="false" />
	</div>
	<span class="absolute left-3 top-3 rounded-md bg-navy-900/85 px-2.5 py-1 text-xs font-bold text-white">BEFORE</span>
	<span class="absolute right-3 top-3 rounded-md bg-brand-600 px-2.5 py-1 text-xs font-bold text-white">AFTER</span>
	<div class="absolute inset-y-0" style="left: {pos}%">
		<div class="absolute inset-y-0 -left-px w-0.5 bg-white shadow"></div>
		<span class="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy-900 shadow-lg">
			<ChevronsLeftRight class="h-5 w-5" />
		</span>
	</div>
	<input
		type="range"
		min="0"
		max="100"
		value={pos}
		aria-label="Drag to compare before and after"
		class="absolute inset-x-0 bottom-0 h-8 w-full cursor-ew-resize opacity-0"
		oninput={(e) => (pos = Number((e.target as HTMLInputElement).value))}
	/>
</div>
<p class="mt-2 text-center text-sm text-ink-500">Drag the handle (or use arrow keys) to compare. Photos: mock before/after pair.</p>
