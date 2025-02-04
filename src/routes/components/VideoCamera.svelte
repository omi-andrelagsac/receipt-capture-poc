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
			const constraints = {
				audio: false,
				video: {
					facingMode: 'environment' // Rear camera
				}
			};

			const permission = await navigator.permissions.query({ name: 'camera' as PermissionName });
			if (permission.state === 'denied') {
				throw new Error('Camera permission denied');
			}

			stream = await navigator.mediaDevices.getUserMedia(constraints);
			console.log(stream);
			if (videoElement) {
				videoElement.srcObject = stream;
				await videoElement.play(); // Ensure playback starts
			}
		} catch (error) {
			console.error('Error accessing camera:', error);
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
	<video
		bind:this={videoElement}
		autoplay
		playsinline
		class="w-full h-full object-cover aspect-video"
	>
		<!-- <track kind="captions" src="captions.vtt" srclang="en" label="English" /> -->
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
