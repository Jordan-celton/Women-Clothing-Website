import React from "react";
import "../styles/Menu.scss";

const Menu = () => {
  return (
    <>
      <div className="menu__slider">
        <h3>Category</h3>
        <ul>
          <li>Shop All</li>
          <li>Boluses & Top</li>
          <li>Pants</li>
          <li>Dresses & Jumpsuits</li>
          <li>Pullovers</li>
          <li>Tees</li>
          <li>Shorts & Skirts</li>
        </ul>
      </div>
      <div className="menu__slider">
        <h3>Featured</h3>
        <ul>
          <li>New In</li>
          <li>Modiweek</li>
          <li>Plus Size</li>
          <li>Best Seller</li>
        </ul>
      </div>
      <div className="menu__slider">
        <h3>More</h3>
        <ul>
          <li>Bundles</li>
          <li>Occasion Wear</li>
          <li>Matching Set</li>
          <li>Suiting</li>
        </ul>
      </div>

      <div className="menu__slider__img">
        <img src="/images/Blouses.png" alt="Menu 1" />
        <img src="/images/Plus-Size.png" alt="Menu 2" />
      </div>
    </>
  );
};

export default Menu;
