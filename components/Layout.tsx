import { Header } from '@/components/Header';
import Script from 'next/script';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {' '}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', ${process.env.NEXT_PUBLIC_GA_ID});
        `}
      </Script>
      <div className='fixed inset-0 flex justify-center sm:px-8'>
        <div className='flex w-full max-w-7xl lg:px-8'>
          <div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20' />
        </div>
      </div>
      <div className='relative flex w-full flex-col'>
        <Header />
        <main className='flex-auto'>{children}</main>
      </div>
    </>
  );
}
