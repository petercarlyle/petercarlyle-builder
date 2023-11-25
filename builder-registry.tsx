import { Builder } from '@builder.io/react';
import WhoAmI from '@/components/WhoAmI';
import ContactForm from '@/components/ContactForm';

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
