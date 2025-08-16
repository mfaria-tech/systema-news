import { getDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const db = await getDb();

  const articles = await db.all(`
    SELECT id, title, slug, preview, active, highlights, createdAt
    FROm articles
    ORDER BY createdAt DESC
  `);

  return NextResponse.json(articles);
}