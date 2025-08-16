import styles from '@/styles/articlecard.module.css';
import React from 'react';
import Link from "next/link";
import { Article } from '@/lib/types';

interface Props {
  article: Article;
  variant?: 'main' | 'secondary';
}

export default function ArticleCard({ article, variant = 'secondary' }: Props) {
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(article.createdAt));

  const className = variant === 'main'
    ? `${styles.cdNews} ${styles.main}`
    : `${styles.cdNews} ${styles.secondary}`;

  return (
    <Link
      href={`/news/${article.slug}`}
      className={className}
    >
      <span className={styles.imgCdNews}></span>
      <h3 className={styles.titleCdNews}>{article.title}</h3>
      <p className={styles.dtCdNews}>
        {formattedDate}
      </p>
      <p className={styles.textCdNews}>
        {article.preview}
      </p>
    </Link>
  )
}
