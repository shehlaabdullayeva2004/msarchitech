"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "../projectCard/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import {
  getCurrentLanguage,
  addLanguageToPath,
  removeLanguageFromPath,
} from "../../utils/languageUtils";
import "swiper/css";
import "swiper/css/navigation";
import "./Style.scss";
import { useTranslation } from "react-i18next";

export default function ProjectsSec() {
  const [projects, setProjects] = useState([]);
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
  const currentLanguage = getCurrentLanguage(pathname);
  const createLanguageAwarePath = (path) => {
    return addLanguageToPath(path, currentLanguage);
  };


  useEffect(() => {
    axios
      .get("https://manager.msarchitectural.az/api/projects")
      .then((res) => {
        setProjects(res.data.data || []);
      })
      .catch((err) => console.error("Xəta:", err));
  }, []);

  return (
    <section id="project-sec">
      <div className="project-sec-container container-fluid text-center">
        <div className="head">
          <h1>{t("home.projectsSec.title")}</h1>
        </div>

        <div className="projects">
          <FaChevronLeft className="swiper-prev" />
          <Swiper
            className="mySwiper"
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
          <FaChevronRight className="swiper-next" />
        </div>

        <button className="primary-button mt-3">
          <Link to={createLanguageAwarePath("/projects")}>
            {t("common.readMore")}
          </Link>
        </button>
      </div>
    </section>
  );
}
