import React from 'react';
import "./Style.scss"

export default function AboutHeroSec({ title }) {
  return (
    <section id="about-hero-sec">
      <div className="about-hero container-fluid d-flex justify-content-center align-items-center  ">
        <h1>{title}</h1>
      </div>
    </section>
  );
}
