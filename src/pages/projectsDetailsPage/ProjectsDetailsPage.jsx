import React from "react";
import AboutProjects from "../../components/aboutProjects/AboutProjects";
import AboutHeroSec from "../../components/aboutHeroSection/AboutHeroSec";
import BgImage from "../../assets/images/projectsHeroBg.webp";
import { useParams } from "react-router-dom";

function ProjectsDetailsPage() {
  const { id } = useParams();
  return (
    <div>
      {" "}
      <AboutHeroSec title={"projects.heroTitle"} bgImage={BgImage} />
      <AboutProjects id={id} />
    </div>
  );
}

export default ProjectsDetailsPage;
