import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import Layout from "./Components/Layout/Layout";
import CategoriesProduct from "./pages/CategoriesProduct/CategoriesProduct";
import SaleProductsPage from "./pages/SaleProductsPage/SaleProductsPage";



function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/categories/all" element={<CategoriesPage />} />
            <Route path="/categories/:categoryId" element={<CategoriesProduct/> } /> 
            <Route path="/sale/products/all" element={<SaleProductsPage/> } />
            {/* <Route path="/products/all" element={ } /> */}
            {/* <Route path="/products/:productId" element={ } /> */}
            {/* <Route path="/cart" element={ } /> */}
            {/* <Route path="/error" element={ } /> */}
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
