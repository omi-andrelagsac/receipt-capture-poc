<script>
	let { children } = $props();
</script>

<div class="w-full h-full overflow-hidden overscroll-none flex flex-col gap-2">
	{@render children?.()}
</div>
