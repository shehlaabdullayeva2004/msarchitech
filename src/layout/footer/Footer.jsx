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
import { useTranslation } from "react-i18next";

export default function Footer() {
  const {t} =useTranslation();
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
            <p>{t("footer.slogan")}</p>
            <div className="footer-icons pb-5">
              <span>
                <Link
                  to={
                    "https://www.instagram.com/msarchitectural.mmc?igsh=MWljd2djM3o0MDBuZg=="
                  }
                >
                  <SlSocialInstagram />
                </Link>
              </span>
              <span>
                <Link
                  to={
                    "https://www.linkedin.com/in/kamil-qadirov-511521127?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  }
                >
                  <CiLinkedin />
                </Link>
              </span>

              <span>
                <Link to={"https://api.whatsapp.com/send?phone=994502070806"}>
                  <FaWhatsapp />
                </Link>
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 row ">
            <div className="col-12 col-md-6">
              <ul className="d-flex flex-column gap-3">
                <li className="fw-bold">{t("footer.quickLinks")}</li>
                <li>
                  <Link to={"/"}>{t("footer.home")}</Link>
                </li>
                <li>
                  <Link to={"/about-us"}>{t("footer.about")}</Link>
                </li>
                <li>
                  <Link to={"/services"}>{t("footer.services")}</Link>
                </li>
                <li>
                  <Link to={"/projects"}>{t("footer.projects")}</Link>
                </li>
                <li>
                  <Link to={"/partners"}>{t("footer.partners")}</Link>
                </li>
                <li>
                  <Link to={"/contact-us"}>{t("footer.contact")}</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 ">
              <ul className="d-flex flex-column gap-3">
                <li className="fw-bold">{t("footer.contactInfo")}</li>
                <li>
                  <span>
                    <IoLocationOutline />
                  </span>
                  <span>{t("footer.address")}</span>
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
                      +994502070806
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex align-items-center justify-content-between flex-wrap">
          <p>msarchitectural.az © {t("footer.contactInfo")}</p>
          <p>
            <Link to={"https://www.birsayt.az/"}>
              {t("footer.developedBy")} Birsayt.az
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
