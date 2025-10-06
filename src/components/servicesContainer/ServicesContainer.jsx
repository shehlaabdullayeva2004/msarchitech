import React from "react";
import ServicesCard from "../servicesCard/ServicesCard";
import { PiDotOutlineFill } from "react-icons/pi";

import "./Style.scss";

export default function ServicesContainer() {
  const services = [
    {
      id: 1,
      head: "Baş plan konseptlərinin hazırlanması",
      title:
        "Layihənin müxtəlif mərhələlərində peşəkar məsləhətlərin verilməsi və düzgün həllərin seçilməsinə dəstək göstərilməsi.",
    },
    {
      id: 2,
      head: "Şəhərsalma əsaslandırılmasının işlənilməsi",
      title:
     "Tikinti ərazisinin şəhərsalma normalarına uyğunluğunu və ətraf mühitə təsirini nəzərə alaraq əsaslandırılması.",
    },
    {
      id: 3,
      head: "Memarlıq-planlaşdırma və baş plan bölmələri",
      title:
        "Obyektin memarlıq həllərinin və tikinti sahəsinin yerləşmə planının hazırlanması.",
    },
    {
      id: 4,
      head: "Bölmələr üzrə konsultasiya xidmətləri",
      title:
        "",
    },
    {
      id: 5,
      head: "Tikintiyə müəllif nəzarətinin həyata keçirilməsi",
      title:
        "Layihənin icrası zamanı memarlıq həllərinin düzgün tətbiq olunmasına və keyfiyyət standartlarına riayət edilməsinə nəzarət olunması.",
    },
    {
      id: 6,
      head: "Tikinti Layihələrinin Hazırlanması",
      title:
        "Barəsində icazə tələb olunan obyektlərin layihələri şəhərsalma əsaslandırılması, memarlıq-planlaşdırma, baş plan cizgiləri, memarlıq, konstruksiya, mühəndis-kommunikasiya, tikintinin təşkili, ekoloji, texnoloji və smeta bölmələrini əhatə edir.",
    },
    {
      id: 7,
      head: "Müəllif Nəzarəti",
      title:
        "Tikintinin dəmir beton konstruksiya və memarlıq həllərinin layihəyə uyğun icra olunması",
    },
  ];

  return (
    <section id="services-sec" className="container-fluid g-0 ">
      <div className="row g-0 container-fluid p-0 gap-4">
        {services.map((service) => (
          <div key={service.id} className="d-flex flex-column">
            <div className="d-flex gap-1 align-items-center mb-2 justify-content-start ">
              <PiDotOutlineFill className="" size={20} />
              <h5 className="mb-0">{service.head}</h5>
            </div>
            <p className="mx-1">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
