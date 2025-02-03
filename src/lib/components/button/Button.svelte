<script lang="ts">
    let { children, click, ...restProps } = $props();
</script>

<button {...restProps} onclick={(event) => click(event)}>
    {@render children?.()}
</button>