// src/pages/Sobre.jsx
import styles from "./Sobre.module.css";
import profilePic from "../assets/profile-pic.jpeg";
import { Helmet } from "react-helmet-async";

const values = [
  {
    title: "Paixão por Tecnologia",
    description:
      "Somos movidos pela inovação e pela busca incessante das melhores e mais modernas soluções para cada desafio.",
  },
  {
    title: "Design Centrado no Usuário",
    description:
      "Acreditamos que um bom design não é apenas sobre estética, mas sobre criar experiências intuitivas e memoráveis.",
  },
  {
    title: "Parceria e Transparência",
    description:
      "Trabalhamos ao seu lado em cada etapa do projeto, com comunicação clara e um processo totalmente transparente.",
  },
];

function Sobre() {
  return (
    <>
      <Helmet>
        <title>Sobre | Devéra</title>
        <meta
          name="description"
          content="Conheça a história da Devéra, nossa missão, valores e a filosofia por trás da criação de experiências digitais que apaixonam."
        />
        {/* Você pode adicionar outras tags de head aqui, se necessário */}
      </Helmet>
      <div className={styles.aboutPage}>
        {/* Seção 1: Apresentação */}
        <section className={styles.introSection}>
          <div className={styles.introText}>
            <h1>Mais que uma agência, um parceiro de tecnologia.</h1>
            <p>
              A Devéra nasceu da paixão por transformar ideias em realidade
              digital. Eu sou [Seu Nome], fundador e desenvolvedor principal.
              Minha missão é ir além do código e construir soluções que não
              apenas funcionem perfeitamente, mas que também encantem e gerem
              resultados reais para o seu negócio.
            </p>
            <p>
              Acreditamos que cada projeto é uma oportunidade única de criar
              algo especial. Combinamos design estratégico, desenvolvimento de
              ponta e uma dedicação obsessiva à qualidade para entregar produtos
              digitais que se destacam.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src={profilePic} alt="Matheus Pedro, fundador da Devéra" />
          </div>
        </section>

        {/* Seção 2: Valores */}
        <section className={styles.valuesSection}>
          <h2>Nossos Pilares</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Sobre;
