import { allPosts } from "content-collections"
import type { RequestHandler } from "./$types"

export const prerender = true

const SITE = "https://axelrock.fr"

export const GET: RequestHandler = () => {
  const published = allPosts.filter((post) => post.published)

  const urls = [
    `<url><loc>${SITE}/</loc></url>`,
    `<url><loc>${SITE}/blog</loc></url>`,
    ...published.map(
      (post) => `<url><loc>${SITE}/blog/${post.slug}</loc><lastmod>${post.date}</lastmod></url>`,
    ),
  ].join("\n  ")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  })
}
