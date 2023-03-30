import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <nav>
        <ul className="links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
