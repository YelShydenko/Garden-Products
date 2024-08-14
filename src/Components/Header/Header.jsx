import { useContext } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./Header.scss";
import ThemeComponent from "../Theme/ThemeComponent";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import { ThemeContext } from "@/ThemeContext/ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext); // Передаем нашу тему

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
        <Link to={"/favorites"}>
          <IoMdHeartEmpty className={`icons-${theme}`} />
        </Link>
        <Link to={"/cart"}>
          <HiOutlineShoppingBag className={`icons-${theme}`} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
