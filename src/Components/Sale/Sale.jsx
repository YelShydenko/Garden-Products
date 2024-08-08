import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDiscountedProducts } from '../features/saleSlice';
import './Sale.scss';

function Sale() {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.sale);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDiscountedProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="sale-container">
      {products.map((product) => (
        <div key={product.id} className="sale-item">
          <img src={product.image} alt={product.name} className="sale-item-image" />
          <div className="sale-item-details">
            <h3 className="sale-item-name">{product.name}</h3>
            <div className="sale-item-prices">
              <span className="sale-item-old-price">${product.oldPrice.toFixed(2)}</span>
              <span className="sale-item-new-price">${product.newPrice.toFixed(2)}</span>
            </div>
            <div className="sale-item-discount">
              Скидка {Math.round(((product.oldPrice - product.newPrice) / product.oldPrice) * 100)}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sale;
