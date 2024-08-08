import React from "react";
import "./HomePage.scss";
import SaleForm from "../../Components/SaleForm/SaleForm";
import CategoriesMainPage from "../../Components/CategoriesMainPage/CategoriesMainPage";

const HomePage = () => {
 
  return (
    <main>
      <CategoriesMainPage/>
      <SaleForm/>
    </main>
  );
};

export default HomePage;
