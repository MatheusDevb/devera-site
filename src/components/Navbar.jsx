// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // 1. Importa o CSS Module

function Navbar() {
  return (
    // 2. Usa a classe .navbar no container principal
    <nav className={styles.navbar}>
      {/* 3. Usa a classe .logo para o link da home */}
      <Link to="/" className={styles.logo}>
        Devéra
      </Link>

      {/* 4. Usa a classe .navList para a lista */}
      <ul className={styles.navList}>
        <li>
          {/* 5. E a classe .navLink para cada link */}
          <Link to="/sobre" className={styles.navLink}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/servicos" className={styles.navLink}>
            Serviços
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className={styles.navLink}>
            Portfólio
          </Link>
        </li>
        <li>
          <Link to="/contato" className={styles.navLink}>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
