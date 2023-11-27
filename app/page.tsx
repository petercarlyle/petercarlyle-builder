import React from 'react';
import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '@/components/builder';
import { metadata } from '@/app/layout';
import { Container } from '@/components/Container';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');

export default async function Page() {
  const homepageContent = await builder
    .get('homepage', {
      prerender: false,
    })
    .toPromise();

  metadata.title = homepageContent?.data.title;
  metadata.description = homepageContent?.data.description;

  return (
    <>
      {/* Render the Builder page */}
      <div className={'h-screen'}>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Container className='mt-9'>
          <RenderBuilderContent model='homepage' content={homepageContent} />
        </Container>
      </div>
    </>
  );
}
