import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div>Logo</div>
      <nav>
        <ul className={style.links}>
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
