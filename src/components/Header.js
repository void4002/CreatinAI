import React from 'react';
import { Link } from 'react-scroll';

const THEMES = ["light", "dark"];

export default function Header() {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const handleThemeChange = (e) => {
    const val = e.target.getAttribute('data-set-theme');
    setTheme(val)
  }

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
              <li><Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
              <li><Link to="services" spy={true} smooth={true} offset={50} duration={500}>Activites</Link></li>
              <li><Link to="events" spy={true} smooth={true} offset={50} duration={500}>Events</Link></li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-2xl" href='/#'>CreatinAI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 font-medium">
              <li><Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
              <li><Link to="services" spy={true} smooth={true} offset={50} duration={500}>Activites</Link></li>
              <li><Link to="events" spy={true} smooth={true} offset={50} duration={500}>Events</Link></li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn-light px-1">
              <i class="bi bi-sun"></i>
              </label>
              <ul tabIndex={0} className="dropdown-content mt-1 w-52 max-h-96 overflow-y-auto menu menu-compact p-2  bg-base-200 shadow rounded-box">
                {
                  THEMES.map((theme, i) => <li key={theme + i}><button data-set-theme={theme} onClick={handleThemeChange} className="font-medium capitalize">{theme}</button></li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}