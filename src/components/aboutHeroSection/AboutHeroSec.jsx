import React from 'react';
import "./Style.scss"

export default function AboutHeroSec({ title,bgImage }) {
  return (
    <section id="about-hero-sec">
      <div
        className="about-hero "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <h1>{title}</h1>
      </div>
    </section>
  );
}
