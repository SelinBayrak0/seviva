import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div className="container">
      <h1>Featured Products</h1>

      <div className="grid">
        {products
          .filter((p) => [2, 4, 8, 10].includes(p.id))
          .map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
      </div>

      {/* BUTON */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Link to="/products">
          <button>View All Products</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
