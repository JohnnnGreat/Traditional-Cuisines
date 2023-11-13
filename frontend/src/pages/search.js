import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { foodData } from "@/foodData";
import { useParams } from "next/navigation";
import { list } from "postcss";

const Search = () => {
  const params = useParams();
  console.log(params);
  const router = useRouter();

  console.log(router);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const searchQ = router.query.foodName;

    const result = foodData.filter((foodItem) => {
      const foodsItem = foodItem.name.toLowerCase();
      return foodsItem.includes(searchQ);
    });
    setSearchResult(result);
  }, [router.query.foodName]);

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
    <div className="search">
      <div className="search__wrapper">
        <h1 className="search-title">
          Search Results for <span>{router.query.foodName}</span>
        </h1>
        <div className="search-container">
          {searchResult.map((item) => (
            <div className="food_card">
              <h1 className="food-tag">{item.name}</h1>
              <p className="food-desc">{truncateText(item.description)}</p>
              {/* {item.description.splice(0, 10)} */}
              <div className="food-m-container">
                <h1>Method of Preparation</h1>
                <ul className="food-method">
                  {convArr(item.method)
                    .slice(0, 4)
                    .map((item) => (
                      <li>{item.slice(0, 100)}</li>
                    ))}
                </ul>
              </div>
              <div className="food-ingredients">
                {" "}
                <h1>Ingredients</h1>
                <ul className="food-grid">
                  {item.ingredients.slice(0, 5).map((item) => (
                    <li>{truncateText(item, true)}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
