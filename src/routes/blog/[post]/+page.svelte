<script lang="ts">
  import { marked } from "marked"
  import type { PageProps } from "./$types"

  let { data }: PageProps = $props()

  const html = $derived(marked(data.post.content))
</script>

<article>
  <h1>{data.post.title}</h1>
  <time>{new Date(data.post.date).toLocaleDateString()}</time>
  {@html html}
</article>

<style>
  article {
    max-width: 70ch;
    font-family: var(--font-serif);
    font-weight: 400;
    margin-inline: auto;
  }
</style>
