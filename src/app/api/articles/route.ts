import { getDb } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const db = await getDb();

  const articles = await db.all(`
    SELECT id, title, slug, preview, createdAt
    FROM articles
    WHERE active = 1
    ORDER BY createdAt DESC
    LIMIT 20
  `);

  return NextResponse.json(articles);
}
