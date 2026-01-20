<script lang="ts">
  import type { PageProps } from "./$types"

  let { data }: PageProps = $props()
</script>

<h1>Blog</h1>

{#each data.posts as post (post.slug)}
  <article>
    <h2>{post.title}</h2>
    <p>{new Date(post.date).toLocaleDateString()}</p>
    <a href={`/blog/${post.slug}`}>Lire la suite</a>
  </article>
{/each}
