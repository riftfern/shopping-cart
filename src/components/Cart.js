import React from "react";
import { Link, useHistory } from "react-router-dom";
import CartItem from "./CartItem";

export default function Cart({ items, deleteCartItem, changeQty }) {
  const { goBack } = useHistory();
  const cartItems = items.map((item) => <CartItem />);

  return <div className="Cart"></div>;
}
