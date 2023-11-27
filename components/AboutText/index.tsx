interface props {
  title: string;
  text: string;
}
export default function AboutText({ title, text }: props) {
  return (
    <>
      <div className='lg:order-first lg:row-span-2'>
        <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
          {title}
        </h1>
        <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
      </div>
    </>
  );
}
