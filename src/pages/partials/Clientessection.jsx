/* Functions React */
import React, { useRef, useState, useEffect } from "react";

/* Css */
import sectionClientes from '../../styles/pages/partials/Clientessection.module.css';

/* Assets */
import Divisor from '../../assets/Divisor1.svg';
import IconPerson from '../../assets/icons/Icon.svg';
import CustomCarousel from "../../components/Carrossel";

function Clientes() {
    return (
        <>
            <section className={sectionClientes.Clientes} id='clientes' >
                <div className={sectionClientes.Circle} />
                <div className={sectionClientes.Titulo}>
                    <h1>Confira o que <span>nossos clientes</span> dizem sobre a <span className={sectionClientes.Color}>AlphaDev's.</span></h1>
                    <h2>Veja o que nossos clientes têm a dizer após vivenciarem nossos serviços de perto.</h2>
                </div>

                <CustomCarousel />
            </section>
        </>
    );
}

export default Clientes;
