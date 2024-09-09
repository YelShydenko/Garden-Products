import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import "./Breadcrumbs.scss";
import { useContext } from "react";
import { ThemeContext } from "@/ThemeContext/ThemeContext";

const Breadcrumbs = ({ crumbs }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="breadcrumbs">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1; // Определяем, последний ли это элемент
        return (
          <div key={index} className="breadcrumbs__item">
            <Link to={crumb.path}>
              <Button
                btnColor={"neutral"}
                btnSize={"XS"}
                btnText={crumb.label}
                breadcrumbsLength={isLast ? `last-${theme}` : ""}
              />
            </Link>
            {!isLast && <div className="breadcrumbs__linie"></div>}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
