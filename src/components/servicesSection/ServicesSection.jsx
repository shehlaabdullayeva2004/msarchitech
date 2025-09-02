import React, { useEffect } from 'react';
import './Style.scss';
import ServicesImg from "../../assets/images/servicesImg.png";
import { Link } from 'react-router-dom';
import AOS from 'aos';

export default function ServicesSection() {
     useEffect(() => {
        AOS.init({ duration: 800, once: false });
      }, []);
    
  return (
    <section id="services" className="container-fluid">
      <div className="row services-content" >
        <div
                  className="left-side col-12 col-md-12 col-lg-5 "
                  
          //   data-aos="fade-right"
        >
          {/* <img src={ServicesImg} alt="" /> */}
        </div>
        <div
          className="right-side col-12 col-md-12 col-lg-7 d-flex flex-column justify-content-between gap-3 "
          //   data-aos="fade-left"
        >
          <h1>Xidmətlər</h1>
          <ul className="d-flex flex-column gap-5">
            <li>
              <span>01</span> Baş plan konseptlərinin hazırlanması
            </li>
            <li>
              <span>02</span>Şəhərsalma əsaslandırılmasının işlənilməsi
            </li>
            <li>
              <span>03</span> Barəsində məlumatlandırma icraatı tətbiq olunan
              tikinti obyektlərinin memarlıq-planlaşdırma və tikinti ərazisinin
              baş planı bölmələri
            </li>
            <li>
              <span>04</span> Barəsində icazə tələb olunan obyektlərin tikinti
              layihələrinin bölmələrinin hazırlanması
            </li>
            <li>
              <span>05</span> Bölmələr üzrə konsultasiya xidmətləri
            </li>
            <li>
              <span>06</span> Tikintiyə müəllif nəzarətinin həyata keçirilməsi
            </li>
          </ul>
          <button className="primary-button">
            <Link>Daha Ətraflı</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
