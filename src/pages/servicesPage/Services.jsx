import React from "react";
import AboutHeroSec from "../../components/aboutHeroSection/AboutHeroSec";
// import ServicesPageSec from '../../components/servicesPageSec/ServicesPage';
import ServicesContainer from "../../components/servicesContainer/ServicesContainer.jsx";
import bgImage from "../../assets/images/servicesPageHero.webp";
export default function ServicesPage() {
  return (
    <>
      <AboutHeroSec title={"Xidmətlər"} bgImage={bgImage}/>
      <ServicesContainer />
    </>
  );
}
