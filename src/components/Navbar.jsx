import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Devéra</Link>
      <ul>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/servicos">Serviços</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfólio</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
