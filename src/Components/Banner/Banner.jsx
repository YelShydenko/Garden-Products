import React from "react";
import "./Banner.scss";
import Button from "../UI/Button/Button";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1>
          Amazing Discounts
          <br />
          on Garden Products!
        </h1>
        <Button btnText={"Check out"} btnColor={"green"} btnSize={"M"} />
      </div>
    </div>
  );
};

export default Banner;
