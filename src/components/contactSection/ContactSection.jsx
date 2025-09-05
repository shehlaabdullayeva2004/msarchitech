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
        <div className="map col-12 col-md-6">map</div>
      </div>
    </section>
  );
}
