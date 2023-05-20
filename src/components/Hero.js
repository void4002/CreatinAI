import React from 'react';

export default function Hero() {
  return (
    <section>
      <div className='container px-4 py-2'>
        <div className="hero h-96 md:h-[500px] rounded-box overflow-hidden" style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1398313.jpg")` }}>
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