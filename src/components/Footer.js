import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-white bottom-0">
      <div className="container-fluid mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-sm text-center sm:text-left">
          © 2023 VJCreatinAI. All rights reserved.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-400" href='https://www.instagram.com/invites/contact/?i=njxrgbajq9hz&utm_content=rhz815f'>
          <i class="bi bi-instagram"></i>
          </a>
          <a className="ml-3 text-gray-400" href='https://www.linkedin.com/groups/12847041'>
          <i class="bi bi-linkedin"></i>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
