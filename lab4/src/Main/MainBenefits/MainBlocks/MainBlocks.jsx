import React from "react";
import "./MainBlocks.css";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";

const MainBlocks = () => {
  return (
    <div className="all_blocks">
      <div className="block">
        <img className="icons-benefits" src={icon1} alt="truck"></img>
        <span className="text-benefits">Shipping from 500 for free</span>
      </div>
      <div className="block">
        <img className="icons-benefits" src={icon2} alt="bouquet"></img>
        <span className="text-benefits">Only fresh flowers</span>
      </div>
      <div className="block">
        <img className="icons-benefits" src={icon3} alt="flowers"></img>
        <span className="text-benefits">Top bouquet designs for you</span>
      </div>
    </div>
  );
};

export default MainBlocks;
