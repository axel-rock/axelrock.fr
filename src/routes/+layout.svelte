<script lang="ts">
  import { dev } from "$app/environment"
  import { page } from "$app/state"
  import "./layout.css"
  import favicon from "$lib/assets/favicon.svg"

  let { children } = $props()

  const title = $derived(page.data?.meta?.title || "Axel Rock")
  const description = $derived(
    page.data?.meta?.description || "Creative developer turned product leader.",
  )
  const canonical = $derived(`https://axelrock.fr${page.url.pathname}`)
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content="https://axelrock.fr/og.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@axlrck" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="https://axelrock.fr/og.png" />

  <link rel="icon" href={favicon} />
  <link
    rel="alternate"
    type="application/rss+xml"
    title="Axel Rock"
    href="https://axelrock.fr/rss.xml"
  />
</svelte:head>

{#if dev}
  <header>
    <a href="/" class="name">Axel Rock</a>
    <nav>
      <a href="/blog">Blog</a>
    </nav>
  </header>
{/if}

{@render children?.()}

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    max-width: 48rem;
    margin-inline: auto;
  }

  .name {
    font-weight: 450;
    letter-spacing: 0.01em;
    text-decoration: none;
    color: inherit;
  }

  nav a {
    font-size: 1em;
    color: light-dark(#78786f, #a0a0a0);
    text-decoration: none;
  }

  nav a:hover {
    color: inherit;
  }
</style>
