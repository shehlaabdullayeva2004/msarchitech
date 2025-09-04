import React from 'react';
import "./Style.scss";
import AboutHeroSec from '../aboutHeroSection/AboutHeroSec';
import AboutProjectCard from '../aboutProjectCard/AboutProjectCard';
import AboutCard from "../../assets/images/aboutCardImg.png";
import AboutCard2 from "../../assets/images/aboutCardImg2.png";

export default function AboutProjects() {
 const projects = [
   {
     id: 1,
     name: "Layihə 1",
     img: AboutCard,
     location: "Bakı Şəhəri, 28 May",
     residence: "38",
   },
   {
     id: 2,
     name: "Layihə 2",
     img: AboutCard2,
     location: "Bakı Şəhəri, 28 May",
     residence: "38",
   },
   {
     id: 3,
     name: "Layihə 3",
     img: AboutCard2,
     location: "Bakı Şəhəri, 28 May",
     residence: "38",
   },
   {
     id: 4,
     name: "Layihə 4",
     img: AboutCard,
     location: "Bakı Şəhəri, 28 May",
     residence: "38",
   },
   {
     id: 5,
     name: "Layihə 5",
     img: AboutCard,
     location: "Bakı Şəhəri, 28 May",
     residence: "38",
   },
 ];
  return (
    <>
      <section id="about-projects">
        <div className="projects-content container-fluid ">
          <div className="row ">
            {projects.map((project, index) => {
              const patternIndex = index % 3;
              if (patternIndex === 0 || patternIndex === 1) {
                return (
                  <div key={project.id} className="col-12 col-lg-6 mb-4">
                    <AboutProjectCard project={project} />
                  </div>
                );
              } else if (patternIndex === 2) {
                return (
                  <div key={project.id} className="col-12 mb-4">
                    <AboutProjectCard project={project} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}
