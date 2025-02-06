<script lang="ts">
	import { onMount } from 'svelte';
	import CaptureButton from './CaptureButton.svelte';
	import ImagePreview from './ImagePreview.svelte';
	import { history, openHistoryModal } from '$lib/stores';
	import dayjs from 'dayjs';
	import Button from '$lib/components/button/Button.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Folder } from '@steeze-ui/heroicons';

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

	function openHistory() {
		openHistoryModal.set(true);
	}

	function submitReceipt() {
		const now = dayjs().format('YYYY-MM-DD hh:mm A');
		let newHistory: any = [...$history];
		newHistory.push({
			date: now,
			image: capturedImage
		});

		history.set(newHistory);
		recapture();
	}

	function closeHistoryModal() {
		openHistoryModal.subscribe((isOpen) => {
			if (!isOpen && capturedImage) {
				recapture();
			}
		});
	}

	onMount(() => {
		startCamera();
		closeHistoryModal();
	});
</script>

<div class="relative w-full h-full">
	<Button click={openHistory} class="absolute top-5 right-5 z-40">
		<Icon src={Folder} size="50" color="white"></Icon>
	</Button>
	<video
		bind:this={videoElement}
		autoplay
		playsinline
		class="w-full h-full object-cover aspect-video"
	>
		<!-- <track kind="captions" src="captions.vtt" srclang="en" label="English" hidden /> -->
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
		<ImagePreview bind:capturedImage recapture={() => recapture()} submit={() => submitReceipt()} />
	{/if}
</div>
