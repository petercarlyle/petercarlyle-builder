import React from 'react';
import { builder } from '@builder.io/sdk';
import Link from 'next/link';

import { jsx, css } from '@emotion/core';
import Image from 'next/image';
// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');

interface PageProps {
  params: {
    page: string[];
  };
}

const ARTICLES_PER_PAGE = 30;

export default async function Blog(props: PageProps) {
  // Get the page number from the path or query parameter
  // In this example we are hardcoding it as 1
  const pageNumber = 1;
  const articles = await builder.getAll('blog-article', {
    // Include references, like the `author` ref
    options: { includeRefs: true },
    // For performance, don't pull the `blocks` (the full blog entry content)
    // when listing out all blog articles
    omit: 'data.blocks',
    limit: ARTICLES_PER_PAGE,
    offset: (pageNumber - 1) * ARTICLES_PER_PAGE,
  });

  const content = await builder
    // Get the page content from Builder with the specified options
    .get('page', {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: '/blog',
      },
      // Set prerender to false to return JSON instead of HTML
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();

  // @ts-ignore
  return (
    <div>
      <h1>Blog</h1>

      <div>
        {articles.length === 0 ? (
          <div>No articles found</div>
        ) : (
          <>
            {articles.map((item, index) => (
              <Link
                href={`/blog/${item?.data?.handle}`}
                key={index}
                className={'w-[300px] overflow-hidden'}
              >
                <Image
                  src={item?.data?.image}
                  height={300}
                  width={200}
                  className={'object-cover'}
                  alt={item?.data?.title}
                />

                {item?.data?.title}
                {item?.data?.description}
              </Link>
            ))}
          </>
        )}
        <div css={{ padding: 20, width: 300, margin: 'auto', display: 'flex' }}>
          {pageNumber > 1 && (
            <a href={`/blog/page/${pageNumber - 1}`}>‹ Previous page</a>
          )}

          {articles.length > ARTICLES_PER_PAGE && (
            <a href={`/blog/page/${pageNumber + 1}`}>Next page ›</a>
          )}
        </div>
      </div>
    </div>
  );
}
