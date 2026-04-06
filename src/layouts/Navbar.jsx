import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">Mi App React</h2>

      <ul className="nav-links">

        <li>
          <Link to="/">Ejercicios</Link>
        </li>

        <li>
          <Link to="/tres-en-linea">
            Tres en línea
          </Link>
        </li>

      </ul>

    </nav>
  );
}
