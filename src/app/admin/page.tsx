import AdminTable from '@/components/AdminTable';
import { Article } from '@/lib/types';
import styles from '@/styles/admin.module.css';

export default async function AdminPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const res = await fetch(`${baseUrl}/api/admin`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Falha ao carregar artigos');
  }

  const articles: Article[] = await res.json();

  return (
    <main className=''>
      <h1 className=''>Administração de Artigos</h1>
      <AdminTable articles={articles} />
    </main>
  );
}
