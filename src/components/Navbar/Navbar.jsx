import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

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
            <Link className="link" to="home" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="about" spy={true} smooth={true}>
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="skills" spy={true} smooth={true}>
              Skills
            </Link>
          </li>
          <li>
            <Link className="link" to="projects" spy={true} smooth={true}>
              Projects
            </Link>
          </li>
          <li>
            <Link className="link" to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
