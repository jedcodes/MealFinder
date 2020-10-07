import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="navbar__header">
        <h1>MEAL PLANER</h1>
        <div className="navbar__mobileIcon" onClick={clickHandler}>
          {click ? <RiCloseLine /> : <RiMenu3Fill />}
        </div>
      </div>

      <ul className={click ? "navbar__menu active" : "navbar__menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index} onClick={closeMobileMenu}>
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
