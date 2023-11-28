# Peter Carlyle CV Site

## Description
This is a CV site built using Next.js and Builder.io. It is a work in progress and will be updated as 
to show the skills I learned new technologies. This site is also a way for me to learn new technologies

## Technologies Used
Next.js
React
TailwindCSS
Vercel
builder.io

## Services 

These need accounts created and API keys added to .env.local file

Sendgrid
builder.io

## Models Needed

### Page Models
Page model (Standard Builder.io page model)
### Section Models
Homepage Model (Standard Builder.io home model)
Project model 
Blog model
### Data Model
Technology
WorkExperience

## Getting Started

Install Dependencies

```bash
npm install
```
create .env.local file with the following variables
```bash
BUILDER_API_KEY=
NEXT_PUBLIC_BUILDER_API_KEY=
SENDGRID_API_KEY=
EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASS=
CONTACT_EMAIL=
```
then to run server locally

```bash

npm run dev
```

## Deployment
This site is deploted on push to main branch using Vercel and GitHub integration