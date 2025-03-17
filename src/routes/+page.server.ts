import type { PageServerLoad } from './$types.js';

export function load({ cookies }): ReturnType<PageServerLoad> {
	return {
		token: cookies.get('x-smo-token')
	};
}
