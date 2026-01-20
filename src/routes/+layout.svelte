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
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://axelrock.com" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@axlrck" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />

  <link rel="icon" href={favicon} />
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
