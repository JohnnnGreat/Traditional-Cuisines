import React, { useEffect, useState } from "react";
import { foodData } from "@/foodData";
import Divider from "@/components/Divider";
import AxiosInstance from "@/axiosInstance";
import { Masonry } from "react-masonry";

const Cuisines = () => {
  const [categories, setCategories] = useState([]);
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    const array = [];
    const categories = foodData.map((item) => {
      return array.push(item.category);
    });
    // console.log(array);
    const newArray = [];
    for (let arr in array) {
      if (array[arr] in newArray) {
        console.log(true);
      } else {
        newArray.push(array[arr]);
      }
    }
  });

  useEffect(() => {
    (async function () {
      try {
        const response = await AxiosInstance.get("/cuisines/approvedcuisines");
        const { data } = response;
        const { cuisines } = data;
        console.log(cuisines);
        setCuisines(cuisines);
      } catch (error) {
        console.log(error.message);
      }
    })();
  });
  return (
    <div className="cuisines">
      <div className="cuisines__wrapper">
        <h1 className="cuisines-header">Web Based Searches</h1>
        <hr />

        <div>
          <div className="first-cuisines">
            <Masonry>
              {cuisines.map((item) => (
                <div className="cuisine-card">
                  <div className="cuisine-img-con">
                    <div className="cuisine-c-d"></div>
                    <img className="cuisine-img" src={item.imageUrl} />
                  </div>

                  <h1 className="cuisine-name">{item.name}</h1>
                  {/* <p className="cuisine-p">{item.description}</p> */}
                  <p className="cuisine-p">Added by {item.user}</p>
                </div>
              ))}
            </Masonry>
          </div>
          <div className="second-cuisines"> </div>
        </div>
      </div>
    </div>
  );
};

export default Cuisines;
