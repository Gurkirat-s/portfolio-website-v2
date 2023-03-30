import React from 'react';
import './Hero.css';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <h2>Hi, my name is</h2>
        <h1>Gurkirat Singh</h1>
        <p>I'm a Software Developer from Brampton, Ontario.</p>
        <button className="btn" href="#projects">
          See some projects I've worked on
          <span className="arrow">
            <HiArrowNarrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
