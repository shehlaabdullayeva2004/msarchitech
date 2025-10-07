import React from "react";
import AboutProjects from "../../components/aboutProjects/AboutProjects";
import AboutHeroSec from "../../components/aboutHeroSection/AboutHeroSec";
import { useTranslation } from "react-i18next";
import BgImage from "../../assets/images/projectsHeroBg.webp";


export default function ProjectsPage() {
  return (
    <>
      <AboutHeroSec title={"Layihələr"} bgImage={BgImage} />
      <AboutProjects />
    </>
  );
}
