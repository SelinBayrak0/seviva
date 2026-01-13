import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";


function Products() {
const [search, setSearch] = useState("");


return (
<div className="container">
<h1>All Products</h1>
<input
placeholder="Search"
onChange={(e) => setSearch(e.target.value)}
/>
<div className="grid">
{products
.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
.map((p) => (
<ProductCard key={p.id} product={p} />
))}
</div>
</div>
);
}



export default Products;
