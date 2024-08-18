import { useDispatch, useSelector } from "react-redux";
import "./SaleProductsPage.scss";
import { useEffect } from "react";
import { fetchProducts } from "../../store/features/productSlice";
import Button from "../../Components/UI/Button/Button";
import ProductCard from "../../Components/ProductCard/ProductCard";
import FilterAndSort from "../../Components/FilterAndSort/FilterAndSort";

const SaleProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) =>
    state.products.filteredProducts.length > 0
      ? state.products.filteredProducts
      : state.products.products
  ); //выбираем наш массив с продуктами или отфильтроваными продуктами

  useEffect(() => {
    dispatch(fetchProducts()); // вызываем наш фетч запрос на получения продуктов
  }, [dispatch]); // чтобы сработало один раз

   const discountedProducts = products.filter(
     (product) => product.discont_price !== null
   ); // Фильтруем наши товары со скидкой 

  return (
    <main className="sale__products-page">
      <div className="breadcrumbs">
        <Button btnColor={"neutral"} btnSize={"XS"} btnText={"Main page"} />
        <div className="breadcrumbs__linie"></div>
        <Button btnColor={"neutral"} btnSize={"XS"} btnText={"All sales"} />
      </div>
      <FilterAndSort // Компонент сортировки и фильтрации
        pageTitle={"Discounted items"} 
        showDiscountFilter={false}
      />
      <section className="sale__product-list">
        {discountedProducts &&
          discountedProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </section>
    </main>
  );
};

export default SaleProductsPage;
