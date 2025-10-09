import React, { useEffect } from "react";
import "./Style.scss";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function PurposeSection(){
  const { t } = useTranslation();
  
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false, 
    });
  }, []);

  return (
    <section id="purpose-sec">
      <div className="purpose-sec">
        <div className="purpose-sec-border-top " data-aos="ease-in-out"></div>
        <div className="purpose-sec-border-left " data-aos="ease-in-out"></div>
        <div className="purpose-sec-content d-flex flex-column justify-content-center align-items-center w-100 vh-100 ">
          <h1>{t("home.purposeSection.title")}</h1>
          <p>{t("home.purposeSection.subtitle")}</p>
          <button className="primary-button">
            <Link to={"/about-us"}> {t("common.readMore")}</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
