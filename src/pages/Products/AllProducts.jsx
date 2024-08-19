import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/features/productSlice";
import ProductCard from "@/Components/ProductCard/ProductCard";
import "./AllProducts.scss";
import FilterAndSort from "@/Components/FilterAndSort/FilterAndSort";

function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) =>
    state.products.filteredProducts.length > 0
      ? state.products.filteredProducts
      : state.products.products
  ); //выбираем наш массив с продуктами или отфильтроваными продуктами

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="all-products">
      {/* // Компонент сортировки и фильтрации */}
      <FilterAndSort pageTitle={"All products"} />
      <div className="all-products__grid">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default AllProducts;
