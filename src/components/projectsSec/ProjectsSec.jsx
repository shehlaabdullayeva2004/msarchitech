import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function ProjectsSec() {
  return (
    <section id="project-sec">
      <div className="project-sec-container container-fluid text-center">
        <div className="head ">
          <h1>Layihələrimiz</h1>
        </div>
        <div className="projects ">
          <FaChevronLeft />
          <Swiper
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <ProjectCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard />
            </SwiperSlide>
          </Swiper>
          <FaChevronRight />
        </div>
        <button className="primary-button">
          <Link to="/projects">Daha Ətraflı</Link>
        </button>
      </div>
    </section>
  );
}
