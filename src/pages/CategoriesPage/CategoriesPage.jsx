import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/features/productSlice';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import "./CategoriesPage.scss"
import { ThemeContext } from '@/ThemeContext/ThemeContext';



const CategoriesPage = () => {
  
const dispatch = useDispatch()

  const { categories } = useSelector((state) => state.products)
  const {theme} = useContext(ThemeContext)
  
  // вызываю функцию fetchCategories чтоб загрузить список категорий, в массиве зависимостей слежу за dispatch
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <div className="categories__section">
      <h2>Categories</h2>
      <div className="categories__content">
        <div className="categories__list">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} theme= {theme} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoriesPage
