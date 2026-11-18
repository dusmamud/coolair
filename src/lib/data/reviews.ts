// Mock reviews — names, localities and jobs are invented for the demo.
// Labelled as mock on the Reviews page; never present as a real Google rating.
export interface Review {
	id: number;
	name: string;
	locality: string;
	service: string;
	technician: string;
	rating: number;
	date: string;
	text: string;
}

export const REVIEWS: Review[] = [
	{ id: 1, name: 'Priya Sharma', locality: 'Andheri West, Mumbai', service: 'AC Repair', technician: 'Rahul', rating: 5, date: 'Nov 2026', text: 'AC stopped cooling on the hottest day of the month. Technician reached in under 2 hours, found a faulty capacitor, fixed it in 40 minutes and the bill was exactly what was quoted on the phone.' },
	{ id: 2, name: 'Amit Deshmukh', locality: 'Thane West', service: 'AC Installation', technician: 'Imran', rating: 5, date: 'Oct 2026', text: 'Two split ACs installed in our new flat. Neat copper piping, no mess, proper vacuuming and a full cooling test before they left. The wall was left cleaner than they found it.' },
	{ id: 3, name: 'Sneha Kulkarni', locality: 'Baner, Pune', service: 'Deep Cleaning', technician: 'Vikram', rating: 5, date: 'Oct 2026', text: 'The smell from our AC is completely gone after the jet cleaning. Airflow feels like a new AC. They used a wash-bag so not a single drop fell on the floor.' },
	{ id: 4, name: 'Rohan Mehta', locality: 'Bandra West, Mumbai', service: 'Gas Filling', technician: 'Rahul', rating: 4, date: 'Sep 2026', text: 'Third company I called for gas — the first two just refilled and left. CoolAir found the leak in the flare nut, fixed it, then refilled. Cooling has held for two months now.' },
	{ id: 5, name: 'Kavita Nair', locality: 'Vashi, Navi Mumbai', service: 'AMC Premium', technician: 'Imran', rating: 5, date: 'Sep 2026', text: 'We have three ACs and the AMC pays for itself. Two services a year, priority slots, and the repair discount covered the plan cost in the first visit itself.' },
	{ id: 6, name: 'Farhan Sheikh', locality: 'Bandra East, Mumbai', service: 'PCB Repair', technician: 'Vikram', rating: 5, date: 'Aug 2026', text: 'Another company quoted a full PCB replacement at ₹7,000. CoolAir repaired the board at component level for ₹1,800 and it has worked perfectly since. Honest people.' },
	{ id: 7, name: 'Meera Iyer', locality: 'Borivali West, Mumbai', service: 'AC Repair', technician: 'Sanjay', rating: 5, date: 'Aug 2026', text: 'Booked at 9 AM, technician at 11 AM, AC fixed by noon. Water leaking problem solved — blocked drain pipe. He showed me the clogged pipe before cleaning it.' },
	{ id: 8, name: 'Anil Joshi', locality: 'Hadapsar, Pune', service: 'AC Uninstallation', technician: 'Imran', rating: 4, date: 'Jul 2026', text: 'Shifting homes is stressful enough — they pumped the gas down safely, packed the units carefully and reinstalled at the new flat the same evening. One team, one call.' },
	{ id: 9, name: 'Divya Reddy', locality: 'Powai, Mumbai', service: 'Deep Cleaning', technician: 'Rahul', rating: 5, date: 'Jul 2026', text: 'My son’s sneezing reduced noticeably after the deep clean. The technician explained the mould on the coil in plain words and showed before-after photos.' },
	{ id: 10, name: 'Suresh Patil', locality: 'Nerul, Navi Mumbai', service: 'Commercial AMC', technician: 'Vikram', rating: 5, date: 'Jun 2026', text: 'Our office has 14 cassette units. Their team services them on Sundays so work never stops, and we get a proper report every month. Breakdown calls are answered in minutes.' },
	{ id: 11, name: 'Neha Agarwal', locality: 'Malad West, Mumbai', service: 'AC Installation', technician: 'Sanjay', rating: 5, date: 'Jun 2026', text: 'Bought a new Daikin online and needed installation the same day. They came at 4 PM, finished by 7, and even helped register the warranty. Very professional.' },
	{ id: 12, name: 'Karan Malhotra', locality: 'Worli, Mumbai', service: 'AC Repair', technician: 'Rahul', rating: 4, date: 'May 2026', text: 'Emergency call at 11 PM — AC tripping the MCB. Technician arrived by midnight, found a shorted wire, fixed it and charged the standard rate. No night surcharge was a pleasant surprise.' }
];
