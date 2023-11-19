import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { foodData } from "@/foodData";
import { useParams } from "next/navigation";
import { list } from "postcss";
import Link from "next/link";

const Search = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const searchQ = router.query.foodName;

    const result = foodData.filter((foodItem) => {
      const foodsItem = foodItem.name.toLowerCase();
      return foodsItem.includes(searchQ);
    });

    setSearchResult(result);
    console.log(searchResult.length);
    setIsEmpty(result ? false : true);
  }, [router.query.foodName, isEmpty]);

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
    <div className="search">
      <div className="search__wrapper">
        <h1 className="search-title">
          Search Results for <span>{router.query.foodName}</span>
        </h1>
        {searchResult.length > 1 ? (
          <div className="search-container">
            {searchResult.map((item) => (
              <div key={item.id} className="food_card">
                <img
                  src="https://images.unsplash.com/photo-1540100716001-4b432820e37f?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Alt"
                  className="food_image"
                />
                <h1 className="food-tag">{item.name}</h1>
                <p className="food-desc">{truncateText(item.description)}</p>

                <div className="food-ingredients">
                  <h1>Ingredients</h1>
                  <ul className="food-grid">
                    {item.ingredients.length >= 5
                      ? item.ingredients
                          .slice(0, 3)
                          .map((item) => <li>{truncateText(item, true)}</li>)
                      : item.ingredients
                          .slice(0, 5)
                          .map((item) => <li>{truncateText(item, true)}</li>)}
                  </ul>
                </div>
                <div className="view_more">
                  <Link href={`/food?name=${item.name}`}>Read More</Link>
                </div>
              </div>
            ))}
          </div>
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
  );
};

export default Search;
