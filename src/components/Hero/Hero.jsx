import React from 'react';
import './Hero.css';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="container">
        <h2>Hi, my name is</h2>
        <h1>Gurkirat Singh</h1>
        <p>I'm a Software Developer from Brampton, Ontario.</p>
        <Link className="btn" to="projects" spy={true} smooth={true}>
          See some projects I've worked on
          <span className="arrow">
            <HiArrowNarrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
