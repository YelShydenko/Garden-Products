import { useSelector } from "react-redux";
import ProductCard from "@/Components/ProductCard/ProductCard";
import FilterAndSort from "@/Components/FilterAndSort/FilterAndSort";
import "./FavoritesPage.scss";
import Button from "@/Components/UI/Button/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "@/ThemeContext/ThemeContext";
import ProductSkeleton from "@/Components/ProductSkeleton/ProductSkeleton";
import Breadcrumbs from "@/Components/Breadcrumbs/Breadcrumbs";

const FavoritesPage = () => {
  const favourite = useSelector((state) =>
    state.products.filteredFavourite.length > 0
      ? state.products.filteredFavourite
      : state.products.favourite
  ); // Извлекаем избранные товары из состояния Redux

  const loading = useSelector((state) => state.products.loading);

  const { theme } = useContext(ThemeContext); // Выбор нашей темы

  const crumbs = [ // Для хлебных крошек
    { path: "/", label: "Main page" },
    { path: "/favorites", label: "Liked products" },
  ];
  
  return (
    <section className="favorite__product-section">
      <Breadcrumbs crumbs={crumbs}/>
      <FilterAndSort
        pageTitle={"Liked products"}
        showDiscountFilter={false}
        isFavouritePage={true}
      />

      {favourite.length > 0 ? (
        <div className="favorite__product-list">
          {loading ? ( 
            <ProductSkeleton /> 
          ) : ( 
            favourite.map((product) => ( 
              <ProductCard product={product} key={product.id} /> 
            )) 
          )}
        </div>
      ) : (
        <div className="empty__favourite">
          <p className={`empty__favourite-info info-${theme}`}>
            Looks like you have no liked items currently.
          </p>
          <Link to={"/products/all"}>
            <Button
              btnColor={"green"}
              btnSize={"M"}
              btnText={"Continue Shopping"}
            />
          </Link>
        </div>
      )}
    </section>
  );
};

export default FavoritesPage;
