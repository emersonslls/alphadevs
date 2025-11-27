/* Functions React */
import React, { useRef, useState, useEffect } from "react";

/* Css */
import sectionServico from '../../styles/pages/partials/Servicosection.module.css';

function Servico() {
    return (
        <>
            <section className={sectionServico.Servico} id='servicos' >
                <h1 className={sectionServico.Titulo}>Nossos <span>Serviços</span> de <span>Inovação</span> e <span>Desenvolvimento.</span></h1>
                <section className={sectionServico.ContainerServicos}>
                    <div className={sectionServico.Layer1}>
                        <div className={sectionServico.Ecommerce}>
                            <div className={sectionServico.Informacoes}>
                                <h1><span>E-commerce</span> Personalizado</h1>
                                <h2>Monte sua loja virtual com uma estrutura robusta, segura e com ótima experiência de compra para seus clientes.</h2>
                            </div>
                        </div>
                        <div className={sectionServico.SistemaWeb}>
                            <div className={sectionServico.Informacoes}>
                                <h1><span>Sistema Web</span> sob Medida</h1>
                                <h2>Soluções personalizadas para às necessidades do seu negócio, com foco em eficiência e escalabilidade.</h2>
                            </div>
                        </div>
                    </div>
                    <div className={sectionServico.Layer2}>
                        <div className={sectionServico.CriacaoSite}>
                            <div className={sectionServico.Informacoes}>
                                <h1><span>Criação de</span> Sites Profissionais</h1>
                                <h2>Desenvolvemos sites modernos, responsivos e otimizados para destacar sua marca no ambiente digital.</h2>
                            </div>
                        </div>
                        <div className={sectionServico.LandingPage}>
                            <div className={sectionServico.Informacoes}>
                                <h1><span>Landing Page </span> que convertem</h1>
                                <h2>Páginas focadas em resultados, pensados para apresentar seus serviços ou produtos de forma clara e impactante.</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Servico;
