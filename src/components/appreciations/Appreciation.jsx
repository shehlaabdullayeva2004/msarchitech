import React, { useEffect } from "react";
import "./Style.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import AppreciationImg from "../../assets/images/appreciation2.png";
import CountUp from "react-countup";

export default function Appreciation() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section id="appreciation-sec">
      <div className="appreciation-content container-fluid row">
        <div
          className="left-side col col-12 col-md-12 col-lg-6 d-flex flex-column gap-4 "
          data-aos="fade-right"
        >
          <h1>Dəyərlərimiz</h1>
          <p className="">
            Bizim üçün hər bir layihə sadəcə bir tikili deyil, həm də dəyərlərin
            ifadəsidir. İrəliləyən dünyanın tələblərinə cavab verən innovativ
            yanaşmalar, gələcək nəsilləri düşünən davamlı inkişaf prinsipi, hər
            layihədə fərqliliyi qoruyan unikallıq, həm funksionallıq, həm də
            estetikanı birləşdirən dizayn baxışı və ən əsası müştəri
            məmnuniyyətinə sadiqlik MS ARCHITECTURAL-ın iş fəlsəfəsinin əsasını
            təşkil edir. Təcrübəli komandamızla biz layihələrimizi beynəlxalq
            standartlara uyğun, peşəkarlıqla həyata keçirməyi ən mühüm məqsəd
            sayırıq.
          </p>
          <div className="counters d-flex gap-5">
            <div className="counter col border-end">
              <h1>
                <CountUp end={9} duration={5} />
              </h1>
              <p>İllik təcrübə</p>
            </div>
            <div className="counter col">
              <h1>
                <CountUp end={100} duration={4} /> <span>+</span>
              </h1>
              <p>Layihə </p>
            </div>
          </div>
        </div>
        <div
          className="right-side col-12 col-md-12 col-lg-6"
          data-aos="fade-left"
        >
          <div className="div">
            <img src={AppreciationImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
