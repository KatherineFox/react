import React from "react";
import "./CategoriesSecondRow.css";
import picture4 from "./picture4.png";
import picture5 from "./picture5.png";
import picture6 from "./picture6.png";

const CategoriesSecondRow = () => {
  return (
    <div>
      <div className="second-row">
        <div className="category-block">
          <img className="category-picture" src={picture4} alt="Heart"></img>
          <span className="category-link">Hearts</span>
        </div>
        <div className="category-block">
          <img className="category-picture" src={picture5} alt="Wreath"></img>
          <span className="category-link">Wreaths</span>
        </div>
        <div className="category-block">
          <img className="category-picture" src={picture6} alt="Cross"></img>
          <span className="category-link">Crosses</span>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSecondRow;
