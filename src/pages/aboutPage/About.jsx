import React from 'react';
import AboutHeroSec from '../../components/aboutHeroSection/AboutHeroSec';
import WhoAreWeSec from '../../components/whoAreWe/WhoAreWe';
import Appreciation from '../../components/appreciations/Appreciation';
import Professional from '../../components/professionalSec/ProfessionalSec';
import bgImage from '../../assets/images/about.webp';
import { Helmet } from "react-helmet-async";
import {  useTranslation } from 'react-i18next'
  
export default function AboutPage() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet key={i18n.language}>
        <title>{t("about.heroTitle")} | MS Architectural</title>
      </Helmet>

      <AboutHeroSec title={"about.heroTitle"} bgImage={bgImage} />
      <WhoAreWeSec />
      {/* <Appreciation /> */}
      <Professional />
    </>
  );
}
