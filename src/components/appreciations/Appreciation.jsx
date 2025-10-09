import React, { useEffect } from "react";
import "./Style.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import AppreciationImg from "../../assets/images/appreciation.png";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

export default function Appreciation() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section id="appreciation-sec">
      <div className="appreciation-content container-fluid row">
        <div
          className="left-side col col-12 col-md-12 col-lg-6 d-flex flex-column gap-4 "
          data-aos="fade-right"
        >
          <h1>{t("home.appreciationSection.title")}</h1>
          <p className="">{t("home.appreciationSection.subtitle")}</p>
          <div className="counters d-flex gap-5">
            <div className="counter col border-end">
              <h1>
                <CountUp end={9} duration={5} />
              </h1>
              <p>{t("home.appreciationSection.experience")}</p>
            </div>
            <div className="counter col">
              <h1>
                <CountUp end={100} duration={4} /> <span>+</span>
              </h1>
              <p>{t("home.appreciationSection.projects")}</p>
            </div>
          </div>
        </div>
        <div
          className="right-side col-12 col-md-12 col-lg-6"
          data-aos="fade-left"
        >
          <div className="div">
            <img src={AppreciationImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
