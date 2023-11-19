import Image from "next/image";
import HeroImage from "../../public/heroIMage.png";
import { foodData } from "../foodData";
import { featuredDetails } from "@/data/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    console.log(foodData);
  });
  console.log(featuredDetails);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const searchQuery = searchInput;
    // console.log(arrayIndex, searchQuery);

    router.push(`/search?foodName=${searchInput.toLowerCase()}`);
    // return itemName.includes(searchQuery.toLowerCase());
  };
  return (
    <>
      <main className="hero">
        <div className="hero__wrapper">
          <div className="hero__wrapper__grid">
            <div className="hero-first">
              {" "}
              <div>
                <h1>
                  Discover African <span>Cuisines.</span>
                </h1>
                <p>
                  Have access to a domain of traditional cuisines, and steps in
                  preparation
                </p>
                <form action="">
                  <input
                    type="text"
                    placeholder="Search for a Cuisine"
                    onChange={handleSearchInput}
                  />
                  <button onClick={handleSearch}>GO</button>
                </form>
              </div>
            </div>
            <div className="hero-second">
              <Image
                src={HeroImage}
                className="hero-image"
                alt="HeroImage"
              ></Image>
            </div>
          </div>
        </div>
      </main>
      <section className="featured">
        <div className="featured__wrapper">
          <h1 className="featured__header">Our Featured Cuisines</h1>
          <p className="featured__desc">
            Have a look of the available featured cuisines.
          </p>
          <div className="food-grid">
            {featuredDetails.map((item, index) => (
              <div className="food-grd-container">
                <div className="food-card">
                  <img src={item?.image} alt="Featured Image" />
                  <h1>{item?.name}</h1>
                  <p>{item?.desc}</p>
                  <p className="cook_time">{item?.cookTime} minutes</p>
                </div>
              </div>
            ))}
          </div>
          <div className="view_more_cuisines">
            <Link href={"/cuisines"}>View More</Link>
          </div>
        </div>
      </section>
      <section className="get-started">
        <div className="get-started__wrapper"></div>{" "}
      </section>
    </>
  );
}
