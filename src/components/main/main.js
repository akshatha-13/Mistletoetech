import React from 'react';
import './style.css';
import AdvancedNetworkBackground from './AdvancedNetworkBackground';


const MainSection = () => (
  <section className="main-section">
    <AdvancedNetworkBackground />
    <div className="main-bg">
      <img className="main-illustration" src={require('../../assets/image3.png')} alt="IT Solutions Illustration" />
      <div className="main-content">
        <h1>Simple IT Solutions<br />Company For Complex Connections</h1>
        <p className="main-subtitle">
          We Simplify The Most Complex Technological Problems With Ease And<br />Provide Unique IT Solutions For Better Performance Of Our Clients
        </p>
        <div className="main-actions">
          <button className="main-btn get-started">&#128293; Get Started</button>
          <button className="main-btn video-btn">
            <span className="video-icon">&#9654;</span> Watch Video
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default MainSection;
