import { compile } from 'mdsvex'
import type { PageLoad } from './$types'

export const load = (async () => {
	const modules = import.meta.glob('../../lib/posts/*.md', {
		query: 'raw',
		eager: true
	})

	const posts = []

	for (const path in modules) {
		const content = (modules[path] as { default: string }).default as string
		const compiled = await compile(content)
		const slug = path.split('/').pop()?.split('.')[0]
		const fm: Record<string, unknown> = compiled?.data
			? (compiled?.data?.fm as Record<string, unknown>)
			: {}
		const datestring = fm.date ?? path.split('/').pop()?.slice(0, 10)
		const date = new Date(datestring as string)

		posts.push({
			title: fm.title || slug,
			slug: path.split('/').pop()?.split('.')[0],
			date,
			content: compiled?.code,
			...(compiled?.data?.fm as Record<string, unknown>)
		})
	}
	return { posts }
}) satisfies PageLoad
