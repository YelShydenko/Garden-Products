import { useContext } from "react";
import "./ErrorPage.scss";
import cactusError from "/images/cactusError.png";
import errorNumber from "/images/errorNumber.png";
import Button from "@/Components/UI/Button/Button";
import { Link } from "react-router-dom";
import { ThemeContext } from "@/ThemeContext/ThemeContext";

const ErrorPage = () => {
  const { theme } = useContext(ThemeContext); // Выбор нашей темы
  return (
    <>
      <div className="not-found__content">
        <div className="content">
          <div className="content__item">
            <div className="content__item__number">
              <img src={errorNumber} alt="4" />
            </div>
            <div className="content__item__image">
              <img src={cactusError} alt="Cactus" />
            </div>
            <div className="content__item__number">
              <img src={errorNumber} alt="4" />
            </div>
          </div>
          <div className="content__text">
            <h2 className={`error-${theme}`}>Page Not Found</h2>
            <p className={`error-${theme}`}>
              We're sorry, the page you requested could not be found. <br />
              Please go back to the homepage.
            </p>
            <Link to={"/"}>
              <Button btnColor={"green"} btnSize={"M"} btnText={"Go Home"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
