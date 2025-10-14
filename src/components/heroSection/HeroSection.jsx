import React from "react";
import "./Style.scss";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getCurrentLanguage,
  addLanguageToPath,
  removeLanguageFromPath,
} from "../../utils/languageUtils";
export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
  const currentLanguage = getCurrentLanguage(pathname);
  const createLanguageAwarePath = (path) => {
    return addLanguageToPath(path, currentLanguage);
  };

  return (
    <section id="hero-sec">
      <div className="hero-sec">
        <div className="hero-sec-content  d-flex flex-column justify-content-center align-items-center vh-100 gap- ">
          <h1 className="hero-head">{t("home.heroSection.title")}</h1>
          <p>{t("home.heroSection.subtitle")}</p>
          <button className="primary-button">
            {" "}
            <Link to={createLanguageAwarePath("/about-us")}>
              {t("common.readMore")}
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
