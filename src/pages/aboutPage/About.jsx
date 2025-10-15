import React from 'react';
import AboutHeroSec from '../../components/aboutHeroSection/AboutHeroSec';
import WhoAreWeSec from '../../components/whoAreWe/WhoAreWe';
import Appreciation from '../../components/appreciations/Appreciation';
import Professional from '../../components/professionalSec/ProfessionalSec';
import bgImage from '../../assets/images/about.webp';
  
export default function AboutPage() {
  return (
    <>
      <AboutHeroSec title={"about.heroTitle"} bgImage={bgImage}/>
      <WhoAreWeSec />
      {/* <Appreciation /> */}
      <Professional />
    </>
  );
}
