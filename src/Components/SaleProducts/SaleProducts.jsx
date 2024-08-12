import React, { useState, useEffect } from "react";
import "./SaleProducts.scss";

const SaleProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://exam-server-5c4e.onrender.com/products/all")
      .then((response) => response.json())
      .then((data) => setProducts(data));
      
  }, []);

  

  const saleProducts = products.filter((product) => product.discont_price !== null);


  

  return (
    <div className="sale-products-container">
      <h2 className="sale-title">Sale</h2>
      <div className="sale-products-list">
        {saleProducts.map((product) => {
          const discountPercentage = Math.round(
            ((product.price - product.discont_price) / product.price) * 100
            
          );

          return (
            <div className="sale-product-card" key={product.id}>
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="discount-badge">{`-${discountPercentage}%`}</div>
              <h3 className="product-name">{product.title}</h3>
              <div className="product-pricing">
                <span className="product-price">${product.discont_price.toFixed(2)}</span>
                <span className="original-price">${product.price.toFixed(2)}</span>
              </div>
            </div>
          );
        })}
      </div>
      <button className="all-sales-button">All sales</button>
    </div>
  );
};



export default SaleProducts;
