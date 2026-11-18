<script lang="ts">
	import { Phone, Mail, MapPin, Clock } from 'lucide-svelte';
	import SocialIcon from '#lib/components/SocialIcon.svelte';
	import { SITE, NAV_LINKS, MOCK_NOTICE } from '#lib/data/site';
	import { SERVICES } from '#lib/data/services';
</script>

<footer class="bg-navy-900 text-slate-300">
	<div class="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
		<div>
			<a href="/" class="flex items-center gap-2.5">
				<svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true" class="text-white">
					<g stroke="currentColor" stroke-width="3.4" stroke-linecap="round">
						<path d="M24 4v40M6 14l36 20M42 14L6 34" />
					</g>
					<circle cx="24" cy="24" r="5" fill="currentColor" stroke="none" />
				</svg>
				<span class="leading-none">
					<span class="block font-display text-2xl font-extrabold text-white">Cool<span class="text-brand-100">Air</span></span>
					<span class="mt-1 block text-[10px] font-bold tracking-[0.32em] text-slate-400">AC SERVICE</span>
				</span>
			</a>
			<p class="mt-4 text-[15px] leading-relaxed">Fast, reliable and affordable AC repair, installation and maintenance across Mumbai, Thane, Navi Mumbai and Pune. 100% customer satisfaction guaranteed.</p>
			<div class="mt-4 flex gap-2">
				<a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" class="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 hover:bg-brand-600"><SocialIcon name="facebook" cls="h-5 w-5" /></a>
				<a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" class="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 hover:bg-brand-600"><SocialIcon name="instagram" cls="h-5 w-5" /></a>
				<a href="https://twitter.com" target="_blank" rel="noopener" aria-label="X" class="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 hover:bg-brand-600"><SocialIcon name="x" cls="h-5 w-5" /></a>
				<a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" class="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 hover:bg-brand-600"><SocialIcon name="youtube" cls="h-5 w-5" /></a>
			</div>
		</div>

		<div>
			<h3 class="font-display text-lg font-bold text-white">Quick Links</h3>
			<ul class="mt-4 space-y-2.5 text-[15px]">
				{#each NAV_LINKS as link (link.href)}
					<li><a href={link.href} class="hover:text-white">{link.label}</a></li>
				{/each}
				<li><a href="/offers" class="hover:text-white">Offers</a></li>
				<li><a href="/track-booking" class="hover:text-white">Track Booking</a></li>
			</ul>
		</div>

		<div>
			<h3 class="font-display text-lg font-bold text-white">Our Services</h3>
			<ul class="mt-4 space-y-2.5 text-[15px]">
				{#each SERVICES.slice(0, 7) as s (s.slug)}
					<li><a href="/services/{s.slug}" class="hover:text-white">{s.name}</a></li>
				{/each}
				<li><a href="/amc" class="hover:text-white">AMC Plans</a></li>
				<li><a href="/commercial" class="hover:text-white">Commercial & VRF</a></li>
			</ul>
		</div>

		<div>
			<h3 class="font-display text-lg font-bold text-white">Contact Us</h3>
			<ul class="mt-4 space-y-3 text-[15px]">
				<li class="flex gap-2.5"><MapPin class="mt-0.5 h-5 w-5 shrink-0 text-brand-100" /> {SITE.address}</li>
				<li class="flex gap-2.5"><Phone class="mt-0.5 h-5 w-5 shrink-0 text-brand-100" /> <a href={SITE.phoneHref} class="hover:text-white">{SITE.phoneDisplay}</a></li>
				<li class="flex gap-2.5"><Mail class="mt-0.5 h-5 w-5 shrink-0 text-brand-100" /> <a href="mailto:{SITE.email}" class="break-all hover:text-white">{SITE.email}</a></li>
				<li class="flex gap-2.5"><Clock class="mt-0.5 h-5 w-5 shrink-0 text-brand-100" /> {SITE.hours}<br />{SITE.emergencyHours}</li>
			</ul>
		</div>
	</div>

	<div class="border-t border-navy-800">
		<div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm sm:flex-row">
			<p>© {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</p>
			<div class="flex flex-wrap justify-center gap-x-5 gap-y-2">
				<a href="/privacy" class="hover:text-white">Privacy Policy</a>
				<a href="/terms" class="hover:text-white">Terms of Service</a>
				<a href="/disclaimer" class="hover:text-white">Disclaimer</a>
				<a href="/warranty" class="hover:text-white">Warranty</a>
				<a href="/careers" class="hover:text-white">Careers</a>
			</div>
		</div>
		<p class="border-t border-navy-800 px-4 py-3 text-center text-xs text-slate-400">{MOCK_NOTICE}</p>
	</div>
</footer>
