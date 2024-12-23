import React, { useState } from "react";
import "../styles/Header.scss";
import Collection from "./Collection";
import Logo from "./Logo";
import NewIn from "./NewIn";
import PlusSize from "./PlusSize";
import HeaderIcons from "./HeaderIcons";
import Sustainability from "./Sustainability";

// Définition des éléments du menu
const menuItems = [
  { key: "collection", label: "Collection", component: <Collection /> },
  { key: "newIn", label: "New In", component: <NewIn /> },
  { key: "modiweek", label: "Modiweek", component: null },
  { key: "plusSize", label: "Plus Size", component: <PlusSize /> },
  {
    key: "sustainability",
    label: "Sustainability",
    component: <Sustainability />,
  },
];

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  // Fonction pour activer le menu au survol
  const handleMouseEnter = (menuKey) => setActiveMenu(menuKey);
  // Fonction pour désactiver le menu lorsque la souris quitte
  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <section className="header">
      {/* Ligne verte en haut */}
      <div className="header__green__line">
        Enjoy Free Shipping On All Orders
      </div>

      <div className="header__content">
        <Logo />

        {/* Menu principal */}
        <div className="header__menu">
          <ul className="header__menu__list">
            {menuItems.map((item) => (
              <li
                key={item.key}
                onMouseEnter={() => handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
              >
                {item.label}

                {/* Affichage du sous-menu lors du survol */}
                {activeMenu === item.key && item.component && (
                  <div
                    className={`menu__slider ${
                      activeMenu === item.key ? "active" : ""
                    }`}
                  >
                    {item.component}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <HeaderIcons />
      </div>
    </section>
  );
};

export default Header;
