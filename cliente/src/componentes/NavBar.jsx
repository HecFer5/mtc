import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <h1>Navegador</h1>
      <ul>
        <li>
          <Link to="/">Pagina Principal</Link>
        </li>
        <li>
        <Link to="/nuevatarea">Ingresar</Link>
        </li>
        <li>
        <Link to="/tablameridianos">MERIDIANOS</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
