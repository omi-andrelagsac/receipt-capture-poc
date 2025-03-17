<script lang="ts">
	import { Camera } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { history, openHistoryModal } from '$lib/stores';
	import Button from '$lib/components/button/Button.svelte';
	import NoImageHistory from '$lib/components/icons/NoImageHistory.svelte';
	let historyList: any = $state([]);

	history.subscribe((data) => {
		historyList = data;
	});

	let { handleOpenCamera } = $props();
</script>

{#if historyList.length > 0}
	<div class="bg-sm-light-border rounded-t-2xl h-full flex flex-col">
		<div class="flex-1 overflow-y-auto p-3">
			<div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{#each historyList as list}
					<div>
						<img src={list.image} alt="Captured Receipt" class="w-full rounded-lg shadow" />
					</div>
				{/each}
			</div>
		</div>
		<Button
			click={handleOpenCamera}
			class="fixed bottom-8 right-8 bg-white p-5 rounded-full drop-shadow-md"
		>
			<Icon src={Camera} size="40" color="black"></Icon>
		</Button>
	</div>
{:else}
	<div class="h-screen flex flex-col justify-center items-center">
		<div class="flex flex-col items-center justify-center gap-2 bg-sm-white p-3">
			<NoImageHistory />
			<span class="font-medium">No Uploaded Receipt</span>
			<Button click={handleOpenCamera} class="bg-sm-white p-3 rounded-2xl drop-shadow-md">
				<span>Capture Receipt</span>
			</Button>
		</div>
	</div>
{/if}
