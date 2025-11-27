/* Functions React */
import React, { useRef, useState, useEffect } from "react";

/* Components */
import Card from "../../components/Card";

/* Css */
import sectionPortfolio from "../../styles/pages/partials/Potfoliosection.module.css";

/* Assets */
import Divisor from "../../assets/Divisor2.svg";

function Porfolio() {
  const projects = [
    {
      title: "Sistema de gestão para um",
      highlight: "Hortifruti",
      description:
        "Solução desenvolvida em linguagem C para auxiliar no controle de estoque, cadastro de produtos e registro de vendas, oferecendo praticidade e organização para estabelecimentos do setor.",
      linkLabel: "Acesse o repositório", // Novo/Reintroduzido
      link: "https://app-myservice.vercel.app",
    },
    {
      title: "Sistema de gestão para um",
      highlight: "Hortifruti",
      description:
        "Solução desenvolvida em linguagem C para auxiliar no controle de estoque, cadastro de produtos e registro de vendas, oferecendo praticidade e organização para estabelecimentos do setor.",
      linkLabel: "Acesse o repositório", // Novo/Reintroduzido
      link: "https://app-myservice.vercel.app",
    },
    // ... outros projetos
  ];

  return (
    <>
      <section className={sectionPortfolio.Portfolio} id="portfolio">
        <img src={Divisor} className={sectionPortfolio.Divisor} alt="Divisor" />

        {/* Botão de detalhe - mantido no fluxo principal da seção */}
        <div className={sectionPortfolio.ButtonDetail}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Seu Path SVG */}
            <path
              d="M11.8728 1.07815L12.1226 22.5334M12.1226 22.5334L23.0348 11.8716M12.1226 22.5334L0.965165 12.1288"
              stroke="#FAF4F4"
              strokeWidth="1.89652"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className={sectionPortfolio.Title}>
          <h1>
            Fique ligado em alguns de <span> nossos projetos.</span>
          </h1>
          <p>Confira alguns projetos feitos por nos realizamos.</p>
        </div>

        <section className={sectionPortfolio.Cards}>
          {projects.map((proj, index) => (
            <Card key={index} {...proj} />
          ))}
        </section>
      </section>
    </>
  );
}

export default Porfolio;
