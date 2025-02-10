<script lang="ts">
	import CaptureButton from './CaptureButton.svelte';
	import ImagePreview from './ImagePreview.svelte';
	import { history } from '$lib/stores';
	import dayjs from 'dayjs';
	import Button from '$lib/components/button/Button.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { XMark } from '@steeze-ui/heroicons';
	import BasicModal from '$lib/components/modal/BasicModal.svelte';

	let videoElement: HTMLVideoElement | null = $state(null);
	let canvasElement: HTMLCanvasElement | null = $state(null);
	let capturedImage: string | null = $state(null);
	let stream: MediaStream | null = null;

	let { openCamera = $bindable() } = $props();

	$effect(() => {
		console.log(openCamera);
		if (openCamera) {
			startCamera();
		} else {
			stopCamera();
		}
	});

	async function startCamera() {
		try {
			const constraints = {
				audio: false,
				video: {
					facingMode: 'environment',
					aspectRatio: 16 / 9
				}
			};

			const permission = await navigator.permissions.query({ name: 'camera' as PermissionName });
			if (permission.state === 'denied') {
				throw new Error('Camera permission denied');
			}

			stream = await navigator.mediaDevices.getUserMedia(constraints);
			if (videoElement) {
				videoElement.srcObject = stream;
				await videoElement.play();
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

	function submitReceipt() {
		const now = dayjs().format('YYYY-MM-DD hh:mm A');
		let newHistory: any = [...$history];
		newHistory.push({
			date: now,
			image: capturedImage
		});

		history.set(newHistory);
		capturedImage = null;
		stopCamera();
		openCamera = false;
	}

	function handleCloseCameraModal() {
		stopCamera();
		openCamera = false;
	}
</script>

{#if openCamera}
	<BasicModal>
		<div class="relative w-full h-full">
			<video
				bind:this={videoElement}
				autoplay
				playsinline
				class="w-full h-full object-cover aspect-video"
			>
				<track kind="captions" src={null} srclang="en" label="English" hidden />
			</video>
			<canvas bind:this={canvasElement} class="hidden"></canvas>

			{#if !capturedImage}
				<Button click={handleCloseCameraModal} class="absolute top-5 left-5 z-40">
					<Icon src={XMark} size="50" color="white"></Icon>
				</Button>
				<CaptureButton
					bind:videoElement
					bind:canvasElement
					bind:capturedImage
					handleImageCaptured={() => stopCamera()}
				/>
			{/if}

			{#if capturedImage}
				<ImagePreview
					bind:capturedImage
					recapture={() => recapture()}
					submit={() => submitReceipt()}
				/>
			{/if}
		</div>
	</BasicModal>
{/if}
