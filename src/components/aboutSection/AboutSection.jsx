import React from "react";
import { Link } from "react-router-dom";
import "./Style.scss";

export default function AboutSec() {
  return (
    <section id="about-sec">
      <div className="about-sec">
        <div className="about-context d-flex flex-wrap gap-1   justify-content-between ">
          <div className="d-flex flex-column justify-content-between  gap-3">
            <h2>Haqqımızda</h2>
            <button className="primary-button d-none d-md-block  ">
              <Link to={"about-us"}>Daha Ətraflı</Link>
            </button>
          </div>
          <div className="right-side">
            <p>
              MS ARCHITECTURAL MMC İN/L-2177/2016 lisenziya nömrəsi ilə 2016-cı
              ildə təsis edilmişdir. Şirkət Azərbaycanın müxtəlif şəhər və
              bölgələrində müasir standartlara cavab verən müxtəlif təyinatlı
              layihələr həyata keçirmiş və memarlıq sahəsində öz mövqeyini
              təsdiqləmişdir.
            </p>
          </div>
          <button className="primary-button d-block d-md-none  ">
            <Link>Daha Ətraflı</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
