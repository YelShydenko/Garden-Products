import { useEffect } from "react";
import "./SaleProductsMainPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/features/productSlice";
import SectionDivider from "../SectionDivider/SectionDivider";
import ProductCard from "../ProductCard/ProductCard";

const SaleProducts = () => {
  const dispatch = useDispatch();
  const sale = useSelector((state) => state.products.sale); // выбираем наш массив с товарами со скидкой

  useEffect(() => {
    // вызов фетча всех товаров
    dispatch(fetchProducts());
  }, [dispatch]);
  
  // Перемешиваем массив и выбираем 4 случайных товара
  const shuffledProducts = [...sale]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <section className="sale__products-container">
      <SectionDivider
        sectionTitle={"Sale"}
        linkToPage={"/sale/products/all"}
        pageTitle={"All sales"}
      />
      <div className="sale__products-list">
        {shuffledProducts && shuffledProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default SaleProducts;
