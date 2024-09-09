import { useContext } from "react";
import { ThemeContext } from "@/ThemeContext/ThemeContext";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import { GiShoppingBag } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "@/store/features/productSlice";
import { removeProductFromCart } from "@/store/features/productSlice";
import { setFavourite, removeProductFromFavourite } from "@/store/features/productSlice";

const ProductCard = ({ product }) => {
  const { theme } = useContext(ThemeContext); // Получаем нашу тему
  const dispatch = useDispatch();
  const {cart, favourite} = useSelector((state) => state.products); // Получаем корзинy из productSlice

  const isProductInCart = cart.some((item) => item.id === product.id); // Проверяем, есть ли товар в корзине

  const isProductFavourite = favourite.some((item) => item.id === product.id);// Проверяем, есть ли товар в избранном

  const discountPercentage = product.discont_price
    ? Math.round(
        // Вычисляем размер скидки
        ((product.price - product.discont_price) / product.price) * 100
      )
    : 0;
  
  const handleCartToggle = () => {
    if (isProductInCart) {
      dispatch(removeProductFromCart(product.id)); // Удаляем товар из корзины
    } else {
      dispatch(addProductToCart(product)); // Добавляем товар в корзину
    }
  }

  const handleFavouriteToggle = () => {
    if (isProductFavourite) {
      dispatch(removeProductFromFavourite(product.id)); // Удаляем товар из избранного
    } else {
      dispatch(setFavourite(product)); // Добавляем товар в избранное
    }
  };
  
  return (
    <div className={`product__card card-${theme}`}>
      <div className="product__image-container">
        <div className="img_buttonWrapper">
          <img
            src={`https://exam-server-5c4e.onrender.com${product.image}`}
            alt={product.title}
            className={`product__image image-${theme}`}
          />
        </div>
        <div className="product__image-icons">
        <IoMdHeart
            className={`icon ${isProductFavourite ? "icon__favourite" : ""}`} // Меняет класс иконки в зависимости от избранного
            onClick={handleFavouriteToggle}
          />
          <GiShoppingBag
            className={`icon ${isProductInCart ? "icon__in-cart" : ""}`}
            onClick={handleCartToggle}
          />
        </div>
        {product.discont_price && product.discont_price > 0 && (
          <span className="discount__badge">{`-${discountPercentage}%`}</span>
        )}
      </div>
      <Link to={`/products/${product.id}`}>
        <div className="product__info">
          <h3 className={`product__name name-${theme}`}>{product.title}</h3>
          <div className="product__pricing">
            {product.discont_price !== null && product.discont_price > 0 ? (
              <>
                <span className={`product__price price-${theme}`}>
                  ${product.discont_price.toFixed(2)}
                </span>
                <span className="original__price">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className={`product__price price-${theme}`}>
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
