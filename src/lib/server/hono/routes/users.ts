import { Hono } from 'hono';
import type { HonoBindings } from '..';
import { createDbClient } from '$lib/server/db/client';
import { users } from '$lib/server/db/schema';

const app = new Hono<{ Bindings: HonoBindings }>();

export const route = app.get('/', async (c) => {
	const dbClient = createDbClient(c.env.DB);
	const result = await dbClient.select().from(users).all();
	return c.json({ result });
});
