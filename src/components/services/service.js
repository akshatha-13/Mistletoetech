import React from 'react';
import './style.css';

// Import icons from react-icons/fi
import { FiShoppingCart, FiGrid, FiMessageCircle, FiBarChart2, FiHome, FiTruck, FiActivity, FiMapPin } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Single Vendor Application',
      icon: FiShoppingCart,
      description: 'Build your own online store'
    },
    {
      id: 2,
      title: 'Multi-Vendor Application',
      icon: FiGrid,
      description: 'Manage multiple sellers'
    },
    {
      id: 3,
      title: 'WhatsApp Chatbots',
      icon: FiMessageCircle,
      description: 'Automate customer service'
    },
    {
      id: 4,
      title: 'Digital Marketing',
      icon: FiBarChart2,
      description: 'Grow your online presence'
    },
    {
      id: 5,
      title: 'Hotel Management Software',
      icon: FiHome,
      description: 'Streamline hotel operations'
    },
    {
      id: 6,
      title: 'Food Delivery Application',
      icon: FiTruck,
      description: 'Launch your food delivery'
    },
    {
      id: 7,
      title: 'Hospital Management',
      icon: FiActivity,
      description: 'Healthcare management system'
    },
    {
      id: 8,
      title: 'Real-Estate',
      icon: FiMapPin,
      description: 'Property management solutions'
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">Comprehensive solutions tailored for your business</p>
        
        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon-wrapper">
                  <IconComponent className="service-icon" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
