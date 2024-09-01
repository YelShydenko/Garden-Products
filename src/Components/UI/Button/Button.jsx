import "./Button.scss";

const Button = ({ btnColor, btnSize, btnText, handleOnClick, breadcrumbsLength }) => {
  return (
    <>
      <button className={`btn color-${btnColor} size-${btnSize} breadcrumbs__${breadcrumbsLength}`} onClick={handleOnClick}>
        {btnText}
      </button>
    </>
  );
};

export default Button;
