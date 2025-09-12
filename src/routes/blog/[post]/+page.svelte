<script lang="ts">
	import type { PageProps } from './$types'
	import { compile } from 'mdsvex'

	let { data }: PageProps = $props()

	const { post } = data
</script>

{JSON.stringify(post?.data)}
{@html post?.code}
