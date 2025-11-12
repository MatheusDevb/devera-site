// src/App.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />{" "}
        {/* O conteúdo da página atual (Home, Sobre, etc.) será renderizado aqui */}
      </main>
      {/* Futuramente, podemos adicionar um <Footer /> aqui */}
    </>
  );
}

export default App;
