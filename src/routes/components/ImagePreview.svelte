<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	let { capturedImage = $bindable(), submit, recapture } = $props();
</script>

<img src={capturedImage} alt="" class="absolute inset-0 w-full h-full object-cover shadow-lg" />
<div class="absolute bottom-10 w-full flex flex-col md:flex-row gap-4 justify-center items-center">
	<Button click={recapture} variant="outlined" class="w-full max-w-72 text-xl">Retake Photo</Button>
	<Button click={submit} variant="basic" class="w-full max-w-72 text-xl">Submit Receipt</Button>
</div>
