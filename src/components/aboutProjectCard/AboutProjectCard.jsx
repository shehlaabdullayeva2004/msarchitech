import React from 'react';
import "./Style.scss";
import AboutCard from "../../assets/images/aboutCardImg.png";
import { Link } from "react-router-dom";

export default function AboutProjectCard({project}) {
  return (
    <div className="about-card container-fluid p-0">
      <div
        className="img"
        style={{ backgroundImage: `url(${project.img})` }}
      ></div>
      <div className="d-flex flex-column flex-sm-row align-items-center">
        <div className="d-flex w-100 justify-content-between flex-column gap-1 pt-3">
          <p>
            <span className="dot">•</span> {project.location}
          </p>
          <h3 className="">{project.residence}</h3>
        </div>
        <button className="primary-button">
          <Link>Bütün Şəkillər</Link>
        </button>
      </div>
    </div>
  );
}
