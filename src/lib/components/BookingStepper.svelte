<script lang="ts">
	import { Check, ArrowLeft, ArrowRight, CalendarCheck, MapPin } from 'lucide-svelte';
	import { SERVICES } from '#lib/data/services';
	import { AC_TYPES, BRAND_NAMES, SERVED_PINCODES, TIME_SLOTS, SITE, bookingId, inr } from '#lib/data/site';

	let { initialService = 'ac-repair' }: { initialService?: string } = $props();

	let step = $state(1);
	let serviceSlug = $state(initialService);
	let acType = $state('Split AC');
	let brand = $state('Daikin');
	let date = $state('');
	let slot = $state('');
	let pincode = $state('');
	let pincodeMsg = $state('');
	let pincodeOk = $state<boolean | null>(null);
	let name = $state('');
	let phone = $state('');
	let address = $state('');
	let problem = $state('');
	let confirmed = $state<null | { id: string; service: string; date: string; slot: string; area: string }> (null);
	let error = $state('');

	const service = $derived(SERVICES.find((s) => s.slug === serviceSlug) ?? SERVICES[0]);
	const today = new Date().toISOString().slice(0, 10);

	function checkPincode() {
		const area = SERVED_PINCODES[pincode.trim()];
		if (area) {
			pincodeOk = true;
			pincodeMsg = `Great — we serve ${area}. Same-day slots available.`;
		} else if (/^\d{6}$/.test(pincode.trim())) {
			pincodeOk = false;
			pincodeMsg = 'This pincode is outside our current areas (Mumbai, Thane, Navi Mumbai, Pune). Call us — we may still help.';
		} else {
			pincodeOk = false;
			pincodeMsg = 'Enter a valid 6-digit pincode.';
		}
	}

	function next() {
		error = '';
		if (step === 2 && !acType) { error = 'Please pick your AC type.'; return; }
		if (step === 3 && (!date || !slot)) { error = 'Please pick a date and a time slot.'; return; }
		if (step === 4) {
			if (pincodeOk !== true) { error = 'Please check a pincode we serve first.'; return; }
			if (name.trim().length < 2) { error = 'Please enter your name.'; return; }
			if (!/^[6-9]\d{9}$/.test(phone.trim())) { error = 'Please enter a valid 10-digit mobile number.'; return; }
			if (address.trim().length < 8) { error = 'Please enter your full address.'; return; }
		}
		step = Math.min(5, step + 1);
	}

	function confirmBooking() {
		const id = bookingId();
		const area = SERVED_PINCODES[pincode.trim()] ?? pincode.trim();
		const record = { id, service: service?.name ?? serviceSlug, acType, brand, date, slot, area, name, phone, address, problem, createdAt: new Date().toISOString() };
		try {
			const existing = JSON.parse(localStorage.getItem('coolair-bookings') ?? '[]') as unknown[];
			existing.push(record);
			localStorage.setItem('coolair-bookings', JSON.stringify(existing));
			localStorage.setItem('coolair-last-booking', id);
		} catch { /* storage unavailable — booking still confirmed on screen */ }
		confirmed = { id, service: record.service, date, slot, area };
		step = 5;
	}

	const steps = ['Service', 'AC Details', 'Date & Slot', 'Your Details', 'Confirmed'];
</script>

