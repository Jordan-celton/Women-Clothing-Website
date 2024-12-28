import React from "react";
import "../styles/Banner.scss";

const Banner = () => {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url('/images/hero-background.png')` }}
      >
        <div className="hero__content">
          <p>Elegance In Simplicity</p>
          <p>Earth's Harmony </p>
        </div>

        <div className="hero__cta">
          <button>New In</button>
        </div>
      </section>
    </>
  );
};

export default Banner;
