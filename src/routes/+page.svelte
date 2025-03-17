<script lang="ts">
	import Container from '$lib/components/common/Container.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowLeft, Gift } from '@steeze-ui/heroicons';
	import Button from '$lib/components/button/Button.svelte';
	import { handleReturnToHomepage } from '$lib/utils';
	import HeaderTitle from '$lib/components/common/HeaderTitle.svelte';
	import Body from '$lib/components/common/Body.svelte';
	import AppBar from '$lib/components/common/AppBar.svelte';
	import HistoryPage from './components/HistoryPage.svelte';
	import CameraModal from './components/CameraModal.svelte';
	import UnauthorizedPage from '$lib/components/UnauthorizedPage.svelte';

	let { data } = $props();

	let openCamera: boolean = $state(false);
</script>

<Container>
	{#if data.token}
		<!-- Main Page -->
		<AppBar>
			<div class="flex items-center justify-start">
				<Button click={() => handleReturnToHomepage()}>
					<Icon src={ArrowLeft} size="20" color="white" />
				</Button>
			</div>

			<div class="flex items-center justify-center">
				<HeaderTitle>SM Receipt Capture</HeaderTitle>
			</div>

			<div class="flex justify-end items-center gap-1">
				<Icon src={Gift} size="20" color="white" />
				<span class="text-sm-white">00</span>
			</div>
		</AppBar>

		<Body>
			<HistoryPage handleOpenCamera={() => (openCamera = true)} />
			<CameraModal bind:openCamera />
		</Body>
	{:else}
		<!-- Fallback Page -->
		<UnauthorizedPage />
	{/if}
</Container>
