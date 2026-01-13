import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const { cart, addToCart, decreaseQuantity } = useContext(CartContext);

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="detail-image" />
      <p>{product.description}</p>
      <p>${product.price}</p>

      <div className="quantity-control">
        <button
          onClick={() => decreaseQuantity(product.id)}
          disabled={quantity === 0}
        >
          -
        </button>

        <span>{quantity}</span>

        <button onClick={() => addToCart(product)}>+</button>
      </div>
    </div>
  );
}

export default ProductDetail;
