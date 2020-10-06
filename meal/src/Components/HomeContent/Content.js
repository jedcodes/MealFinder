import React from "react";
import imgOne from "../../images/placeholderOne.png";
import imgTwo from "../../images/placeholderTwo.png";

const Content = () => {
  return (
    <div className="content">
      <h2>Dont eat less - just eat real</h2>

      <div className="content__info">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quo
          dolorem inventore quibusdam nihil, laudantium eius, sunt repellendus,
          fugiat aperiam maxime debitis unde! Quae eveniet quo quod, aut sed
          maiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
          quo dolorem inventore quibusdam nihil, laudantium eius, sunt
          repellendus, fugiat aperiam maxime debitis unde! Quae eveniet quo
          quod, aut sed maiores.
        </p>
      </div>

      <div className="content__card--one">
        <div className="card__text">
          <h4>Popular Recipes</h4>
          <li className="card__items">
            <p>
              Fish Burger....................1H <br />{" "}
              <span>SALMA, PERSILLE, SALT, SENNEP</span>
            </p>
          </li>
          <li className="card__items">
            <p>
              Fish Burger....................1H <br />{" "}
              <span>SALMA, PERSILLE, SALT, SENNEP</span>
            </p>
          </li>
          <li className="card__items">
            <p>
              Fish Burger....................1H <br />{" "}
              <span>SALMA, PERSILLE, SALT, SENNEP</span>
            </p>
          </li>
        </div>
        <div className="card__image">
          <img src={imgOne} alt="" />
        </div>
      </div>
      <div className="content__card--two">
        <div className="card__text">
          <h4>Popular Drinks</h4>
          <li className="card__items">
            <p>
              Red Wine....................1H <br />{" "}
              <span>
                Calcium carbonate, Flavours, Grape juice, Non-vegan material
              </span>
            </p>
          </li>
          <li className="card__items">
            <p>
              White Wine....................1H <br />{" "}
              <span>
                Calcium carbonate, Flavours, Grape juice, Non-vegan material
              </span>
            </p>
          </li>
          <li className="card__items">
            <p>
              Rose Wine....................1H <br />{" "}
              <span>
                Calcium carbonate, Flavours, Grape juice, Non-vegan material
              </span>
            </p>
          </li>
        </div>
        <div className="card__image">
          <img src={imgTwo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Content;
