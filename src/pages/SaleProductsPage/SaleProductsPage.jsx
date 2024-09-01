import { useSelector } from "react-redux";
import "./SaleProductsPage.scss";
import Button from "@/Components/UI/Button/Button";
import ProductCard from "@/Components/ProductCard/ProductCard";
import FilterAndSort from "@/Components/FilterAndSort/FilterAndSort";
import ProductSkeleton from "@/Components/ProductSkeleton/ProductSkeleton";

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

  return (
    <section className="sale__products-page">
      <div className="breadcrumbs">
        <Button btnColor={"neutral"} btnSize={"XS"} btnText={"Main page"} />
        <div className="breadcrumbs__linie"></div>
        <Button btnColor={"neutral"} btnSize={"XS"} btnText={"All sales"} />
      </div>
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
