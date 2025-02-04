<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { ArrowRightCircle, XCircle } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';

	let { capturedImage = $bindable(), recapture, confirmCapture } = $props();
</script>

<img src={capturedImage} alt="" class="absolute inset-0 w-full h-full object-cover shadow-lg" />
<Button click={recapture} class="absolute top-5 left-5">
	<Icon src={XCircle} size="50" color="white"></Icon>
</Button>
<Button click={confirmCapture} class="absolute bottom-10 right-5">
	<Icon src={ArrowRightCircle} size="50" color="white"></Icon>
</Button>
