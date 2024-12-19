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
          <p>Modima</p>
          <p>Discover the latest trends in </p>
        </div>

        <div className="hero__cta">
          <button>New In</button>
        </div>
      </section>
    </>
  );
};

export default Banner;
