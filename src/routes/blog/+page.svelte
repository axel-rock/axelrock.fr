<script lang="ts">
  import { page } from "$app/state"
  import type { PageProps } from "./$types"

  let { data }: PageProps = $props()

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString(page.data.lang, {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
</script>

<main>
  <nav>
    <a href="/" class="back">&larr; Axel Rock</a>
  </nav>

  <h1>Blog</h1>

  {#if data.posts.length === 0}
    <p class="empty">Nothing published yet.</p>
  {/if}

  <ul>
    {#each data.posts as post (post.slug)}
      <li>
        <a href={`/blog/${post.slug}`}>
          <h2>{post.title}</h2>
          <time datetime={post.date}>{formatDate(post.date)}</time>
        </a>
      </li>
    {/each}
  </ul>
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

  h1 {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: light-dark(#78786f, #a0a0a0);
    margin-bottom: 2.5rem;
  }

  .empty {
    font-family: var(--font-serif);
    font-style: italic;
    color: light-dark(#78786f, #a0a0a0);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  li a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  h2 {
    font-family: var(--font-serif);
    font-weight: 400;
    font-size: clamp(1.375rem, 3.5vw, 1.75rem);
    line-height: 1.25;
    margin: 0 0 0.375rem;
    transition: color 0.15s ease;
  }

  li a:hover h2 {
    color: var(--accent);
  }

  time {
    font-size: 0.875rem;
    letter-spacing: 0.02em;
    color: light-dark(#78786f, #a0a0a0);
  }
</style>
