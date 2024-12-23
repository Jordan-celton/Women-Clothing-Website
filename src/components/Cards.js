import React, { useState } from "react";
import "../styles/Cards.scss";

const Cards = () => {
  const [likedItems, setLikedItems] = useState([false, false, false]);

  const toggleLike = (index) => {
    const updatedLikes = [...likedItems];
    updatedLikes[index] = !updatedLikes[index];
    setLikedItems(updatedLikes);
  };

  return (
    <section className="cards">
      <div className="card">
        <h3>Best Sellers</h3>
        {/* Conteneur des images alignées sur une ligne */}
        <div className="card__items">
          {/* Image 1 */}
          <div className="card__item">
            <div className="card__like" onClick={() => toggleLike(0)}>
              <i
                className={
                  likedItems[0] ? "fas fa-heart liked" : "far fa-heart"
                }
              ></i>
            </div>

            <img src="/images/stretch.png" alt="Stretch" />
            <h4>Tailored Stretch</h4>
            <div className="card__item__description">
              <p>Turn It Up Pants</p>
              <p>$180</p>
            </div>
            <div className="color-circles">
              <span
                className="circle"
                style={{ backgroundColor: "red" }}
              ></span>
              <span
                className="circle"
                style={{ backgroundColor: "blue" }}
              ></span>
              <span
                className="circle"
                style={{ backgroundColor: "green" }}
              ></span>
            </div>
          </div>
          {/* Image 2 */}
          <div className="card__item">
            <div className="card__like" onClick={() => toggleLike(1)}>
              <i
                className={
                  likedItems[1] ? "fas fa-heart liked" : "far fa-heart"
                }
              ></i>
            </div>

            <img src="/images/silk.png" alt="Silk" />
            <h4>Technical Silk</h4>
            <div className="card__item__description">
              <p>Make A Splash</p>
              <p>$120</p>
            </div>
            <div className="color-circles">
              <span
                className="circle"
                style={{ backgroundColor: "yellow" }}
              ></span>
              <span
                className="circle"
                style={{ backgroundColor: "pink" }}
              ></span>
              <span
                className="circle"
                style={{ backgroundColor: "purple" }}
              ></span>
            </div>
          </div>
          {/* Image 3 */}
          <div className="card__item">
            <div className="card__like" onClick={() => toggleLike(2)}>
              <i
                className={
                  likedItems[2] ? "fas fa-heart liked" : "far fa-heart"
                }
              ></i>
            </div>

            <img src="/images/Dresses.png" alt="Dresses" />
            <h4>Cool Weave</h4>
            <div className="card__item__description">
              <p>Anywhere Dress</p>
              <p>$210</p>
            </div>
            <div className="color-circles">
              <span
                className="circle"
                style={{ backgroundColor: "orange" }}
              ></span>
              <span
                className="circle"
                style={{ backgroundColor: "teal" }}
              ></span>
              <span
                className="circle"
                style={{ backgroundColor: "brown" }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
