<script>
  let { children } = $props();
</script>

<div class="w-full h-full overflow-hidden overscroll-none">
    {@render children?.()}
</div>