import React from 'react';
import AboutHeroSec from '../../components/aboutHeroSection/AboutHeroSec';
import PartnersSection from '../../components/partnersSec/PartnersSection';
import bgImage from '../../assets/images/projects.webp'
import { Helmet } from 'react-helmet-async';
export default function PartnersPage() {
  return (
    <>
       <Helmet>
              <title>Partnyorlar | MS Architectural</title>
            </Helmet>
            
      <AboutHeroSec title={"partners.heroTitle"} bgImage={bgImage}/> 
      <PartnersSection/>
    </>
  );
}
