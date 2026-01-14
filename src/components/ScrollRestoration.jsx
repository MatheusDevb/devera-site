// src/components/ScrollRestoration.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollRestoration() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se o link tiver uma âncora (hash), não faz nada.
    // O próprio navegador vai tentar rolar para o elemento.
    if (hash) {
      // Um pequeno atraso pode ajudar o navegador a encontrar o elemento após a renderização
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    // Se não tiver âncora, rola para o topo.
    window.scrollTo(0, 0);
  }, [pathname, hash]); // Executa sempre que o caminho ou a âncora mudar

  return null; // Este componente não renderiza nada visualmente.
}

export default ScrollRestoration;
