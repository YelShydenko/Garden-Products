import { IoCloseOutline } from "react-icons/io5";
import "./CartProductCard.scss";
import { useContext } from "react";
import { ThemeContext } from "@/ThemeContext/ThemeContext";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { decrementProduct, incrementProduct, removeProductFromCart } from "@/store/features/productSlice";

const CartProductCard = ({ product }) => {
  const { theme } = useContext(ThemeContext); // Выбираем тему
  const dispatch = useDispatch();

  return (
    <div className="product__cart-card">
      <div className="product__image-container">
        <img
          src={`https://exam-server-5c4e.onrender.com${product.image}`}
          alt={product.title}
          className="product-img"
        />
      </div>
      <div className={`product__info info-${theme}`}>
        <div className="product__info-title">
          <h3 className="product-title">{product.title}</h3>
          <div>
            <IoCloseOutline
              className="close__icon"
              onClick={() => dispatch(removeProductFromCart(product.id))} // Чтобы удалить товар из корзины
            />
          </div>
        </div>
        <div className="price__counter">
          <div className="cart__counter">
            <button
              className="counter__btn-icon"
              onClick={() => dispatch(decrementProduct(product.id))} // Уменьшить к-во товара
            >
              <FiMinus />
            </button>
            <span className="count">{product.count}</span>
            <button
              className="counter__btn-icon"
              onClick={() => dispatch(incrementProduct(product.id))} // Увеличить к-во товара
            >
              <FiPlus />
            </button>
          </div>
          {product.discont_price !== null && product.discont_price > 0 ? (
            <div className="product__pricing">
              <span className={`product__price price-${theme}`}>
                ${(product.discont_price * product.count).toFixed(2)}
              </span>
              <span className="original__price">
                ${(product.price * product.count).toFixed(2)}
              </span>
            </div>
          ) : (
            <span className={`product__price price-${theme}`}>
              ${(product.price * product.count).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
