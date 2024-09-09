import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.scss";

function CategoryCard({ category, theme }) {
    
  return (
    <div className="categories__item">
      <Link to={`/categories/${category.id}`} className="categories__item-link">
        <img
          className="categories__item-image"
          src={`https://exam-server-5c4e.onrender.com${category.image}`}
          alt={category.title}
        />
        <p className={`categories__item-title ${theme}`}>{category.title}</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
