import { Hono, type Context } from 'hono';
import { hc } from 'hono/client';
import { route as users } from './routes/users';

export type HonoBindings = Partial<App.Platform['env'] & { caches: App.Platform['caches'] }>;

export type APIContext = Context<{ Bindings: HonoBindings }, '/'>;

export const app = new Hono<{ Bindings: HonoBindings }>().basePath('/api');

const route = app.route('/users', users);

export function createHonoClient(customFetch: typeof fetch = globalThis.fetch) {
	return hc<typeof route>('/', { fetch: customFetch });
}
