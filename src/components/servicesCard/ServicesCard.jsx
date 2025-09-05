import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Style.scss";

export default function ServicesCard({ head, title, img, isOffset }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

    if (inView) {
      controls.start({ y: 0 });
    }
  return (
    <motion.div
      className="service-card col-12 col-md-6 "
      ref={ref}
      initial={{ y: isOffset ? 200 : 0 }} 
      animate={controls}
      transition={{ type: "tween", duration: 0.8 }}
    >
      <div className="detail">
        <h2>{head}</h2>
        <p>{title}</p>
      </div>
      <img src={img} alt={head} />
    </motion.div>
  );
}
