import React from "react";
import "./Style.scss";
import SectionImg from "../../assets/images/whoAreWe.webp";
import { useTranslation } from "react-i18next";

export default function WhoAreWeSec() {
  const { t } = useTranslation();
  return (
    <section id="who-are-we">
      <div className="who-are-we-sec container-fluid">
        <div className="section-top">
          <h1>{t("about.whoAreWe")}</h1>
          <p>{t("about.whoAreWeText")}</p>
        </div>
        <div className="section-bottom">
          <img src={SectionImg} alt="" />
        </div>
      </div>
    </section>
  );
}
