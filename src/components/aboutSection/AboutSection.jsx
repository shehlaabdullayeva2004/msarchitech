import React from "react";
import { Link } from "react-router-dom";
import "./Style.scss";
import { useTranslation } from "react-i18next";

export default function AboutSec() {
  const { t } = useTranslation();
  
  return (
    <section id="about-sec">
      <div className="about-sec">
        <div className="about-context d-flex flex-wrap gap-1   justify-content-between  ">
          <div className="d-flex flex-column justify-content-between p-0  ">
            <h2>{t("home.aboutSection.title")}</h2>
            <button className="primary-button d-none d-md-block  ">
              <Link to={"about-us"}>{t("common.readMore")}</Link>
            </button>
          </div>
          <div className="right-side">
            <p>{t("home.aboutSection.subtitle")}</p>
          </div>
          <button className="primary-button d-block d-md-none  ">
            <Link>Daha Ətraflı</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
