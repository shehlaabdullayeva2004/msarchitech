import React from 'react';
import "./Style.scss"
import { useTranslation } from 'react-i18next';

export default function AboutHeroSec({ title, bgImage }) {
  const { t } = useTranslation();

  return (
    <section id="about-hero-sec">
      <div
        className="about-hero "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <h1>{t(title)}</h1>
      </div>
    </section>
  );
}
