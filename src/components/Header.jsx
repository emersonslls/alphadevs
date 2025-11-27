/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";

/* <--- CSS ---> */
import styles from '../styles/Components/Header.module.css';

/* <--- ASSETS - LOGO ---> */
import Logo from '../assets/logo/LogoAlphaDevs.svg';
import Icon from '../assets/logo/IconAlphaDevs.svg';

/* <--- ASSETS - MENU ---> */
import Menu from '../assets/icons/Menu.svg';
import Close from '../assets/icons/Close.svg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isOnSpecialSection, setIsOnSpecialSection] = useState(false);

    const menuRef = useRef(null);
    const wrapperRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    // Mudar header ao rolar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fechar menu ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Verificar se a section "servicos" está visível
    useEffect(() => {
        const target = document.getElementById("equipe");
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsOnSpecialSection(entry.isIntersecting);
            },
            { threshold: 0.10 }
        );

        observer.observe(target);

        return () => observer.disconnect();
    }, []);

    return (
        <header className={`
            ${styles.Header}
            ${scrolled ? styles.HeaderSolid : ''}
            ${isOnSpecialSection ? styles.HeaderInSection : ''}
        `}>
            {/* Logo Desktop */}
            <img src={Logo} alt="Logo" className={styles.Logo} />

            {/* Icon Mobile */}
            <img src={Icon} alt="Icon" className={styles.Icon} />

            {/* Wrapper que engloba menu e botão */}
            <div ref={wrapperRef}>
                <nav
                    ref={menuRef}
                    className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
                >
                    <ul>
                        <li onClick={() => scrollToSection('servicos')}>Serviços</li>
                        <li onClick={() => scrollToSection('equipe')}>Equipe</li>
                        <li onClick={() => scrollToSection('clientes')}>Clientes</li>
                        <li onClick={() => scrollToSection('portfolio')}>Portfólio</li>
                    </ul>
                    <button className={styles.BtnContatos} onClick={() => scrollToSection('contatos')}>
                        Contatos
                    </button>
                </nav>
                <button
                    className={styles.hamburger}
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleMenu();
                    }}
                >
                    {isMenuOpen ? (
                        <img src={Close} className={styles.closeIcon} alt="Fechar" />
                    ) : (
                        <img src={Menu} className={styles.menuIcon} alt="Menu" />
                    )}
                </button>
            </div>
        </header>
    );
}

export default Header;
