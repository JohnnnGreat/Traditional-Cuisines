import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { foodData } from "@/foodData";
import { useParams } from "next/navigation";
import { list } from "postcss";
import Link from "next/link";
import AxiosInstance from "../axiosInstance";
import Preloader from "@/components/Preloader";

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const searchQ = router.query.foodName;
    (async function () {
      try {
        const response = await AxiosInstance.get("/cuisines/approvedcuisines");
        setIsLoading(false);
        const { data } = response;
        const { cuisines } = data;

        const result = cuisines.filter((foodItem) => {
          const foodItemName = foodItem.name.toLowerCase();

          return foodItemName.includes(searchQ.toLowerCase());
        });
        console.log(result);
        setSearchResult(result);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    })();
  }, [router.query.foodName, isEmpty]);

  // useEffect(() => {
  //   const searchQ = router.query.foodName;

  //   const result = foodData.filter((foodItem) => {
  //     const foodsItem = foodItem.name.toLowerCase();
  //     return foodsItem.includes(searchQ);
  //   });

  //   setSearchResult(result);
  //   console.log(searchResult.length);
  //   setIsEmpty(result ? false : true);
  // }, [router.query.foodName, isEmpty]);

  // TODO: create a truncated text
  function truncateText(text, listItem = false) {
    const maxLength = listItem ? 8 : 50;

    if (typeof text === undefined) text = "Text cannot be undefined";
    if (listItem) {
      if (text.length > maxLength) return text.slice(0, maxLength) + "...";
    } else {
      if (text.length > maxLength) return text.slice(0, maxLength) + "...";
    }

    return text;
  }

  function convArr(arr) {
    const newArr = arr.split(",");
    return newArr;
  }

  return (
    <>
      {isLoading && <Preloader />}
      <div className="search">
        <div className="search__wrapper">
          <h1 className="search-title">
            Search Results for <span>{router.query.foodName}</span>
          </h1>
          {searchResult.length > 0 ? (
            <>
              <div className="search-container">
                {searchResult.map((item) => (
                  <div key={item.id} className="food_card">
                    <img
                      src={item.imageUrl}
                      alt="Alt"
                      className="food_image object-cover"
                    />
                    <h1 className="food-tag">{item.name}</h1>
                    <p className="food-desc">
                      {truncateText(item.description)}
                    </p>

                    <div className="food-ingredients">
                      <h1>Ingredients</h1>
                      <ul className="food-grid">
                        {item.ingredients.length >= 5
                          ? item.ingredients
                              .slice(0, 3)
                              .map((item) => (
                                <li>{truncateText(item, true)}</li>
                              ))
                          : item.ingredients
                              .slice(0, 5)
                              .map((item) => (
                                <li>{truncateText(item, true)}</li>
                              ))}
                      </ul>
                    </div>
                    <div className="view_more">
                      <Link href={`/food?id=${item._id}`}>Read More</Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="empty_food">
              <h1>No Item found</h1>
              <p>
                Login to add this food item.{" "}
                <Link href={"/auth/login"}>Login Here</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
