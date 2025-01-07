import React from "react";
import "../styles/Dresses.scss"; // Créez ce fichier pour les styles

const Dresses = () => {
  return (
    <section className="collection">
      <h2>Collection</h2>
      <div className="collection-grid">
        {/* Blouses & Dresses */}
        <div className="collection-item1">
          <img
            src="/images/Collection2.png"
            alt="Blouses"
            className="collection-image"
          />
          <img
            src="/images/Collection1.png"
            alt="Pants"
            className="collection-image"
          />
        </div>

        {/* Pants & Outwear */}
        <div className="collection-item2">
          <img
            src="/images/Collection4.png"
            alt="Dresses"
            className="collection-image"
          />
          <img
            src="/images/Collection3.png"
            alt="Outerwear"
            className="collection-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Dresses;
