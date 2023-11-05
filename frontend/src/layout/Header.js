import React from "react";
import { nav } from "@/data/auth";
import Link from "next/link";

const Header = () => {
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
            <Link className="nav-lgn" href={"/auth/register"}>
              Signup
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
