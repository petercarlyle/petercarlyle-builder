export default function WhoAmI({ props }: any) {
  return (
    <>
      <section className='colorlib-about' data-section='about'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div className='col-md-12'>
              <div
                className='row row-bottom-padded-sm animate-box'
                data-animate-effect='fadeInLeft'
              >
                <div className='col-md-12'>
                  <div className='about-desc'>
                    <h2 className='colorlib-heading'>Who Am I?</h2>
                    <p>
                      <strong>Hi I'm Peter Carlyle</strong> I have worked with
                      some of the world’s largest brands in the local corner
                      shop. Binging web and software solutions that are right
                      for each.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div
                  className='col-md-3 animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='services color-1'>
                    <span className='icon2'>
                      <i className='icon-bulb'></i>
                    </span>
                    <h3>Solution Design</h3>
                  </div>
                </div>
                <div
                  className='col-md-3 animate-box'
                  data-animate-effect='fadeInRight'
                >
                  <div className='services color-2'>
                    <span className='icon2'>
                      <i className='icon-globe-outline'></i>
                    </span>
                    <h3>Web Development</h3>
                  </div>
                </div>
                <div
                  className='col-md-3 animate-box'
                  data-animate-effect='fadeInTop'
                >
                  <div className='services color-3'>
                    <span className='icon2'>
                      <i className='icon-data'></i>
                    </span>
                    <h3>Software</h3>
                  </div>
                </div>
                <div
                  className='col-md-3 animate-box'
                  data-animate-effect='fadeInBottom'
                >
                  <div className='services color-4'>
                    <span className='icon2'>
                      <i className='icon-phone3'></i>
                    </span>
                    <h3>Application</h3>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div
                  className='col-md-12 animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='hire'>
                    <h2>
                      I am happy to know you <br />
                      that 200+ projects done successfully!
                    </h2>
                    <a href='#' className='btn-hire'>
                      Hire me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
