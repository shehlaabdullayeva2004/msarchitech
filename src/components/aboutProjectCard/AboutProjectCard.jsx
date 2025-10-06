import React from "react";
import "./Style.scss";

export default function AboutProjectCard({ project, onShowImages }) {
  return (
    <div className="about-card container-fluid p-0">
      <div className="img">
        <img
          src={`https://manager.msarchitectural.az/${project.projectTitleImageSrc}`}
          alt={project.location || ""}
        />
      </div>
      <div className="d-flex flex-column flex-sm-row align-items-center">
        <div className="project-text d-flex w-100 justify-content-between flex-column gap-1 pt-3">
          <p className="location">
            <span className="dot">•</span> {project.location}
          </p>
          <h3>{project.projectName}</h3>
        </div>
        <button className="primary-button" onClick={onShowImages}>
          Bütün Şəkillər
        </button>
      </div>
    </div>
  );
}
