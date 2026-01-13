import React from "react";

function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>

      <div className="cart-buttons">
        <button onClick={() => onDecrease(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrease(item)}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
