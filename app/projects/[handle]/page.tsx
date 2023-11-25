import React from 'react';
import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '@/components/builder';
import Head from 'next/head';
import { metadata } from '@/app/layout';
import Navigation from '@/components/Navigation';

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');

interface PageProps {
  params: {
    page: string[];
    handle: string;
  };
}

export default async function Project(props: PageProps) {
  const content = await builder
    .get('project', {
      prerender: false,
      // Include references, like the `author` ref
      options: { includeRefs: true },
      query: {
        // Get the specific article by handle
        'data.handle': props?.params?.handle,
      },
    })
    .toPromise();
  metadata.title = content?.data.title;
  metadata.description = content?.data.headline;

  return (
    <>
      <Head>
        {/* Render meta tags from custom field */}
        <title>{content?.data.title}</title>
        <meta name='description' content={content?.data.blurb} />
        <meta name='og:image' content={content?.data.image} />
      </Head>
      <div className={'bg-white'}>
        <Navigation />
        <div>{content?.data.title}</div>
        <div>{content?.data.headline}</div>
        <div>{content?.data.blurb}</div>

        {/* Render the Builder drag/droped content */}
        <RenderBuilderContent content={content} model='project' />
      </div>
    </>
  );
}
