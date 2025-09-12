<script lang="ts">
	import type { PageProps } from './$types'

	let { data }: PageProps = $props()

	const { posts } = data
</script>

<h1>Blog</h1>

{#each posts as post}
	<article>
		<h2>{post.title}</h2>
		<p>{new Date(post.date).toLocaleDateString()}</p>
		<!-- <p>{post.tags}</p> -->
		<a href={`/blog/${post.slug}`}> Lire la suite </a>
	</article>
	<!-- {@html post.content} -->
{/each}
