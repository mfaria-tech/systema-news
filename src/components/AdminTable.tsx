'use client';
import { Article } from '@/lib/types';
import styles from '@/styles/admintable.module.css';
import { PencilIcon } from '@phosphor-icons/react';

interface Props {
  articles: Article[];
}

export default function AdminTable({ articles }: Props) {
  return (
    <table className={styles.tbArticle}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Slug</th>
          <th>Status</th>
          <th>Destaque</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {articles.map(article => (
          <tr key={article.id}>
            <td>{article.id}</td>
            <td>{article.title}</td>
            <td>{article.slug}</td>
            <td>{article.active ? 'Ativo' : 'Inativo'}</td>
            <td>{article.highlight ? 'Sim' :  'Não'}</td>
            <td>
              <button onClick={() => alert(`Editar ${article.id}`)}>
                <PencilIcon size={24} color="#000000" weight="bold" />
              </button>
              <button onClick={() => alert(`Ativar ${article.id}`)}>
                {article.active ? 'Desativar' : 'Ativar'}
              </button>
              <button onClick={() => alert(`Destacar ${article.id}`)}>
                {article.highlight ? 'Remover Destaque' : 'Destacar'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
