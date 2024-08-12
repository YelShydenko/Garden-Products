import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./Header.scss";
import ThemeComponent from '../Theme/ThemeComponent';
import { useTheme } from '../../ThemeContext/ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <div className='logo'>
        <img src="./images/logo.svg" alt="Logo" />
        <ThemeComponent />
      </div>
      <div className='header__content'>
        <div className='button__discount'>
          <button className='btn'>1 day discount!</button>
        </div>
        <div className='nav__menu'>
          <ul>
            <li><Link to={"/"}>Main Page</Link></li>
            <li><Link to={"/categiries"}>Categories</Link></li>
            <li><Link to={"/products/all"}>All products</Link></li>
            <li><Link to={"/sale/products/all"}>All sales</Link></li>
          </ul>
        </div>
      </div>
      <div className='icons'>
        <IoMdHeartEmpty />
        <HiOutlineShoppingBag />
      </div>
    </header>
  );
};

export default Header;