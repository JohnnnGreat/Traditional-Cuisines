import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { foodData } from "@/foodData";
import Divider from "@/components/Divider";
import Link from "next/link";
import AxiosInstance from "@/axiosInstance";
import Head from "next/head";

const FoodItem = () => {
  const router = useRouter();

  const [foodName, setFoodName] = useState("");
  const [foodMain, setFoodMain] = useState(null);

  // useEffect(() => {
  //   setFoodName(foodNameQ);
  // }, [router.query.foodName]);

  useEffect(() => {
    // const foodNameQ = router.query.name;
    // const foodObject = foodData.filter((foodDetails) => {
    //   return foodDetails.name == foodNameQ;
    // });

    // setFoodMain(foodObject[0]);

    (async function () {
      try {
        const response = await AxiosInstance.get("/cuisines/approvedcuisines");
        console.log(response);
      } catch (error) {}
    })();
  }, [router.query.id]);
  const id = router.query.id;
  useEffect(() => {
    (async function () {
      try {
        const response = await AxiosInstance.get(`/cuisines/getcuisine/${id}`);
        setFoodMain(response.data.cuisine);
      } catch (error) {}
    })();
  }, [router.query.id]);

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

  return (
    <>
      <Head>
        <title>{foodMain?.name}</title>
      </Head>
      <div className="food-main">
        <div className="food-main__wrapper">
          <div className="food_display">
            <img
              src={foodMain?.imageUrl}
              alt="Alt"
              className="food_image-main"
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
    </>
  );
};

export default FoodItem;
