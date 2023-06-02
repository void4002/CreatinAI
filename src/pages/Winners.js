import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Hero() {
  return (
    <>
    <Header/>
    <section className='py-6 md:py-16'>
      <div className='container px-4'>
        <div className='text-center'>
          <h2 className='text-3xl sm:text-5xl font-bold mb-4'>Congrats Winners!</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 py-4'>
          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <figure><img src="https://cdn.discordapp.com/attachments/1109485145070764132/1114097804793622670/Colorful_Artificial_Intelligence_Logo_1_-_Bhavya_Kesi_Reddy.png" width={'400'} height={'400'} alt="Logo" /></figure>
  <div className="card-body">
    <h2 className="card-title">1st Place</h2>
    <p>K.Bhavya Reddy-21071A6777<br></br>
E.Sai Vardhan Reddy-21071A6784</p>
          </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <figure><img src="https://cdn.discordapp.com/attachments/1109485145070764132/1114097939527241809/logo_-_Varun_Teja_Chintala.jpg"  width={'400'} height={'400'} alt="Logo" /></figure>
  <div className="card-body">
    <h2 className="card-title">2nd Place</h2>
    <p>Ch.Varun Teja-21071A6213<br></br>
Paavan-21071A6201<br></br>
Vamshi krishna-21071A6260</p>
          </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}