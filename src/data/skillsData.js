import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Java from "../assets/java.png";
import Github from "../assets/github.png";
import React from "../assets/react.png";
import Node from "../assets/node.png";
import Firebase from "../assets/firebase.png";
import Sass from "../assets/sass.png";

const skillsData = () => {
  return skills;
};

const skills = [
  {
    id: 1,
    title: "HTML",
    image: HTML,
  },
  {
    id: 2,
    title: "CSS",
    image: CSS,
  },
  {
    id: 3,
    title: "JavaScript",
    image: Javascript,
  },

  {
    id: 4,
    title: "React.JS",
    image: React,
  },
  {
    id: 5,
    title: "Node.JS",
    image: Node,
  },
  {
    id: 6,
    title: "Java",
    image: Java,
  },
  {
    id: 7,
    title: "Github",
    image: Github,
  },
  {
    id: 8,
    title: "Firebase",
    image: Firebase,
  },
  {
    id: 9,
    title: "Sass/Scss",
    image: Sass,
  },
];

export default skillsData;
