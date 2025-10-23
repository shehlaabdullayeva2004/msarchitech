import React from "react";
import AboutHeroSec from "../../components/aboutHeroSection/AboutHeroSec";
// import ServicesPageSec from '../../components/servicesPageSec/ServicesPage';
import ServicesContainer from "../../components/servicesContainer/ServicesContainer.jsx";
import bgImage from "../../assets/images/servicesPageHero.webp";
import { Helmet } from "react-helmet-async";
export default function ServicesPage() {
  return (
    <>
     <Helmet>
            <title>Xidmətlər</title>
          </Helmet>
          
      <AboutHeroSec title={"services.heroTitle"} bgImage={bgImage}/>
      <ServicesContainer />
    </>
  );
}
