// src/App.jsx
import { Routes, Route } from "react-router-dom"; // 1. Importe Routes e Route

// Componentes de Layout
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Importando todas as páginas
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Servicos from "./pages/Servicos.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contato from "./pages/Contato.jsx";

function App() {
  return (
    <>
      {/* 2. Navbar e Footer ficam fora do Routes para aparecerem em todas as páginas */}
      <Navbar />

      <main>
        {/* 3. O Routes define a área onde as páginas serão trocadas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contato" element={<Contato />} />
          {/* Futuramente, podemos adicionar uma rota para "Página não encontrada" aqui */}
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
