import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  NavBar,
  HeroSection,
  StatsSection,
  AboutSection,
  ServicesSection,
  WhyUsSection,
  CallToActionSection,
  ContactModal,
  Footer,
} from '../../components/home';

const Home = () => {
  const [activeSection, setActiveSection] = useState('services');
  const [isContactOpen, setContactOpen] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState('');
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const updateActiveFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
      }
    };

    updateActiveFromHash();
    window.addEventListener('hashchange', updateActiveFromHash);
    return () => window.removeEventListener('hashchange', updateActiveFromHash);
  }, []);

  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    sectionElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${section}`);
    setActiveSection(section);
  };

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess('');
    setSubmitError('');

    const payload = {
      name: contactName,
      email: contactEmail,
      phone: contactPhone,
      message: contactMessage,
      _subject: `Mistletoe Contact Request from ${contactName || 'Visitor'}`,
      _template: 'table',
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@mistletoetech.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess('Thanks! Your message has been sent successfully.');
        setContactName('');
        setContactEmail('');
        setContactPhone('');
        setContactMessage('');
      } else {
        setSubmitError('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setSubmitError('Unable to send message right now. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface text-on-surface selection:bg-primary selection:text-on-primary">
      <Helmet>
        <title>Mistletoe Tech Solutions | AI Software &amp; Digital Media</title>
        <meta
          name="description"
          content="Mistletoe Tech Solutions provides AI-powered software, digital media management, web and mobile development, and scalable cloud solutions."
        />
      </Helmet>
      <NavBar activeSection={activeSection} onSelectSection={scrollToSection} onContactOpen={openContact} />

      <ContactModal
        open={isContactOpen}
        onClose={closeContact}
        onSubmit={handleContactSubmit}
        isSubmitting={isSubmitting}
        submitSuccess={submitSuccess}
        submitError={submitError}
        contactName={contactName}
        setContactName={setContactName}
        contactEmail={contactEmail}
        setContactEmail={setContactEmail}
        contactPhone={contactPhone}
        setContactPhone={setContactPhone}
        contactMessage={contactMessage}
        setContactMessage={setContactMessage}
      />

      <main className="pt-24">
        <HeroSection onGetStarted={openContact} onViewServices={() => scrollToSection('services')} />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <CallToActionSection onContactOpen={openContact} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
