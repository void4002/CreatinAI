import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-base-200 text-base-content mt-auto bottom-0'>
      <div className='container px-4'>
        <div className="footer py-2">
          Warning! Website under progress
        </div>
        <div className='flex flex-col sm:flex-row items-center border-t border-base-300 py-4 gap-2'>
          <div className="flex-grow text-center sm:text-start">
            <p>© 2023 VJcreatinAI, Inc. All rights reserved.</p>
          </div>
          <div className="grid grid-flow-col gap-4">
            <a className='link link-secondary' href='https://www.instagram.com/creatin_ai/'><i className='bi bi-instagram text-xl'></i></a>
            <a className='link link-secondary' href='https://www.linkedin.com/in/creatin-ai-baaa96277/'><i className='bi bi-linkedin text-xl'></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}