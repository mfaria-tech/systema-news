import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

sqlite3.verbose();

export async function getDb() {
  const db = await open({
    filename: './src/db/dev.db',
    driver: sqlite3.Database,
  });

  return db;
}