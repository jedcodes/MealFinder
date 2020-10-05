import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">MEAL PLANER</div>
      <div className="navbar__items">
        <NavLink
          activeStyle={{ color: "#39bf73" }}
          className="navbar__item"
          to="/"
        >
          <li>HOME</li>
        </NavLink>
        <NavLink className="navbar__item" to="/breakfast">
          <li>BREAKFAST</li>
        </NavLink>
        <NavLink className="navbar__item" to="/lunch">
          <li>LUNCH</li>
        </NavLink>
        <NavLink className="navbar__item" to="/dinner">
          <li>DINNER</li>
        </NavLink>
        <NavLink className="navbar__item" to="/drinks">
          <li>DRINKS</li>
        </NavLink>
        <NavLink className="navbar__item" to="/">
          <li>BUILD</li>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
