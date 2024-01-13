// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			context?: {
				waitUntil(promise: Promise<unknown>): void;
				passThroughOnException: () => void;
			};
			env: {
				// YOUR_KV_NAMESPACE: KVNamespace;
				// YOUR_DURABLE_OBJECT_NAMESPACE: DurableObjectNamespace;
				DB: D1Database;
			};
			caches?: CacheStorage & { default: Cache };
		}
	}
}

export {};
