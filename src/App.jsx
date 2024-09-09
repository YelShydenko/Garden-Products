import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import Layout from "./Components/Layout/Layout";
import CategoriesProduct from "./pages/CategoriesProduct/CategoriesProduct";
import SaleProductsPage from "./pages/SaleProductsPage/SaleProductsPage";
import AllProducts from "./pages/AllProducts/AllProducts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories, fetchProducts, getCartFromLocalStorage, getFavoriteFromLocalStorage } from "./store/features/productSlice";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Cart from "./pages/Cart/Cart";
import ProductPage from "./pages/ProductPage/ProductPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
    dispatch(getCartFromLocalStorage());
    dispatch(getFavoriteFromLocalStorage());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/categories/all" element={<CategoriesPage />} />
            <Route path="/categories/:categoryId" element={<CategoriesProduct />} />
            <Route path="/sale/products/all" element={<SaleProductsPage />} />
            <Route path="/products/all" element={<AllProducts />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
