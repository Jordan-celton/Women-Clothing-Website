import React from "react";
import logoImage from "../assets/logo.png";
import "../styles/Header.scss";

const Logo = () => {
  return (
    <div className="header__logo">
      <img src={logoImage} alt="Modima Logo" />
      <p>women clothing</p>
    </div>
  );
};

export default Logo;
