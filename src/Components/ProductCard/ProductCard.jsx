import { useContext } from "react";
import { ThemeContext } from "@/ThemeContext/ThemeContext";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import { GiShoppingBag } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";

const ProductCard = ({ product }) => {
  const { theme } = useContext(ThemeContext);

  const discountPercentage = product.discont_price
    ? Math.round(
        // Вычисляем размер скидки
        ((product.price - product.discont_price) / product.price) * 100
      )
    : 0;

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
          <IoMdHeart className="icon" />
          <GiShoppingBag className="icon" />
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
