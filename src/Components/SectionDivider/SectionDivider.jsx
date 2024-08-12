import { Link } from "react-router-dom";
import "./SectionDivider.scss";
import Button from "../UI/Button/Button";

const SectionDivider = ({ sectionTitle, linkToPage, pageTitle }) => {
  return (
    <div className="section__header">
      <h3>{sectionTitle}</h3>
      <div className="section__divider">
        <div className="section__line"></div>
        <Button btnColor={'neutral'} btnSize={'S'} btnText={pageTitle}>
          <Link to={linkToPage}>{pageTitle}</Link>
          {/* Переход на страницу */}
        </Button>
      </div>
    </div>
  );
};

export default SectionDivider;
