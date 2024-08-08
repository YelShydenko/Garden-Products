import React, { useEffect } from "react";
import "./CategoriesMainPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/features/productSlice";
import { Link } from "react-router-dom";

const CategoriesMainPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories); // выбираем наш массив с категориями

  useEffect(() => {
    //вызов фетча категорий
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <section className="categories__section">
      <div className="categories__content">
        <div className="categories__header">
          <h3>Categories</h3>
          <div className="categories__nav">
            <div className="categories__line"></div>
            <button className="categories__btn">
              <Link to="/categories">All categories</Link>
                      </button> 
                      {/* Переход на страницу всех категорий */}
          </div>
        </div>
        <div className="categories__list">
          {categories && // отрисовка категорий
            categories.slice(0, 4).map((category) => (
              <div className="categories__item" key={category.id}>
                <img
                  className="categories__item-image"
                  src={`https://exam-server-5c4e.onrender.com${category.image}`}
                  alt={category.title}
                />
                <p className="categories__item-title">{category.title}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesMainPage;