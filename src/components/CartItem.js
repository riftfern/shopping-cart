import React from "react";
import { Link } from "react-router-dom";

export default function CartItem({
  id,
  itemName,
  imageId,
  price,
  qty,
  deleteCartItem,
  changeQty,
}) {
  const handleDelete = () => deleteCartItem(id);
  const handleIncrease = () => changeQty(id, 1);
  const handleDecrease = () => changeQty(id, -1);

  return (
    <div className="cartImage">
      <img>image</img>
      <div>itemName</div>
      <div>changeQty</div>
      <div>increase quantity</div>
      <div>delete btn</div>
    </div>
  );
}
