<script lang="ts">
  import { marked } from "marked"
  import { page } from "$app/state"
  import type { PageProps } from "./$types"

  let { data }: PageProps = $props()

  const html = $derived(marked(data.post.content))
  const formattedDate = $derived(
    new Date(data.post.date).toLocaleDateString(page.data.lang, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  )
</script>

<main>
  <nav>
    <a href="/blog" class="back">&larr; Blog</a>
  </nav>

  <article>
    <header>
      <h1>{data.post.title}</h1>
      <time datetime={data.post.date}>{formattedDate}</time>
    </header>

    <div class="prose">
      <!-- eslint-disable-next-line svelte/no-at-html-tags -- trusted local markdown -->
      {@html html}
    </div>
  </article>
</main>

<style>
  main {
    max-width: 42rem;
    margin-inline: auto;
    padding: 2rem 1.25rem 6rem;
  }

  nav {
    margin-block: 1rem 4rem;
  }

  .back {
    font-size: 0.875rem;
    letter-spacing: 0.02em;
    color: light-dark(#78786f, #a0a0a0);
    text-decoration: none;
  }

  .back:hover {
    color: inherit;
  }

  header {
    margin-bottom: 3rem;
  }

  h1 {
    font-family: var(--font-serif);
    font-weight: 400;
    font-size: clamp(1.75rem, 5vw, 2.5rem);
    line-height: 1.2;
    margin: 0 0 0.75rem;
  }

  header time {
    font-size: 0.875rem;
    letter-spacing: 0.02em;
    color: light-dark(#78786f, #a0a0a0);
  }

  /* Prose styles for rendered markdown. Tailwind preflight removes all
     element defaults, so everything must be explicit. */
  .prose {
    font-family: var(--font-text);
    font-weight: 450;
    line-height: 1.7;
    letter-spacing: normal;
  }

  .prose :global(p) {
    margin-block: 1.25em;
  }

  .prose :global(h2) {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.3;
    margin-block: 2.5em 0.75em;
  }

  .prose :global(h3) {
    font-family: var(--font-serif);
    font-size: 1.1875rem;
    font-weight: 500;
    line-height: 1.35;
    margin-block: 2em 0.5em;
  }

  .prose :global(a) {
    color: var(--accent);
    text-decoration: none;
  }

  .prose :global(a:hover) {
    text-decoration: underline;
  }

  .prose :global(ul),
  .prose :global(ol) {
    margin-block: 1.25em;
    padding-inline-start: 1.5em;
  }

  .prose :global(ul) {
    list-style: disc;
  }

  .prose :global(ol) {
    list-style: decimal;
  }

  .prose :global(li) {
    margin-block: 0.4em;
  }

  .prose :global(li::marker) {
    color: light-dark(#b5b4ab, #6b6b6b);
  }

  .prose :global(blockquote) {
    margin-block: 1.5em;
    margin-inline: 0;
    padding-inline-start: 1.25em;
    border-inline-start: 2px solid light-dark(#d8d6cd, #4a4a4a);
    font-style: italic;
    color: light-dark(#5c5b54, #b5b5b5);
  }

  .prose :global(code) {
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    font-size: 0.8em;
    background: light-dark(#f0eee8, #2c2c2c);
    padding: 0.15em 0.4em;
    border-radius: 0.25em;
  }

  .prose :global(pre) {
    margin-block: 1.5em;
    padding: 1rem 1.25rem;
    background: light-dark(#f0eee8, #2c2c2c);
    border-radius: 0.5rem;
    overflow-x: auto;
    line-height: 1.5;
  }

  .prose :global(pre code) {
    background: none;
    padding: 0;
    font-size: 0.8125rem;
  }

  .prose :global(table) {
    display: block;
    overflow-x: auto;
    margin-block: 1.75em;
    border-collapse: collapse;
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    line-height: 1.5;
  }

  .prose :global(th) {
    text-align: start;
    font-weight: 500;
    padding: 0.5em 1em 0.5em 0;
    border-bottom: 1px solid light-dark(#d8d6cd, #4a4a4a);
    white-space: nowrap;
  }

  .prose :global(td) {
    vertical-align: top;
    padding: 0.5em 1em 0.5em 0;
    border-bottom: 1px solid light-dark(#e8e6df, #333333);
  }

  .prose :global(hr) {
    margin-block: 3em;
    border: 0;
    border-top: 1px solid light-dark(#d8d6cd, #4a4a4a);
  }

  .prose :global(strong) {
    font-weight: 500;
  }

  .prose :global(img) {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin-block: 1.5em;
  }
</style>
