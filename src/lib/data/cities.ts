export interface City {
	slug: string;
	name: string;
	tagline: string;
	intro: string;
	climate: string;
	housing: string;
	commonFaults: string[];
	areas: string[];
	eta: string;
	priceNote: string;
	faqs: { q: string; a: string }[];
}

export const CITIES: City[] = [
	{
		slug: 'mumbai',
		name: 'Mumbai',
		tagline: 'Same-day AC service across the city — from Colaba to Borivali.',
		intro:
			'Mumbai runs its ACs harder than almost any Indian city: 10-month summers, sea humidity and dust from endless construction. Our Mumbai teams cover the western and eastern suburbs plus South Mumbai with same-day slots and a 2-hour emergency response.',
		climate: 'Coastal humidity + sea salt corrodes outdoor units faster here. Coils need cleaning every 3–4 months, and anti-rust coating on outdoor brackets is worth it.',
		housing: 'High-rises with outdoor units on brackets, older chawls and bungalows with window ACs, and sea-facing flats where salt air eats copper pipes.',
		commonFaults: ['Coil corrosion from sea air', 'Drain blockage in monsoon', 'Weak cooling in top-floor flats', 'Gas leaks at flare joints'],
		areas: ['Andheri West', 'Bandra West', 'Borivali West', 'Powai', 'Malad West', 'Worli', 'Fort', 'Dadar'],
		eta: 'Same day · Emergency within 2 hours',
		priceNote: 'Same transparent rates city-wide — no “Mumbai premium”.',
		faqs: [
			{ q: 'Do you serve South Mumbai too?', a: 'Yes — Colaba, Fort, Worli, Dadar and the full western line up to Borivali, plus the eastern suburbs.' },
			{ q: 'Can you work in high-rise buildings?', a: 'Yes. Our technicians carry safety harnesses for outdoor-unit work above ground floor, and we coordinate with building security.' }
		]
	},
	{
		slug: 'thane',
		name: 'Thane',
		tagline: 'AC repair & service for Thane’s new towers and old neighbourhoods.',
		intro:
			'Thane has grown fast — Ghodbunder Road towers, Hiranandani Estate, and the older neighbourhoods around the station. New towers mostly run inverter splits; older homes still use window ACs. We serve both, with same-day slots across Thane West and East.',
		climate: 'Thane sits slightly inland, so it runs 1–2°C hotter than coastal Mumbai in May — ACs here work longer hours, and pre-summer servicing matters more.',
		housing: 'New high-rise societies with cassette and VRF systems, plus independent houses and older buildings with window units.',
		commonFaults: ['Inverter PCB faults in new towers', 'Dust-clogged filters from construction', 'Cassette AC drain issues in societies', 'Voltage fluctuation damage'],
		areas: ['Thane West', 'Thane East', 'Ghodbunder Road', 'Hiranandani Estate', 'Manpada', 'Kolshet'],
		eta: 'Same day · Emergency within 3 hours',
		priceNote: 'Same transparent rates as Mumbai.',
		faqs: [
			{ q: 'Do you do society AMC plans in Thane?', a: 'Yes — society AMCs are popular on Ghodbunder Road. One contract covers all flats at a fixed per-visit rate.' },
			{ q: 'Can you service VRF systems in new towers?', a: 'Yes, our commercial team handles VRF/VRV for Thane societies and offices.' }
		]
	},
	{
		slug: 'navi-mumbai',
		name: 'Navi Mumbai',
		tagline: 'Planned-city AC service — Vashi to Belapur, same-day.',
		intro:
			'Navi Mumbai’s planned sectors mean wide roads and easy access — our teams move fast between Vashi, Nerul, Belapur and Kharghar. The city’s many new societies run mostly split and cassette ACs, and we handle society-wide AMC contracts as well as single-home visits.',
		climate: 'Similar coastal humidity to Mumbai, with more open construction dust in Kharghar and Taloja — filters clog faster near new projects.',
		housing: 'CIDCO-planned sectors with modern societies, plus older nodes like Vashi and Nerul with a mix of window and split units.',
		commonFaults: ['Construction-dust clogged filters', 'Cassette AC servicing in societies', 'Outdoor unit rust near the creek', 'Drain overflow in monsoon'],
		areas: ['Vashi', 'Nerul', 'Belapur', 'Kharghar', 'Sanpada', 'Airoli'],
		eta: 'Same day · Emergency within 3 hours',
		priceNote: 'Same transparent rates as Mumbai.',
		faqs: [
			{ q: 'Do you cover Kharghar and Taloja?', a: 'Yes — all nodes from Airoli to Belapur, including Kharghar, Kamothe and Taloja.' },
			{ q: 'Can our society book a bulk service day?', a: 'Yes — bulk society days give every flat a fixed discounted rate and one coordinated visit.' }
		]
	},
	{
		slug: 'pune',
		name: 'Pune',
		tagline: 'AC service for Pune’s heat, dust and IT-corridor offices.',
		intro:
			'Pune’s dry heat is different from Mumbai’s humidity — ACs here battle dust and 40°C May afternoons rather than sea salt. We serve Baner, Hadapsar, Hinjewadi’s IT offices and the old city, with same-day home visits and commercial AMC for offices.',
		climate: 'Dry, dusty heat with sharp summer peaks. Dust is the main enemy — filters and coils need cleaning every 3 months, and outdoor units need shade where possible.',
		housing: 'IT-corridor apartments in Baner and Hinjewadi, old-city wadas and bungalows with window ACs, and large office parks with VRF systems.',
		commonFaults: ['Dust-choked coils', 'Overheating outdoor units in May', 'Compressor overload in top floors', 'VRF issues in IT offices'],
		areas: ['Baner', 'Hadapsar', 'Hinjewadi', 'Shivajinagar', 'Kothrud', 'Wakad'],
		eta: 'Same day · Emergency within 3 hours',
		priceNote: 'Same transparent rates as Mumbai.',
		faqs: [
			{ q: 'Do you serve Hinjewadi IT offices?', a: 'Yes — weekend and after-hours servicing for offices so work never stops, with monthly reports.' },
			{ q: 'Is Pune pricing the same as Mumbai?', a: 'Yes, the same rate card applies in all four cities.' }
		]
	}
];

export function getCity(slug: string): City | undefined {
	return CITIES.find((c) => c.slug === slug);
}
