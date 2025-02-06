<script lang="ts">
	let { variant = '', children, click, ...restProps } = $props();
</script>

<button {...restProps} onclick={(event) => click(event)} id={variant}>
	{@render children?.()}
</button>

<style lang="postcss">
	#basic {
		@apply bg-sm-white p-3 text-sm-default-text rounded-xl;
	}
	#primary {
		@apply bg-sm-primary text-white;
	}
	#outlined {
		@apply border-2 p-3 border-white rounded-xl text-sm-white;
	}
</style>
