import React, { useEffect } from "react";
import Divider from "@/components/Divider";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import AxiosInstance from "../axiosInstance";

const profile = () => {
  const [token, setToken] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [user, setUser] = useState({});

  //Fetch User Data
  useEffect(() => {
    try {
      (async function () {
        if (isValidated) {
          const data = JSON.parse(localStorage.getItem("data"));
          const { _id } = data;
          const response = await AxiosInstance.get(`/users/getuser/${_id}`);
          const { success, userData } = response.data;

          if (success) {
            setUser(userData);
          }
        }
      })();
    } catch (error) {
      console.log(error);
    }
  });

  //Check if the token is stored in the localstoreage
  useEffect(() => {
    if (localStorage.getItem("token")) {
      //access the token
      const token = localStorage.getItem("token");

      setToken(token);
    }
  });

  useEffect(() => {
    if (token) setIsValidated(true);
  });
  return (
    <>
      {isValidated ? (
        <section className="profile_details">
          <div className="profile_details_wrapper">
            <div className="profile_grid">
              <div className="profile-image">
                <img src={user?.profilePic} alt="This is a profile image" />
              </div>
              <div className="profile-details-con">
                <h1 className="profile-name">{user?.fullName}</h1>
                <p className="instance-details">User</p>
                <Divider />
                <h1 className="added-cuisine">Number of Added Cuisine</h1>
                <p className="instance-details">0</p>
                <Divider />
                <h1>Added Categories</h1>
                <p className="instance-details">None</p>
                <Divider />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="required-login">
          <div>
            <h1>Login Required</h1>
            <p>You are not permitted to access this page, please login</p>
            <Link href="/auth/login">Back Login</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default profile;
