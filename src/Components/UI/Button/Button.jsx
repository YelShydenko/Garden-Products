import "./Button.scss";

const Button = ({ btnColor, btnSize, btnText, handleOnClick }) => {
  return (
    <>
      <button className={`btn ${btnColor} ${btnSize}`} onClick={handleOnClick}>
        {btnText}
      </button>
    </>
  );
};

export default Button;
