// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        {/* O Outlet renderiza o componente da rota filha aqui */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
