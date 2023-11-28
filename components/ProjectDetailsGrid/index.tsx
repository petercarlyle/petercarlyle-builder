import React from 'react';

export default function ProjectDetailsGrid(props: any) {
  const {
    duration,
    technologies,
    liveUrl,
    githubRepo,
    screenShots,
    description,
    budget,
    keywords,
  } = props.builderState?.context?.builderContent?.data;

  //convert array of objects to array of strings
  const keyword = keywords.join(', ');

  return (
    <div className='flex flex-row space-x-16'>
      <div className='flex w-[200px] flex-col'>
        <h4 className='text-xl'>Solutions</h4>
        <div className='flex flex-row flex-wrap'>
          {keywords.map((item: any, index: any) => (
            <span key={index}>
              {item.solution}
              {index < keywords.length - 1 ? `,` : ''}&nbsp;
            </span>
          ))}
        </div>
      </div>
      <div className='bottomCol'>
        <h4 className='text-xl'>Budget Size</h4>
        <p className='value'>{budget}</p>
      </div>{' '}
      <div className='bottomCol'>
        <h4 className='text-xl'>Project Duration</h4>{' '}
        <p className='value'>{duration}</p>
      </div>{' '}
      {liveUrl !== null && liveUrl !== '' && (
        <div className='bottomCol'>
          <h4 className='text-xl'>Website Link</h4>{' '}
          <a href={liveUrl} target='_blank' rel='noreferrer' className='value'>
            {liveUrl.replace('https://', '').replace('http://', '')}
          </a>
        </div>
      )}
      {githubRepo !== null &&
        githubRepo !== '' &&
        githubRepo !== undefined &&
        githubRepo !== liveUrl && (
          <div className='bottomCol'>
            <h4 className='text-xl'>Github Repo</h4>{' '}
            <a
              href={githubRepo}
              target='_blank'
              rel='noreferrer'
              className='value'
            >
              {githubRepo.replace('https://', '').replace('http://', '')}
            </a>
          </div>
        )}
    </div>
  );
}
