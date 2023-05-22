import React from 'react';

export default function Services() {
  return (
    <section className='py-6 md:py-16'>
      <div className='container px-4'>
        <div className='text-center'>
          <h2 className='text-3xl sm:text-5xl font-bold mb-4'>Activites</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>
          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className='bi bi-book text-4xl'></i>
              <h2 className="card-title">Training Classes</h2>
              <p>
                Classes taken by us about<br className='hidden xl:inline' />AI technologies.<br className='hidden xl:inline' /> 
              </p>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className='bi bi-robot text-4xl'></i>
              <h2 className="card-title">Real time projects</h2>
              <p>
               AI related guided projects<br className='hidden xl:inline' />through Github.<br className='hidden xl:inline' /> 
              </p>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className='bi bi-pencil-square text-4xl'></i>
              <h2 className="card-title">Research papers</h2>
              <p>
                Monthly research papers<br className='hidden xl:inline' />related to AI.<br className='hidden xl:inline' /> 
              </p>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className='bi bi-laptop text-4xl'></i>
              <h2 className="card-title">Workshops</h2>
              <p>
                Real time experience with<br className='hidden xl:inline' />different technologies.<br className='hidden xl:inline' /> 
              </p>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className='bi bi-newspaper text-4xl'></i>
              <h2 className="card-title">Updates on AI</h2>
              <p>
                Day to day changes in field of AI<br className='hidden xl:inline' />are given here.<br className='hidden xl:inline' /> 
              </p>
            </div>
          </div>
          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className='bi bi-calendar-event text-4xl'></i>
              <h2 className="card-title">Events</h2>
              <p>
                Many events related to<br className='hidden xl:inline' />AI are conducted.<br className='hidden xl:inline' />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}