import React from 'react';
import AboutHeroSec from '../../components/aboutHeroSection/AboutHeroSec';
import WhoAreWeSec from '../../components/whoAreWe/WhoAreWe';
import Appreciation from '../../components/appreciations/Appreciation';
import Professional from '../../components/professionalSec/ProfessionalSec';

export default function AboutPage() {
  return (
    <>
      <AboutHeroSec title={"Haqqımızda"} />
      <WhoAreWeSec />
      <Appreciation />
      <Professional/>
    </>
  );
}
