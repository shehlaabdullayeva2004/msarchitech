import React from "react";
import ServicesCard from "../servicesCard/ServicesCard";
import Card1 from "../../assets/images/servicesPageCard1.png";
import Card2 from "../../assets/images/servicesPageCard2.png";
import Card3 from "../../assets/images/servicesCardImg3.png";
import Card4 from "../../assets/images/servicesCardImg4.png";
import Card5 from "../../assets/images/servicescardImg5.png";
import Card6 from "../../assets/images/servicesCardImg6.png";
import "./Style.scss";

export default function ServicesContainer() {
  const services = [
    {
      id: 1,
      head: "Baş plan konseptlərinin hazırlanması",
      title:
        "Layihənin ümumi inkişaf istiqamətini müəyyənləşdirən funksional və estetik baxışın formalaşdırılması.",
      img: Card1,
    },
    {
      id: 2,
      head: "Şəhərsalma əsaslandırılmasının işlənilməsi",
      title:
        "Layihənin ümumi inkişaf istiqamətini müəyyənləşdirən funksional və estetik baxışın formalaşdırılması.",
      img: Card2,
    },
    {
      id: 3,
      head: "Memarlıq-planlaşdırma və baş plan bölmələri",
      title:
        "Obyektin memarlıq həlllərinin və tikinti sahəsinin yerləşmə planının hazırlanması.",
      img: Card3,
    },
    {
      id: 4,
      head: "Bölmələr üzrə konsultasiya xidmətləri",
      title:
        "Layihənin müxtəlif mərhələlərində peşəkar məsləhətlərin verilməsi və düzgün həllərin seçilməsinə dəstək göstərilməsi.",
      img: Card4,
    },
    {
      id: 5,
      head: "Bölmələr üzrə konsultasiya xidmətləri",
      title:
        "Layihənin müxtəlif mərhələlərində peşəkar məsləhətlərin verilməsi və düzgün həllərin seçilməsinə dəstək göstərilməsi.",
      img: Card5,
    },
    {
      id: 6,
      head: "Bölmələr üzrə konsultasiya xidmətləri",
      title:
        "Layihənin müxtəlif mərhələlərində peşəkar məsləhətlərin verilməsi və düzgün həllərin seçilməsinə dəstək göstərilməsi.",
      img: Card6,
    },
  ];

  return (
    <section id="services-sec" className="container-fluid g-0 ">
      <div className="row g-0 container-fluid ">
        {services.map((service, index) => (
          <ServicesCard {...service} isOffset={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
