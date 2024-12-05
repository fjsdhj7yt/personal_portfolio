import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React, showcasing my projects and skills.",
    image: "https://cellapp.co/wp-content/uploads/2020/01/Personal_Portfolio-1.png",
    link: "https://yourportfolio.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Cyber Attachk Monitor",
    description: "A full-stack e-commerce platform built with Node.js, Express, and MongoDB.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJpGqNPXkksR-hoVWO7O0YetPikJsnZI8bg&s",
    link: "https://yourstore.com",
    github: "https://github.com/fjsdhj7yt/cyber_attack_monitor-.git",
  },
  {
    title: "House price prediction(ml)",
    description: "A predictive model using TensorFlow and Python for forecasting trends.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP0bYKcvX1z9A5hls8Rifh7yZUAgz21VWeYw&s",
    link: "https://yourmlmodel.com",
    github: "https://github.com/fjsdhj7yt/house_price_prediction.git",
  },
  // Add more projects as needed
];

const Projects = () => (
  <div className="projects-container">
    <h1>My Projects</h1>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
