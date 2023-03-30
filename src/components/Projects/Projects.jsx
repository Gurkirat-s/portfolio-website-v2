import React, { useEffect, useState } from 'react';
import './Projects.css';
import projectsData from '../../data/projectsData';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineWeb } from 'react-icons/md';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData());
  }, []);

  return (
    <div className="projects">
      <div className="container">
        <h3>Projects</h3>
        <div className="projects-grid">
          {projects.map((item) => {
            return <ProjectCard project={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div
      className="project-card"
      style={{ backgroundImage: `url(${project.imgURL})` }}
    >
      <div className="info">
        <h4>{project.title}</h4>
        {project.type && <h5>{project.type}</h5>}
        <p>{project.description}</p>
        <ul className="tools">
          {project.tools.map((item, index) => {
            return <li key={index}> {item}</li>;
          })}
        </ul>

        <div className="buttons">
          {project.demoURL && <ButtonDemo url={project.demoURL} />}
          {project.githubURL && <ButtonGithub url={project.githubURL} />}
        </div>
      </div>
    </div>
  );
};

const ButtonGithub = ({ url }) => {
  return (
    <a className="btn btn-github" href={url}>
      <FaGithub />
      <span className="btn-text">Code</span>
    </a>
  );
};

const ButtonDemo = ({ url }) => {
  return (
    <a className="btn btn-demo" href={url}>
      <MdOutlineWeb className="flex-item" />
      <span className="btn-text flex-item">Demo</span>
    </a>
  );
};

export default Projects;
