import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./SaleForm.scss";
import Input from "../UI/Input/Input";

const SaleForm = () => {
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    setSubmitMessage("The discount has been successfully sent by email"); // Текст сообщения при удачной отправки формы
    reset(); // Обнуление формы после подтверждения
  };

  // Определяем, есть ли какие-либо ошибки
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <section className="sale__form-section">
      <h3>5% off on the first order</h3>
      <div className="sale__form-container">
        <img src="./images/handsForm.png" alt="image" />
        <form className="sale__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="sale__form-inputs">
            <div className="input__container">
              <Input
                typeName="text"
                placeholderName="Name"
                formClass="sale__form-control"
                registerData={register("name", {
                  // Регистрируем инпут с именем
                  required: "Name is required",
                })}
              />
            </div>

            <div className="input__container">
              <Input
                typeName="text"
                placeholderName="Phone number"
                formClass="sale__form-control"
                registerData={register("phone", {
                  // Регистрируем инпут с телефоном
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d+$/, // Проверяем телефон
                    message: "Wrong input. Try again",
                  },
                })}
              />
            </div>
            <div className="input__container">
              <Input
                typeName="email"
                placeholderName="Email"
                formClass="sale__form-control"
                registerData={register("email", {
                  // Регистрируем инпут с почтой
                  required: "Email address is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Проверяем почту
                    message: "Wrong input. Try again",
                  },
                })}
              />

              {/* Если есть ошибки, выводим сообщение */}
              {hasErrors && (
                <p className="error-message">Wrong input. Try again</p>
              )}
              {/* Сообщение при успешном заполнении формы */}
              {submitMessage && (
                <p className="submit__message">{submitMessage}</p>
              )}
            </div>
          </div>
          <button type="submit" className="btn">
            Get a discount
          </button>
        </form>
      </div>
    </section>
  );
};

export default SaleForm;
