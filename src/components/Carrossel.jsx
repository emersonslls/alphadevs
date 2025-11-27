// src/components/CustomCarousel.jsx
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Components/Carrossel.module.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1600 }, items: 3 },
  desktop: { breakpoint: { max: 1600, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const feedbacks = [
  {
    Nome: "Ana Paula",
    Information: "Cliente",
    message: "Ótimo serviço! Super atenciosos e profissionais.",
  },
  {
    Nome: "Carlos Mendes",
    Information: "Cliente",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
  },
  {
    Nome: "Juliana Rocha",
    Information: "Cliente",
    message: "Recomendo muito! Atendimento impecável.",
  },
];

const CustomCarousel = () => {
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowArrows(window.innerWidth >= 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        arrows={showArrows}
        showDots
        className={styles.carousel}
        containerClass={styles.carouselWrapper}
        dotListClass={styles.dots}
        itemClass={styles.carouselItem} // <-- importante
      >
        {feedbacks.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.Dados}>
              <p className={styles.Nome}>{item.Nome}</p>
              <p className={styles.Information}>{item.Information}</p>
            </div>
            <p className={styles.message}>"{item.message}"</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
