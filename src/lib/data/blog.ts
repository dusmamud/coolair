export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	date: string;
	readMinutes: number;
	image: string;
	sections: { heading: string; body: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
	{
		slug: 'ac-not-cooling-causes-fixes',
		title: 'AC Not Cooling? 7 Causes and What to Do Before You Call',
		excerpt: 'Most “no cooling” complaints have simple causes you can check in 5 minutes — dirty filters, wrong mode, or a tripped setting. Here is the full checklist.',
		category: 'Troubleshooting',
		date: '2026-11-10',
		readMinutes: 6,
		image: '/images/service-repair.webp',
		sections: [
			{ heading: '1. Check the mode and temperature', body: 'It sounds obvious, but a third of no-cooling calls turn out to be the remote set to Fan or Dry mode, or the temperature set to 26°C on a 38°C day. Set Cool mode and 22–24°C, then wait 10 minutes.' },
			{ heading: '2. Clean the filters', body: 'A clogged filter can cut airflow by half. Slide the filters out, wash them under running water, dry fully in shade, and refit. In Mumbai’s dust, do this every 2–3 weeks in summer.' },
			{ heading: '3. Look at the outdoor unit', body: 'If the outdoor fan is not spinning or the unit is buried behind boxes and plants, the AC cannot throw heat out. Keep 1 foot of clear space around it and hose the fins gently from a distance.' },
			{ heading: '4. Ice on the pipes means a problem', body: 'Ice on the copper pipes or indoor coil usually means low gas or blocked airflow. Switch the AC off for 30 minutes to thaw, clean the filter, and if ice returns, book a gas pressure check — do not keep running it.' },
			{ heading: 'When to call a technician', body: 'If the outdoor unit makes a humming noise but never starts, the MCB trips, or cooling fades within days of a gas refill, you need a professional diagnosis. Diagnosis is ₹299 and is adjusted in the repair bill.' }
		]
	},
	{
		slug: 'ac-maintenance-checklist-mumbai',
		title: 'The Mumbai AC Maintenance Checklist: What to Do Every 3 Months',
		excerpt: 'Sea air, dust and 10-hour summer days wear ACs faster here. A short quarterly routine keeps cooling strong and bills low.',
		category: 'Maintenance',
		date: '2026-11-04',
		readMinutes: 5,
		image: '/images/service-cleaning.webp',
		sections: [
			{ heading: 'Every 2–3 weeks: filters', body: 'Wash the indoor filters. This single habit prevents most weak-airflow complaints and keeps the coil from icing up.' },
			{ heading: 'Every 3–4 months: basic service', body: 'A ₹499 basic service covers filter wash, drain check and a cooling test. Daily-use ACs in Mumbai need this rhythm, not once-a-year attention.' },
			{ heading: 'Once a year: deep jet cleaning', body: 'Before summer, book the ₹999 deep clean — coils, blower and drain tray washed with a jet pump. Expect 15–25% better cooling and a lower bill.' },
			{ heading: 'Before the monsoon: drain check', body: 'A blocked drain pipe is the top cause of indoor water leakage in July. A 10-minute flush before the rains saves a ceiling stain.' },
			{ heading: 'Set it right', body: '24°C cools a room well and uses far less power than 18°C. Every degree lower adds roughly 6% to consumption.' }
		]
	},
	{
		slug: 'split-vs-window-ac-buying-guide',
		title: 'Split vs Window AC: Which One Should You Buy in 2026?',
		excerpt: 'Price, noise, cooling power and installation cost compared honestly — including the cases where a window AC is still the smarter buy.',
		category: 'Buying Guide',
		date: '2026-10-28',
		readMinutes: 7,
		image: '/images/service-installation.webp',
		sections: [
			{ heading: 'Cooling and noise', body: 'Split ACs cool more evenly and run quieter indoors, because the noisy compressor sits outside. Window ACs are louder but cool a small room just as fast.' },
			{ heading: 'Cost, honestly', body: 'A 1.5-ton window AC costs less upfront and ₹1,499 to install. A split costs more and ₹1,999 to install, plus copper piping. Over 5 years, an inverter split usually wins on electricity.' },
			{ heading: 'When a window AC wins', body: 'Rented homes, single small rooms, and walls where outdoor mounting is not allowed. No drilling for pipes, easy to remove when you shift.' },
			{ heading: 'When a split wins', body: 'Bedrooms (quiet sleep), large living rooms, and anyone running the AC 8+ hours a day — the inverter savings add up fast.' },
			{ heading: 'Size it right', body: 'Rough guide: up to 120 sq ft → 1 ton; 120–180 sq ft → 1.5 ton; above that → 2 ton. Top floors and west-facing rooms need one step up.' }
		]
	},
	{
		slug: 'pre-summer-ac-checklist',
		title: 'Pre-Summer AC Checklist: Get Ready Before the First Heatwave',
		excerpt: 'March is the cheapest month to service your AC — slots are open, parts are in stock, and you avoid the April rush. Do these 6 things now.',
		category: 'Seasonal',
		date: '2026-10-20',
		readMinutes: 4,
		image: '/images/service-maintenance.webp',
		sections: [
			{ heading: '1. Book the deep clean in March', body: 'Deep cleaning slots fill up by April and wait times stretch to 3–4 days. March bookings get same-day slots and pre-summer offers.' },
			{ heading: '2. Test cooling for 30 minutes', body: 'Run the AC on Cool at 22°C for half an hour. If the room is not comfortably cool, something is wrong — find out now, not in May.' },
			{ heading: '3. Check the remote and batteries', body: 'Weak batteries cause half the “AC not responding” complaints. Fresh cells cost ₹30 and save a visit.' },
			{ heading: '4. Inspect the outdoor unit', body: 'Clear leaves, check the bracket is firm, and make sure the drain pipe is not blocked or kinked.' },
			{ heading: '5. Consider an AMC', body: 'If you run 2+ ACs, a ₹1,499/year Basic AMC covers two services and priority summer slots — cheaper than two separate visits.' },
			{ heading: '6. Note the symptoms', body: 'Smell, noise, weak airflow, ice — write them down and tell the technician on arrival. It cuts diagnosis time in half.' }
		]
	},
	{
		slug: 'why-ac-leaks-water',
		title: 'Why Is My AC Leaking Water Inside? Causes and Quick Fixes',
		excerpt: 'Water dripping from the indoor unit is the most common monsoon complaint — and usually a 20-minute fix. Here is what causes it.',
		category: 'Troubleshooting',
		date: '2026-10-12',
		readMinutes: 5,
		image: '/images/service-cleaning.webp',
		sections: [
			{ heading: 'The usual suspect: a blocked drain pipe', body: 'Dust and algae clog the drain over months. Water backs up into the tray and drips indoors. A flush and tray clean fixes it — part of every deep clean.' },
			{ heading: 'Dirty filters make it worse', body: 'A clogged filter freezes the coil; when the ice melts, water overflows the tray. Wash filters first, then check the drain.' },
			{ heading: 'Low gas can cause dripping too', body: 'Low refrigerant ices the coil, and the meltwater has nowhere to go. If leaking returns within days of a drain clean, get the gas pressure checked.' },
			{ heading: 'Wrong tilt after installation', body: 'The indoor unit needs a slight tilt toward the drain side. If your AC leaked from day one, the mounting is the likely cause — covered under installation warranty.' },
			{ heading: 'What to do right now', body: 'Switch the AC off, place a bucket under the drip, and do not run it for an hour. If it leaks again after a filter wash, book a visit — diagnosis is ₹299.' }
		]
	},
	{
		slug: 'reduce-ac-electricity-bill',
		title: '7 Ways to Cut Your AC Electricity Bill Without Sweating',
		excerpt: 'Most households can save 20–30% on AC power with settings and habits alone — no new AC needed.',
		category: 'Maintenance',
		date: '2026-10-05',
		readMinutes: 6,
		image: '/images/hero.webp',
		sections: [
			{ heading: '1. Set 24°C, not 18°C', body: 'Every degree below 24°C adds about 6% to power use. 24°C with a ceiling fan feels as cool as 20°C without one.' },
			{ heading: '2. Use the timer', body: 'Cool the room for the first hour, then let the timer switch off after you fall asleep. The room stays cool for hours.' },
			{ heading: '3. Clean filters every 2 weeks', body: 'A dirty filter forces the compressor to work harder for the same cooling. It is the cheapest saving on this list.' },
			{ heading: '4. Seal the room', body: 'Close doors, seal window gaps, and draw curtains on the sunny side. An AC cooling the whole street is an AC wasting money.' },
			{ heading: '5. Service before summer', body: 'A clean coil transfers heat far better than a dusty one. A ₹999 deep clean often pays for itself in one summer of lower bills.' },
			{ heading: '6. Fan + AC together', body: 'A ceiling fan on low lets you raise the AC by 2–3°C with the same comfort — and fans use almost no power.' },
			{ heading: '7. Check the outdoor unit', body: 'Shade the outdoor unit if possible and keep it clean. A hot, dusty condenser works harder and costs more.' }
		]
	}
];

export function getPost(slug: string): BlogPost | undefined {
	return BLOG_POSTS.find((p) => p.slug === slug);
}
