<script lang="ts">
	import { Phone, CalendarCheck, MessageCircle } from 'lucide-svelte';
	import { SITE } from '#lib/data/site';
</script>

<!-- Sticky mobile bottom bar: Call / Book / WhatsApp. Hidden on desktop. -->
<nav class="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/97 shadow-[0_-4px_16px_rgba(10,37,64,0.10)] backdrop-blur md:hidden" aria-label="Quick actions">
	<div class="grid grid-cols-3">
		<a href={SITE.phoneHref} class="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[13px] font-bold text-brand-600">
			<Phone class="h-5 w-5" /> Call Now
		</a>
		<a href="/book" class="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-brand-600 text-[13px] font-bold text-white">
			<CalendarCheck class="h-5 w-5" /> Book Service
		</a>
		<a href={SITE.whatsappHref} target="_blank" rel="noopener" class="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[13px] font-bold text-emerald-700">
			<MessageCircle class="h-5 w-5" /> WhatsApp
		</a>
	</div>
</nav>
