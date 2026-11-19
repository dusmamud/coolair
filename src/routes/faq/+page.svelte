<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import FaqAccordion from '#lib/components/FaqAccordion.svelte';
	import JsonLd from '#lib/components/JsonLd.svelte';
	import { SITE } from '#lib/data/site';

	const faqs = [
		{ q: 'How much does AC repair cost?', a: 'Diagnosis is ₹299 (adjusted in the repair bill). Most repairs cost ₹499–₹2,499; compressor and PCB work can go up to ₹3,499–₹8,999. You approve the exact quote before we start.' },
		{ q: 'How fast can a technician reach me?', a: 'Same-day slots in Mumbai, Thane, Navi Mumbai and Pune. Emergency calls get priority within 2 hours, 24/7.' },
		{ q: 'Do you repair all brands?', a: 'Yes — Daikin, Voltas, LG, Samsung, Panasonic, Hitachi, Carrier, Haier and more, across split, window, cassette and tower units.' },
		{ q: 'Is there a warranty on the work?', a: 'Yes — 90 days on labour, 6 months on fitted parts, 1 year on installation workmanship. See the Warranty page.' },
		{ q: 'Do I need to pay in advance?', a: 'No. You pay after the job is done and cooling is tested — UPI, card or cash.' },
		{ q: 'What is the difference between basic service and deep cleaning?', a: 'Basic ₹499 covers filter wash and checks — good every 3–4 months. Deep jet cleaning ₹999 washes coils, blower and drain — pick it once a year or when cooling drops or smells appear.' },
		{ q: 'My AC needs gas. Will a refill fix it?', a: 'Only if there is no leak. Gas does not get “used up” — a fast refill means a leak. We find and quote the leak fix first, then refill.' },
		{ q: 'Do you service offices and societies?', a: 'Yes — commercial AMC, VRF systems and society-wide service days. See the Commercial page.' },
		{ q: 'Which areas do you cover?', a: 'Mumbai, Thane, Navi Mumbai and Pune. Enter your pincode while booking to confirm coverage.' },
		{ q: 'Can I reschedule or cancel?', a: 'Yes, free up to 2 hours before your slot. Call us with your booking ID — no cancellation fee.' }
	];
	const faqJson = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		'@id': `${SITE.baseUrl}/faq#faq`,
		mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
	};
</script>

<svelte:head>
	<title>AC Service FAQ — Prices, Warranty, Booking | CoolAir</title>
	<meta name="description" content="CoolAir FAQ: repair costs, response times, brands, warranty, payment, AMC and service areas — answered in plain words." />
	<link rel="canonical" href="{SITE.baseUrl}/faq" />
	<meta property="og:url" content="{SITE.baseUrl}/faq" />
</svelte:head>

<JsonLd json={faqJson} />
<PageHero eyebrow="FAQ" title="Frequently Asked Questions" subtitle="Plain answers, no jargon. Anything else — call us, 24/7." crumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />

<section class="mx-auto max-w-4xl px-4 py-12 pb-16">
	<FaqAccordion faqs={faqs} />
	<p class="mt-8 text-center text-[15px] text-ink-600">Still stuck? Call <a href={SITE.phoneHref} class="font-bold text-brand-600">{SITE.phoneDisplay}</a> or <a href="/contact" class="font-bold text-brand-600">message us →</a></p>
</section>
