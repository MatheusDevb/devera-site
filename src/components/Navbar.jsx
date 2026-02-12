// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logoSrc from "../assets/logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <NavLink to="/" className={styles.logoLink} onClick={closeMenu}>
        <img src={logoSrc} alt="Logo da Devéra" className={styles.logoImg} />
      </NavLink>

      {/* Botão Hambúrguer (visível apenas no mobile) */}
      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
        aria-label="Menu de navegação"
        aria-expanded={isMenuOpen}
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      {/* Menu de Navegação */}
      <ul
        className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ""}`}
      >
        <li>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            onClick={closeMenu}
          >
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/servicos"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            onClick={closeMenu}
          >
            Serviços
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            onClick={closeMenu}
          >
            Portfólio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contato"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            onClick={closeMenu}
          >
            Contato
          </NavLink>
        </li>
      </ul>

      {/* Overlay (fundo escuro quando menu aberto no mobile) */}
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;
