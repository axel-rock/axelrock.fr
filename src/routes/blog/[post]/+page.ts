import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import { compile } from 'mdsvex'

export const load = (async ({ params }) => {
	try {
		// const post = await import(`../../../lib/posts/${params.post}.md`)
		const post = await import(`../../../lib/posts/${params.post}.md?raw`)

		return {
			post: await compile(post.default)
			// meta: { ...post.metadata, slug: params.post }
		}
	} catch (err) {
		error(404, err as Error)
	}
}) satisfies PageLoad
