import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <h3>About Me</h3>
        <p>
          A subscriber to the philosophy of life-long learning, I am an
          enthusiastic Software Developer and Bachelors of Computer Science
          graduate from the Greater Toronto Are. I love spending time coding and
          encountering and overcoming challenges. Isn’t it the most wonderful
          feeling when you finally implement a difficult feature or overcome
          something you were struggling with for a while. I thrive at solving
          problems and constantly learning through exploring new technologies
          and building practical projects.
        </p>

        <div className="interests">
          <h4>Hobbies and Interests</h4>
          <p>
            While I’m not coding, I enjoy hiking, running, playing boardgames
            and occasionally creating something out of wood.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
