import React from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons";

export default function Nav({ cartItemsQty }) {
  return (
    <nav className="navBar">
      <header>
        <h1>pre-vintage/vintage clothes</h1>
      </header>
      <section>
        <Link to="/">home</Link>
        <Link to="/shop">shop</Link>
        <Link to="/cart">
          <BsBag />
        </Link>
      </section>
    </nav>
  );
}
