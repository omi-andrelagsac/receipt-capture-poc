<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';

	let {
		videoElement = $bindable(),
		canvasElement = $bindable(),
		capturedImage = $bindable(),
		handleImageCaptured
	} = $props();
	let isCapturing = $state(false);

	const captureImage = (): void => {
		if (!videoElement || !canvasElement) return;
		isCapturing = true;

		const context = canvasElement.getContext('2d');
		canvasElement.width = videoElement.videoWidth;
		canvasElement.height = videoElement.videoHeight;
		context?.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

		capturedImage = canvasElement.toDataURL('image/png');

		setTimeout(() => (isCapturing = false), 300);
		handleImageCaptured();
	};
</script>

<Button
	class="p-2 border-2 border-sm-black outline outline-4 outline-sm-white bg-white rounded-full shadow-lg 
         absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 active:scale-90 transition-transform"
	click={captureImage}
	disabled={isCapturing}
>
	{#if isCapturing}
		<div class="absolute inset-0 bg-sm-white opacity-75 animate-ping rounded-full"></div>
	{/if}
</Button>
