import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = ({ toggleDarkMode, theme }) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleDarkModeChange = () => {
    toggleDarkMode();
  };

  const handleMobileNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <nav className={navOpen ? 'main-nav nav-open' : 'main-nav'}>
        <ul className="links">
          <li>
            <DarkModeSwitch
              className="dark-mode-btn"
              checked={theme !== 'light'}
              onChange={handleDarkModeChange}
              sunColor="#ffd000"
              moonColor="#949db8"
            />
          </li>
          <li>
            <Link
              onClick={handleMobileNav}
              className="link"
              to="about"
              spy={true}
              smooth={true}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={handleMobileNav}
              className="link"
              to="skills"
              spy={true}
              smooth={true}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={handleMobileNav}
              className="link"
              to="projects"
              spy={true}
              smooth={true}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={handleMobileNav}
              className="link"
              to="contact"
              spy={true}
              smooth={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleMobileNav}
        className={navOpen ? 'btn-mobile-nav nav-open' : 'btn-mobile-nav'}
      >
        <FiMenu className="icon-mobile-nav" name="menu-outline" />
        <AiOutlineClose class="icon-mobile-nav" name="close-outline" />
      </button>
    </div>
  );
};

export default Navbar;
