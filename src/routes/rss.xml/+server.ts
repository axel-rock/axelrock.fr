import { allPosts } from "content-collections"
import type { RequestHandler } from "./$types"

export const prerender = true

const SITE = "https://axelrock.fr"

function escapeXml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

export const GET: RequestHandler = () => {
  const published = allPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const items = published
    .map((post) => {
      const url = `${SITE}/blog/${post.slug}`
      const excerpt = post.content.slice(0, 300).replace(/[#*_]/g, "").trim()
      return `<item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(excerpt)}</description>
    </item>`
    })
    .join("\n    ")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Axel Rock</title>
    <link>${SITE}</link>
    <description>Axel Rock, CTO of Cobl. Notes on AI agents, LLM evals, and building products.</description>
    <language>fr</language>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml" },
  })
}
