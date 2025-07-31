import { getDb } from '@/lib/db';
import { NextResponse } from 'next/server';
import { notFound } from 'next/navigation';

interface Params {
  params: { slug: string };
}

export async function GET(req:Request, { params }: Params) {
  const db = await getDb();

  const article = await db.get(
    'SELECT * FROM articles WHERE slug = ? AND active = 1 LIMIT 1',
    params.slug
  );

  if (!article) {
    return new NextResponse('Artigo não encontrado', { status: 404 });
  }

  return NextResponse.json(article);
}
