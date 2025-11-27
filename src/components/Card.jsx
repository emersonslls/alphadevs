import React from "react";
import styles from "../styles/Components/Card.module.css";

import Arrow from "../assets/icons/ArrowW.svg";

const Card = ({ title, highlight, description, link, linkLabel }) => {
  return (
    <div className={styles.Card}>
      {/* 1. Área de Conteúdo (Título e Descrição) - Ocupa o centro */}
      <div className={styles.contentArea}>
        {/* Título */}
        <h3 className={styles.title}>
          {title} <span className={styles.highlight}>{highlight}</span>
        </h3>

        {/* Descrição */}
        <p className={styles.description}>{description}</p>
      </div>

      {/* 2. Botão de Link (Parte inferior) - Usa linkLabel agora */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <button className={styles.Btn}>
          {linkLabel}
          <img src={Arrow} className={styles.IconArrow} />
        </button>
      </a>
    </div>
  );
};

export default Card;
