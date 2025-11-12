// src/App.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"; // 1. Importe o Footer

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer /> {/* 2. Adicione o Footer aqui */}
    </>
  );
}

export default App;
