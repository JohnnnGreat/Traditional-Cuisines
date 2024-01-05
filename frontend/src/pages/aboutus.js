import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div>
        <Header text={"About Us"} />

        <div className="about-p">
          <div className="wrapper-p">
            <p>
              Welcome to Soul Food, a culinary journey that celebrates the rich
              tapestry of Nigerian traditional cuisine. Our passion is to bring
              the soulful flavors, vibrant colors, and cultural essence of
              Nigeria’s diverse culinary heritage to your plate. Explore the
              depth of our traditions through each dish, meticulously crafted to
              evoke nostalgia and create unforgettable dining experiences. At
              Soul Food, we invite you to savor the authenticity, embrace the
              traditions, and join us on a delicious voyage through the heart of
              Nigerian gastronomy.
            </p>

            <p>
              Soul Food is a Nigerian traditional cuisine website that
              celebrates the rich and diverse flavors of our culture. We are
              passionate about sharing our authentic recipes, cooking tips, and
              stories with our readers. Whether you are looking for a hearty
              soup, a spicy stew, a savory snack, or a sweet treat, we have
              something for you. Our dishes are made with fresh ingredients,
              local spices, and lots of love. Join us as we explore the culinary
              heritage of Nigeria and discover the soul of our food.
            </p>
            <Link href="/contact"> Send Us Message</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
