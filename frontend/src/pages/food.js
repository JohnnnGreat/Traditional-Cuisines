import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { foodData } from "@/foodData";
import Divider from "@/components/Divider";
import Link from "next/link";

const FoodItem = () => {
  const router = useRouter();

  const [foodName, setFoodName] = useState("");
  const [foodMain, setFoodMain] = useState({
    name: "",
    description: "",
    method: "",
    nutrition: "",
    category: "",
    time: "",
  });

  // useEffect(() => {
  //   setFoodName(foodNameQ);
  // }, [router.query.foodName]);

  useEffect(() => {
    const foodNameQ = router.query.name;
    const foodObject = foodData.filter((foodDetails) => {
      return foodDetails.name == foodNameQ;
    });

    setFoodMain(foodObject[0]);
  }, [router.query.name]);

  const convertArray = (string) => {
    let newArray = [];
    if (typeof string === "string") {
      newArray = string.split(",");
      console.log(newArray.length);
    }
    return newArray;
  };

  function convertObject(string) {
    const arrayObject = convertArray(string);

    const nutritionObjects = [];

    arrayObject.forEach((item) => {
      const [name, value] = item.split(": ");
      nutritionObjects.push({ name: name, value: value });
    });

    return nutritionObjects;
  }

  console.log(
    convertObject("Calories: 403, Protein: 6.8g, Carbs: 68.9g, Fat: 11.9g")
  );

  return (
    <div className="food-main">
      <div className="food-main__wrapper">
        <div className="food_display">
          <img
            src="https://images.unsplash.com/photo-1540100716001-4b432820e37f?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Alt"
            className="food_image"
          />
          <div className="text_details">
            {" "}
            <h1 className="food_main-name">{foodMain?.name}</h1>
            <hr />
            <div className="display_instance">
              <p className="description">DESCRIPTION</p>
              <hr />
              <p className="actual_desc">{foodMain?.description}</p>
            </div>
            <div className="display_instance">
              <p className="description">METHOD OF PREPARATION</p>
              <hr />
              <ul>
                {convertArray(foodMain?.method).map((item) => (
                  <li>{item}</li>
                ))}
              </ul>

              {/* <p className="actual_desc">{convertArray(foodMain.method)}</p> */}
            </div>
            <div className="display_instance">
              <p className="description">NUTRITIONAL INFORMATION</p>
              <hr />

              <table>
                <thead>
                  <tr>
                    {convertObject(foodMain?.nutrition).map((item) => (
                      <th>{item.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {convertObject(foodMain?.nutrition).map((item) => (
                      <td>{item.value}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="display_instance">
              <p className="description">CATEGORY</p>
              <hr />
              <p className="actual_desc">{foodMain?.category}</p>
            </div>
            <div className="display_instance">
              <p className="description">TOTAL TIME FOR PREPARATION</p>
              <hr />
              <p className="actual_desc">{foodMain?.time}</p>
            </div>
            <div className="link">
              <Link
                target="_blank"
                href={`https://www.youtube.com/results?search_query= How to prepare ${foodMain?.name}`}
              >
                Click Here <p>To watch a video online</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
