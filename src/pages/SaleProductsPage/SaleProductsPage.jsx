import { useSelector } from "react-redux";
import "./SaleProductsPage.scss";
import ProductCard from "@/Components/ProductCard/ProductCard";
import FilterAndSort from "@/Components/FilterAndSort/FilterAndSort";
import ProductSkeleton from "@/Components/ProductSkeleton/ProductSkeleton";
import Breadcrumbs from "@/Components/Breadcrumbs/Breadcrumbs";

const SaleProductsPage = () => {
  const products = useSelector((state) =>
    state.products.filteredProducts.length > 0
      ? state.products.filteredProducts
      : state.products.products
  ); //выбираем наш массив с продуктами или отфильтроваными продуктами

  const loading = useSelector((state) => state.products.loading);

   const discountedProducts = products.filter(
     (product) => product.discont_price !== null
  ); // Фильтруем наши товары со скидкой
  
   const crumbs = [ // Для хлебных крошек
     { path: "/", label: "Main page" },
     { path: "/sale/products/all", label: "All sales" },
   ];

  return (
    <section className="sale__products-page">
      <Breadcrumbs crumbs={crumbs}/>
      <FilterAndSort // Компонент сортировки и фильтрации
        pageTitle={"Discounted items"} 
        showDiscountFilter={false}
      />
      <div className="sale__product-list">
      {loading || products.length === 0 ? ( 
          <ProductSkeleton/> 
        ) : ( 
          discountedProducts.map((product) => ( 
            <ProductCard product={product} key={product.id} /> 
          )) 
        )}
      </div>
    </section>
  );
};

export default SaleProductsPage;
