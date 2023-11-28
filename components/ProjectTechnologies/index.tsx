export default function ProjectTechnologies(props: any) {
  return (
    <>
      <div className='flex flex-row'>
        <h4 className='title'>Tech Integrations</h4>{' '}
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-row flex-wrap'></div>
        {props.builderState?.context?.builderContent?.data?.technogies.map(
          (tool: any) => (
            <>
              <div className='grid p-5' key={tool?.tech?.value?.data?.name}>
                <img
                  src={tool?.tech?.value?.data?.logo}
                  alt={tool?.tech?.value?.data?.name}
                  aria-description={tool?.tech?.value?.data?.name}
                />
                <div className='text-center'>
                  <p>{tool?.tech?.value?.data?.name}</p>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
}
