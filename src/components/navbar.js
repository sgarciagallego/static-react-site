import React from 'react';
import Logo from './icons/logo'

const Navbar = () => {
  return (
    <header>
      <div id='logo'><a href='/'><Logo id='logo' /></a></div>
      <nav>
        <ul>
          <li><a href='/'><span>01.</span>About</a></li>
          <li><a href='/'><span>02.</span>Experience</a></li>
          <li><a href='/'><span>03.</span>Work</a></li>
          <li><a href='/'><span>04.</span>Contact</a></li>
          <div className='btn'>
            <li><a href='/'>Resume</a></li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;