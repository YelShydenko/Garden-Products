import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SectionDivider from "@/Components/SectionDivider/SectionDivider";
import "./Cart.scss";
import Button from "@/Components/UI/Button/Button";
import { ThemeContext } from "@/ThemeContext/ThemeContext";
import CartProductCard from "@/Components/CartProductCard/CartProductCard";
import { Link } from "react-router-dom";
import Input from "@/Components/UI/Input/Input";
import { useForm } from "react-hook-form"; 
import { clearCart } from "@/store/features/productSlice";
import OrderModalWindow from "@/Components/OrderModalWindow/OrderModalWindow";

const Cart = () => {
  const cart = useSelector((state) => state.products.cart); // Вытаскиваем наш массив с товарами в корзину
  const { theme } = useContext(ThemeContext); // ВЫбираем нашу тему
  const [isModalOpen, setIsModalOpen] = useState(false); // Для открытия и закрытия модального окна
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(); // Для контролирования нашей формы
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    const price =
      product.discont_price !== null && product.discont_price > 0
        ? product.discont_price
        : product.price;
    return acc + price * product.count;
  }, 0); // Подсчитываем всю сумму заказа

  const onSubmit = () => {
    // Выполняется при подтверждении формы
    setIsModalOpen(true); // Открываем модвльное окно
    setTimeout(() => {
      reset(); // Чистим данные формы
      dispatch(clearCart()); // Чистим корзину
    }, 2000);
  };

  // Определяем, есть ли какие-либо ошибки
  const hasErrors = Object.keys(errors).length > 0;

  const closeModalWindow = () => {
    setIsModalOpen(false);
  }; // Закрываем модальное окно

  return (
    <section className="cart__page">
      <SectionDivider
        pageTitle={"Back to the store"}
        sectionTitle={"Shopping cart"}
        linkToPage={"/"}
      />
      {cart.length > 0 ? ( // Отображается когда в корзине есть товары
        <div className="cart__container">
          <div className="cart__products-list">
            {cart &&
              cart.map((product) => (
                <CartProductCard product={product} key={product.id} />
              ))}
          </div>
          <div className={`cart__form form-${theme}`}>
            <div className="order__info">
              <p className="order__info-header">Order details</p>
              <p>{`${cart.length} items`}</p>
            </div>
            <div className="total__price-container">
              <p>Total</p>
              <span className="total__price">{`$${totalPrice.toFixed(2)}`}</span>
            </div>
            <form className="order__form" onSubmit={handleSubmit(onSubmit)}>
              <div className="input__container">
                <Input
                  placeholderName={"Name"}
                  typeName={"text"}
                  formClass={"order__form-control"}
                  pageTheme={theme}
                  registerData={register("name", {
                    // Регистрируем инпут с именем
                    required: "Name is required",
                  })}
                />
                <Input
                  placeholderName={"Phone number"}
                  typeName={"text"}
                  formClass={"order__form-control"}
                  pageTheme={theme}
                  registerData={register("phone", {
                    // Регистрируем инпут с телефоном
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d+$/, // Проверяем телефон
                      message: "Wrong input. Try again",
                    },
                  })}
                />
                <Input
                  placeholderName={"Email"}
                  typeName={"email"}
                  formClass={"order__form-control"}
                  pageTheme={theme}
                  registerData={register("email", {
                    // Регистрируем инпут с почтой
                    required: "Email address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Проверяем почту
                      message: "Wrong input. Try again",
                    },
                  })}
                />
                {/* Если есть ошибки, выводим сообщение */}
                {hasErrors && (
                  <p className="order__error-message">Wrong input. Try again</p>
                )}
              </div>
              <Button
                type="submit"
                btnColor={"green"}
                btnSize={"L"}
                btnText={"Order"}
              />
            </form>
          </div>
        </div>
      ) : (
        // Отображается когда корзина пустая
        <div className="empty__cart">
          <p className={`empty__cart-info info-${theme}`}>
            Looks like you have no items in your basket currently.
          </p>
          <Link to={"/products/all"}>
            <Button
              btnColor={"green"}
              btnSize={"M"}
                btnText={"Continue Shopping"}
            />
          </Link>
        </div>
      )}
      {isModalOpen && <OrderModalWindow onClose={closeModalWindow} />} 
      {/* Модальное окно */}
    </section>
  );
};

export default Cart;
