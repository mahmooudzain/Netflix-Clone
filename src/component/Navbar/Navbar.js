import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="Nav-Wraper">
        <h2 className="H2-Wraper">NETFLIX</h2>
        <div className="Link-Wraper">
          <Link to="/">Home</Link>
          <Link to="/FavList">FavList</Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
