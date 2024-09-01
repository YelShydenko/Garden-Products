import { useSelector } from "react-redux";
import ProductCard from "@/Components/ProductCard/ProductCard";
import "./AllProducts.scss";
import FilterAndSort from "@/Components/FilterAndSort/FilterAndSort";
import ProductSkeleton from "@/Components/ProductSkeleton/ProductSkeleton";

function AllProducts() {
  const products = useSelector((state) =>
    state.products.filteredProducts.length > 0
      ? state.products.filteredProducts
      : state.products.products
  ); //выбираем наш массив с продуктами или отфильтроваными продуктами

  const loading = useSelector((state) => state.products.loading);

  return (
    <section className="all-products">
      {/* // Компонент сортировки и фильтрации */}
      <FilterAndSort pageTitle={"All products"} />
      <div className="all-products__grid">
      {loading || products.length === 0 ? ( 
          <ProductSkeleton /> 
        ) : ( 
          products.map((product) => ( 
            <ProductCard key={product.id} product={product} /> 
          )) 
        )}
      </div>
    </section>
  );
}

export default AllProducts;
