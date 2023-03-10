import React from "react";
import style from "./Hero.module.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TiArrowRight } from "react-icons/ti";

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.container}>
        <h2>Hi, my name is</h2>
        <h1>Gurkirat Singh</h1>
        <p>I'm a Software Developer from Brampton, Ontario.</p>
        <button className={style.btn} href="#projects">
          See some projects I've worked on
          <span className={style.arrow}>
            <HiArrowNarrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
