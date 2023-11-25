import React from 'react';
import { builder } from '@builder.io/sdk';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');

interface PageProps {
  params: {
    page: string[];
  };
}

const ARTICLES_PER_PAGE = 30;

export default async function Projects(props: PageProps) {
  // Get the page number from the path or query parameter
  // In this example we are hardcoding it as 1
  const pageNumber = 1;
  const articles = await builder.getAll('project', {
    // Include references, like the `author` ref
    options: { includeRefs: true },
    // For performance, don't pull the `blocks` (the full blog entry content)
    // when listing out all blog articles
    omit: 'data.blocks',
    limit: ARTICLES_PER_PAGE,
    offset: (pageNumber - 1) * ARTICLES_PER_PAGE,
  });

  return (
    <div className={'h-screen !bg-white'}>
      <Navigation />
      <h1>Projects</h1>

      {articles.map((item, index) => (
        <Link href={`/projects/${item?.data?.handle}`} key={index}>
          <div className={'w-[300px] overflow-hidden'}>
            <Image
              src={item?.data?.image}
              height={300}
              width={200}
              className={'object-cover'}
              alt={item?.data?.title}
            />
            {item?.data?.title}
            {item?.data?.description}
          </div>
        </Link>
      ))}
      <div css={{ padding: 20, width: 300, margin: 'auto', display: 'flex' }}>
        {pageNumber > 1 && (
          <a href={`/blog/page/${pageNumber - 1}`}>‹ Previous page</a>
        )}

        {articles.length > ARTICLES_PER_PAGE && (
          <a href={`/blog/page/${pageNumber + 1}`}>Next page ›</a>
        )}
      </div>
    </div>
  );
}