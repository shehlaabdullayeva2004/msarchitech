import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "./Style.scss";
import Logo from "../../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

    const navbarRef = useRef(null);

    useEffect(() => {
      gsap.to(navbarRef.current, {
        backgroundColor: "#fff",
        color: "#000",
        duration: 1,
        scrollTrigger: {
          trigger: navbarRef.current,
          start: "top top",
          end: "+=10",
          scrub: true,
        },
      });
    }, []);

  return (
    <nav>
      <div className="navbar" ref={navbarRef}>
        <div className="nav-logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="d-none d-md-block">
          <ul className="d-flex justify-content-between align-items-center">
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
            className="fs-1 my-2"
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
