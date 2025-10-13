import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Style.scss";
import AboutProjectCard from "../aboutProjectCard/AboutProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

export default function AboutProjects({ id }) {
  const [projects, setProjects] = useState([]);
  const [modal, setModal] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const { t, i18n } = useTranslation();
 useEffect(() => {
   const url = id
     ? `https://manager.msarchitectural.az/api/categories/${id}/projects`
     : `https://manager.msarchitectural.az/api/projects`;

   axios
     .get(url)
     .then((res) => setProjects(res?.data?.data || []))
     .catch((err) => console.error("Error fetching projects:", err));
 }, [id]);
  const handleOpenModal = (images) => {
    setActiveImages(images || []);
    setModal(true);
  };
  // console.log(projects);
  const handleCloseModal = () => setModal(false);

  return (
    <>
      <section id="about-projects">
        <div className="projects-content container-fluid ">
          <div className="row ">
            {projects.length > 0 ? (
              projects.map((project, index) => {
                const className = "col-12 col-lg-4 mb-3";
                return (
                  <div key={project.id || index} className={className}>
                    <AboutProjectCard
                      project={project}
                      onShowImages={() =>
                        handleOpenModal(project.projectImages)
                      }
                    />
                  </div>
                );
              })
            ) : (
              <h1 className="text-center text-white fs-4">Layihə mövcud deyil</h1>
            )}
          </div>
        </div>
      </section>

      {/* ======= Modal ======= */}
      {modal && (
        <div
          className="modal fade show "
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.62)" }}
          onClick={handleCloseModal}
        >
          <div
            className="modal-dialog  modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content ">
              <div className="modal-header m-0 border-0">
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                {activeImages.length > 0 ? (
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop
                  >
                    {activeImages.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          className="d-block w-100"
                          src={`https://manager.msarchitectural.az/${img}`}
                          alt={`slide-${i}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <p className="text-center">Şəkillər mövcud deyil</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
