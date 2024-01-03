import React, { isValidElement, useEffect, useState } from "react";
import { nav } from "@/data/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isValidated, setIsValidated] = useState(false);
  const [userProfilePic, setUserProfilePic] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("data")) {
        setIsValidated(true);

        const user = JSON?.parse(localStorage.getItem("data"));
        const { profilePic } = user;

        setUserProfilePic(profilePic);
      } else {
        setIsValidated(false);
      }
    } else {
      setIsValidated(false);
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("data");

    router.push("/auth/login");
  };

  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header_flex">
          <div className="logo">
            <h1>
              Soul<span>Food.</span>
            </h1>
          </div>
          <div className={`main ${navOpen && "opennav"} `}>
            <button
              className="close-btn"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <AiOutlineClose size={30} />
            </button>
            <nav>
              <ul>
                {nav.map((item, index) => (
                  <li>
                    <Link
                      className="link-nav"
                      key={index}
                      onClick={() => {
                        setNavOpen(false);
                      }}
                      href={item.path}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {!isValidated ? (
              <Link
                className="nav-lgn"
                onClick={() => {
                  setNavOpen(false);
                }}
                href={"/auth/register"}
              >
                Signup
              </Link>
            ) : (
              <div className="logout">
                <Link
                  onClick={() => {
                    setNavOpen(false);
                  }}
                  href={"/profile"}
                >
                  {" "}
                  <img src={userProfilePic} alt="user profile pic" />
                </Link>

                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
          <button
            className="menu-btn"
            onClick={() => {
              setNavOpen(true);
            }}
          >
            <RiMenu3Fill size={30} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
