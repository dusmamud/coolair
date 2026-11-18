// ─── CoolAir — central mock data. ──────────────────────────────────────────
// EVERY phone / email / address / name / price / review / stat on this site is
// MOCK data for the demo. Dus swaps real values here — one file, one pass.
// Never present a mock value as a real fact (no real address, GST, licence,
// or real Google rating anywhere on the site).

export const SITE = {
	name: 'CoolAir',
	fullName: 'CoolAir AC Service',
	tagline: 'Fast. Reliable. Affordable.',
	phoneDisplay: '+91 98765 43210',
	phoneHref: 'tel:+919876543210',
	whatsappHref: 'https://wa.me/919876543210?text=Hi%20CoolAir%2C%20I%20need%20AC%20service',
	email: 'hello@coolair.pages.dev',
	address: 'Andheri West, Mumbai, Maharashtra (mock address)',
	hours: 'Mon–Sun, 8:00 AM – 10:00 PM',
	emergencyHours: '24/7 emergency — nights, Sundays & holidays',
	city: 'Mumbai',
	baseUrl: 'https://coolair.pages.dev',
	priceRange: '₹₹',
	stats: {
		jobsDone: 12500,
		customers: 10000,
		technicians: 28,
		years: 8,
		rating: 4.8,
		reviewCount: 2400
	}
} as const;

export const MOCK_NOTICE =
	'Demo site — all contact details, technician names, prices and reviews are mock values.';

export const NAV_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'About Us', href: '/about' },
	{ label: 'Services', href: '/services' },
	{ label: 'Prices', href: '/prices' },
	{ label: 'Why Us', href: '/why-us' },
	{ label: 'Gallery', href: '/gallery' },
	{ label: 'Blog', href: '/blog' },
	{ label: 'Contact Us', href: '/contact' }
] as const;

export const SERVICE_AREAS = [
	{ slug: 'mumbai', name: 'Mumbai', pincodes: '400001 – 400104' },
	{ slug: 'thane', name: 'Thane', pincodes: '400601 – 400615' },
	{ slug: 'navi-mumbai', name: 'Navi Mumbai', pincodes: '400701 – 400716' },
	{ slug: 'pune', name: 'Pune', pincodes: '411001 – 411057' }
] as const;

/** Pincodes we serve (mock list, used by the booking pincode checker). */
export const SERVED_PINCODES: Record<string, string> = {
	'400053': 'Andheri West, Mumbai',
	'400001': 'Fort, Mumbai',
	'400050': 'Bandra West, Mumbai',
	'400092': 'Borivali West, Mumbai',
	'400601': 'Thane West',
	'400615': 'Thane East',
	'400701': 'Vashi, Navi Mumbai',
	'400705': 'Nerul, Navi Mumbai',
	'400710': 'Belapur, Navi Mumbai',
	'411001': 'Shivajinagar, Pune',
	'411045': 'Baner, Pune',
	'411028': 'Hadapsar, Pune'
};

export const TIME_SLOTS = [
	'8:00 – 10:00 AM',
	'10:00 AM – 12:00 PM',
	'12:00 – 2:00 PM',
	'2:00 – 4:00 PM',
	'4:00 – 6:00 PM',
	'6:00 – 8:00 PM'
] as const;

export const AC_TYPES = ['Split AC', 'Window AC', 'Cassette AC', 'Tower AC', 'VRF / VRV'] as const;

export const BRAND_NAMES = [
	'Daikin',
	'Voltas',
	'LG',
	'Samsung',
	'Panasonic',
	'Hitachi',
	'Carrier',
	'Haier'
] as const;

export function inr(n: number): string {
	return '₹' + n.toLocaleString('en-IN');
}

export function bookingId(): string {
	const d = new Date();
	const stamp = d.toISOString().slice(2, 10).replaceAll('-', '');
	const rand = Math.floor(1000 + Math.random() * 9000);
	return `CA-${stamp}-${rand}`;
}
