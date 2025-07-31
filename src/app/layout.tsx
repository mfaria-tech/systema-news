import '@/styles/globals.css';
import '@/styles/theme.css';
import React, { ReactNode } from 'react';
import Header from '@/components/Header';

export const metadata = {
  title: 'Portal de Artigos',
  description: 'Conhecimento acessível para todos',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="">
        <Header />
        <main className="">{children}</main>
      </body>
    </html>
  )
}
