import "./FilterAndSort.scss";

const FilterAndSort = ({ pageTitle, showDiscountFilter = true }) => {
  return (
    <div className="filter__sort-section">
      <h3 className="page__title">{pageTitle}</h3>
      <div className="sort__filter-container">
        <div className="filter__by-price">
          <label>Price </label>
          <input
            className="filter__item"
            type="text"
            name="minPrice"
            placeholder="from"
          />
          <input
            className="filter__item"
            type="text"
            name="maxPrice"
            placeholder="to"
          />
        </div>
        {showDiscountFilter && (
          <div className="discount__filter">
            <label className="discount__filter-check">
              Discounted items
              <input type="checkbox" className="discount__filter-check__item" />
              <span className="checkmark"></span>
            </label>
          </div>
        )}
        <div className="sort__by-price">
          <label htmlFor="sort__by">Sorted</label>
          <select className="sort__item" name="sort__by" id="sort__by">
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
