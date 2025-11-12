// src/components/Footer.jsx
import styles from "./Footer.module.css"; // Importa o CSS Module

function Footer() {
  const currentYear = new Date().getFullYear(); // Pega o ano atual dinamicamente

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {currentYear} Devéra. Todos os direitos reservados.</p>
        {/* Futuramente, podemos adicionar links para redes sociais aqui */}
        <div className={styles.socialLinks}>
          {/* <a href="#">GitHub</a>
          <a href="#">LinkedIn</a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
