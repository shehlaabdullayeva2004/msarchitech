import React from "react";
import ServicesCard from "../servicesCard/ServicesCard";
import { PiDotOutlineFill } from "react-icons/pi";

import "./Style.scss";
import { useTranslation } from "react-i18next";

export default function ServicesContainer() {
  const { t } = useTranslation();
  const servicesList = [
    {
      id: 1,
      title: t("home.servicesSection.service1"),
      subtitle: t("home.servicesSection.service1subtitle"),
    },
    {
      id: 2,
      title: t("home.servicesSection.service2"),
      subtitle: t("home.servicesSection.service2subtitle"),
    },
    {
      id: 3,
      title: t("home.servicesSection.service3"),
      subtitle: t("home.servicesSection.service3subtitle"),
    },
    {
      id: 4,
      title: t("home.servicesSection.service4"),
      subtitle: t("home.servicesSection.service4subtitle"),
    },
    {
      id: 5,
      title: t("home.servicesSection.service5"),
      subtitle: t("home.servicesSection.service5subtitle"),
    },
    {
      id: 6,
      title: t("home.servicesSection.service6"),
      subtitle: t("home.servicesSection.service6subtitle"),
    },
  ];
  return (
    <section id="services-sec" className="container-fluid g-0 ">
      <div className="row g-0 container-fluid p-0 gap-4">
        {servicesList.map((service) => (
          <div key={service.id} className="d-flex flex-column">
            <div className="d-flex gap-1 align-items-center mb-2 justify-content-start ">
              <PiDotOutlineFill className="list-element p-0 m-0 " size={25} />
              <h5 className="mb-0">{service.title}</h5>
            </div>
            <p className="mx-2">{service.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
