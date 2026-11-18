export interface Brand {
	slug: string;
	name: string;
	tagline: string;
	about: string;
	strengths: string[];
	commonIssues: string[];
	note: string;
}

export const BRANDS: Brand[] = [
	{ slug: 'daikin', name: 'Daikin', tagline: 'Japanese engineering, quiet inverter cooling.', about: 'Daikin inverter splits are among the most efficient we service. Their PCBs are sensitive to voltage fluctuation, so a stabiliser or voltage guard is worth it in older buildings.', strengths: ['Best-in-class inverter efficiency', 'Very quiet indoor units', 'Strong after-sales parts network'], commonIssues: ['PCB faults after voltage spikes', 'Error codes U4 / L5', 'Drain sensor faults'], note: 'We stock common Daikin PCB components and sensors.' },
	{ slug: 'voltas', name: 'Voltas', tagline: 'India’s most-installed AC — parts everywhere.', about: 'Voltas is the workhorse of Indian homes: simple, sturdy and cheap to repair. Parts are available everywhere, which keeps repair times short and bills low.', strengths: ['Lowest repair costs', 'Parts available same day', 'Great for rented homes'], commonIssues: ['Capacitor failure', 'Fan motor noise', 'Cooling drop after 4–5 years'], note: 'Most Voltas repairs finish in a single visit.' },
	{ slug: 'lg', name: 'LG', tagline: 'Dual-inverter tech with smart features.', about: 'LG dual-inverter ACs cool fast and run quiet. Their dual-rotary compressors are reliable, but the Wi-Fi and display boards need careful diagnosis when they misbehave.', strengths: ['Fast cooling', 'Good inverter range', 'Smart features'], commonIssues: ['Display board faults', 'Sensor errors', 'Wi-Fi module issues'], note: 'We diagnose LG error codes on the spot.' },
	{ slug: 'samsung', name: 'Samsung', tagline: 'WindFree comfort and clean design.', about: 'Samsung’s WindFree and digital-inverter models are popular in new flats. Their triangular design needs specific cleaning care — the blower assembly is trickier than a standard split.', strengths: ['WindFree gentle cooling', 'Stylish design', 'Good filters'], commonIssues: ['Blower cleaning complexity', 'PCB faults', 'Gas leaks at joints'], note: 'Our technicians are trained on Samsung’s triangular indoor units.' },
	{ slug: 'panasonic', name: 'Panasonic', tagline: 'Nanoe air purification built in.', about: 'Panasonic ACs with nanoe purification are a good pick for allergy-prone homes. Keep the nanoe generator clean during service and the air stays noticeably fresher.', strengths: ['Air purification', 'Reliable compressors', 'Good build quality'], commonIssues: ['Nanoe generator dust', 'Remote sensor faults', 'Drain issues'], note: 'Deep cleaning includes the nanoe module.' },
	{ slug: 'hitachi', name: 'Hitachi', tagline: 'Heavy-duty cooling for Indian summers.', about: 'Hitachi units are built for extreme heat and handle 45°C+ days better than most. Their copper condensers last long — but weigh more, so outdoor brackets need checking.', strengths: ['Excellent high-heat performance', 'Durable copper condenser', 'Strong cooling'], commonIssues: ['Bracket corrosion', 'Fan motor wear', 'Gas pressure drop'], note: 'We check outdoor brackets on every Hitachi visit.' },
	{ slug: 'carrier', name: 'Carrier', tagline: 'The inventor of modern air conditioning.', about: 'Carrier invented modern AC, and their units remain solid performers, especially in commercial spaces. Older Carrier window units are still common and very repairable.', strengths: ['Commercial-grade build', 'Long service life', 'Good cassette range'], commonIssues: ['Ageing capacitors', 'Window unit rust', 'Thermostat faults'], note: 'We service Carrier window, split and cassette units.' },
	{ slug: 'haier', name: 'Haier', tagline: 'Value-packed cooling with smart features.', about: 'Haier offers strong value — good cooling and smart features at a lower price. Parts availability has improved a lot, and most common repairs are quick.', strengths: ['Great value for money', 'Fast cooling', 'Smart features'], commonIssues: ['Sensor faults', 'Display issues', 'Drain blockage'], note: 'Common Haier sensors and remotes in stock.' }
];

export function getBrand(slug: string): Brand | undefined {
	return BRANDS.find((b) => b.slug === slug);
}
