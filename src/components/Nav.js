import React from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

export default function Nav() {
  return (
    <nav className="navBar">
      <header>
        <h1>pre-vintage/vintage clothes</h1>
      </header>
      <section>
        <Link to="/">home</Link>
        <Link to="/shop">shop</Link>

        <BsBag />
      </section>
    </nav>
  );
}
