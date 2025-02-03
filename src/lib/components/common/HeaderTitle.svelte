<script lang="ts">
    let { children, ...restProps } = $props();
</script>

<span {...restProps} class="text-sm-white">
    {@render children?.()}
</span>