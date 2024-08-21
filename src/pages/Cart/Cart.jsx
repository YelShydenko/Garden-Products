import { useContext } from "react";
import { useSelector } from "react-redux";
import SectionDivider from "@/Components/SectionDivider/SectionDivider";
import "./Cart.scss";
import Button from "@/Components/UI/Button/Button";
import { ThemeContext } from "@/ThemeContext/ThemeContext";
import CartProductCard from "../../Components/CartProductCard/CartProductCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.products.cart); // Вытаскиваем наш массив с товарами в корзину
  const { theme } = useContext(ThemeContext);
  return (
    <section className="cart__page">
      <SectionDivider
        pageTitle={"Back to the store"}
        sectionTitle={"Shopping cart"}
        linkToPage={"/"}
      />
      {cart.length > 0 ? (
        <div className="cart__container">
          <div className="cart__products-list">
            {cart &&
              cart.map((product) => (
                <CartProductCard product={product} key={product.id} />
              ))}
          </div>
          <div className={`cart__form form-${theme}`}>
            <p>Order details</p>
            <p>{`${cart.length} items`}</p>
            <div className="total__price">
              <p>Total</p>
              <span>1000$</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty__cart">
          <p className={`empty__cart-info info-${theme}`}>
            Looks like you have no items in your basket currently.
          </p>
          <Link to={'/products/all'}>
            <Button
              btnColor={"green"}
              btnSize={"M"}
              btnText={"Continue Shopping"}
            />
          </Link>
        </div>
      )}
    </section>
  );
};

export default Cart;
