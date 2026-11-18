import { error } from '@sveltejs/kit';
import { CITIES, getCity } from '#lib/data/cities';
import type { PageLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => CITIES.map((c) => ({ city: c.slug }));

export const load: PageLoad = ({ params }) => {
	const city = getCity(params.city);
	if (!city) error(404, 'City not found');
	return { city };
};
