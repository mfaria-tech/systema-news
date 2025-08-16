import React from 'react';
import ArticleCard from './ArticleCard';
import { Article } from '@/lib/types';
import styles from '@/styles/highlights.module.css';

export default async function Highlights() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const res = await fetch(`${baseUrl}/api/articles/highlights`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;

  const highlights: Article[] = await res.json();
  if (!highlights.length) return null;

  const [main, ...secondary] = highlights;

  return (
    <section id={styles.highlights}>
      <div id={styles.mainHighlight}>
        <ArticleCard article={main} variant="main" />
      </div>
      <div id={styles.secHighlights}>
        {secondary.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}