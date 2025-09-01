import React from "react";
import { Link } from "react-router-dom";
import "./Style.scss";

export default function AboutSec() {
  return (
    <section id="about-sec">
      <div className="about-sec">
        <div className="about-context row">
          <div className="col-12 col-md-6">
            <h2>Haqqımızda</h2>
          </div>
          <div className="right-side col-12 col-md-6">
            <p>
              MS ARCHITECTURAL MMC İN/L-2177/2016 lisenziya nömrəsi ilə 2016-cı
              ildə təsis edilmişdir. Şirkət Azərbaycanın müxtəlif şəhər və
              bölgələrində müasir standartlara cavab verən müxtəlif təyinatlı
              layihələr həyata keçirmiş və memarlıq sahəsində öz mövqeyini
              təsdiqləmişdir.
            </p>
          </div>
          <button className="primary-button">
            <Link>Daha Ətraflı</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
