import React from 'react';
import './AboutMe.css';
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiMysql, SiPostgresql, SiDjango, SiMongo, SiTensorflow } from 'react-icons/si';

const AboutMe = () => (
  <div className="about-container">
    <section className="about-header">
      <h1>About Me</h1>
      <p className="intro-text">
      I'm a dedicated full-stack web developer and data enthusiast with a deep understanding of modern web technologies and machine learning. My skillset spans from building intuitive front-end interfaces to designing robust back-end systems. I specialize in creating responsive, user-focused applications using technologies like React and Express, and I'm experienced in managing databases like MySQL and PostgreSQL.

My expertise also includes working with frameworks such as Django and Node.js, allowing me to adapt to various tech stacks and project requirements. I have a strong foundation in JavaScript and Python and an ongoing interest in machine learning, where I leverage tools like TensorFlow to integrate intelligent solutions into applications.

With a balanced approach to both design and functionality, I'm passionate about building efficient, high-quality applications that solve real-world problems and provide an impactful user experience.
      </p>
    </section>

    <hr className="divider" />

    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill-card">
          <FaPython className="skill-icon" />
          <span>Python</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill-card">
          <FaHtml5 className="skill-icon" />
          <span>HTML</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div className="skill-card">
          <FaCss3Alt className="skill-icon" />
          <span>CSS</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill-card">
          <FaJsSquare className="skill-icon" />
          <span>JavaScript</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill-card">
          <FaReact className="skill-icon" />
          <span>React</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill-card">
          <SiExpress className="skill-icon" />
          <span>Express</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="skill-card">
          <FaNodeJs className="skill-icon" />
          <span>Node.js</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="skill-card">
          <SiMysql className="skill-icon" />
          <span>MySQL</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill-card">
          <FaDatabase className="skill-icon" />
          <span>SQL</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill-card">
          <SiPostgresql className="skill-icon" />
          <span>PostgreSQL</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill-card">
          <SiDjango className="skill-icon" />
          <span>Django</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="skill-card">
          <SiTensorflow className="skill-icon" />
          <span>Machine Learning</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '65%' }}></div>
          </div>
        </div>
      </div>
    </section>

    <hr className="divider" />

    <section className="experience-section">
      <h2>Experience</h2>
      <p>
        I have worked on diverse projects that include web development, database management, and machine learning, enabling me to develop a versatile skill set and experience with multiple tech stacks.
      </p>
    </section>
  </div>
);

export default AboutMe;
