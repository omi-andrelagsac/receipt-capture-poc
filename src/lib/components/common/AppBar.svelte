<script>
	let { children } = $props();
</script>

<header
	class="bg-sm-electric-blue min-h-7 h-[10vh] grid grid-cols-[1fr_4fr_1fr] items-center p-5 z-50 rounded-b-2xl"
>
	{@render children?.()}
</header>
