export default function ProjectHeader(props: any) {
  const { title, description } =
    props.builderState?.context?.builderContent?.data;

  return (
    <header className='max-w-2xl'>
      <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
        {title}
      </h1>
      <div className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </header>
  );
}
