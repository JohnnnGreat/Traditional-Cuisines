import React from "react";
import Link from "next/link";
import AuthImage from "../../public/AuthImage.png";
import Image from "next/image";

const Authentication = ({ register, data }) => {
  return (
    <section className="auth">
      <div className="auth-grid">
        <div className="first-section">
          <div>
            <h1 className="auth_main-txt">{data?.text}</h1>
            <form>
              {register && (
                <div className="input-container">
                  <input type="text" placeholder="Full Name" />
                </div>
              )}
              <div className="input-container">
                <input type="text" placeholder="Email Address" />
              </div>
              <div className="input-container">
                <input type="password" placeholder="Password" />
              </div>
              <Link className="link-sub" href={data?.path}>
                {data?.text}
              </Link>
              <p className="alt-link">
                {data?.other}{" "}
                <span>
                  <Link className="link-alt" href={data?.path}>
                    {data?.text === "Register" ? "Login" : "Register"}
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
        <div className="second-section">
          <Image
            className="auth-img"
            src={AuthImage}
            alt="Authentication Image Placeholder"
          ></Image>
          <div className="auth_content">
            <div className="auth_content-main">
              <h1 className="auth_content-main_header">
                Welcome to Soul Food, your one-stop shop for all things
                traditional cuisine.
              </h1>
              <p className="auth_content-main_desc">
                {data?.text} to your account to access our exclusive recipes,
                cooking tips, and meal planning tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authentication;
