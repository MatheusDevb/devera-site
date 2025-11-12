// src/components/Button.jsx
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ children, to, onClick, variant = "primary" }) {
  // Define as classes CSS com base na variante (primary ou secondary)
  const buttonClasses = `${styles.button} ${styles[variant]}`;

  // Se a prop 'to' for fornecida, renderiza um componente Link
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  // Caso contrário, renderiza um botão padrão
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}

export default Button;
