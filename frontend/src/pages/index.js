import Image from "next/image";
import HeroImage from "../../public/heroIMage.png";
import { foodData } from "../foodData";
import { featuredDetails } from "@/data/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AxiosInstance from "@/axiosInstance";
import toast, { Toaster } from "react-hot-toast";
import ScreenImage from "../../public/ScreenImage.png";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  useEffect(() => {});

  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const [email, setEmail] = useState("");

  function handleEmailValue(e) {
    setEmail(e.target.value);
  }

  async function handleSubscription(e) {
    e.preventDefault();
    console.log(email);
    try {
      const response = await AxiosInstance.post("/newsletter", { email });
      console.log(response);
      const { data } = response;
      const { message, success } = data;
      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  }
  const handleSearch = (e) => {
    e.preventDefault();

    const searchQuery = searchInput;
    // console.log(arrayIndex, searchQuery);

    router.push(`/search?foodName=${searchInput.toLowerCase()}`);
    // return itemName.includes(searchQuery.toLowerCase());
  };
  return (
    <>
      <Head>
        <title>Homepage | Soul Food</title>
      </Head>
      <Toaster />
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
      <section className="newsletter">
        <div className="newsletter__wrapper">
          <div>
            <h1>Subscribe to out newsletter</h1>
            <p>
              By Subscribing to, you agree to receive important updates about
              new cuisines recipes
            </p>
            <form action="">
              <input
                type="text"
                onChange={handleEmailValue}
                value={email}
                placeholder="Email Address"
              />
              <button onClick={handleSubscription}>Subscribe</button>
            </form>
          </div>
        </div>
      </section>
      <div className="projects">
        <div className="projects__wrapper">
          <main>
            <h1>
              Get started with a simple <span>query</span> .....
            </h1>
            <div className="image-p-container">
              <Image src={ScreenImage} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
