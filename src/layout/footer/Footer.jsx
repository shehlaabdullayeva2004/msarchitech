import React from "react";
import "./Style.scss";
import Logo from "../../assets/images/footerLogo.webp";
import { Link } from "react-router-dom";
import { SlSocialInstagram } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top row">
          <div className="left-side col-12 col-md-6 d-flex flex-column gap-2 ">
            <div className="logo ">
              <Link to={"/"}>
                <img src={Logo} alt="" />
              </Link>
            </div>
            <p>Peşəkarlıqla İnşa Edilən Layihələr</p>
            <div className="footer-icons pb-5">
              <span>
                <SlSocialInstagram />
              </span>
              <span>
                <CiLinkedin />
              </span>
              <span>
                {" "}
                <TiSocialFacebook />
              </span>
              <span>
                {" "}
                <FaWhatsapp />
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 row ">
            <div className="col-12 col-md-6">
              <ul className="d-flex flex-column gap-3">
                <li className="fw-bold">Sürətli Keçid</li>
                <li>
                  <Link to={"/"}>Ana səhifə</Link>
                </li>
                <li>
                  <Link to={"/about-us"}>Haqqımızda</Link>
                </li>
                <li>
                  <Link to={"/services"}>Xidmətlər</Link>
                </li>
                <li>
                  <Link to={"/projects"}>Layihələr</Link>
                </li>
                <li>
                  <Link to={"/partners"}>Tərəfdaşlar</Link>
                </li>
                <li>
                  <Link to={"/contact-us"}>Əlaqə</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 ">
              <ul className="d-flex flex-column gap-3">
                <li className="fw-bold">Əlaqə Vasitələri</li>
                <li>
                  <span>
                    <IoLocationOutline />
                  </span>
                  <span>Salatın Əsgərova 121</span>
                </li>
                <li>
                  <span>
                    <MdMailOutline />
                  </span>
                  <span>info@msarchitectural.az</span>
                </li>
                <li>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <span>
                    <Link
                      to={"https://api.whatsapp.com/send?phone=994502070806"}
                    >
                      {" "}
                      +994502070806
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex align-items-center justify-content-between flex-wrap">
          <p>msarchitech.az © Bütün hüquqlar qorunur.</p>
          <p>
            <Link to={"https://www.birsayt.az/"}>
              Sayt hazırlandı: Birsayt.az
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
