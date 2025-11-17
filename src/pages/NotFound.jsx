// src/pages/NotFound.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import Button from "../components/Button";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página não encontrada | Devéra</title>
        <meta
          name="description"
          content="A página que você está procurando não foi encontrada."
        />
      </Helmet>

      <div className={styles.notFoundPage}>
        <div className={styles.content}>
          <span className={styles.errorCode}>404</span>
          <h1 className={styles.title}>Página não encontrada</h1>
          <p className={styles.message}>
            Ops! Parece que a página que você está tentando acessar não existe
            ou foi movida.
          </p>
          <Button to="/" variant="primary">
            Voltar para a Home
          </Button>
        </div>
      </div>
    </>
  );
}

export default NotFound;
