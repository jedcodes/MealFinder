import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1>Meal Of The Day.</h1>
        <p>
          øLorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsa
          commodi magni. Eaque suscipit a molestiae vel, vitae dolor nisi
          incidunt saepe.{" "}
        </p>
        <div>
          <Link to="/">
            <button className="banner__button">View Meal</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
