import { defineCollection, defineConfig } from "@content-collections/core"
import { z } from "zod"

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.md",
  schema: z.object({
    title: z.coerce.string(),
    date: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    published: z.boolean().optional().default(false),
    image: z.string().optional(),
    content: z.string(),
  }),
  transform: (doc) => {
    // Extract date from filename if not in frontmatter (format: YYYY-MM-DD-slug.md)
    const dateFromFilename = doc._meta.fileName.slice(0, 10)
    const date = doc.date || dateFromFilename
    const slug = doc._meta.fileName.replace(/\.md$/, "")

    return {
      ...doc,
      slug,
      date,
    }
  },
})

export default defineConfig({
  collections: [posts],
})
