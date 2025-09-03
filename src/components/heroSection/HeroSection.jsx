import React from "react";
import "./Style.scss";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="hero-sec">
      <div className="hero-sec">
        <div className="hero-sec-content  d-flex flex-column justify-content-center align-items-start vh-100 gap-4 " >
            <h1>Gözəlliyi Və Funksionallığı Birləşdiririk</h1>
            <p>
              Hər detalı düşünülmüş layihələrlə xəyallarınızı reallığa çeviririk
              və sizə həm estetik, həm də funksional məkanlar təqdim edirik.
            </p>
          <button className="primary-button">
            {" "}
            <Link to={"projects"}>Daha ətraflı</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
