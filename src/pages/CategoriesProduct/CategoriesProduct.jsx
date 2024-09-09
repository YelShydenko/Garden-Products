import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "@/Components/ProductCard/ProductCard";
import "./CategoriesProduct.scss";
import FilterAndSort from "@/Components/FilterAndSort/FilterAndSort";
import ProductSkeleton from "@/Components/ProductSkeleton/ProductSkeleton";
import Breadcrumbs from "@/Components/Breadcrumbs/Breadcrumbs";

function CategoriesProduct() {
  const { categoryId } = useParams(); // берем id категории из поисковика
  const products = useSelector((state) =>
    state.products.filteredProducts.length > 0
      ? state.products.filteredProducts
      : state.products.products
  ); //выбираем наш массив с продуктами или отфильтроваными продуктами
  const { categories, loading } = useSelector((state) => state.products); //выбираем наш массив с категориями

  const title = categories
    ?.filter((product) => product.id === +categoryId)
    .find((product) => product.id === +categoryId);
  
  const crumbs = [ // Для хлебных крошек
    { path: "/", label: "Main page" },
    { path: "/categories/all", label: "Categories" },
    { path: `/categories/${categoryId}`, label: `${title.title}`}
  ];

  return (
    <section className="categories_products-section">
      <Breadcrumbs crumbs={crumbs} />
      <FilterAndSort pageTitle={title?.title} />
      <div className="categories_product-list">
      {loading || products.length === 0 ? ( 
          <ProductSkeleton /> 
        ) : ( 
          products.map((product) => { 
            if (String(product.categoryId) === String(categoryId)) { 
              // переводим в один формат и даем условие показывать только те товары в которых совпадает categoryId 
              return <ProductCard product={product} key={product.id} />; 
            } else { 
              return null; 
            } 
          }) 
        )}
      </div>
    </section>
  );
}

export default CategoriesProduct;
