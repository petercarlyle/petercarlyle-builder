import React from 'react';
import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '@/components/builder';
import { metadata } from '@/app/layout';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
export default function ToolSection(props: any) {
  return (
    <div className='grid grid-cols-1 gap-y-16 text-white lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
      <Section title={props?.Title}>
        <>
          {props?.Tools.map((tool: any) => (
            <Tool key={tool.title} title={tool.title} href={tool.href}>
              <div dangerouslySetInnerHTML={{ __html: tool.description }}></div>
            </Tool>
          ))}
        </>
      </Section>
    </div>
  );
}

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role='list' className='space-y-16'>
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Card as='li'>
      <Card.Title as='h3' href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}
