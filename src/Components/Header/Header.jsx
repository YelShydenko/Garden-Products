import { useContext } from "react";
import { IoMdHeart } from "react-icons/io";
import "./Header.scss";
import ThemeComponent from "../Theme/ThemeComponent";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import { ThemeContext } from "@/ThemeContext/ThemeContext";
import { GiShoppingBag } from "react-icons/gi";
import { useSelector } from "react-redux";

const Header = () => {
  const { theme } = useContext(ThemeContext); // Передаем нашу тему
  const { favourite, cart } = useSelector((state) => state.products);

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
          />
        </div>
        <div className="nav__menu">
          <ul>
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
      </div>
    </header>
  );
};

export default Header;
