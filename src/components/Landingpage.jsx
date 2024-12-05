import React from 'react';
import './LandingPage.css';
import gifImage from '../assets/giphy.webp';


const LandingPage = () => (
  <div className="landing-page">
    <div className="overlay"></div>
    <div className="content">
      <h1 className="animate-fade-in">Welcome to My Portfolio</h1>
      <p className="animate-slide-in">Full-Stack Developer | Web Designer | Machine Learning Enthusiast</p>
      <a href="/projects" className="cta-button animate-bounce">Explore My Work</a>
      <img className='img_gif' src={gifImage} alt="Portfolio Gif" />

    </div>
  </div>
);

export default LandingPage;
