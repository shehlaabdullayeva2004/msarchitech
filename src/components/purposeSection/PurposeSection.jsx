import React, { useEffect } from "react";
import "./Style.scss";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Link } from "react-router-dom";

export default function PurposeSection() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false, 
    });
  }, []);

  return (
    <section id="purpose-sec">
      <div className="purpose-sec">
        <div className="purpose-sec-border-top " data-aos="ease-in-out"></div>
        <div className="purpose-sec-border-left " data-aos="ease-in-out"></div>
        <div className="purpose-sec-content d-flex flex-column justify-content-center align-items-center w-100 vh-100 ">
          <h1>Məqsədimiz</h1>
          <p>
            Məqsədimiz şəhərsalma, memarlıq və mühəndislik sahəsində innovativ
            və funksional həllər təqdim etməkdir. Biz hər layihədə keyfiyyət,
            estetika və müştəri məmnuniyyətini ön planda tuturuq.
          </p>
          <button className="primary-button">
            <Link> Daha Ətraflı</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
