import React from 'react';
import './style.css';
import { FiFacebook, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Our Pricing', href: '#pricing' },
    { label: 'Privacy Policy', href: '#privacy' }
  ];

  const quickLinks = [
    { label: 'Digital Marketing', href: '#marketing' },
    { label: 'Projects', href: '#projects' },
    { label: 'Single Vendor', href: '#singlevendor' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const socialLinks = [
    { icon: FiFacebook, href: '#facebook' },
    { icon: FiTwitter, href: '#twitter' },
    { icon: FiLinkedin, href: '#linkedin' },
    { icon: FiGithub, href: '#github' }
  ];

  return (
    <footer className="footer">
      <div className="footer-curved-top"></div>

      <div className="footer-content">
        <div className="footer-container">
          {/* Left Section - Company Info */}
          <div className="footer-section footer-company">
            <div className="footer-logo">
              <div className="logo-icon">🚀</div>
              <h3>AMARAVATHI</h3>
            </div>
            <p className="company-description">
              Our Experts Team Look After The Complete Customer Satisfaction By Providing The Best Services And Providing 24/7 Support During The Projects.
            </p>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-column-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-column-title">Contact Info</h4>
            <div className="contact-info">
              <p className="company-name">
                Amaravathi Software Innovations Pvt. Ltd.,
              </p>
              <p className="contact-text">
                D.No: 14-185/3, Sai Bhubaneswanam Layout, Pidimgoyili Sub Registrar Office Road, Opp: Indian Oil Petrol Bunk, Morampudi Junction, Rajamahendravaram, East Godavari, Andhra Pradesh, 533106
              </p>
              <p className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:info@amaravathisoftware.com">info@amaravathisoftware.com</a>
              </p>
              <p className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href="tel:+919177917791">+91 9177 9177 91</a>
              </p>
              <div className="social-links">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a key={idx} href={social.href} className="social-icon">
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          Copyright © {currentYear} Amaravathi Software Innovations Pvt Ltd{' '}
          <a href="/" className="amaravathi-link">Amaravathi Software</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
