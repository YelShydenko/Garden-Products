import "./HomePage.scss";
import Banner from "@/Components/Banner/Banner";
import SaleForm from "@/Components/SaleForm/SaleForm";
import CategoriesMainPage from "@/Components/CategoriesMainPage/CategoriesMainPage";
import SaleProductsMainPage from "@/Components/SaleProductsMainPage/SaleProductsMainPage";

const HomePage = () => {
  return (
    <div className="container">
      <Banner />
      <main className="home__page-sections">
        <CategoriesMainPage />
        <SaleForm />
        <SaleProductsMainPage />
      </main>
    </div>
  );
};

export default HomePage;
