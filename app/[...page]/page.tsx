import React from 'react';
import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '@/components/builder';
import { metadata } from '@/app/layout';
import { Container } from '@/components/Container';
// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get('page', {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: '/' + (props?.params?.page?.join('/') || ''),
      },
      // Set prerender to false to return JSON instead of HTML
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      <div className={'h-screen'}>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Container className='mt-9'>
          <RenderBuilderContent model='page' content={content} />
        </Container>
      </div>
    </>
  );
}
