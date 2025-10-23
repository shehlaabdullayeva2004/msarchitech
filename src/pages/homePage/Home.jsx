import React, { useTransition } from 'react';
import './Style.scss'
import HeroSection from '../../components/heroSection/HeroSection';
import AboutSec from '../../components/aboutSection/AboutSection';
import Appreciation from '../../components/appreciations/Appreciation';
import ServicesSection from '../../components/servicesSection/ServicesSection';
import PurposeSection from '../../components/purposeSection/PurposeSection';
import ProjectsSec from '../../components/projectsSec/ProjectsSec';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      

      <HeroSection />
      <AboutSec />
      <Appreciation />
      <ServicesSection />
      <PurposeSection />
      <ProjectsSec />
    </>
  );
}
