import { useContext } from "react";
import { useSelector } from 'react-redux';
import CategoryCard from '@/Components/CategoryCard/CategoryCard';
import "./CategoriesPage.scss"
import { ThemeContext } from '@/ThemeContext/ThemeContext';
import Breadcrumbs from "@/Components/Breadcrumbs/Breadcrumbs";

const CategoriesPage = () => {
  const { categories } = useSelector((state) => state.products) // Выбираем наш массив с продуктами
  const { theme } = useContext(ThemeContext) // Получаем нашу тему
  const crumbs = [ // Для хлебных крошек
    { path: "/", label: "Main page" },
    { path: "/categories/all", label: "Categories" },
  ];

  return (
    <section className="categories__page-section">
      <Breadcrumbs crumbs={crumbs}/> 
      <h2 className={`categories__section-title title-${theme}`}>Categories</h2>
      <div className="categories__content">
        <div className="categories__list">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesPage
