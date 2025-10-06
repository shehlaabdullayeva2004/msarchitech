import Home from "./pages/homePage/Home";
import "./styles/global.scss";
import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MainLayout from "./layout/MainLayout";
import AboutPage from "./pages/aboutPage/About";
import ServicesPage from "./pages/servicesPage/Services";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import PartnersPage from "./pages/partnersPage/PartnersPage";
import ContactPage from "./pages/contactPage/ContactPage";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import LanguageRedirect from "./components/languageRedirect/LanguageRedirect";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loader) return <Loader />;

  return (
    <BrowserRouter>
      <LanguageRedirect>
        <Routes>
          <Route element={<MainLayout />}>
            {/* Azerbaijani default */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            {/* English */}
            <Route path="/en" element={<Home />} />
            <Route path="/en/about-us" element={<AboutPage />} />
            <Route path="/en/services" element={<ServicesPage />} />
            <Route path="/en/projects" element={<ProjectsPage />} />
            <Route path="/en/partners" element={<PartnersPage />} />
            <Route path="/en/contact-us" element={<ContactPage />} />
            {/* Russian */}
            <Route path="/ru" element={<Home />} />
            <Route path="/ru/about-us" element={<AboutPage />} />
            <Route path="/ru/services" element={<ServicesPage />} />
            <Route path="/ru/projects" element={<ProjectsPage />} />
            <Route path="/ru/partners" element={<PartnersPage />} />
            <Route path="/ru/contact-us" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </LanguageRedirect>
    </BrowserRouter>
  );
}

export default App;
