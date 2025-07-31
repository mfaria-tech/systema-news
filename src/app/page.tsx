import styles from '@/styles/app.module.css';
import React from 'react';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const res = await fetch(`${baseUrl}/api/articles`, {
    next: { revalidate: 900 },
  });

  const articles = await res.json();

  return (
    <div id={styles.homepage}>
      <h2>Artigos em Destaque</h2>

      <h2>Todos os Artigos</h2>
      <ul>
        {articles.map((a: any) => (
          <li key={a.id}>
            <h3>{a.title}</h3>
            <p>{a.preview}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}