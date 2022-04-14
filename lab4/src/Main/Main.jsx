import React from "react";
import MainSlogan from "./MainSlogan/MainSlogan";
import "./Main.css";
import MainInfo from "./MainInfo/MainInfo";
import MainBenefits from "./MainBenefits/MainBenefits";

const Main = () => {
  return (
    <div className="main">
      <MainSlogan />
      <MainInfo />
      <MainBenefits />
    </div>
  );
};

export default Main;
