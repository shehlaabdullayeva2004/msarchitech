import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Style.scss";
import { useTranslation } from "react-i18next";
import {
  getCurrentLanguage,
  addLanguageToPath,
  removeLanguageFromPath,
} from "../../utils/languageUtils";

export default function AboutSec() {
  const { t } = useTranslation();
    const { pathname } = useLocation();
    // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
    const currentLanguage = getCurrentLanguage(pathname);
    const createLanguageAwarePath = (path) => {
      return addLanguageToPath(path, currentLanguage);
    };
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
            <Link>{t("common.readMore")}</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
