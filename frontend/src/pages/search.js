import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { foodData } from "@/foodData";
import { useParams } from "next/navigation";

const search = () => {
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

  return (
    <div>
      {searchResult.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default search;
