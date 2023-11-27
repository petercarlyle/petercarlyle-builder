import { Builder } from '@builder.io/react';
import WhoAmI from '@/components/WhoAmI';
import ContactForm from '@/components/ContactForm';
import HomepageIntroWithSocials from '@/components/HomepageIntroWithSocials';
import ResumeComponent from '@/components/ResumeComponent';
import AboutPageContainer from '@/components/AboutPageContainer';

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

Builder.registerComponent(HomepageIntroWithSocials, {
  name: 'Homepage Intro With Socials',
  inputs: [
    { name: 'title', type: 'text', description: 'Title of the heading' },
    { name: 'paragraph', type: 'text', description: 'Paragraph' },
    { name: 'github', type: 'text', description: 'Github Link' },
    { name: 'linkedin', type: 'text', description: 'Linkedin Link' },
    { name: 'twitter', type: 'text', description: 'Twitter (X) Link' },
    { name: 'youtube', type: 'text', description: 'Youtube Channel' },
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

Builder.registerComponent(AboutPageContainer, {
  name: 'About Page Container',
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/ghost-3.png',
  inputs: [
    {
      name: 'portrateImage',
      friendlyName: 'Portrate Image',
      type: 'file',
      required: true,
      helperText: 'Upload your CV in PDF format',
    },
    {
      name: 'altText',
      friendlyName: 'Alt Text',
      type: 'text',
      required: true,
      helperText: 'Alt Text',
    },
    {
      name: 'Title',
      friendlyName: 'Title',
      type: 'text',
      required: true,
      helperText: 'Title',
    },
    {
      name: 'text',
      friendlyName: 'Text',
      type: 'richText',
      required: true,
      helperText: 'Text',
    },
  ],
});
