import React from 'react';

export default function CTA() {
  return (
    <section className='py-12 md:py-24'>
      <div className='container px-4'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start'>
          <span className='flex-grow text-4xl md:text-5xl 2xl:text-6xl font-bold text-primary'>Dive into World of AI</span>
          <button className='btn btn-secondary rounded-full sm:btn-lg'>Let's connect</button>
        </div>
      </div>
    </section>
  )
}