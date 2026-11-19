import { SERVICES } from '#lib/data/services';
import { BLOG_POSTS } from '#lib/data/blog';
import { CITIES } from '#lib/data/cities';
import { BRANDS } from '#lib/data/brands';
import { SITE } from '#lib/data/site';

export const prerender = true;

const staticRoutes = [
	'',
	'/about',
	'/why-us',
	'/team',
	'/services',
	'/prices',
	'/amc',
	'/offers',
	'/emergency-ac-repair',
	'/book',
	'/track-booking',
	'/get-quote',
	'/symptoms',
	'/service-areas',
	'/brands',
	'/reviews',
	'/faq',
	'/warranty',
	'/gallery',
	'/blog',
	'/contact',
	'/financing',
	'/commercial',
	'/careers',
	'/privacy',
	'/terms',
	'/disclaimer'
];

// Last content refresh — bump when pages change (sitemap has no per-page dates).
const LASTMOD = '2026-11-18';

export function GET() {
	const urls = [
		...staticRoutes,
		...SERVICES.map((s) => `/services/${s.slug}`),
		...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
		...CITIES.map((c) => `/service-areas/${c.slug}`),
		...BRANDS.map((b) => `/brands/${b.slug}`)
	];
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
		.map((u) => `  <url><loc>${SITE.baseUrl}${u || '/'}</loc><lastmod>${LASTMOD}</lastmod><changefreq>weekly</changefreq></url>`)
		.join('\n')}\n</urlset>\n`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
