/* Functions React */
import React, { useRef, useState, useEffect } from "react";

/* Css */
import sectionContatos from "../../styles/pages/partials/Contatossection.module.css";

/* Assets */
import IconeEnviar from "../../assets/icons/Enviar.svg";

function Contatos() {
  return (
    <>
      <section className={sectionContatos.Contatos} id="contatos">
        <svg
          width="859"
          height="64"
          viewBox="0 0 859 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={sectionContatos.Divisor}
        >
          <path
            d="M776.968 34C776.968 50.5685 763.537 64 746.968 64H-6.10352e-05V0H859H806.968C790.4 0 776.968 13.4315 776.968 30V34Z"
            fill="#0D0D0D"
          />
        </svg>

        <div className={sectionContatos.Mensage}>
          <h1>
            Converse com nossa equipe e <span>inove</span> seu{" "}
            <span> negócio. </span>
          </h1>
          <p>
            Na <span>AlphaDev’s</span>, nossa equipe está pronta para ouvir suas
            ideias e transformá-las em realidade. Unimos criatividade e inovação
            para desenvolver designs impactantes e experiências de usuário
            intuitivas, resultando em sistemas, sites ou aplicativos funcionais,
            atrativos e que realmente fazem a diferença para quem os utiliza.
          </p>
        </div>

        <form className={sectionContatos.Form}>
          <input
            type="text"
            placeholder="Seu nome completo"
            className={sectionContatos.input}
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className={sectionContatos.input}
          />
          <textarea
            placeholder="Escreva uma mensagem"
            rows="3"
            className={sectionContatos.input}
          ></textarea>

          <button type="submit" className={sectionContatos.Button}>
            NOS ENVIE UMA MENSAGEM
            <div className={sectionContatos.Icon}>
              <img src={IconeEnviar} />
            </div>
          </button>
        </form>
      </section>
    </>
  );
}

export default Contatos;
