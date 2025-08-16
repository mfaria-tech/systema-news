import { getDb } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const db = await getDb();

  const highlights = await db.all(`
    SELECT id, title, slug, preview, createdAt
    FROM articles
    WHERE active = 1 AND highlight = 1
    ORDER BY createdAt DESC
    LIMIT 4
  `);

  return new Response(JSON.stringify(highlights), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
