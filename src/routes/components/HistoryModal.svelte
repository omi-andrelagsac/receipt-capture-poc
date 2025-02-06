<script lang="ts">
	import BasicModal from '$lib/components/modal/BasicModal.svelte';
	import { Camera } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { history, openHistoryModal } from '$lib/stores';
	import Button from '$lib/components/button/Button.svelte';
	let historyList: any = $state([]);
	let isOpenHistoryModal: boolean = $state(false);

	openHistoryModal.subscribe((isOpen) => {
		isOpenHistoryModal = isOpen;
	});

	history.subscribe((data) => {
		historyList = data;
	});
</script>

{#if isOpenHistoryModal}
	<BasicModal>
		{#if historyList.length > 0}
			<div
				class="grid p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-scroll bg-sm-light-border"
			>
				{#each historyList as list}
					<div>
						<img src={list.image} alt="" class=" w-full h-80 object-cover drop-shadow-md" />
					</div>
				{/each}
			</div>
		{:else}
			<div class="w-full flex h-full justify-center items-center">Empty History</div>
		{/if}
		<Button
			click={() => {
				openHistoryModal.set(false);
			}}
			class="fixed bottom-8 right-8 bg-white p-5 rounded-full drop-shadow-md"
		>
			<Icon src={Camera} size="40" color="black"></Icon>
		</Button>
	</BasicModal>
{/if}
