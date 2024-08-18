import { useDispatch, useSelector } from "react-redux";
import "./SaleProductsPage.scss";
import { useEffect } from "react";
import { fetchProducts } from "../../store/features/productSlice";
import Button from "../../Components/UI/Button/Button";
import ProductCard from "../../Components/ProductCard/ProductCard";
import FilterAndSort from "../../Components/FilterAndSort/FilterAndSort";

const SaleProductsPage = () => {
  const dispatch = useDispatch();
  const sale = useSelector((state) => state.products.sale); // вытаскиваем наш массив с продуктами по скидке

  useEffect(() => {
    dispatch(fetchProducts()); // вызываем наш фетч запрос на получения продуктов
  }, [dispatch]); // чтобы сработало один раз

  return (
    <main className="sale__products-page">
      <div className="breadcrumbs">
        <Button btnColor={"neutral"} btnSize={"XS"} btnText={"Main page"} />
        <div className="breadcrumbs__linie"></div>
        <Button btnColor={"neutral"} btnSize={"XS"} btnText={"All sales"} />
      </div>
      <FilterAndSort pageTitle={"Discounted items"} showDiscountFilter={false} />
      <section className="sale__product-list">
        {sale && sale.map((product) => <ProductCard product={product} />)}
      </section>
    </main>
  );
};

export default SaleProductsPage;
