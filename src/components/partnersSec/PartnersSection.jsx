import React from "react";
import "./Style.scss";
import Partner1 from "../../assets/images/partners1.png";

export default function PartnersSection() {
  const partners = [
    { id: 1, img: Partner1, name: "Partner 1" },
    { id: 2, img: Partner1, name: "Partner 2" },
    { id: 3, img: Partner1, name: "Partner 3" },
    { id: 4, img: Partner1, name: "Partner 4" },
    { id: 5, img: Partner1, name: "Partner 1" },
    { id: 6, img: Partner1, name: "Partner 2" },
    { id: 7, img: Partner1, name: "Partner 3" },
    { id: 8, img: Partner1, name: "Partner 4" },
  ];

  return (
    <section id="partners-sec">
        <div className="partners-logos  container-fluid d-flex flex-wrap gap-5">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <img src={partner.img} alt={partner.name} />
            </div>
          ))}
      </div>
    </section>
  );
}
