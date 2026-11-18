import { error } from '@sveltejs/kit';
import { BRANDS, getBrand } from '#lib/data/brands';
import type { PageLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => BRANDS.map((b) => ({ brand: b.slug }));

export const load: PageLoad = ({ params }) => {
	const brand = getBrand(params.brand);
	if (!brand) error(404, 'Brand not found');
	return { brand };
};
