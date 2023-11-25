import React from 'react';
import { builder } from '@builder.io/sdk';
import Head from 'next/head';
import { RenderBuilderContent } from '@/components/builder';
import { metadata } from '@/app/layout';
import Navigation from '@/components/Navigation';
// Replace with your Public API Key
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
      <div className={'h-screen bg-white'}>
        <Navigation />

        <RenderBuilderContent model='homepage' content={homepageContent} />
      </div>
    </>
  );
}
