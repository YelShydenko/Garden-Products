import { useEffect, useState } from "react";
import "./DailyProductModal.scss";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { addProductToCart, setFavourite, removeProductFromFavourite } from "@/store/features/productSlice";

const DailyProductModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { products, favourite } = useSelector((state) => state.products); // Выбираем наш массив с продуктами и избранными
  const [productOfTheDay, setProductOfTheDay] = useState(null); // Для управления продуктом дня

  useEffect(() => {
    if (products.length > 0) {
      const currentDate = new Date().getDate(); // Получаем текущий день месяца
      const productIndex = currentDate % products.length; // Используем остаток от деления для выбора продукта
      const selectedProduct = { ...products[productIndex] }; // Клонируем объект, чтобы не менять оригинал
      selectedProduct.discont_price = selectedProduct.price * 0.5; // Применяем скидку 50%
      setProductOfTheDay(selectedProduct); // Устанавливаем наш продукт дня
    }
  }, [products]);

  const isProductFavourite = favourite.some((item) => item.id === productOfTheDay?.id); // Проверяем, есть ли товар в избранном для стиля иконки

  const handleAddToCart = () => {
    if (productOfTheDay) {
      dispatch(
        addProductToCart({ // Добавление товара в корзину
          ...productOfTheDay,
          discont_price: productOfTheDay.discont_price, // Сохраняем скидочную цену
        })
      );
    }
  };

  const handleFavouriteToggle = () => {
    if (productOfTheDay) {
      if (isProductFavourite) {
        dispatch(removeProductFromFavourite(productOfTheDay.id)); // Удаление товара из избранного
      } else {
        dispatch(setFavourite(productOfTheDay)); // Добавление товара в избранное
      }
    }
  };

  return (
    <div className="day__modal-background">
      <div className="day__modal-window">
        <div className="day__modal-header">
          <h4 className="modal__header-title">
            50% discount on product of the day!
          </h4>
          <div>
            <IoCloseOutline
              className="day__modal-close__icon"
              onClick={onClose}
            />
          </div>
        </div>
        {productOfTheDay && (
          <div className="day__product-card">
            <div className="product__image">
              <img
                src={`https://exam-server-5c4e.onrender.com${productOfTheDay.image}`}
                alt={productOfTheDay.title}
              />
              <span className="discount__badge">-50%</span>
              <IoMdHeart
                className={`icon ${
                  isProductFavourite ? "icon__favourite" : ""
                }`} // Меняет класс иконки в зависимости товар в избранном или нет
                onClick={handleFavouriteToggle} 
              />
            </div>
            <div className="product__description">
              <h3 className="product__description-name">
                {productOfTheDay.title}
              </h3>
              <div className="product__pricing">
                <span className="product__price">
                  ${productOfTheDay.discont_price.toFixed(2)}
                </span>
                <span className="original__price">
                  ${productOfTheDay.price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}
        <Button
          btnColor={"white"}
          btnSize={"L"}
          btnText={"Add to cart"}
          handleOnClick={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default DailyProductModal;
