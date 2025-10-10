import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Style.scss";
// import Logo from "../../assets/images/logo.webp";
import Logo from "../../assets/images/logo.webp";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import {
  getCurrentLanguage,
  addLanguageToPath,
  removeLanguageFromPath,
} from "../../utils/languageUtils";
import { useTranslation } from "react-i18next";
import axios from "axios";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const { t, i18n } = useTranslation();
  console.log(i18n);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Az");
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [categories, setCategories] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const languageDropdownRef = useRef(null);
  const { pathname } = useLocation();
  // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
  const currentLanguage = getCurrentLanguage(pathname);
  const createLanguageAwarePath = (path) => {
    return addLanguageToPath(path, currentLanguage);
  };
  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };
  const handleLanguageSelect = (lang) => {
    setIsLanguageOpen(false);

    // Get current path without language prefix
    const pathWithoutLang = removeLanguageFromPath(pathname);

    // Create new path with selected language
    const newPath = addLanguageToPath(pathWithoutLang, lang);

    // Change i18n language
    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(lang);
    }

    // Navigate to the new path
    navigate(newPath);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Update selected language display based on current URL language
    setSelectedLanguage(
      currentLanguage === "az"
        ? "Az"
        : currentLanguage === "en"
        ? "En"
        : currentLanguage === "ru"
        ? "Ru"
        : "Az"
    );
  }, [currentLanguage]);

  const navbarRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    gsap.to(navbarRef.current, {
      backgroundColor: "#d9d3cf0d",
      backdropFilter: "blur(20px)",
      color: "#fff",
      duration: 1,
      scrollTrigger: {
        trigger: navbarRef.current,
        start: "top+=50 top",
        scrub: true,
      },
    });
  }, []);
  // projects dropdown filtr
  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get(
          `https://manager.msarchitectural.az/api/categories`
        );
        setCategories(res?.data?.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    getProjects();
  }, []);
  // Navigate Link
  return (
    <nav>
      <div className="navbar" ref={navbarRef}>
        <div className="nav-logo">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="d-none d-md-block ">
          <ul className="d-flex justify-content-between align-items-center ">
            <li>
              <Link to={createLanguageAwarePath("/")}>{t("header.home")}</Link>
            </li>
            <li>
              <Link to={createLanguageAwarePath("/about-us")}>
                {t("header.aboutUs")}
              </Link>
            </li>
            <li>
              <Link to={createLanguageAwarePath("/services")}>
                {" "}
                {t("header.services")}
              </Link>
            </li>
            
            <li className="position-relative">
              <Link
                onClick={() => setShowProjectsDropdown(!showProjectsDropdown)}
                style={{ cursor: "pointer" }}
              >
                {t("header.projects")}
              </Link>

              {showProjectsDropdown && (
                <ul className="projects-dropdown dropdown-menu show position-absolute d-flex flex-column">
                  <li>
                    <Link
                      to={createLanguageAwarePath("/projects/")}
                      onClick={() => setShowProjectsDropdown(false)}
                    >
                      Bütün Layihələr
                    </Link>
                  </li>
                  {categories?.map((category, index) => (
                    <li key={index}>
                      <Link
                        to={createLanguageAwarePath(
                          `/projects/${category?.id}`
                        )}
                        onClick={() => setShowProjectsDropdown(false)}
                      >
                        {category?.name}
                      </Link>
                    </li>
                  ))}
                  {/* <li>
                    <Link
                      to={createLanguageAwarePath("/projects/")}
                      onClick={() => setShowProjectsDropdown(false)}
                    >
                      Bütün Layihələr
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={createLanguageAwarePath("/projects/residential")}
                      onClick={() => setShowProjectsDropdown(false)}
                    >
                      Əsaslandırma
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={createLanguageAwarePath("/projects/non-residential")}
                      onClick={() => setShowProjectsDropdown(false)}
                    >
                      Qeyri-yaşayış
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={createLanguageAwarePath("/projects/concept")}
                      onClick={() => setShowProjectsDropdown(false)}
                    >
                      Konsept
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={createLanguageAwarePath("/projects/interior")}
                      onClick={() => setShowProjectsDropdown(false)}
                    >
                      İnterier həlli
                    </Link>
                  </li> */}
                </ul>
              )}
            </li>

            <li>
              <Link to={createLanguageAwarePath("/partners")}>
                {" "}
                {t("header.partners")}
              </Link>
            </li>
            <li>
              <Link to={createLanguageAwarePath("/contact-us")}>
                {" "}
                {t("header.contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div
          ref={languageDropdownRef}
          className="language-section d-flex align-items-center gap-1 position-relative"
        >
          <div
            className="d-flex align-items-center gap-2"
            onClick={toggleLanguageDropdown}
            style={{ cursor: "pointer" }}
          >
            <span style={{ color: "var(--purple-color)" }}>
              {selectedLanguage}
            </span>
            <i
              style={{ color: "var(--purple-color)" }}
              className={`fa-solid fa-angle-down mt-1 ${
                isLanguageOpen ? "rotate" : ""
              }`}
            ></i>
          </div>
          {isLanguageOpen && (
            <ul className="dropdown-menu show position-absolute text-light">
              <li onClick={() => handleLanguageSelect("az")}>
                <span className="">Az</span>
              </li>
              <hr className="m-0 p-0" />
              <li onClick={() => handleLanguageSelect("en")}>
                <span className="">En</span>
              </li>
              <hr className="m-0 p-0" />
              <li onClick={() => handleLanguageSelect("ru")}>
                <span className="">Ru</span>
              </li>
            </ul>
          )}
        </div>
        <div
          className="d-md-none menu-toggle "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile menu */}
        <div
          className={`bar-content  ${isOpen ? "active" : ""}`}
          ref={navbarRef}
        >
          <IoCloseOutline
            className="fs-1 mt-4 mx-4"
            onClick={() => setIsOpen(false)}
          />

          <ul className="d-flex flex-column gap-2 ">
            <li>
              <Link to="/">Ana səhifə</Link>
            </li>

            <li>
              <Link to="/about-us">Haqqımızda</Link>
            </li>
            <li>
              <Link to="/services">Xidmətlər</Link>
            </li>
            <li>
              <Link to="/projects">Layihələr</Link>
            </li>
            <li>
              <Link to="/partners">Tərəfdaşlar</Link>
            </li>
            <li>
              <Link to="/contact-us">Əlaqə</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
