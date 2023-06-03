import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'

export default function Testimonial()  {
  return (
    <>
    <Header/>
    <section className='bg-neutral'>
        <div className='container py-4'>
          <div className='text-center text-white'>
            <h2 className='text-3xl sm:text-5xl font-bold mb-4'>Events</h2>
          </div>
          </div>
          <div className="card lg:card-side bg-neutral py-40 px-8">
  <figure><img className='object-scale-down h-96 w-192' src="https://media.discordapp.net/attachments/1109720717735510176/1109787487066390658/Artboard_1.png?width=526&height=701" alt="l"/></figure>
  <div className="card-body">
    <h2 className="card-title text-white">Logo Designing</h2>
    <p className="text-white">Thanks for participating check winners below</p>
    <div className='card-actions'><Link to='/winner'><button className="btn btn-primary">Check here</button></Link></div>
  </div>
</div>
      </section>
      <Footer/>
      </>
  )
}