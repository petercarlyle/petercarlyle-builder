import type { Metadata } from 'next';
import './globals.css';
import { Layout } from '@/components/Layout';
import GoogleAnalytics from '@/components/GoogleAnalytics';
export const metadata: Metadata = {
  title: 'Peter Carlyle Portfolio',
  description: 'a NEXT.js portfolio built with Builder.io',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full antialiased' suppressHydrationWarning>
      <body className='flex h-full bg-zinc-50 dark:bg-black'>
        <GoogleAnalytics />
        <div className='flex w-full'>
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
