import React from "react";
import AboutProjects from "../../components/aboutProjects/AboutProjects";
import AboutHeroSec from "../../components/aboutHeroSection/AboutHeroSec";
import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
  return (
    <>
      <AboutHeroSec title={"Layihələr"} />
      <AboutProjects />
    </>
  );
}
