<script>
    let { children } = $props();
</script>

<header class="bg-sm-electric-blue h-[10vh] flex items-center justify-between p-5 z-50">
    {@render children?.()}
</header>