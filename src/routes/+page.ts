import { browser } from '$app/environment';

export function load() {
	if (!browser) return;

	const cookies = document.cookie
		.split('; ')
		.find((row) => row.startsWith('x-smo-token='))
		?.split('=')[1];

	return {
		token: cookies ?? null
	};
}
