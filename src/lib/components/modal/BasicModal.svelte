<script lang="ts">
	let { children, ...restProps } = $props();
</script>

<div class="wrapper" {...restProps}>
	{@render children()}
</div>

<style lang="postcss">
	.wrapper {
		@apply bg-sm-light-border w-full h-full absolute top-0 left-0 z-50;
	}
</style>
