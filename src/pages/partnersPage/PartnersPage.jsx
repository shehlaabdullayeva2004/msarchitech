import React from 'react';
import AboutHeroSec from '../../components/aboutHeroSection/AboutHeroSec';
import PartnersSection from '../../components/partnersSec/PartnersSection';
import bgImage from '../../assets/images/projects.webp'
export default function PartnersPage() {
  return (
    <>
      <AboutHeroSec title={"partners.heroTitle"} bgImage={bgImage}/> 
      <PartnersSection/>
    </>
  );
}
