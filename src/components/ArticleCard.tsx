import styles from '@/styles/articlecard.module.css';
import React from 'react';
import Link from "next/link";
import { Article } from '@/lib/types';

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(article.createdAt));

  return (
    <Link
      href={`/news/${article.slug}`}
      id={styles.cdNews}
    >
      <span id={styles.imgCdNews}></span>
      <h3 id={styles.titleCdNews}>{article.title}</h3>
      <p id={styles.dtCdNews}>
        {formattedDate}
      </p>
      <p id={styles.textCdNews}>
        {article.preview}
      </p>
    </Link>
  )
}
