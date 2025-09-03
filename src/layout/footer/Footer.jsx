import React from 'react';
import "./Style.scss";
import Logo from "../../assets/images/footerLogo.png";
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
          <div className="left-side col-12 col-md-6 ">
            <div className="logo ">
              <img src={Logo} alt="" />
            </div>
            <p>Peşəkarlıqla İnşa Edilən Layihələr</p>
            <div className="footer-icons">
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
            <div className="col">
              <ul className="d-flex flex-column gap-3">
                <li className="fw-bold fs-5">Sürətli Keçid</li>
                <li>
                  <Link to={"/"}>Ana səhifə</Link>
                </li>
                <li>
                  <Link to={"/about"}>Haqqımızda</Link>
                </li>
                <li>
                  <Link to={"/services"}>Xidmətlər</Link>
                </li>
                <li>
                  <Link to={"/about"}>Layihələr</Link>
                </li>
                <li>
                  <Link to={"/about"}>Tərəfdaşlar</Link>
                </li>
                <li>
                  <Link to={"/about"}>Əlaqə</Link>
                </li>
              </ul>
            </div>
            <div className="col ">
              <ul className="d-flex flex-column gap-3">
                <li className="fw-bold fs-5">Əlaqə</li>
                <li>
                  <span>
                    <IoLocationOutline />
                  </span>
                  <span>---</span>
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
                  <span>+994502070806</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom"></div>
      </div>
    </footer>
  );
}
