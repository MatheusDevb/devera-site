// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import Button from './Button';
import Logo from '../assets/logo.svg'; // Importando o logo
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Seção CTA Principal */}
        <div className={styles.ctaSection}>
          <h2>Tem uma ideia em mente?</h2>
          <Button to="/contato" variant="primary" size="large">
            Vamos Conversar
          </Button>
        </div>

        {/* Divisor Visual */}
        <div className={styles.divider}></div>

        {/* Corpo Principal do Rodapé */}
        <div className={styles.mainFooter}>
          <div className={styles.brandColumn}>
            <img src={Logo} alt="Devéra Logo" className={styles.logo} />
            <p>Criando experiências digitais que apaixonam e convertem.</p>
          </div>

          <div className={styles.linksColumn}>
            <h4>Navegação</h4>
            <ul>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/servicos">Serviços</Link></li>
              <li><Link to="/portfolio">Portfólio</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>

          <div className={styles.contactColumn}>
            <h4>Contato</h4>
            <ul>
              <li><FiMail /> devera.contato@gmail.com</li>
              <li><FiMapPin /> São Paulo, Brasil</li>
            </ul>
          </div>

          <div className={styles.socialColumn}>
            <h4>Siga-nos</h4>
            <div className={styles.socialIcons}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
            </div>
          </div>
        </div>

        {/* Base do Rodapé */}
        <div className={styles.footerBottom}>
          <p>&copy; {new Date( ).getFullYear()} Devéra. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
