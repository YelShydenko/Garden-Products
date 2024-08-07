import React from "react";
import { useForm } from "react-hook-form";
import "./SaleForm.scss";

const SaleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    reset();
  };

  return (
    <section className="sale__form-section">
      <h3>5% off on the first order</h3>
      <div className="sale__form-container">
        <img src="./images/handsForm.png" alt="image" />
        <form className="sale__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="sale__form-inputs">
            <div className="input__container">
              <input
                type="text"
                placeholder="Name"
                className={`form-control ${
                  errors.name ? "form-control-danger" : ""
                }`}
                {...register("name", {
                  required: "Name is required",
                })}
              />

              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
            </div>

            <div className="input__container">
              <input
                type="text"
                placeholder="Phone number"
                className={`form-control ${
                  errors.phone ? "form-control-danger" : ""
                }`}
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d+$/,
                    message: "Phone number is invalid",
                  },
                })}
              />

              {errors.phone && (
                <p className="error-message">{errors.phone.message}</p>
              )}
            </div>
            <div className="input__container">
              <input
                type="email"
                placeholder="Email"
                className={`form-control ${
                  errors.email ? "form-control-danger" : ""
                }`}
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />

              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
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
