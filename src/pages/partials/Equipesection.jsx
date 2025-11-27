/* Functions React */
import React, { useRef, useState, useEffect } from "react";

/* Css */
import sectionEquipe from '../../styles/pages/partials/Equipesection.module.css';

/* Assets */
import Divisor from '../../assets/Divisor1.svg';
import IconPerson from '../../assets/icons/Icon.svg';

function Equipe() {
    return (
        <>
            <section className={sectionEquipe.Equipe} id='equipe' >

                <svg width="859" height="64" viewBox="0 0 859 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={sectionEquipe.Divisor} >
                    <path d="M82.0318 34C82.0318 50.5685 95.4633 64 112.032 64H859V0H0H52.0318C68.6004 0 82.0318 13.4315 82.0318 30V34Z" fill="#FAF4F4" />
                </svg>

                <div className={sectionEquipe.Titulo}>
                    <h1>Equipe <span>AlphaDev’s</span> – <span>Criatividade</span> e <span>Inovação.</span></h1>
                    <h2>A <span>ALPHADEV'S</span> é formada por um time multidisciplinar, apaixonado por inovação, tecnologia e resultados. Cada integrante traz sua especialidade para entregar soluções completas, criativas e sob medida. Juntos, unimos conhecimento técnico, visão estratégica e experiência para transformar ideias em projetos reais e impactantes.</h2>
                </div>

                <div className={sectionEquipe.Line} />

                <svg width="1422" height="1186" viewBox="0 0 1422 1186" fill="none" xmlns="http://www.w3.org/2000/svg" className={sectionEquipe.Detail}>
                    <path d="M1217.71 1216L1217.71 0M0 1105.78L1422 1105.78M0 1006.22L1422 1006.22" stroke="url(#paint0_radial_596_392)" stroke-opacity="0.5" stroke-width="3" />
                    <defs>
                        <radialGradient id="paint0_radial_596_392" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(804.5 429) rotate(74.125) scale(1062 847.986)">
                            <stop stop-color="#F0EDE6" />
                            <stop offset="0.936311" stop-color="#F0EDE6" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg>

                <section className={sectionEquipe.Membros}>
                    <div className={sectionEquipe.Esh}>
                        <div className={sectionEquipe.Icon}>
                            <img src={IconPerson} />
                        </div>
                        <div className={sectionEquipe.Informacoes}>
                            <h1>Echilly dos Santos</h1>
                            <h2>Copywriter</h2>
                        </div>
                    </div>
                    <div className={sectionEquipe.Emerson}>
                        <div className={sectionEquipe.Icon}>
                            <img src={IconPerson} />
                        </div>
                        <div className={sectionEquipe.Informacoes}>
                            <h1>Emerson Sales</h1>
                            <h2>Dev. Front-end/UI&UX</h2>
                        </div>
                    </div>
                    <div className={sectionEquipe.Gustavo}>
                        <div className={sectionEquipe.Icon}>
                            <img src={IconPerson} />
                        </div>
                        <div className={sectionEquipe.Informacoes}>
                            <h1>Gustavo da Silva</h1>
                            <h2>Gerente de Projetos</h2>
                        </div>
                    </div>
                    <div className={sectionEquipe.Joao}>
                        <div className={sectionEquipe.Icon}>
                            <img src={IconPerson} />
                        </div>
                        <div className={sectionEquipe.Informacoes}>
                            <h1>João Augusto</h1>
                            <h2>Product Manager</h2>
                        </div>
                    </div>
                    <div className={sectionEquipe.Kauan}>
                        <div className={sectionEquipe.Icon}>
                            <img src={IconPerson} />
                        </div>
                        <div className={sectionEquipe.Informacoes}>
                            <h1>Kauan Rodrigues</h1>
                            <h2>Dev. Back-end</h2>
                        </div>
                    </div>
                    <div className={sectionEquipe.Otavio}>
                        <div className={sectionEquipe.Icon}>
                            <img src={IconPerson} />
                        </div>
                        <div className={sectionEquipe.Informacoes}>
                            <h1>Otavio Garcia</h1>
                            <h2>Atendimento ao Cliente</h2>
                        </div>
                    </div>
                    <div className={sectionEquipe.Samuel}>
                        <div className={sectionEquipe.Icon}>
                            <img src={IconPerson} />
                        </div>
                        <div className={sectionEquipe.Informacoes}>
                            <h1>Samuel Bispo</h1>
                            <h2>Especialista IA & Python</h2>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Equipe;
