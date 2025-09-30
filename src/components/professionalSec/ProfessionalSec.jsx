import React from "react";
import "./Style.scss";
import ProfessionalSecImg from "../../assets/images/professionalImg.webp";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

export default function Professional() {
  return (
    <section id="professional">
      <div className="professional container-fluid row">
        <div className="left-side col-12 col-lg-5 ">
          <img src={ProfessionalSecImg} alt="" />
        </div>
        <div className="right-side col-12 col-lg-7 ">
          <div className="top">
            <h1>Peşəkarlığımız</h1>
            <p>
              MS ARCHITECTURAL olaraq layihələrimizi beynəlxalq standartlara
              cavab verən dəqiqlik və məsuliyyətlə həyata keçiririk.
            </p>
          </div>
          <div className="bottom">
            <p>
              Təcrübəli mütəxəssislərimiz hər detalda keyfiyyəti və
              funksionallığı təmin edir. Bizim üçün hər bir layihə yalnız inşaat
              deyil, həm də uzunmüddətli dəyər yaratmaq deməkdir. Buna görə də
              estetik görünüşlə yanaşı, davamlılıq və innovativ həllərə xüsusi
              diqqət ayırırıq.
            </p>
            <ul>
              <li>
                <span className="">
                  <GoDotFill />
                </span>
                Müasir texnologiyalardan istifadə edərək layihələrə innovativ
                həllər gətiririk.
              </li>
              <li>
                <span className="">
                  <GoDotFill />
                </span>
                Müxtəlif miqyaslı və təyinatlı layihələri uğurla həyata keçirmək
                bacarığına malikik.
              </li>
              <li>
                <span className="">
                  <GoDotFill />
                </span>
                Müştəri ilə daim əlaqədə olaraq hər mərhələdə şəffaflığı və
                inamı qoruyuruq.
              </li>
            </ul>
            <button className="primary-button">
              <Link to={"/projects"}>Daha Ətraflı</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
