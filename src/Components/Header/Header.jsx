import { useContext, useState } from "react";
import { IoMdHeart } from "react-icons/io";
import "./Header.scss";
import ThemeComponent from "../Theme/ThemeComponent";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import { ThemeContext } from "@/ThemeContext/ThemeContext";
import { GiShoppingBag } from "react-icons/gi";
import { useSelector } from "react-redux";
import DailyProductModal from "../DailyProductModal/DailyProductModal";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const { theme } = useContext(ThemeContext); // Получаем нашу тему
  const { favourite, cart } = useSelector((state) => state.products); // Выбираем наши массивы избранных и корзины
  const [isOpenModal, setIsOpenModal] = useState(false); // Для управления модальным окном
  const [isOpenMenu, setIsOpenMenu] = useState(false); // Для управления бургер меню при адаптиве

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const closeModalWindow = () => {
    setIsOpenModal(false);
  }; // Закрываем модальное окно

  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>
          <img
            src={`${import.meta.env.APP_WEB_URL}/images/logo.svg`}
            alt="Logo"
          />
        </Link>
        <ThemeComponent />
      </div>
      <div className="header__content">
        <div className="button__discount">
          <Button
            btnColor={"green"}
            btnSize={"XS"}
            btnText={"1 day discount!"}
            handleOnClick={toggleModal}
          />
        </div>
        <div className="nav__menu">
          <ul className="nav__menu-list">
            <li>
              <Link to={"/"} className={`nav__menu-link link-${theme}`}>
                Main Page
              </Link>
            </li>
            <li>
              <Link
                to={"/categories/all"}
                className={`nav__menu-link link-${theme}`}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to={"/products/all"}
                className={`nav__menu-link link-${theme}`}
              >
                All products
              </Link>
            </li>
            <li>
              <Link
                to={"/sale/products/all"}
                className={`nav__menu-link link-${theme}`}
              >
                All sales
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="icons">
        <Link className="header__icon" to={"/favorites"}>
          <IoMdHeart className={`icon-${theme}`} />
          {favourite.length > 0 && (
            <div className="quantity">
              <p>{favourite.length}</p>
            </div>
          )}
        </Link>
        <Link className="header__icon" to={"/cart"}>
          <GiShoppingBag className={`icon-${theme}`} />
          {cart.length > 0 && (
            <div className="quantity">
              <p>{cart.length}</p>
            </div>
          )}
        </Link>
        <div className="menu"> 
          {/* Отображается при размере 725px */}
          {isOpenMenu ? (
            <IoCloseOutline
              className={`menu__icon menu-${theme} menu-close`}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            />
          ) : (
            <AiOutlineMenu
              className={`menu__icon menu-${theme}`}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            />
          )}

          <div
            className={`burger__menu ${
              isOpenMenu ? "burger__menu__active" : ""
            }`}
          >
            <ul className={`nav__menu-list nav__menu-${theme} `}>
              <li>
                <Link to={"/"} className={`nav__menu-link menu-${theme}`}>
                  Main Page
                </Link>
              </li>
              <li>
                <Link
                  to={"/categories/all"}
                  className={`nav__menu-link menu-${theme}`}
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to={"/products/all"}
                  className={`nav__menu-link menu-${theme}`}
                >
                  All products
                </Link>
              </li>
              <li>
                <Link
                  to={"/sale/products/all"}
                  className={`nav__menu-link menu-${theme}`}
                >
                  All sales
                </Link>
              </li>
              <li>
                <Button
                  btnColor={"green"}
                  btnSize={"XS"}
                  btnText={"1 day discount!"}
                  handleOnClick={toggleModal}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isOpenModal && <DailyProductModal onClose={closeModalWindow} />}
    </header>
  );
};

export default Header;
