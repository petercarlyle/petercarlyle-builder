import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import { Layout } from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Peter Carlyle',
  description: 'Peter Carlyle - Software Engineer ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full antialiased' suppressHydrationWarning>
      <body className='flex h-full bg-zinc-50 dark:bg-black'>
        <div className='flex w-full'>
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
