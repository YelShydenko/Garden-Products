import { useDispatch } from "react-redux";
import "./FilterAndSort.scss";
import { filterByPrice, sortBy } from "@/store/features/productSlice";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/ThemeContext/ThemeContext";
import { filterFavourite, sortFavourite } from "@/store/features/productSlice";

const FilterAndSort = ({ pageTitle, showDiscountFilter = true, isFavouritePage = false }) => {
  const { theme } = useContext(ThemeContext); // Выбор нашей темы
  const dispatch = useDispatch();
  const [minPrice, setMinPrice] = useState(""); // Храним минимальную цену для фильтрации
  const [maxPrice, setMaxPrice] = useState(""); // Храним максимальную цену для фильтрации
  const [isDiscounted, setIsDiscounted] = useState(false); // Храним состояние чекбокса
  const [select, setSelect] = useState("default"); // Для сортировки

  // Обработчик сортировки
  const handleSort = (e) => {
    setSelect(e.target.value);
  };

  // Автоматически применяем фильтр по цене или скидке при изменении minPrice, maxPrice или isDiscounted
  useEffect(() => {
    const min = minPrice !== "" ? Number(minPrice) : 0; // если не задано, минимум 0
    const max = maxPrice !== "" ? Number(maxPrice) : Infinity; // если не задано, максимум бесконечность

    // Применяем фильтрацию по цене и скидке
    if (isFavouritePage) {
      // Если это страница избранных товаров
      dispatch(
        filterFavourite({
          minPrice: min,
          maxPrice: max,
          discount: isDiscounted
        })
      );
      dispatch(sortFavourite({ value: select }));
    } else {
      // Если это страница обычных товаров
      dispatch(
        filterByPrice({
          minPrice: min,
          maxPrice: max,
          discount: isDiscounted
        })
      );
      dispatch(sortBy({ value: select }));
    }
  }, [minPrice, maxPrice, isDiscounted, select, dispatch]);

  return (
    <div className="filter__sort-section">
      <h3 className={`page__title title-${theme}`}>{pageTitle}</h3>
      <div className="sort__filter-container">
        <div className="filter__by-price">
          <label className={`price__label label-${theme}`}>Price</label>
          <input
            className="filter__item"
            type="text"
            name="minPrice"
            placeholder="from"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)} // Обновляем значение minPrice при вводе
          />
          <input
            className="filter__item"
            type="text"
            name="maxPrice"
            placeholder="to"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)} // Обновляем значение maxPrice при вводе
          />
        </div>
        {showDiscountFilter && ( // Возможность выбрать отображается ли фильтрация по скидке
          <div className="discount__filter">
            <label className={`discount__filter-check label-${theme}`}>
              Discounted items
              <input
                type="checkbox"
                className="discount__filter-check__item"
                onChange={(e) => setIsDiscounted(e.target.checked)} // Обновляем состояние isDiscounted
              />
              <span className="checkmark"></span>
            </label>
          </div>
        )}
        <div className="sort__by-price">
          <label htmlFor="sort__by" className={`sort__label label-${theme}`}>
            Sorted
          </label>
          <select
            className="sort__item"
            name="sort__by"
            id="sort__by"
            onChange={handleSort}
            value={select}
          >
            <option value="default">by default</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterAndSort;
