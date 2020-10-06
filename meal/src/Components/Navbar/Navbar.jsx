import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button/Button";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="navbar__logo">MEAL PLANER</div>
      <div className="navbar__mobileIcon" onClick={clickHandler}>
        {click ? <RiCloseLine /> : <RiMenu3Fill />}
      </div>
      <ul className={click ? "navbar__menu active" : "navbar__menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
