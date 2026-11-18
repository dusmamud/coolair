import { error } from '@sveltejs/kit';
import { BLOG_POSTS, getPost } from '#lib/data/blog';
import type { PageLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => BLOG_POSTS.map((p) => ({ slug: p.slug }));

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) error(404, 'Article not found');
	return { post };
};
