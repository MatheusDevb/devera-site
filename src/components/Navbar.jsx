// src/components/Navbar.jsx
import { NavLink } from "react-router-dom"; // 1. Mude a importação para NavLink
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* O logo pode continuar sendo um Link normal ou NavLink, tanto faz aqui */}
      <NavLink to="/" className={styles.logo}>
        Devéra
      </NavLink>

      <ul className={styles.navList}>
        <li>
          {/* 2. Substitua Link por NavLink e use a função no className */}
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
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
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
