import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import "./Style.scss";

export default function ProjectsSec() {
  return (
    <section id='project-sec'>
          <div className="project-sec-container container-fluid">
              <div className="head">
                  <h1>Layihələrimiz</h1>
              </div>
              <div className="projects">
                  <ProjectCard/>
              </div>
      </div>
    </section>
  );
}
