import { allPosts } from "content-collections"
import type { PageLoad } from "./$types"

export const load = (() => {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => ({
      title: post.title,
      slug: post.slug,
      date: post.date,
      tags: post.tags,
    }))

  return { posts }
}) satisfies PageLoad
