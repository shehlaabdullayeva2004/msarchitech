import React from "react";
import "./Style.scss";

export default function ProjectCard({ project }) {
  const baseUrl = "https://manager.msarchitectural.az";

  return (
    <div className="projectCard">
      <div
        className="card-container"
        style={{
          backgroundImage: `url(${baseUrl}${project.projectTitleImageSrc})`,
        }}
      >
        <div className="card-name">
          <p>{project.projectName}</p>
        </div>
      </div>
    </div>
  );
}
