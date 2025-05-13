import { ReactNode } from 'react';
import type { Metadata } from 'next';

import './layout.scss';

export const metadata: Metadata = {
  title: 'Estoc Playground',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
