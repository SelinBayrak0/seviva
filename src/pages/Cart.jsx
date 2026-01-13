import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";


function Cart() {
const { cart, addToCart, decreaseQuantity } = useContext(CartContext);
const navigate = useNavigate();


  const totalPrice = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);


  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={addToCart}
              onDecrease={decreaseQuantity}
            />

          ))}

          <h3>Total: ${totalPrice}</h3>
          <button
           className="checkout-btn"
           onClick={() => navigate("/checkout")}
          >
           Complete Purchase
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;

