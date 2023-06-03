import React from 'react';
import Ticker from 'react-ticker';
import { useState } from 'react';
import PageVisibility from 'react-page-visibility';

export default function Hero() {
  const [pageIsVisible, setPageIsVisible] = useState(true)

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }
  return (
    <section>
      <div>
      <PageVisibility onChange={handleVisibilityChange}>
      {pageIsVisible && (
        <Ticker>
          {({x}) => (
              <>
                  <h1 className='px-10 py-2 mb-5 sm:mb-7 text-l sm:text-xl font-bold'>Check out winners of logo competition in Events{x}</h1>
                  <img src="www.my-image-source.com/" alt=""/>
              </>
          )}
        </Ticker>
      )}
    </PageVisibility>
      </div>
      <div className='container px-4 py-5'>
        <div className="hero h-96 md:h-[700px] lg:h-[700px] sm:h-[700px] xl:h-[700px] 2xl:h-[700px] rounded-box overflow-hidden" style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1398313.jpg")` }}>
          <div className="hero-overlay bg-opacity-60 bg-blue"></div>
          <div className="hero-content text-center text-secondary-content">
            <div className="max-w-lg">
              <h1 className="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
                Welcome to the world of AI
              </h1>
              <p className="mb-5 sm:mb-7 sm:text-lg">
              Transforming work and creativity with AI 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}