import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-base-200 sticky top-0 z-50'>
      <div className='container px-4'>
        <div className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-circle btn-primary lg:hidden mr-1">
                <i className='bi bi-list text-2xl'></i>
              </label>
              <ul tabIndex={0} className="dropdown-content mt-1 w-52 menu menu-compact p-2 bg-base-200 shadow rounded-box">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/services'>Activites</Link></li>
              <li><Link to='/events'>Events</Link></li>
              </ul>
            </div>
            <Link to='/' className="btn btn-ghost normal-case text-2xl">CreatinAI</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 font-medium">
            <li><Link to='/'>Home</Link></li>
              <li><Link to='/services'>Activites</Link></li>
              <li><Link to='/events'>Events</Link></li>
            </ul>
          </div>
          <div className="navbar-end">
          </div>
        </div>
      </div>
    </header>
  )
}