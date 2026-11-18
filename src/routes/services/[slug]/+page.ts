import { error } from '@sveltejs/kit';
import { SERVICES, getService } from '#lib/data/services';
import type { PageLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => SERVICES.map((s) => ({ slug: s.slug }));

export const load: PageLoad = ({ params }) => {
	const service = getService(params.slug);
	if (!service) error(404, 'Service not found');
	return { service };
};
