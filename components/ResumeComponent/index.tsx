import { Button } from '@builder.io/react';
import { useEffect, useState } from 'react';
import Role from '@/components/Role';

export default function ResumeComponent(props: any) {
  //Get Work Experience from Builder.io
  const [workExperience, setWorkExperience] = useState([]);
  useEffect(() => {
    fetch('/api/BuilderIO/WorkExperience')
      .then((response) => response.json())
      .then((data) => setWorkExperience(data.workExperience));
  }, []);

  // @ts-ignore
  return (
    <div className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
      <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <span className='ml-3'>Work</span>
      </h2>
      <ol className='mt-6 space-y-4'>
        {workExperience.map((role, roleIndex) => (
          <>
            {/* @ts-ignore */}
            <Role key={roleIndex} role={role?.data} />
          </>
        ))}
      </ol>
      <div
        className='group m-5 mt-6 w-full rounded-2xl border border-zinc-700 p-4 text-center hover:bg-zinc-700'
        onClick={() => window.open(props?.CV, '_blank')}
      >
        Download CV
      </div>
    </div>
  );
}
