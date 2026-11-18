<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { SITE } from '#lib/data/site';
	import { Phone, Mail, MapPin, Clock, Check } from 'lucide-svelte';

	let name = $state('');
	let phone = $state('');
	let message = $state('');
	let sent = $state(false);
	let error = $state('');

	function submit() {
		error = '';
		if (name.trim().length < 2) { error = 'Please enter your name.'; return; }
		if (!/^[6-9]\d{9}$/.test(phone.trim())) { error = 'Please enter a valid 10-digit mobile number.'; return; }
		if (message.trim().length < 5) { error = 'Please write a short message.'; return; }
		sent = true;
	}
</script>

<svelte:head>
	<title>Contact CoolAir — 24/7 AC Service Helpline | CoolAir</title>
	<meta name="description" content="Contact CoolAir AC Service: call +91 98765 43210 (24/7), email hello@coolair.pages.dev, or send a message. Mock contact details for this demo site." />
	<link rel="canonical" href="{SITE.baseUrl}/contact" />
</svelte:head>

<PageHero eyebrow="Contact Us" title="Talk to a Real Human, 24/7" subtitle="Call, WhatsApp or send a message — a person answers, day or night. No chatbots, no ticket numbers." crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]} />

<section class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
	<div class="grid gap-8 lg:grid-cols-2">
		<div>
			<div class="space-y-4">
				<div class="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
					<Phone class="h-6 w-6 shrink-0 text-brand-600" />
					<div><h2 class="font-bold text-navy-900">Call us anytime</h2><p class="mt-0.5 text-[15px] text-ink-600"><a href={SITE.phoneHref} class="font-bold text-brand-600">{SITE.phoneDisplay}</a> — 24/7 emergency line</p></div>
				</div>
				<div class="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
					<Mail class="h-6 w-6 shrink-0 text-brand-600" />
					<div><h2 class="font-bold text-navy-900">Email</h2><p class="mt-0.5 text-[15px] text-ink-600"><a href="mailto:{SITE.email}" class="font-bold text-brand-600">{SITE.email}</a></p></div>
				</div>
				<div class="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
					<MapPin class="h-6 w-6 shrink-0 text-brand-600" />
					<div><h2 class="font-bold text-navy-900">Service office (mock address)</h2><p class="mt-0.5 text-[15px] text-ink-600">{SITE.address}</p></div>
				</div>
				<div class="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
					<Clock class="h-6 w-6 shrink-0 text-brand-600" />
					<div><h2 class="font-bold text-navy-900">Hours</h2><p class="mt-0.5 text-[15px] text-ink-600">{SITE.hours}<br />{SITE.emergencyHours}</p></div>
				</div>
			</div>
			<!-- Mock map block: stylised static representation, no external embed -->
			<div class="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-brand-50" aria-label="Service area map (illustration)">
				<div class="relative h-56 bg-navy-900">
					<div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(#0b5ed7 1px, transparent 1px), linear-gradient(90deg, #0b5ed7 1px, transparent 1px); background-size: 44px 44px;"></div>
					<div class="absolute left-1/4 top-1/3 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-bold text-navy-900 shadow"><MapPin class="h-4 w-4 text-brand-600" /> Mumbai</div>
					<div class="absolute right-1/4 top-1/4 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-bold text-navy-900 shadow"><MapPin class="h-4 w-4 text-brand-600" /> Thane</div>
					<div class="absolute bottom-1/4 left-1/2 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-bold text-navy-900 shadow"><MapPin class="h-4 w-4 text-brand-600" /> Navi Mumbai</div>
					<div class="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-brand-600 px-3 py-1.5 text-sm font-bold text-white shadow"><MapPin class="h-4 w-4" /> Pune</div>
				</div>
				<p class="px-5 py-3 text-sm text-ink-500">Illustrated service-area map (mock). We serve Mumbai, Thane, Navi Mumbai & Pune.</p>
			</div>
		</div>

		<div class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
			{#if sent}
				<div class="text-center" role="status">
					<span class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><Check class="h-8 w-8" /></span>
					<h2 class="mt-4 text-2xl font-extrabold text-navy-900">Message received!</h2>
					<p class="mt-2 text-[15px] text-ink-600">Thanks, {name}. We will call you back on {phone} within working hours — usually under 30 minutes. For anything urgent, call <a href={SITE.phoneHref} class="font-bold text-brand-600">{SITE.phoneDisplay}</a>.</p>
					<button type="button" class="btn btn-outline mt-6" onclick={() => { sent = false; name = ''; phone = ''; message = ''; }}>Send another message</button>
				</div>
			{:else}
				<h2 class="text-2xl font-extrabold text-navy-900">Send us a message</h2>
				<p class="mt-1.5 text-[15px] text-ink-600">No backend on this demo site — your message is confirmed on screen only.</p>
				{#if error}<p class="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">{error}</p>{/if}
				<form class="mt-5 space-y-4" onsubmit={(e) => { e.preventDefault(); submit(); }}>
					<div>
						<label for="ct-name" class="mb-1.5 block text-sm font-bold text-navy-900">Your name</label>
						<input id="ct-name" type="text" bind:value={name} placeholder="Full name" autocomplete="name" class="min-h-12 w-full rounded-lg border border-slate-300 px-3 text-base" />
					</div>
					<div>
						<label for="ct-phone" class="mb-1.5 block text-sm font-bold text-navy-900">Mobile number</label>
						<input id="ct-phone" type="tel" inputmode="numeric" maxlength="10" bind:value={phone} placeholder="10-digit mobile" class="min-h-12 w-full rounded-lg border border-slate-300 px-3 text-base" />
					</div>
					<div>
						<label for="ct-msg" class="mb-1.5 block text-sm font-bold text-navy-900">Message</label>
						<textarea id="ct-msg" rows="4" bind:value={message} placeholder="How can we help?" class="w-full rounded-lg border border-slate-300 px-3 py-3 text-base"></textarea>
					</div>
					<button type="submit" class="btn btn-primary w-full">Send Message</button>
				</form>
			{/if}
		</div>
	</div>
</section>
