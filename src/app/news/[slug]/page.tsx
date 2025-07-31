import React from 'react';
import { notFound } from 'next/navigation';

interface Params {
  params: {
    slug: string;
  };
}

export const dynamic = 'force-dynamic';

export default async function ArticlePage({ params }: Params) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URl;
  const res = await fetch(`${baseUrl}/api/articles/${params.slug}`);
  if (res.status === 404) return notFound();

  const article = await res.json();

  return (
    <article>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </article>
  );
}
