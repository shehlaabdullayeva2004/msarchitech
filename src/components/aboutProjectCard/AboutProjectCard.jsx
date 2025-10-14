import React from "react";
import "./Style.scss";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18next";

export default function AboutProjectCard({ project, onShowImages }) {
  const { t } = useTranslation();

  return (
    <div className="about-card container-fluid p-0" onClick={onShowImages}>
      <div className="img">
        <img
          src={`https://manager.msarchitectural.az/${project.projectTitleImageSrc}`}
          alt={project.location?.[i18n.language] || "false"}
        />
      </div>
      <div className="card-content d-flex flex-column flex-sm-row align-items-center">
        <div className="project-text d-flex w-100 justify-content-between flex-column ">
          <h3>{project.projectName?.[i18n.language] || "No title"}</h3>
          {/* <h2>{project.projectName?.[i18n.language]}</h2> */}
          <p className="location">
            <span className="dot">•</span>{" "}
            {project.location?.[i18n.language] || ""}
          </p>
        </div>
        {/* <button className="primary-button" onClick={onShowImages}>
          Bütün Şəkillər
        </button> */}
      </div>
    </div>
  );
}
