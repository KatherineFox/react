import React from "react";
import "./MainBenefits.css";
import MainBlocks from "./MainBlocks/MainBlocks";

const MainBenefits = () => {
  return (
    <div className="benefits">
      <h2>Why chose us</h2>
      <div className="blocks-benefits">
        <MainBlocks />
      </div>
    </div>
  );
};
export default MainBenefits;
