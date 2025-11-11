import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import productsData from "./products.json";

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🛒 My E-commerce Store</h1>
      <input
        type="text"
        placeholder="Search Products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "20px",
          width: "200px",
          borderRadius: "10px",
          border: "1px solid #ccc"
        }}
      />
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
