import React, { useEffect, useState } from 'react';
import './Skills.css';
import skillsData from '../../data/skillsData';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData());
  }, []);

  return (
    <div id="skills" className="skills">
      <div className="container">
        <h3>Skills</h3>
        <div className="skills-grid">
          {skills.map((item) => {
            return (
              <SkillCard key={item.id} image={item.image} title={item.title} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ image, title }) => {
  return (
    <div className="skill-card">
      <img src={image} alt={`${title} logo`} />
      <h5>{title}</h5>
    </div>
  );
};

export default Skills;
