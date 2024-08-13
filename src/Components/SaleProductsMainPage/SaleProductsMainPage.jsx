import React, { useContext, useEffect } from "react";
import "./SaleProductsMainPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/features/productSlice";
import SectionDivider from "../SectionDivider/SectionDivider";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { ThemeContext } from "@/ThemeContext/ThemeContext";

const SaleProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products); // выбираем наш массив с товарами
  const { theme } = useContext(ThemeContext); // Передаем нашу тему

  useEffect(() => {
    // вызов фетча всех товаров
    dispatch(fetchProducts());
  }, [dispatch]);

  // Фильтруем, чтобы были только товары со скидкой
  const saleProducts = products.filter(
    (product) => product.discont_price !== null
  );

  // Перемешиваем массив и выбираем 4 случайных товара
  const shuffledProducts = saleProducts
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
        {shuffledProducts.map((product) => {
          const discountPercentage = Math.round(
            // Вычисляем размер скидки
            ((product.price - product.discont_price) / product.price) * 100
          );
          return (
            <div className={`sale__product-card ${theme}`} key={product.id}>
              <div className="product__image-container">
                <img
                  src={`https://exam-server-5c4e.onrender.com${product.image}`}
                  alt={product.title}
                  className={`product__image image-${theme}`}
                />
                <div className="product__image-icons">
                  <IoMdHeartEmpty className="icon" />
                  <HiOutlineShoppingBag className="icon" />
                </div>
                <span className="discount__badge">{`-${discountPercentage}%`}</span>
              </div>
              <div className="product__info">
                <h3 className="product__name">{product.title}</h3>
                <div className="product__pricing">
                  <span className={`product__price price-${theme}`}>
                    ${product.discont_price.toFixed(2)}
                  </span>
                  <span className="original__price">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SaleProducts;
