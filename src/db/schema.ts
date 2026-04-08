import { mysqlTable } from "drizzle-orm/mysql-core";
import * as t from 'drizzle-orm/mysql-core';

export const schoolsTable = mysqlTable('schools_table', {
  id: t.int().primaryKey().autoincrement(),
  name: t.varchar({length: 255}).notNull(),
  address: t.varchar({length: 320}).notNull(),
  latitude: t.float().notNull(),
  longitude: t.float().notNull(),
});
