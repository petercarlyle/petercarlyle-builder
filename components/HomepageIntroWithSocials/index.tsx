import Link from 'next/link';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@/components/SocialIcons';

interface props {
  title: string;
  paragraph: string;
  facebook: string;
  twitter: string;
  youtube: string;
  linkedin: string;
  github: string;
}
export default function PageIntroParagraphWithHeading(props: props) {
  return (
    <>
      <div className='max-w-2xl'>
        <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
          {props.title}
        </h1>
        <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
          {props.paragraph}
        </p>
        <div className='mt-6 flex gap-6'>
          <SocialLink
            href={`https://twitter.com${props.twitter}`}
            aria-label='Follow on Twitter'
            icon={TwitterIcon}
          />

          <SocialLink
            href={`https://youtube.com/${props.youtube}`}
            aria-label='Check out my youtube channel'
            icon={YouTubeIcon}
          />

          <SocialLink
            href={`https://github.com${props.github}`}
            aria-label='Follow on GitHub'
            icon={GitHubIcon}
          />
          <SocialLink
            href={`https://linkedin.com${props.linkedin}`}
            aria-label='Follow on LinkedIn'
            icon={LinkedInIcon}
          />
        </div>
      </div>
    </>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className='group -m-1 p-1' {...props}>
      <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </Link>
  );
}
