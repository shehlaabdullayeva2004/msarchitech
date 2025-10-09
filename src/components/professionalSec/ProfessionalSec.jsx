import React from "react";
import "./Style.scss";
import ProfessionalSecImg from "../../assets/images/professionalImg.webp";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { useTranslation } from "react-i18next";

export default function Professional() {
  const { t } = useTranslation();

  return (
    <section id="professional">
      <div className="professional container-fluid row">
        <div className="left-side col-12 col-lg-5 ">
          <img src={ProfessionalSecImg} alt="" />
        </div>
        <div className="right-side col-12 col-lg-7 ">
          <div className="top">
            <h1>{t("about.professionsSection.title")}</h1>
            <p>{t("about.professionsSection.subtitle")}</p>
          </div>
          <div className="bottom">
            <p>{t("about.professionsSection.paragraphHead")}</p>
            <ul>
              <li>
                <span className="">
                  <GoDotFill />
                </span>
                {t("about.professionsSection.paragraph1")}
              </li>
              <li>
                <span className="">
                  <GoDotFill />
                </span>
                {t("about.professionsSection.paragraph2")}
              </li>
              <li>
                <span className="">
                  <GoDotFill />
                </span>
                {t("about.professionsSection.paragraph3")}
              </li>
            </ul>
            <button className="primary-button">
              <Link to={"/projects"}>
                {" "}
                {t("common.readMore")}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
