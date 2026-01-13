import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="card-link">
      <div className="card">
        <img src={product.image} alt={product.name} className="product-image"/>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;

