import { error } from "@sveltejs/kit"
import { allPosts } from "content-collections"
import type { PageLoad } from "./$types"

export const load = (({ params }) => {
  const post = allPosts.find((p) => p.slug === params.post)

  if (!post) {
    error(404, "Post not found")
  }

  return {
    post,
    meta: {
      title: `${post.title} — Axel Rock`,
      description: post.content
        .slice(0, 160)
        .replace(/[#*_\n]/g, "")
        .trim(),
    },
  }
}) satisfies PageLoad
