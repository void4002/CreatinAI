import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-white bottom-0">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-sm text-center sm:text-left">
          © 2023 VJCreatinAI. All rights reserved.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-400" href='#/'>
          <i class="bi bi-instagram"></i>
          </a>
          <a className="ml-3 text-gray-400" href='#/'>
          <i class="bi bi-linkedin"></i>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
