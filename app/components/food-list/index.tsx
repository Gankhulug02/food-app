import React from "react";
import FoodCard from "../food-card";

const FoodList = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <FoodCard key={index} />
      ))}
    </div>
  );
};

export default FoodList;
