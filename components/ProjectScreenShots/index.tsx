import React from 'react';

export default function ProjectScreenShots(content: any) {
  return (
    <>
      <div className='-m-1 flex flex-wrap md:-m-2'>
        {content.builderState.context.builderContent.data.screenShots.map(
          (item: any) => (
            <>
              <div className='w-1/3  flex-wrap'>
                <div className='w-full p-1 md:p-2'>
                  <img
                    alt='gallery'
                    className='block h-full w-full rounded-lg object-cover object-center'
                    src={item.screenshot}
                  />
                </div>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
}
