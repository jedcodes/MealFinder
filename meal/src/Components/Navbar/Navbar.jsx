import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const location = useLocation()

  const clickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(!click);

  return (
    <React.Fragment>
      <header>
        <h1 className="logo">Meal Planer</h1>
        <div className="burger" onClick={clickHandler}>
          {click ? <RiCloseLine /> : <RiMenu3Fill />}
        </div>
        <nav>
          <ul className={click ? "nav__menu active" : "nav__menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index} onClick={closeMobileMenu}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
     {location.pathname === '/' && <section>
        <div className="background"></div>
        <div className="section__content">
          <h1>Meal Of The Day</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At laborum
            omnis, tempora quidem accusamus minus ad soluta ipsa cumque,
            necessitatibus eius, iste amet recusandae! Doloremque repellat aut
            nobis necessitatibus voluptatem?
          </p>
          <div className="section__button">
            <Link className="section__link" to="/">
              View More
            </Link>
          </div>
        </div>
      </section>}
    </React.Fragment>
  );
};

export default Navbar;
