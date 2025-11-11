import React from "react";

function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "10px",
      margin: "10px",
      width: "180px",
      textAlign: "center"
    }}>
      <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px" }} />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <button style={{
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "5px",
        cursor: "pointer"
      }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
