import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCategories, fetchProducts } from '../../store/features/productSlice';
import ProductCard from '../../Components/ProductCard/ProductCard';
import './CategoriesProduct.scss'


function CategoriesProduct() {
const dispatch = useDispatch();
const { categoryId } = useParams(); // берем id категории из поисковика
const products = useSelector((state) => state.products.products); //выбираем наш массив с продуктами
const { categories } = useSelector((state) => state.products)



  useEffect(() => {
   dispatch(fetchProducts());
   dispatch(fetchCategories())
  }, [dispatch]);
 
  
  
  const title = categories?.filter( (product) => product.id === +categoryId).find((product) => product.id === +categoryId)
  

  return (
    <>
    <h1 className='categories_title'>{title?.title}</h1>
    <ul>
        {
        products && products.map((product) => {
         if (String(product.categoryId) === String(categoryId)) { // переводим в один формат и даем условие показывать только те товары в которых совпадает categoryId
                return ( 
                  <ProductCard product={product} key={product.id}/>
                );
              } else {
              return null
            }
        })
      }
    </ul>
  
    </>
  )
}

export default CategoriesProduct