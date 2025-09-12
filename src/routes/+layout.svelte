<script lang="ts">
	import favicon from '$lib/assets/favicon.svg'

	let { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<a href="/">
		<h1>Axel Rock</h1>
	</a>
	<nav>
		<a href="/blog">Blog</a>
	</nav>
</header>

<main>
	{@render children?.()}
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}

	:global(a) {
		/* text-decoration: none; */
		color: black;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
	}

	main {
		padding: 1rem;
	}
</style>
