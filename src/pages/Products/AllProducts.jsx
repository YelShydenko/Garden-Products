import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/features/productSlice';
import ProductCard from '../../Components/ProductCard/ProductCard';
import './AllProducts.scss';

function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="all-products">
      <h1 className="all-products__title">All products</h1>
      <div className="all-products__grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
