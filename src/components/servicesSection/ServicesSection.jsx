import React, { useEffect } from "react";
import "./Style.scss";
import ServicesImg from "../../assets/images/servicesImg.png";
import { Link } from "react-router-dom";
import AOS from "aos";

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section id="services" className="container-fluid">
      <div className="row services-content">
        <div className="left-side col-12 col-md-12 col-lg-5 "></div>
        <div className="right-side col-12 col-md-12 col-lg-7 d-flex flex-column justify-content-between gap-3 ">
          <h1>Xidmətlər</h1>
          <ul className="d-flex flex-column gap-3">
            <li>
              <span>01</span> <p>Baş plan konseptlərinin hazırlanması</p>
            </li>
            <li>
              <span>02</span>
              <p>Şəhərsalma əsaslandırılmasının işlənilməsi</p>
            </li>
            <li>
              <span>03</span>{" "}
              <p>
                Barəsində məlumatlandırma icraatı tətbiq olunan tikinti
                obyektlərinin memarlıq-planlaşdırma və tikinti ərazisinin baş
                planı bölmələri
              </p>
            </li>
            <li>
              <span>04</span>{" "}
              <p>
                Barəsində icazə tələb olunan obyektlərin tikinti layihələrinin
                bölmələrinin hazırlanması
              </p>
            </li>
            <li>
              <span>05</span> <p>Bölmələr üzrə konsultasiya xidmətləri</p>
            </li>
            <li>
              <span>06</span>{" "}
              <p>Tikintiyə müəllif nəzarətinin həyata keçirilməsi</p>
            </li>
          </ul>
          <button className="primary-button">
            <Link to={"services"}>Daha Ətraflı</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
