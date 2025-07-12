import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Memória em Festa',
  description:
    'Memória em Festa é projeto pra vc viver seus momentos inesqueciveis na perspectiva de seus amigos e convidados.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={' antialiased'}>{children}</body>
    </html>
  );
}
