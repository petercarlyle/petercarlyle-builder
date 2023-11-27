export default function ProjectTechnologies(props: any) {
  return (
    <ul
      role='list'
      className='mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6'
    >
      {props.technology.map((tech) => (
        <li key={tech.name}>
          <img
            className='mx-auto h-24 w-24 rounded-full'
            src={tech.logo}
            alt=''
          />
          <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900'>
            {tech.name}
          </h3>
        </li>
      ))}
    </ul>
  );
}
