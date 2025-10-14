import React from "react";
import AboutHeroSec from "../../components/aboutHeroSection/AboutHeroSec";
import ContactSection from "../../components/contactSection/ContactSection";
import { useTranslation } from "react-i18next";
import bgImage from "../../assets/images/about.webp";

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  // project?.name?.[i18n.language];
  return (
    <>
      <AboutHeroSec title={t("contact.heroTitle")} bgImage={bgImage} />
      <ContactSection />
    </>
  );
}
