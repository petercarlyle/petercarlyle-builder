import { Builder } from '@builder.io/react';
import WhoAmI from '@/components/WhoAmI';
import ContactForm from '@/components/ContactForm';
import PageIntroParagraphWithHeading from '@/components/PageIntroParagraphWithHeading';
import ResumeComponent from '@/components/ResumeComponent';

Builder.registerComponent(WhoAmI, {
  name: 'Who Am I',
  inputs: [
    { name: 'title', type: 'text', description: 'Title of the heading' },
  ],
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/ghost-3.png',
});

Builder.registerComponent(ContactForm, {
  name: 'Contact Form',
  image:
    'https://tabler-icons.io/static/tabler-icons/icons-png/address-book.png',
});

Builder.registerComponent(PageIntroParagraphWithHeading, {
  name: 'Page Intro Paragraph With Heading',
  inputs: [
    { name: 'title', type: 'text', description: 'Title of the heading' },
    { name: 'paragraph', type: 'text', description: 'Paragraph' },
  ],
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/ghost-3.png',
});

Builder.registerComponent(ResumeComponent, {
  name: 'Resume Component',
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/ghost-3.png',
  inputs: [
    {
      name: 'CV',
      friendlyName: 'CV',
      type: 'file',
      required: true,
      helperText: 'Upload your CV in PDF format',
    },
  ],
});
