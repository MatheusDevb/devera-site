// src/App.jsx
import { Routes, Route } from "react-router-dom";

// Importando o novo componente de Layout
import Layout from "./components/Layout.jsx";

// Importando todas as páginas
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Servicos from "./pages/Servicos.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contato from "./pages/Contato.jsx";

function App() {
  return (
    <Routes>
      {/* Rota Pai que usa o Layout */}
      <Route path="/" element={<Layout />}>
        {/* Rotas Filhas que serão renderizadas dentro do Outlet do Layout */}
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contato" element={<Contato />} />

        {/* Futuramente, uma rota para página não encontrada */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
