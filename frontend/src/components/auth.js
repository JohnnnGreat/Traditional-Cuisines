import React, { useEffect, useState } from "react";
import Link from "next/link";
import AuthImage from "../../public/AuthImage.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import AxiosInstance from "../axiosInstance";
import { useRouter } from "next/router";
import Preloader from "./Preloader";

const Authentication = ({ registerSec, data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, invalid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: registerSec && "",
    },
    mode: "onChange",
  });

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  const submitHandler = async (value) => {
    setIsLoading(true);
    try {
      if (registerSec) {
        const response = await AxiosInstance.post("/users/register", value);
        setIsLoading(false);
        const { token, data, message, success } = response.data;
        console.log(token, data, message, success);
        toast.success(message);
      
        localStorage.setItem("data", JSON.stringify(data));
        // localStorage.setItem("token", token);

        if (success) {
          router.push("/auth/login");
        }
      } else {
        const { email, password } = value;
        const response = await AxiosInstance.post("/users/login", {
          email,
          password,
        });
        setIsLoading(false);
        const { token, data, message, success } = response.data;
        console.log(token, data, message, success);
        toast.success(message);
        console.log(response.data);

        localStorage.setItem("data", JSON.stringify(data));
        localStorage.setItem("token", token);

        if (success) {
          router.push("/profile");
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error(error?.response?.data.message);
    }
  };
  return (
    <>
      {isLoading && <Preloader />}
      <Toaster />
      <section className="auth">
        <div className="auth-grid">
          <div className="first-section">
            <div>
              <h1 className="auth_main-txt">{data?.text}</h1>
              <form onSubmit={handleSubmit(submitHandler)}>
                {registerSec && (
                  <div className="input-container">
                    <input
                      type="text"
                      placeholder="Full Name"
                      {...register("fullName", {
                        required: {
                          value: true,
                          message: " Enter a valid Name",
                        },
                      })}
                    />
                  </div>
                )}
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Email Address"
                    {...register("email", {
                      required: {
                        value: true,
                        message: " Enter a valid email address",
                      },
                    })}
                  />
                </div>
                <div className="input-container">
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                    })}
                  />
                </div>
                <button type="submit" className="link-sub">
                  {data?.text}
                </button>
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
    </>
  );
};

export default Authentication;
