// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
// O App.jsx não está sendo usado agora, mas vamos deixá-lo aqui para o próximo passo.
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importando todas as páginas
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Servicos from "./pages/Servicos.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contato from "./pages/Contato.jsx";

const router = createBrowserRouter([
  {
    element: <App />, // O App agora é o elemento pai
    children: [
      // E as páginas são suas "filhas"
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/servicos",
        element: <Servicos />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
