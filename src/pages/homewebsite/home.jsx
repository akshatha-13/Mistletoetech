import React from 'react';
import Header from '../../components/header/header';
import MainSection from '../../components/main/main';
import DigitalTechnologiesSection from '../../components/digitaltechnologies/DigitalTechnologiesSection';
import Services from '../../components/services/service';
import Approach from '../../components/approach/approach';
import Footer from '../../components/footer/footer';


const Home = () => (
  <div>
    <Header />
    <MainSection />
    <Services />
    <Approach />
    <DigitalTechnologiesSection />
    <Footer />
   
  </div>
);

export default Home;
