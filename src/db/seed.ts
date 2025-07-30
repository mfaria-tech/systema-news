import { getDb } from '@/lib/db';
import { randomUUID } from 'crypto';

async function seed() {
  const db = await getDb();

  const userId = randomUUID();
  await db.run(`
    INSERT OR IGNORE INTO users (id, email, password, name)
    VALUES (?, 'admin@site.com', '123456', 'Admin Padrão')  
  `, userId);

  const articles = [
    {
      title: 'A Origem das Estrelas',
      slug: 'origem-das-estrelas',
      preview: 'Exploramos como estrelas nascem no cosmos.',
      content: 'Este artigo fala sobre a formação das estrelas a partir de nebulosas...',
      highlight: 1
    },
    {
      title: 'História da Filosofia Moderna',
      slug: 'filosofia-moderna',
      preview: 'Um panorama das principais correntes filosóficas.',
      content: 'Desde Descartes até Nietzche, a filosofia moderna moldou o pensamento ocidental...',
      highlight: 1
    },
    {
      title: 'Inteligência Artificial no Século XXI',
      slug: 'ia-seculo-21',
      preview: 'A evolução da IA e seus impactos na sociedade.',
      content: 'Do machine learning ao deep learning, a inteligência artificial está transformando tudo...',
      highlight: 1
    },
    {
      title: 'Mitologia Grega: Deuses e Heróis',
      slug: 'mitologia-grega',
      preview: 'Uma jornada pelos mitos mais fascinantes da Grécia Antiga.',
      content: 'Zeus, Atena, Hércules e muitos outros personagens inesquecíveis...',
      highlight: 1
    },
  ];

  for (const article of articles) {
    await db.run(`
      INSERT OR IGNORE INTO articles (
        id, title, slug, preview, content,
        createdAt, updatedAt, active, highlight, authorId
      ) VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'), 1, ?, ?)
    `, randomUUID(), article.title, article.slug, article.preview, article.content, article.highlight, userId);
  }

  console.log('>>> Base de dados preenchida com artigos de teste');
}

seed();
