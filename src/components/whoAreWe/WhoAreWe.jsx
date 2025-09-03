import React from 'react';
import './Style.scss';
import SectionImg from "../../assets/images/whoAreWe.png"

export default function WhoAreWeSec() {
  return (
    <section id="who-are-we">
      <div className="who-are-we-sec container-fluid">
        <div className="section-top">
          <h1>Biz kimik?</h1>
          <p>
            MS ARCHITECTURAL MMC İN/L-2177/2016 lisenziya nömrəsi ilə 2016-cı
            ildə təsis edilmişdir. Şirkət Azərbaycanın müxtəlif şəhər və
            bölgələrində müasir standartlara cavab verən müxtəlif təyinatlı
            layihələr həyata keçirmiş və memarlıq sahəsində öz mövqeyini
            təsdiqləmişdir. Fəaliyyətə başladığı gündən etibarən məqsədimiz
            şəhərsalma, memarlıq və mühəndislik sahəsində yenilikçi yanaşmalar
            təqdim edərək ölkəmizin inkişafına töhfə vermək olmuşdur. Bugün isə
            MS ARCHITECTURAL keyfiyyətli işləri, peşəkar komandası və beynəlxalq
            standartlara uyğun layihələri ilə etibarlı tərəfdaş kimi tanınır.
          </p>
        </div>
        <div className="section-bottom">
          <img src={SectionImg} alt="" />
        </div>
      </div>
    </section>
  );
}
