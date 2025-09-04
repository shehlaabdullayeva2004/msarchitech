import React from 'react';
import "./Style.scss"

export default function AboutHeroSec({ title }) {
  return (
    <section id="about-hero-sec">
      <div className="about-hero  ">
        <h1>{title}</h1>
      </div>
    </section>
  );
}
