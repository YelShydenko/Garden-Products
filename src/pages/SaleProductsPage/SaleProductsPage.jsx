import { useDispatch, useSelector } from 'react-redux'
import './SaleProductsPage.scss'
import { useEffect } from 'react';
import { fetchProducts } from '../../store/features/productSlice';
import Button from '../../Components/UI/Button/Button';
import ProductCard from '../../Components/ProductCard/ProductCard';

const SaleProductsPage = () => {
    const dispatch = useDispatch();
    const sale = useSelector((state) => state.products.sale); // вытаскиваем наш массив с продуктами по скидке

    useEffect(() => {
        dispatch(fetchProducts()) // вызываем наш фетч запрос на получения продуктов
    }, [dispatch]) // чтобы сработало один раз

    return (
        <main className='sale__products-page'>
            <div className='breadcrumbs'>
                <Button btnColor={"neutral"} btnSize={"XS"} btnText={'Main page'} />
                <div className='breadcrumbs__linie'></div>
                <Button btnColor={'neutral'} btnSize={'XS'} btnText={'All sales'} />
            </div>
            <h3 className='page__title'>Discounted items</h3>
            <div className='sort__filter-container'>
                <div className='filter__by-price'>
                    <label >Price </label>
                    <input className='filter__item' type="text" name='minPrice' placeholder='from' />
                    <input className='filter__item' type="text" name='maxPrice' placeholder='to' />
                </div>
                <div className='sort__by-price'>
                    <label htmlFor="sort__by">Sorted</label>
                    <select className='sort__item' name="sort__by" id="sort__by">
                        <option value="">by default</option>
                        <option value="">Price: Low to High</option>
                        <option value="">Price: High to Low</option>
                    </select>
                </div>
            </div>
            <section className='sale__product-list'>
                {
                    sale && sale.map((product) => (
                        <ProductCard product={product} />
                    ))
                }
            </section>
        </main>
    )
}

export default SaleProductsPage