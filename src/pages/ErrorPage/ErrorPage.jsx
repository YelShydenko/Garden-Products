import React from 'react'
import "./ErrorPage.scss";
import imgage1 from "../../../public/images/4.png";
import imgage2 from "../../../public/images/cactusError.png";
import imgage3 from "../../../public/images/5.png";  
import Button from '../../Components/UI/Button/Button'; 
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="not-found__content">
        <div className="content">
          <div className="content__item">
            <div className="content__item__number">
              <img src={imgage1} alt="4" />
            </div>
            <div className="content__item__image">
              <img src={imgage2} alt="Cactus" />
            </div>
            <div className="content__item__number">
              <img src={imgage3} alt="4" />
            </div>
          </div>
          <div className="content__text">
            <h2>Page Not Found</h2>
            <span>We're sorry, the page you requested could not be found.</span>
            <p> Please go back to the homepage.</p>
            <Link to={"/"}>
            <Button
              btnColor={"green"}
              btnSize={"M"}
              btnText={"Go Home"}
            />
             </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;