import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavourites, selectProducts } from '../../store/features/productSlice';
import ProductCard from '../../Components/ProductCard/ProductCard';

const FavoritesPage  = () => {
    const favourites = useSelector(selectFavourites);
    const products = useSelector(selectProducts);

    const favouriteProducts = products.filter(product => favourites.includes(product.id));

    return (
        <div>
            <h2>Favourite Products</h2>
            <div className="product-list">
                {favouriteProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default FavoritesPage;
