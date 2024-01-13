import { error } from '@sveltejs/kit';
import { createHonoClient } from '$lib/server/hono';

export const load = async ({ fetch }) => {
	const honoClient = createHonoClient(fetch);
	const res = await honoClient.api.users.$get();

	if (!res.ok) {
		error(500);
	}

	const { result } = await res.json();
	return { result };
};
