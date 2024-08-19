import { useContext } from "react";
import { useSelector } from 'react-redux';
import CategoryCard from '@/Components/CategoryCard/CategoryCard';
import "./CategoriesPage.scss"
import { ThemeContext } from '@/ThemeContext/ThemeContext';

const CategoriesPage = () => {
  const { categories } = useSelector((state) => state.products)
  const {theme} = useContext(ThemeContext)

  return (
    <section className="categories__page-section">
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
