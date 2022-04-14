import React from "react";
import CategoriesFirstRow from "./CategoriesFirstRow/CategoriesFirstRow";
import CategoriesSecondRow from "./CategoriesSecondRow/CategoriesSecondRow";
import "./CategoriesTable.css";

const CategoriesTable = () => {
  return (
    <div clasName="categories-table">
      <CategoriesFirstRow />
      <CategoriesSecondRow />
    </div>
  );
};

export default CategoriesTable;
