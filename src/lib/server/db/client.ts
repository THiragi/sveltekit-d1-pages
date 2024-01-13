import { drizzle } from 'drizzle-orm/d1';

export function createDbClient(db: D1Database | undefined) {
	if (!db) {
		throw new Error('Database not found');
	}
	return drizzle(db);
}
