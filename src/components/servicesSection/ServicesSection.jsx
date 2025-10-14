import React, { useEffect } from "react";
import "./Style.scss";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import {
  getCurrentLanguage,
  addLanguageToPath,
  removeLanguageFromPath,
} from "../../utils/languageUtils";

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

    const { t, i18n } = useTranslation();
    const { pathname } = useLocation();
    // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
    const currentLanguage = getCurrentLanguage(pathname);
    const createLanguageAwarePath = (path) => {
      return addLanguageToPath(path, currentLanguage);
    };
  const servicesList = [
    {
      id: 1,
      title: t("home.servicesSection.service1"),
    },
    {
      id: 2,
      title: t("home.servicesSection.service2"),
    },
    {
      id: 3,
      title: t("home.servicesSection.service3"),
    },
    {
      id: 4,
      title: t("home.servicesSection.service4"),
    },
    {
      id: 5,
      title: t("home.servicesSection.service5"),
    },
    {
      id: 6,
      title: t("home.servicesSection.service6"),
    },
  ];

  return (
    <section id="services" className="container-fluid ">
      <div className="row services-content">
        <div className="left-side col-12 col-md-12 col-lg-5  "></div>
        <div className="right-side col-12 col-md-12 col-lg-7 d-flex flex-column justify-content-between gap-3 ">
          <h1>{t("home.servicesSection.title")}</h1>
          <ul className="d-flex flex-column">
            {servicesList.map((service, index) => (
              <li key={index}>
                <span>0{index + 1}</span>
                <p>{service.title}</p>
              </li>
            ))}
          </ul>
          <button className="primary-button">
            <Link to={createLanguageAwarePath("/services")}>
              {t("common.readMore")}
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
