import { error } from '@sveltejs/kit';
import { drizzle } from 'drizzle-orm/d1';
import { users } from '$lib/server/db/schema';

export const load = async ({ platform }) => {
	if (!platform?.env.DB) {
		error(500);
	}
	const db = drizzle(platform?.env.DB);
	const result = await db.select().from(users).all();

	return { result };
};
