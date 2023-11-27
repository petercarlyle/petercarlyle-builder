export default function PageHeader(props: any) {
  return (
    <header className='max-w-2xl'>
      <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
        {props.title}
      </h1>
      <div className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
        <div dangerouslySetInnerHTML={{ __html: props.intro }}></div>
      </div>
    </header>
  );
}
