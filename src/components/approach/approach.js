import React, { useState } from 'react';
import './style.css';
import { FiArrowRight, FiCheckCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import image5 from '../../assets/image6.png';
import image4 from '../../assets/image4.png';
import image3 from '../../assets/image3.png';
import image2 from '../../assets/image2.png';

const Approach = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const approaches = [
    {
      id: 1,
      number: '01',
      title: 'Getting Started Page',
      subtitle: 'Design & Planning',
      description: 'Amaravathi Software is a team of experienced professionals that provide original logo design, branding and templates. Our core expertise lies in designing a visually appealing logo and UI & UX for businesses.',
      features: [
        'Unique Design',
        'User Flow Design',
        'Detailed Design Structure',
        'Design with Coding Standards'
      ],
      color: '#667eea',
      image: image5
    },
    {
      id: 2,
      number: '02',
      title: 'Development Phase',
      subtitle: 'Building & Implementation',
      description: 'Our development team transforms designs into fully functional applications using cutting-edge technologies and best practices. We ensure clean, maintainable, and scalable code architecture.',
      features: [
        'Frontend Development',
        'Backend Integration',
        'API Development',
        'Database Design'
      ],
      color: '#764ba2',
      image: image4
    },
    {
      id: 3,
      number: '03',
      title: 'Testing & QA',
      subtitle: 'Quality Assurance',
      description: 'Comprehensive testing ensures your application is bug-free and performs optimally. We conduct unit tests, integration tests, and user acceptance testing to guarantee quality.',
      features: [
        'Manual Testing',
        'Automated Testing',
        'Performance Testing',
        'Security Testing'
      ],
      color: '#f093fb',
      image: image3
    },
    {
      id: 4,
      number: '04',
      title: 'Deployment & Support',
      subtitle: 'Launch & Maintenance',
      description: 'We handle the deployment process smoothly and provide ongoing support to ensure your application runs flawlessly in production with minimal downtime.',
      features: [
        'Server Setup',
        'Deployment Automation',
        'Monitoring & Analytics',
        '24/7 Support'
      ],
      color: '#4facfe',
      image: image2
    }
  ];

  const current = approaches[currentStep];

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % approaches.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + approaches.length) % approaches.length);
  };

  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <h1 className="approach-title">Our Software Approach To Clients</h1>
          <p className="approach-subtitle">
            A Step By Step Guide To Setting Up A Project The Right Way From Start To Finish With Your Choice Of Multiple Designs And Development
          </p>
        </div>

        <div className="approach-layout">
          {/* Left side - Image */}
          <div className="approach-image-section">
            <img src={current.image} alt={current.title} className="approach-image" />
          </div>

          {/* Right side - Content */}
          <div className="approach-content-section">
            <div className="approach-card-wrapper">
              <div 
                className="approach-number-badge" 
                style={{ backgroundColor: current.color }}
              >
                {current.number}
              </div>

              <h2 className="approach-content-title">{current.title}</h2>
              <p className="approach-content-subtitle">{current.subtitle}</p>

              <p className="approach-content-description">{current.description}</p>

              <div className="approach-features-list">
                {current.features.map((feature, idx) => (
                  <div key={idx} className="feature-row">
                    <FiCheckCircle className="feature-check" style={{ color: current.color }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="read-more-button" style={{ backgroundColor: current.color }}>
                <FiArrowRight /> Read More
              </button>
            </div>

            {/* Navigation Controls */}
            <div className="approach-nav-controls">
              <button 
                className="nav-btn prev-btn"
                onClick={handlePrev}
                aria-label="Previous step"
              >
                <FiChevronLeft />
              </button>

              <div className="step-indicators">
                {approaches.map((_, idx) => (
                  <div
                    key={idx}
                    className={`indicator ${idx === currentStep ? 'active' : ''}`}
                    onClick={() => setCurrentStep(idx)}
                    style={idx === currentStep ? { backgroundColor: current.color } : {}}
                  ></div>
                ))}
              </div>

              <button 
                className="nav-btn next-btn"
                onClick={handleNext}
                aria-label="Next step"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
