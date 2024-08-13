import "./Input.scss";

const Input = ({ typeName, placeholderName, formClass, registerData }) => {
  // Получаем переданный type, placeholder, classname и register для React-Hook-Form
  return (
    <>
      <input
        type={typeName}
        placeholder={placeholderName}
        className={`input ${formClass}`} // Первый класс общиий стиль, потом 2 варинта класса для 2х форм
        {...registerData} // Данные нашего регистра
      />
    </>
  );
};

export default Input;
