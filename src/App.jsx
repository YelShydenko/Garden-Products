import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import SaleProducts from "./Components/SaleProducts/SaleProducts";
import { ThemeProvider } from './ThemeContext/ThemeContext';

function App() {
  return (
    <>
     <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/sale/products/all" element={<SaleProducts />} />
        {/* <Route path="/categories/:categoryId" element={} /> */}
        {/* <Route path="/products/all" element={ } /> */}
        {/* <Route path="/products/:productId" element={ } /> */}
        {/* <Route path="/cart" element={ } /> */}
        {/* <Route path="/error" element={ } /> */}
      </Routes>
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
