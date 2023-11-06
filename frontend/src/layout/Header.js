import React, { isValidElement, useEffect, useState } from "react";
import { nav } from "@/data/auth";
import Link from "next/link";

const Header = () => {
  const [isValidated, setIsValidated] = useState(false);
  const [userProfilePic, setUserProfilePic] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (JSON.parse(localStorage.getItem("data"))) {
        setIsValidated(true);

        const user = JSON.parse(localStorage.getItem("data"));
        const { profilePic } = user;

        setUserProfilePic(profilePic);
      } else {
        setIsValidated(false);
      }
    } else {
      setIsValidated(false);
    }
  });
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header_flex">
          <div className="logo">
            <h1>
              Soul<span>Food.</span>
            </h1>
          </div>
          <div className="main">
            <nav>
              <ul>
                {nav.map((item, index) => (
                  <li>
                    <Link className="link-nav" key={index} href={item.path}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {!isValidated ? (
              <Link className="nav-lgn" href={"/auth/register"}>
                Signup
              </Link>
            ) : (
              <div>Logout</div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
