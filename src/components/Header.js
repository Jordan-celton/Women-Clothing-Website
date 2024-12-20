import React, { useState } from "react";
import "../styles/Header.scss";
import Collection from "./Collection";
import Logo from "./Logo";
import NewIn from "./NewIn";
import PlusSize from "./PlusSize";
import HeaderIcons from "./HeaderIcons";
import Sustainability from "./Sustainability";

const menuItems = [
  { key: "collection", label: "Collection", component: <Collection /> },
  { key: "newIn", label: "New In", component: <NewIn /> },
  { key: "modiweek", label: "Modiweek", component: null }, // Aucun composant pour Modiweek
  { key: "plusSize", label: "Plus Size", component: <PlusSize /> },
  {
    key: "sustainability",
    label: "Sustainability",
    component: <Sustainability />,
  },
];

const Header = () => {
  // Utilisation de l'état pour savoir quel menu est actif
  const [activeMenu, setActiveMenu] = useState(null);

  // Gestion des événements de survol
  const handleMouseEnter = (menuKey) => setActiveMenu(menuKey);
  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <section className="header">
      <div className="header__green__line">
        Enjoy Free Shipping On All Orders
      </div>
      <div className="header__content">
        <Logo />
        <div className="header__menu">
          <ul className="header__menu__list">
            {menuItems.map((item) => (
              <li
                key={item.key}
                onMouseEnter={() => handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
              >
                {item.label}
                {activeMenu === item.key && item.component && (
                  <div className="menu__slider">{item.component}</div>
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