<div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
	{#if confirmed}
		<div class="text-center" role="status">
			<span class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><Check class="h-8 w-8" /></span>
			<h2 class="mt-4 text-2xl font-extrabold text-navy-900">Booking Confirmed!</h2>
			<p class="mt-2 text-[15px] text-ink-600">Your technician is assigned. We will call you to confirm the slot.</p>
			<div class="mx-auto mt-5 max-w-md rounded-xl bg-brand-50 p-5 text-left">
				<p class="text-sm font-semibold text-ink-500">Booking ID</p>
				<p class="font-display text-2xl font-extrabold tracking-wide text-navy-900" data-testid="booking-id">{confirmed.id}</p>
				<dl class="mt-3 space-y-1.5 text-[15px]">
					<div class="flex justify-between gap-4"><dt class="text-ink-500">Service</dt><dd class="font-semibold text-navy-900">{confirmed.service}</dd></div>
					<div class="flex justify-between gap-4"><dt class="text-ink-500">Date</dt><dd class="font-semibold text-navy-900">{confirmed.date}</dd></div>
					<div class="flex justify-between gap-4"><dt class="text-ink-500">Arrival window</dt><dd class="font-semibold text-navy-900">{confirmed.slot}</dd></div>
					<div class="flex justify-between gap-4"><dt class="text-ink-500">Area</dt><dd class="font-semibold text-navy-900">{confirmed.area}</dd></div>
				</dl>
			</div>
			<div class="mt-6 flex flex-wrap justify-center gap-3">
				<a href="/track-booking" class="btn btn-primary">Track Booking</a>
				<a href="/" class="btn btn-outline">Back to Home</a>
			</div>
			<p class="mt-4 text-sm text-ink-500">Save your booking ID — you need it to track or reschedule. A copy is saved in this browser.</p>
		</div>
	{:else}
		<ol class="flex items-center gap-1 sm:gap-2" aria-label="Booking progress">
			{#each steps as label, i (label)}
				<li class="flex flex-1 items-center gap-1 sm:gap-2 {i > 0 ? 'min-w-0' : ''}">
					<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold {step > i + 1 ? 'bg-emerald-600 text-white' : step === i + 1 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-ink-600'}">
						{step > i + 1 ? '✓' : i + 1}
					</span>
					<span class="hidden text-[13px] font-semibold {step === i + 1 ? 'text-brand-600' : 'text-ink-500'} md:inline">{label}</span>
					{#if i < steps.length - 1}<span class="h-px flex-1 bg-slate-200"></span>{/if}
				</li>
			{/each}
		</ol>

		{#if error}<p class="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">{error}</p>{/if}

		{#if step === 1}
			<h2 class="mt-6 text-xl font-bold text-navy-900">1. Choose a service</h2>
			<div class="mt-4 grid gap-2 sm:grid-cols-2">
				{#each SERVICES as s (s.slug)}
					<button type="button" class="flex min-h-[64px] items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors {serviceSlug === s.slug ? 'border-brand-600 bg-brand-50 ring-1 ring-brand-600' : 'border-slate-200 hover:border-brand-600'}" aria-pressed={serviceSlug === s.slug} onclick={() => (serviceSlug = s.slug)}>
						<span>
							<span class="block font-bold text-navy-900">{s.name}</span>
							<span class="block text-sm text-ink-500">{s.short}</span>
						</span>
						<span class="shrink-0 text-sm font-bold text-brand-600">From {inr(s.priceFrom)}</span>
					</button>
				{/each}
			</div>
		{:else if step === 2}
			<h2 class="mt-6 text-xl font-bold text-navy-900">2. Your AC details</h2>
			<div class="mt-4 grid gap-4 sm:grid-cols-2">
				<div>
					<label for="bk-type" class="mb-1.5 block text-sm font-bold text-navy-900">AC Type</label>
					<select id="bk-type" bind:value={acType} class="min-h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-base">
						{#each AC_TYPES as t (t)}<option value={t}>{t}</option>{/each}
					</select>
				</div>
				<div>
					<label for="bk-brand" class="mb-1.5 block text-sm font-bold text-navy-900">Brand</label>
					<select id="bk-brand" bind:value={brand} class="min-h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-base">
						{#each BRAND_NAMES as b (b)}<option value={b}>{b}</option>{/each}
					</select>
				</div>
			</div>
			<p class="mt-4 rounded-lg bg-brand-50 px-4 py-3 text-[15px] text-ink-600">Selected: <strong class="text-navy-900">{service?.name}</strong> — from {inr(service?.priceFrom ?? 0)}. Final price confirmed after diagnosis, before work starts.</p>
		{:else if step === 3}
			<h2 class="mt-6 text-xl font-bold text-navy-900">3. Pick a date & arrival window</h2>
			<div class="mt-4 grid gap-4 sm:grid-cols-2">
				<div>
					<label for="bk-date" class="mb-1.5 block text-sm font-bold text-navy-900">Date</label>
					<input id="bk-date" type="date" min={today} bind:value={date} class="min-h-12 w-full rounded-lg border border-slate-300 px-3 text-base" />
				</div>
				<div>
					<label for="bk-slot" class="mb-1.5 block text-sm font-bold text-navy-900">Arrival window</label>
					<select id="bk-slot" bind:value={slot} class="min-h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-base">
						<option value="" disabled>Select a time slot</option>
						{#each TIME_SLOTS as t (t)}<option value={t}>{t}</option>{/each}
					</select>
				</div>
			</div>
			<p class="mt-3 flex items-start gap-2 text-sm text-ink-600"><CalendarCheck class="mt-0.5 h-4 w-4 shrink-0 text-brand-600" /> The technician arrives within your 2-hour window. We call 30 minutes before arrival.</p>
		{:else if step === 4}
			<h2 class="mt-6 text-xl font-bold text-navy-900">4. Where should we come?</h2>
			<div class="mt-4 grid gap-4 sm:grid-cols-2">
				<div>
					<label for="bk-pin" class="mb-1.5 block text-sm font-bold text-navy-900">Pincode</label>
					<div class="flex gap-2">
						<input id="bk-pin" inputmode="numeric" maxlength="6" bind:value={pincode} placeholder="e.g. 400053" class="min-h-12 w-full rounded-lg border border-slate-300 px-3 text-base" />
						<button type="button" class="btn btn-dark !min-h-12 shrink-0 !px-4 !text-sm" onclick={checkPincode}>Check</button>
					</div>
					{#if pincodeMsg}<p class="mt-2 flex items-start gap-1.5 text-sm font-semibold {pincodeOk ? 'text-emerald-700' : 'text-red-700'}" role="status"><MapPin class="mt-0.5 h-4 w-4 shrink-0" /> {pincodeMsg}</p>{/if}
				</div>
				<div>
					<label for="bk-phone" class="mb-1.5 block text-sm font-bold text-navy-900">Mobile number</label>
					<input id="bk-phone" type="tel" inputmode="numeric" maxlength="10" bind:value={phone} placeholder="10-digit mobile" class="min-h-12 w-full rounded-lg border border-slate-300 px-3 text-base" />
				</div>
				<div>
					<label for="bk-name" class="mb-1.5 block text-sm font-bold text-navy-900">Your name</label>
					<input id="bk-name" type="text" bind:value={name} placeholder="Full name" autocomplete="name" class="min-h-12 w-full rounded-lg border border-slate-300 px-3 text-base" />
				</div>
				<div>
					<label for="bk-problem" class="mb-1.5 block text-sm font-bold text-navy-900">Problem (optional)</label>
					<input id="bk-problem" type="text" bind:value={problem} placeholder="e.g. AC not cooling, water leaking" class="min-h-12 w-full rounded-lg border border-slate-300 px-3 text-base" />
				</div>
				<div class="sm:col-span-2">
					<label for="bk-address" class="mb-1.5 block text-sm font-bold text-navy-900">Full address</label>
					<textarea id="bk-address" rows="2" bind:value={address} placeholder="Flat, building, street, landmark" class="w-full rounded-lg border border-slate-300 px-3 py-3 text-base"></textarea>
				</div>
			</div>
		{:else if step === 5}
			<h2 class="mt-6 text-xl font-bold text-navy-900">5. Review & confirm</h2>
			<dl class="mt-4 space-y-2 rounded-xl bg-brand-50 p-5 text-[15px]">
				<div class="flex justify-between gap-4"><dt class="text-ink-500">Service</dt><dd class="font-bold text-navy-900">{service?.name} · {acType} · {brand}</dd></div>
				<div class="flex justify-between gap-4"><dt class="text-ink-500">Date & slot</dt><dd class="font-bold text-navy-900">{date} · {slot}</dd></div>
				<div class="flex justify-between gap-4"><dt class="text-ink-500">Name</dt><dd class="font-bold text-navy-900">{name}</dd></div>
				<div class="flex justify-between gap-4"><dt class="text-ink-500">Phone</dt><dd class="font-bold text-navy-900">{phone}</dd></div>
				<div class="flex justify-between gap-4"><dt class="text-ink-500">Address</dt><dd class="text-right font-bold text-navy-900">{address}</dd></div>
				{#if problem}<div class="flex justify-between gap-4"><dt class="text-ink-500">Problem</dt><dd class="font-bold text-navy-900">{problem}</dd></div>{/if}
				<div class="flex justify-between gap-4 border-t border-brand-100 pt-2"><dt class="text-ink-500">Estimated price</dt><dd class="font-bold text-brand-600">From {inr(service?.priceFrom ?? 0)} — pay after the job</dd></div>
			</dl>
		{/if}

		<div class="mt-6 flex items-center justify-between gap-3">
			{#if step > 1}
				<button type="button" class="btn btn-outline" onclick={() => { step -= 1; error = ''; }}><ArrowLeft class="h-4 w-4" /> Back</button>
			{:else}
				<span></span>
			{/if}
			{#if step < 4}
				<button type="button" class="btn btn-primary" onclick={next}>Continue <ArrowRight class="h-4 w-4" /></button>
			{:else if step === 4}
				<button type="button" class="btn btn-primary" onclick={next}>Review Booking <ArrowRight class="h-4 w-4" /></button>
			{:else}
				<button type="button" class="btn btn-primary" data-testid="confirm-booking" onclick={confirmBooking}><Check class="h-5 w-5" /> Confirm Booking</button>
			{/if}
		</div>
		<p class="mt-4 text-center text-sm text-ink-500">No advance payment. Pay after the job is done. Call <a href={SITE.phoneHref} class="font-bold text-brand-600">{SITE.phoneDisplay}</a> for help.</p>
	{/if}
</div>
