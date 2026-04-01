import React from 'react';
import './style.css';

const Header = () => (
  <header className="main-header">
    <div className="header-logo">
      <img src={require('../../assets/image1.png')} alt="mistletoe Logo" />
      <div className="header-title">
        <span className="company-name">MISTLETOE</span>
        <span className="company-desc">Software Innovations Pvt. Ltd.,</span>
      </div>
    </div>
    <nav className="header-nav">
      <ul>
        <li className="active">Home</li>
        <li>About Us</li>
        <li>Products</li>
        <li>Projects</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Career</li>
        <li>Contact Us</li>
        <li>Institute</li>
        <li>DVC</li>
      </ul>
    </nav>
  </header>
);

export default Header;
