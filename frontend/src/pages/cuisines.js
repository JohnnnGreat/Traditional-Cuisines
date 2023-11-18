import React, { useEffect, useState } from "react";
import { foodData } from "@/foodData";
import Divider from "@/components/Divider";
const Cuisines = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const array = [];
    const categories = foodData.map((item) => {
      return array.push(item.category);
    });
    console.log(array);
    const newArray = [];
    for (let arr in array) {
      if (array[arr] in newArray) {
        console.log(true);
      } else {
        newArray.push(array[arr]);
      }
    }

    console.log(newArray);
  });
  return (
    <div className="cuisines">
      <div className="cuisines__wrapper">
        <h1>Web Based Searches</h1>
        <Divider />
      </div>
    </div>
  );
};

export default Cuisines;
