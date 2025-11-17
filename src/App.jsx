// src/App.jsx
import { Routes, Route } from "react-router-dom";

// Importando o componente de Layout
import Layout from "./components/Layout.jsx";

// Importando todas as páginas
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Servicos from "./pages/Servicos.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contato from "./pages/Contato.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx"; // 1. Importe o novo componente

function App() {
  return (
    <Routes>
      {/* Rota Pai que usa o Layout */}
      <Route path="/" element={<Layout />}>
        {/* Rotas Filhas */}
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="portfolio" element={<Portfolio />} />

        {/* 2. Adicione a Rota Dinâmica aqui */}
        <Route path="portfolio/:projectId" element={<ProjectDetail />} />

        <Route path="contato" element={<Contato />} />
      </Route>
    </Routes>
  );
}

export default App;
