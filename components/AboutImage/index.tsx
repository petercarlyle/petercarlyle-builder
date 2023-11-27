import Image from 'next/image';
export default function AboutImage({ portrateImage, altText }: any) {
  return (
    <div className='lg:pl-20'>
      <div className='max-w-xs px-2.5 lg:max-w-none'>
        <Image
          src={portrateImage}
          alt={altText}
          width={500}
          height={500}
          sizes='(min-width: 1024px) 32rem, 20rem'
          className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'
        />
      </div>
    </div>
  );
}
