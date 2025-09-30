import React, { useEffect, useState } from "react";
import "./Style.scss";
import Partner1 from "../../assets/images/partners1.webp";
import axios from "axios";

export default function PartnersSection() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axios
      .get("https://manager.msarchitectural.az/api/partners")
      .then((res) => {
        console.log(res.data);
        setPartners(res.data.data || []);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section id="partners-sec">
      <div className="partners-logos  container-fluid d-flex flex-wrap gap-5">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-card">
            <img
              src={`https://manager.msarchitectural.az/${partner.logoSrc}`}
              alt={partner.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
