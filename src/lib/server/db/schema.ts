import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: integer('id').primaryKey({ autoIncrement: true }).notNull(),
	name: text('name').notNull(),
	createdAt: text(`created_at`)
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text(`updated_at`)
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`)
});
