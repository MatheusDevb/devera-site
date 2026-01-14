import { Routes, Route } from "react-router-dom"; // Remova o BrowserRouter daqui
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Servicos from "./pages/Servicos.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contato from "./pages/Contato.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import ScrollRestoration from "./components/ScrollRestoration.jsx";

function App() {
  return (
    <>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:projectId" element={<ProjectDetail />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
