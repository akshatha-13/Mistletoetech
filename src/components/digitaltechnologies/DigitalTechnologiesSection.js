import React from 'react';
import './style.css';

const digitalTechnologies = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Our experts have hands-on experience on developing versatile web static and dynamic based upon the requirement of client to deliver your well-crafted content.'
  },
  {
    icon: '🎨',
    title: 'UI & UX Design',
    description: 'Our graphic team develops from initial stage to creative idea depending upon the client to get the appropriate response goal for the business.'
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Mobile apps are built using best industry working experts, both android/iOS app development helps to deliver better approach for client business.'
  },
  {
    icon: '💡',
    title: 'Digital Marketing',
    description: 'Make the most of our expertise and experience to develop a successful digital marketing strategy. Reach potential customers to drive sales or buy products or services.'
  },
  {
    icon: '🧪',
    title: 'Software Testing',
    description: 'Software testing is an effective way to identify and correct potential software issues early and ensure performance before launch and the safety if a mistake happens.'
  },
  {
    icon: '📞',
    title: 'IVR Calling',
    description: 'IVR, VoIP, CloudTalk services are the most convenient way to communicate with your client and potential partners, with secure and manage your call anytime, anywhere.'
  }
];

const DigitalTechnologiesSection = () => (
  <section className="digital-technologies-section">
    <div className="digital-technologies-header">
      <h2>Our Digital Technologies</h2>
      <p>We Simplify The Most Complex Technological Problems With Ease And Provide Unique IT Solutions For Better Performance Of Our Clients.</p>
    </div>
    <div className="digital-technologies-grid">
      {digitalTechnologies.map((tech, idx) => (
        <div className="digital-technologies-card" key={idx}>
          <div className="digital-technologies-icon">{tech.icon}</div>
          <h3>{tech.title}</h3>
          <p>{tech.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default DigitalTechnologiesSection;
