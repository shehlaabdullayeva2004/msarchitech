import React from 'react';
import './Style.scss'
import HeroSection from '../../components/heroSection/HeroSection';
import AboutSec from '../../components/aboutSection/AboutSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSec/>
    </>
  );
}
