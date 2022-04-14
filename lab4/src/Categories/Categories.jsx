import React from "react";
import "./Categories.css";
import CategoriesTable from "./CategoriesTable/CategoriesTable";

const Categories = () => {
  return (
    <div>
      <div className="category">
        <span className="choice">CHOOSE A CATEGORY FROM FLOWERS</span>
        <CategoriesTable />
      </div>
    </div>
  );
};

export default Categories;
