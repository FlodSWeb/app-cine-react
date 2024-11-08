import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/coups-de-coeur"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>APPCINE</h1>
    </div>
  );
};

export default Header;
