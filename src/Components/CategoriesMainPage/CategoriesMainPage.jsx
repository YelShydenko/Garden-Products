import React, { useEffect } from "react";
import "./CategoriesMainPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/features/productSlice";
import { Link } from "react-router-dom";
import SectionDivider from "../SectionDivider/SectionDivider";

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
          <SectionDivider sectionTitle={'Categories'} linkToPage={'/categories/all'} pageTitle={'All categories'} />
        {/* переход на страницу всех категорий */}
        
        <div className="categories__list">
          {categories && // отрисовка категорий
            categories.slice(0, 4).map((category) => (
              <div key={category.id}>
                <Link to={`/categories/${category.id}`} className="categories__item">
                  <img
                    className="categories__item-image"
                    src={`https://exam-server-5c4e.onrender.com${category.image}`}
                    alt={category.title}
                  />
                  <p className="categories__item-title">{category.title}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesMainPage;
