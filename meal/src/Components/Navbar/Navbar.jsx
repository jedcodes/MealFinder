import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">MEAL PLANER</div>
      <div className="navbar__items">
        <NavLink
          activeClassName="current__link"
          className="navbar__item"
          to="/"
        >
          <li>HOME</li>
        </NavLink>
        <NavLink
          className="navbar__item"
          to="/breakfast"
          activeClassName="current__link"
        >
          <li>BREAKFAST</li>
        </NavLink>
        <NavLink
          className="navbar__item"
          to="/lunch"
          activeClassName="current__link"
        >
          <li>LUNCH</li>
        </NavLink>
        <NavLink
          className="navbar__item"
          to="/dinner"
          activeClassName="current__link"
        >
          <li>DINNER</li>
        </NavLink>
        <NavLink
          className="navbar__item"
          to="/drinks"
          activeClassName="current__link"
        >
          <li>DRINKS</li>
        </NavLink>
        <NavLink
          className="navbar__item"
          to="/"
          activeClassName="current__link"
        >
          <li>BUILD</li>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
