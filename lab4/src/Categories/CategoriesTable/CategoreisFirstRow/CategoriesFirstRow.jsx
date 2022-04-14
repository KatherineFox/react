import React from "react";
import "./CategoriesFirstRow.css";
import picture1 from "./picture1.png";
import picture2 from "./picture2.png";
import picture3 from "./picture3.png";

const CategoriesFirstRow = () => {
  return (
    <div>
      <div className="first-row">
        <div className="category-block ">
          <img className="category-picture" src={picture1} alt="Bouquet"></img>
          <span className="category-link">Bouquet</span>
        </div>
        <div className="category-block">
          <img
            className="category-picture"
            src={picture2}
            alt="Bouquet in a box"
          ></img>
          <span className="category-link">Bouquet in a box</span>
        </div>
        <div className="category-block">
          <img className="category-picture" src={picture3} alt="Basket"></img>
          <span className="category-link">Baskets</span>
        </div>
      </div>
    </div>
  );
};

export default CategoriesFirstRow;
