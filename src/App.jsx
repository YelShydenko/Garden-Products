import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        {/* <Route path="/categories/:categoryId" element={} /> */}
        {/* <Route path="/products/all" element={ } /> */}
        {/* <Route path="/products/:productId" element={ } /> */}
        {/* <Route path="/sale/products/all" element={ } /> */}
        {/* <Route path="/cart" element={ } /> */}
        {/* <Route path="/error" element={ } /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
