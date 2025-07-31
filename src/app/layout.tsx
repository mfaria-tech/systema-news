import '@/styles/globals.css';
import '@/styles/theme.css';
import React, { ReactNode } from 'react';

export const metadata = {
  title: 'Portal de Artigos',
  description: 'Conhecimento acessível para todos',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="">
        <main className="">{children}</main>
      </body>
    </html>
  )
}
