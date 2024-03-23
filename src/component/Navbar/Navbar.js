import React from "react";
import { Link } from "react-router-dom";
import FavList from "../FavList /FavList ";
function Navbar() {
  return (
    <div>
      <h1>djidi</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/FavList">FavList</Link>
      </nav>
    </div>
  );
}
export default Navbar;
