import { getDb } from '@/lib/db';

async function setup() {
  const db = await getDb();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      name TEXT
    );

    CREATE TABLE IF NOT EXISTS articles (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      preview TEXT,
      content TEXT,
      createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
      updatedAt TEXT DEFAULT CURRENT_TIMESTAMP,
      active INTEGER DEFAULT 1,
      highlight INTEGER DEFAULT 0,
      authorId TEXT NOT NULL,
      FOREIGN KEY(authorId) REFERENCES users(id)
    )
  `);

  console.log('>>> Estrutura criada');
}

setup();