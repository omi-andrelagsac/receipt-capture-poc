<script lang="ts">
	import { onMount } from 'svelte';
	import CaptureButton from './CaptureButton.svelte';
	import ImagePreview from './ImagePreview.svelte';

	let videoElement: HTMLVideoElement;
	let canvasElement: HTMLCanvasElement;
	let capturedImage: string | null = null;
	let stream: MediaStream | null = null;

	async function startCamera() {
		try {
			stream = await navigator.mediaDevices.getUserMedia({
				audio: false,
				video: {
					facingMode: 'environment'
				}
			});
			if (videoElement) {
				videoElement.srcObject = stream;
			}
		} catch (error) {
			console.error('Error accessing camera:', error);
			throw new Error('Error accessing camera');
		}
	}

	function stopCamera() {
		if (stream) {
			stream.getTracks().forEach((track) => track.stop());
			stream = null;
		}
	}

	function recapture() {
		capturedImage = null;
		startCamera();
	}

	function confirmCapture() {
		capturedImage = null;
		startCamera();
	}

	onMount(() => {
		startCamera();
	});
</script>

<div class="relative w-full h-full">
	<video bind:this={videoElement} autoplay class="w-full h-full object-cover aspect-video">
		<track kind="captions" src="captions.vtt" srclang="en" label="English" />
	</video>
	<canvas bind:this={canvasElement} class="hidden"></canvas>

	{#if !capturedImage}
		<CaptureButton
			bind:videoElement
			bind:canvasElement
			bind:capturedImage
			onImageCaptured={() => stopCamera()}
		/>
	{/if}

	{#if capturedImage}
		<ImagePreview
			bind:capturedImage
			recapture={() => recapture()}
			confirmCapture={() => confirmCapture()}
		/>
	{/if}
</div>
