import Image from "next/image";
import HeroImage from "../../public/heroIMage.png";
import { foodData } from "../foodData";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    console.log(foodData);
  });

  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const searchQuery = searchInput;
    // console.log(arrayIndex, searchQuery);

    router.push(`/search?foodName=${searchInput}`);
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
          <p>Have a look of the available featured cuisines.</p>
          <div className="food-grid">
            <div className="food-card">
              <h1>Food One</h1>
            </div>
            <div className="food-card">
              <h1>Food One</h1>
            </div>

            <div className="see_more">
              <Link href="/cuisines">See More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
