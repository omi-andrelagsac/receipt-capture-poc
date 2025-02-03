<script>
	import Container from '$lib/components/common/Container.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowLeft, Clock } from '@steeze-ui/heroicons';
	import Button from '$lib/components/button/Button.svelte';
	import { handleReturnToHomepage } from '$lib/utils';
	import HeaderTitle from '$lib/components/common/HeaderTitle.svelte';
	import Body from '$lib/components/common/Body.svelte';
	import VideoCamera from './components/VideoCamera.svelte';
	import AppBar from '$lib/components/common/AppBar.svelte';
</script>

<Container>
	<AppBar>
		<Button click={() => handleReturnToHomepage()}>
			<Icon src={ArrowLeft} size="20" color="white" />
		</Button>
		<HeaderTitle>SM Receipt Capture</HeaderTitle>
		<Button click={() => handleReturnToHomepage()}>
			<Icon src={Clock} size="20" color="white" />
		</Button>
	</AppBar>
	<Body>
		<VideoCamera />
	</Body>
</Container>
