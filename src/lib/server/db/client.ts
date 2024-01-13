import { drizzle as drizzleD1 } from 'drizzle-orm/d1';
import { drizzle as drizzleBetterSqlite3 } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { VITE_LOCAL_D1 } from '$env/static/private';

export function createDBClient(db: D1Database | undefined) {
	return db ? drizzleD1(db) : drizzleBetterSqlite3(new Database(`${VITE_LOCAL_D1}`));
}
