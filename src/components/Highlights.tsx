'use client';
import styles from '@/styles/highlights.module.css';
import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import { Article } from '@/lib/types';

export default function Highlights() {
  const [highlights, setHighlights] = useState<Article[]>([]);

  useEffect(() => {
    fetch('/api/articles/highlights')
      .then(res => res.json())
      .then(data => setHighlights(data))
      .catch(err => console.error('Erro ao carregar destaques:', err));
  });

  if (!highlights.length) return null;

  return (
    <section className={styles.highlights}>
      {highlights.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
}