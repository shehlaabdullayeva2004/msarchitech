import React from "react";
import { FiMail } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "./Style.scss";

export default function ContactSection() {
  return (
    <section id="contact-sec">
      <div className="contact-content row container-fluid">
        <div className="col-12 col-md-6  p-0">
          <h1>Əlaqə Vasitələri</h1>
          <ul>
            <li>
              <span>
                <FiMail />
              </span>
              <div>
                <h5>E-mail ünvanı</h5>
                <p>info@msarchitectural.az</p>
              </div>
            </li>
            <li>
              <span>
                <LuPhone />
              </span>
              <div>
                <h5>Telefon</h5>
                <p>+994502070806</p>
              </div>
            </li>
            <li>
              <span>
                <HiOutlineLocationMarker />
              </span>
              <div>
                <h5>Ünvan</h5>
                <p>location</p>
              </div>
            </li>
          </ul>
        </div>
       
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.351475014701!2d49.82812257586579!3d40.3789021714457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dbd4095cbf1%3A0x94d6fb17c3711ebe!2zMTIxIFNhbGF0xLFuIMaPc2fJmXJvdmEsIEJha8SxIDEwMDk!5e0!3m2!1saz!2saz!4v1759237928757!5m2!1saz!2saz"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map col-12 col-md-6"
          />
        
      </div>
    </section>
  );
}
