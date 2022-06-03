import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/font-import.css';

const Navbar = () => {

  return (
    <header>
      <div id='logo'><a href='/'>Sergio</a></div>
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

const Hero = () => {
  return (
    <div className='hero'>
      <div role='doc-subtitle'>Hi, my name is</div>
      <h1>Sergio Garcia Gallego.</h1>
      <h2>I build to the future of the web.</h2>
      <p>I'm a Software Engineer specialising in building and designing the frontend of software and web applications. I am currently focused on building and enhancing experiences at <a href='/'>Purple Beard</a>.</p>
    </div>
  )
}

ReactDOM.render([<Navbar />, <Hero />], document.getElementById('root'))