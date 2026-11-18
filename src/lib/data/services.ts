export interface Service {
	slug: string;
	name: string;
	short: string;
	description: string;
	image: string;
	icon: string; // lucide icon name key used by ServiceCard
	priceFrom: number;
	priceTo: number;
	priceNote: string;
	duration: string;
	warranty: string;
	symptoms: string[];
	included: string[];
	faqs: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
	{
		slug: 'ac-repair',
		name: 'AC Repair',
		short: 'Fast & reliable repair service at your door.',
		description:
			'Same-day AC repair for every brand and model. Our certified technicians diagnose the fault in front of you, quote a fixed price before starting, and repair with genuine parts — most jobs finished in a single visit.',
		image: '/images/service-repair.webp',
		icon: 'wrench',
		priceFrom: 299,
		priceTo: 3499,
		priceNote: 'Diagnosis ₹299 (adjusted in the repair bill)',
		duration: '60–90 minutes',
		warranty: '90 days on labour, 6 months on fitted parts',
		symptoms: ['AC not cooling', 'AC trips the MCB', 'Water leaking indoors', 'Loud or rattling noise', 'AC starts then stops', 'Remote not working'],
		included: ['Full 21-point diagnosis', 'Gas pressure check', 'PCB & sensor testing', 'Drain & filter check', 'Cooling test after repair', '90-day service warranty'],
		faqs: [
			{ q: 'How much does AC repair cost?', a: 'Diagnosis is ₹299. Most common repairs land between ₹499 and ₹2,499; compressor and PCB work can go up to ₹3,499. You approve the exact quote before we start — no surprise charges.' },
			{ q: 'Do you repair all brands?', a: 'Yes — Daikin, Voltas, LG, Samsung, Panasonic, Hitachi, Carrier, Haier and more, split, window, cassette and tower units.' },
			{ q: 'How fast can a technician reach me?', a: 'Same-day slots in Mumbai, Thane, Navi Mumbai and Pune. Emergency calls get priority within 2 hours, 24/7.' }
		]
	},
	{
		slug: 'ac-installation',
		name: 'AC Installation',
		short: 'Expert installation for all types and brands.',
		description:
			'Clean, safe installation by certified technicians — proper copper piping, vacuuming, gas charging and a full cooling test. We mount indoor and outdoor units with brackets, seal the wall, and leave the room tidy.',
		image: '/images/service-installation.webp',
		icon: 'wrench',
		priceFrom: 1499,
		priceTo: 2999,
		priceNote: 'Split ₹1,999 · Window ₹1,499 · Cassette from ₹2,999',
		duration: '2–3 hours',
		warranty: '1 year on installation workmanship',
		symptoms: ['New AC to install', 'Shifting AC to a new home', 'Upgrading to a bigger unit', 'Outdoor unit needs a stand'],
		included: ['Wall mounting + brackets', 'Copper piping up to 3 m', 'Vacuuming & gas charging', 'Drain pipe routing', 'Electrical safety check', 'Cooling + noise test'],
		faqs: [
			{ q: 'What does installation cost?', a: 'Window AC ₹1,499, split AC ₹1,999, cassette from ₹2,999. Extra copper pipe, core cutting or long drain runs are quoted upfront.' },
			{ q: 'Do you uninstall the old AC too?', a: 'Yes — safe gas pump-down and uninstallation from ₹999, and we can reinstall it at your new home in the same visit.' },
			{ q: 'Will you take away the packaging?', a: 'Yes, we clear all packaging and drilling dust before we leave.' }
		]
	},
	{
		slug: 'ac-cleaning',
		name: 'AC Cleaning',
		short: 'Remove dust & bacteria for fresh and cool air.',
		description:
			'Deep jet-pump cleaning of filters, coils, blower and drain tray. Removes the dust and mould that choke cooling, cause bad smell and raise your electricity bill — with a protective sheet so your room stays dry.',
		image: '/images/service-cleaning.webp',
		icon: 'spray',
		priceFrom: 499,
		priceTo: 999,
		priceNote: 'Basic service ₹499 · Deep jet cleaning ₹999',
		duration: '45–60 minutes',
		warranty: '30 days on cleaning work',
		symptoms: ['Weak airflow', 'Bad smell when AC runs', 'Cooling slowly getting worse', 'Dust on furniture near the AC', 'Allergy or sneezing indoors'],
		included: ['Filter wash', 'Coil jet-pump wash', 'Blower & louvre cleaning', 'Drain tray & pipe flush', 'Anti-bacterial spray', 'Cooling check after service'],
		faqs: [
			{ q: 'Basic service vs deep cleaning — which do I need?', a: 'Basic ₹499 covers filter and outer cleaning — good every 3–4 months. Deep jet cleaning ₹999 washes the coils and blower inside — pick it once a year, or if cooling has dropped or there is a smell.' },
			{ q: 'Will cleaning make a mess in my room?', a: 'No. We use a wash-bag and protective sheets; water drains into a bucket, not on your floor.' },
			{ q: 'How often should I get my AC cleaned?', a: 'In Mumbai’s dust and humidity, every 3–4 months for daily-use ACs, and a deep clean before every summer.' }
		]
	},
	{
		slug: 'gas-refilling',
		name: 'Gas Filling',
		short: 'Gas top-up for better cooling performance.',
		description:
			'Certified gas top-up and full refill (R22 / R32 / R410A) with a proper leak check first — because a refill without fixing the leak is money wasted. Pressure is tested and cooling verified before we leave.',
		image: '/images/service-gas.webp',
		icon: 'zap',
		priceFrom: 2499,
		priceTo: 3999,
		priceNote: 'Top-up from ₹2,499 · Full refill quoted after check',
		duration: '60–90 minutes',
		warranty: '90 days on gas work (leak-free guarantee)',
		symptoms: ['AC blows air but not cold', 'Ice on copper pipes', 'Cooling fades after a few weeks', 'Outdoor unit runs but indoor stays warm'],
		included: ['Leak detection check', 'Gas top-up or refill (R22 / R32 / R410A)', 'Pressure & temperature test', 'Cooling verification', 'Leak-fix quote if needed'],
		faqs: [
			{ q: 'How do I know my AC needs gas?', a: 'Classic signs: air blows but stays warm, ice on the pipes, or cooling that fades weeks after a refill. Our visit includes a pressure test that proves it.' },
			{ q: 'Why did my gas finish so soon after the last refill?', a: 'Gas does not get “used up” — a fast refill means a leak. We find and quote the leak fix first, then refill, so it lasts.' },
			{ q: 'Which gas does my AC use?', a: 'It is printed on the outdoor unit label — R22 (older), R32 or R410A (newer). We carry all three.' }
		]
	},
	{
		slug: 'ac-maintenance',
		name: 'AC Maintenance',
		short: 'Regular maintenance increases AC life.',
		description:
			'Planned care that keeps your AC efficient all year — scheduled cleaning, gas and electrical checks, and priority booking. One visit every few months beats one big breakdown every summer.',
		image: '/images/service-maintenance.webp',
		icon: 'settings',
		priceFrom: 499,
		priceTo: 3499,
		priceNote: 'Single visit ₹499 · AMC from ₹1,499/year',
		duration: '45–60 minutes per visit',
		warranty: 'Covered under your AMC plan terms',
		symptoms: ['AC used daily for long hours', 'Electricity bill creeping up', 'Want to avoid summer breakdowns', 'Multiple ACs at home or office'],
		included: ['Scheduled visits', 'Filter + coil cleaning', 'Gas pressure check', 'Electrical & safety check', 'Priority booking', 'Discounted repairs'],
		faqs: [
			{ q: 'Is an AMC worth it?', a: 'If you run 2+ ACs daily, yes — two services a year plus discounted repairs usually cost less than paying per visit. See the AMC page for the full comparison.' },
			{ q: 'Can I book a one-time maintenance visit?', a: 'Yes — a single maintenance visit is ₹499, no plan needed.' },
			{ q: 'Do you maintain office ACs too?', a: 'Yes, we run AMC plans for offices, shops, clinics and societies — see the Commercial page.' }
		]
	},
	{
		slug: 'ac-uninstallation',
		name: 'AC Uninstallation',
		short: 'Safe removal when you move or upgrade.',
		description:
			'Safe gas pump-down, careful dismantling and capping of pipes so your AC can be reinstalled without damage. Ideal when shifting homes or replacing an old unit.',
		image: '/images/service-installation.webp',
		icon: 'package',
		priceFrom: 999,
		priceTo: 1499,
		priceNote: 'Split ₹999 · Window ₹799 · Cassette ₹1,499',
		duration: '45–75 minutes',
		warranty: '30 days on uninstallation work',
		symptoms: ['Shifting to a new home', 'Replacing an old AC', 'Renovating the room'],
		included: ['Gas pump-down & storage', 'Safe dismantling', 'Pipe capping', 'Packing help', 'Reinstallation quote on the spot'],
		faqs: [
			{ q: 'Will the gas be saved?', a: 'Yes — we pump the gas back into the outdoor unit before disconnecting, so you do not pay for a fresh refill at the new home.' },
			{ q: 'Can you uninstall and reinstall the same day?', a: 'Yes, if both homes are in our service area — book it as one shifting job and save on the second visit.' }
		]
	},
	{
		slug: 'pcb-compressor-repair',
		name: 'PCB & Compressor Repair',
		short: 'Board-level and compressor experts.',
		description:
			'Board-level PCB repair and compressor diagnosis for the faults other technicians give up on — no cooling, error codes, frequent tripping. We test before replacing, and quote repair vs replacement honestly.',
		image: '/images/service-repair.webp',
		icon: 'cpu',
		priceFrom: 1499,
		priceTo: 8999,
		priceNote: 'PCB repair from ₹1,499 · Compressor quoted after test',
		duration: '90 minutes – 1 day',
		warranty: '6 months on fitted PCB / compressor parts',
		symptoms: ['Error code on display', 'AC not starting at all', 'Compressor not running', 'AC trips within minutes', 'PCB burnt smell'],
		included: ['Board-level diagnosis', 'Component-level repair where possible', 'Genuine replacement boards', 'Compressor health test', 'Warranty on fitted parts'],
		faqs: [
			{ q: 'Is PCB repair better than replacement?', a: 'Often yes — a component-level repair costs far less than a new board. If the board is badly burnt, we quote a genuine replacement instead.' },
			{ q: 'How long does compressor work take?', a: 'Diagnosis same day; replacement usually needs a day for the part. We never leave an AC open overnight without sealing it.' }
		]
	},
	{
		slug: 'duct-cleaning',
		name: 'Duct Cleaning',
		short: 'Cleaner air for ducted and cassette systems.',
		description:
			'Professional duct and cassette cleaning for homes and offices — dust, mould and debris removed from ducts, vents and indoor units for healthier air and better airflow.',
		image: '/images/service-cleaning.webp',
		icon: 'wind',
		priceFrom: 1999,
		priceTo: 5999,
		priceNote: 'Quoted per system size after inspection',
		duration: '2–4 hours',
		warranty: '60 days on duct cleaning work',
		symptoms: ['Dust from vents', 'Musty smell in ducted rooms', 'Uneven cooling across rooms', 'Allergy complaints at office'],
		included: ['Duct inspection', 'Vacuum + brush cleaning', 'Vent & grille wash', 'Anti-bacterial treatment', 'Airflow check'],
		faqs: [
			{ q: 'How often should ducts be cleaned?', a: 'Every 12–18 months for offices, every 2 years for homes — sooner if there is construction dust or a musty smell.' },
			{ q: 'Do you clean cassette ACs too?', a: 'Yes — cassette deep cleaning is part of duct jobs, or book it as a single-unit service.' }
		]
	},
	{
		slug: 'commercial-vrf',
		name: 'Commercial & VRF',
		short: 'Offices, shops, societies & VRF systems.',
		description:
			'VRF/VRV installation, repair and AMC for offices, retail, clinics, restaurants and housing societies. Dedicated project manager, multi-unit scheduling and monthly reporting.',
		image: '/images/commercial.webp',
		icon: 'building',
		priceFrom: 2999,
		priceTo: 0,
		priceNote: 'Site survey free · Project quote after survey',
		duration: 'Per project schedule',
		warranty: 'As per project AMC terms',
		symptoms: ['New office fit-out', 'VRF not cooling evenly', 'Society-wide AMC', 'Restaurant kitchen AC load'],
		included: ['Free site survey', 'Load calculation', 'VRF installation & commissioning', 'Multi-unit AMC', 'Monthly service reports', 'Priority breakdown response'],
		faqs: [
			{ q: 'Do you handle VRF/VRV systems?', a: 'Yes — Daikin, LG, Samsung and Mitsubishi VRF installation, repair and AMC, with brand-trained technicians.' },
			{ q: 'Can you service a whole society?', a: 'Yes — society AMCs cover all flats under one contract with a fixed per-visit rate and a single point of contact.' },
			{ q: 'Is the site survey really free?', a: 'Yes, for commercial projects in Mumbai, Thane, Navi Mumbai and Pune.' }
		]
	}
];

export function getService(slug: string): Service | undefined {
	return SERVICES.find((s) => s.slug === slug);
}
