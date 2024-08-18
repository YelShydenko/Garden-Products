import { useEffect } from "react";
import "./SaleProductsMainPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/features/productSlice";
import SectionDivider from "../SectionDivider/SectionDivider";
import ProductCard from "../ProductCard/ProductCard";

const SaleProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products); // выбираем наш массив с товарами

  useEffect(() => {
    // вызов фетча всех товаров
    dispatch(fetchProducts());
  }, [dispatch]);

  const discountedProducts = products.filter(
    (product) => product.discont_price !== null
  ); // Фильтруем наши товары со скидкой
  
  // Перемешиваем массив и выбираем 4 случайных товара
  const shuffledProducts = [...discountedProducts]
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
