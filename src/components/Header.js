import React from "react";
import Logo from "../assets/logo.png";
import "../styles/Header.scss";

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="header__green__line">
          Enjoy Free Shipping On All Orders
        </div>
        <div className="header__content">
          <div className="header__logo">
            <img src={Logo} alt="Modima Logo" />
            <p>women clothing</p>
          </div>
          <div className="header__menu">
            <ul className="header__menu__list">
              <li>Collection</li>
              <li>New In</li>
              <li>Modiweek</li>
              <li>Plus Size</li>
              <li>Sustainability</li>
            </ul>
          </div>
          <div className="header__icon">
            <i className="fas fa-search"></i>
            <i className="fa-regular fa-user"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
