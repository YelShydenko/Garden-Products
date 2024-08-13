import { Link } from "react-router-dom";
import "./SectionDivider.scss";
import Button from "../UI/Button/Button";
import { useContext } from "react";
import { ThemeContext } from "@/ThemeContext/ThemeContext";

const SectionDivider = ({ sectionTitle, linkToPage, pageTitle }) => {
  const { theme } = useContext(ThemeContext); // Передаем нашу тему
  
  return (
    <div className="section__header">
      <h3 className={`section__title ${theme}`}>{sectionTitle}</h3>
      <div className="section__divider">
        <div className="section__line"></div>
        <Link to={linkToPage}>
          <Button btnColor={"neutral"} btnSize={"S"} btnText={pageTitle} />
        </Link>
        {/* Переход на страницу */}
      </div>
    </div>
  );
};

export default SectionDivider;
