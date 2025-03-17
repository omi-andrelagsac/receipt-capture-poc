<script>
	import { handleReturnToHomepage } from '$lib/utils';
	import Button from './button/Button.svelte';
	import SmLogo from './icons/SMLogo.svelte';
</script>

<div class="grid place-content-center h-screen bg-sm-primary">
	<div
		class="flex flex-col items-center justify-center border-sm-black rounded-2xl drop-shadow-md bg-white py-5 px-5 gap-5"
	>
		<SmLogo />
		<div>
			<h1 class="text-lg font-bold text-center">Access Denied! 🛑</h1>
			<p class="text-md">You must be logged in to view this feature.</p>
		</div>
		<Button
			click={() => handleReturnToHomepage()}
			class="bg-sm-error border-sm-black p-3 rounded-2xl drop-shadow-md text-sm-white font-medium"
			>Go back</Button
		>
	</div>
</div>
