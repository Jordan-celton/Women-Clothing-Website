import React from "react";
import "../styles/Menu.scss";

const NewIn = () => {
  return (
    <>
      <div className="menu__slider">
        <h3>Category</h3>
        <ul>
          <li>Shop All</li>
          <li>Top & Boluses</li>
          <li>Tees</li>
          <li>Pants</li>
          <li>Jackets & Outwears</li>
          <li>Pullovers</li>
          <li>Dresses & Jumpsuits</li>
          <li>Shorts & Skirts</li>
        </ul>
      </div>
      <div className="menu__slider">
        <h3>Trending</h3>
        <ul>
          <li>Plus Size</li>
          <li>Fall Collection</li>
          <li>Modiweek</li>
        </ul>
      </div>

      <div className="menu__slider__img">
        <img src="/images/Fall-Collection.png" alt="Menu 3" />
        <img src="/images/Boluses.png" alt="Menu 4" />
        <img src="/images/Dresses.png" alt="Menu 5" />
      </div>
    </>
  );
};

export default NewIn;
