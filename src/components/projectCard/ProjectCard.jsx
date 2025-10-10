import React from "react";
import "./Style.scss";
import i18n from "../../i18n/i18next";

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
          <p>{project.projectName?.[i18n.language] || "No title"}</p>
        </div>
      </div>
    </div>
  );
}
