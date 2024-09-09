import { useContext } from "react";
import "./CategoriesMainPage.scss";
import { useSelector } from "react-redux";
import SectionDivider from "../SectionDivider/SectionDivider";
import { ThemeContext } from "@/ThemeContext/ThemeContext";
import CategoryCard from "../CategoryCard/CategoryCard";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const CategoriesMainPage = () => {
  const categories = useSelector((state) => state.products.categories); // Выбираем наш массив с категориями
  const { theme } = useContext(ThemeContext); // Получаем нашу тему

  return (
    <section className="categories__section">
      <div className="categories__content">
        <SectionDivider
          sectionTitle={"Categories"}
          linkToPage={"/categories/all"}
          pageTitle={"All categories"}
        />
        {/* переход на страницу всех категорий */}

        <div className="categories__main-page__list">
          {categories && // отрисовка категорий
            categories
              .slice(0, 4)
              .map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  theme={theme}
                />
              ))}
          <Link to={"/categories/all"} className="adaptive__link">
            {/* Отображается только при размере 480px */}
            <Button
              btnColor={"neutral"}
              btnSize={"S"}
              btnText={"All categories"}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesMainPage;
