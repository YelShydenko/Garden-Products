import { useSelector } from "react-redux";
import ProductCard from "@/Components/ProductCard/ProductCard";
import "./AllProducts.scss";
import FilterAndSort from "@/Components/FilterAndSort/FilterAndSort";
import Breadcrumbs from "@/Components/Breadcrumbs/Breadcrumbs";

function AllProducts() {
  const products = useSelector((state) =>
    state.products.filteredProducts.length > 0
      ? state.products.filteredProducts
      : state.products.products
  ); //выбираем наш массив с продуктами или отфильтроваными продуктами

   const crumbs = [
     { path: "/", label: "Main page" },
     { path: "/products/all", label: "All products" },
   ];

  return (
    <section className="all-products">
      <Breadcrumbs crumbs={crumbs} />
      {/* // Компонент сортировки и фильтрации */}
      <FilterAndSort pageTitle={"All products"} />
      <div className="all-products__grid">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
}

export default AllProducts;
