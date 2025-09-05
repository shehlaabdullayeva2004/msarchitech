import React from 'react';
import './Style.scss'
import HeroSection from '../../components/heroSection/HeroSection';
import AboutSec from '../../components/aboutSection/AboutSection';
import Appreciation from '../../components/appreciations/Appreciation';
import ServicesSection from '../../components/servicesSection/ServicesSection';
import PurposeSection from '../../components/purposeSection/PurposeSection';
import ProjectsSec from '../../components/projectsSec/ProjectsSec';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSec />
      <Appreciation />
      <ServicesSection />
      <PurposeSection />
      <ProjectsSec/>
    </>
  );
}
