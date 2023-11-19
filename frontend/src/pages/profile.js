import React, { useEffect } from "react";
import Divider from "@/components/Divider";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import AxiosInstance from "../axiosInstance";
import { FcEmptyFilter } from "react-icons/fc";
import { useForm } from "react-hook-form";

const Profile = () => {
  const [token, setToken] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [user, setUser] = useState({});

  const [showForm, setShowForm] = useState(false);

  //Fetch User Data
  useEffect(() => {
    try {
      (async function () {
        if (isValidated) {
          if (localStorage.getItem("data")) {
            const data = JSON.parse(localStorage.getItem("data"));
            const { _id } = data;
            const token = localStorage.getItem("token");

            const response = await AxiosInstance.get(`/users/getuser/${_id}`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            const { success, userData } = response.data;

            if (success) {
              setUser(userData);
            }
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
        <>
          <section className="profile_details">
            <div className="profile_details_wrapper">
              <div className="profile_grid">
                <div className="profile-image">
                  <img
                    src={user?.profilePic}
                    className="profile__image"
                    alt="This is a profile image"
                  />
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

          <div className="cuisines__added">
            <div className="cuisines__added__wrapper">
              <div>
                <FcEmptyFilter size={"50px"} />
                <h1>You Have No Cuisine Added</h1>
                <button
                  onClick={() => {
                    setShowForm(true);
                  }}
                >
                  Add a new Cuisine
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="required-login">
          <div>
            <h1>Login Required</h1>
            <p>You are not permitted to access this page, please login</p>
            <Link href="/auth/login">Back Login</Link>
          </div>
        </div>
      )}

      {showForm && <Form />}
    </>
  );
};

const Form = () => {
  const [file, setFile] = useState({});
  const [fileName, setFileName] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors, invalid },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      method: "",
      ingredients: "",
      time: "",
      category: "",
    },
    mode: "onChange",
  });

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const submitHandler = (values) => {
    console.log(values);
    console.log(file);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="name">Food Name</label>
          <input
            id="name"
            type="text"
            placeholder="e.g Rice, Beans"
            {...register("name", {
              required: {
                value: true,
                message: " Enter a valid Name",
              },
            })}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            {...register("description", {
              required: {
                value: true,
                message: " Enter a valid Name",
              },
            })}
            placeholder="add a description"
          />
        </div>
        <div>
          <label htmlFor="method">Method</label>
          <input
            id="method"
            type="text"
            {...register("method", {
              required: {
                value: true,
                message: " Enter a valid Name",
              },
            })}
            placeholder="Parboil the rice, fry the vegetables and meat........"
          />
        </div>
        <div>
          <label htmlFor="method">Ingredients</label>
          <input
            id="method"
            type="text"
            {...register("ingredients", {
              required: {
                value: true,
                message: " Enter a valid Name",
              },
            })}
            placeholder="e.g. Calories: 333, Protein: 9.9g, Carbs: 53.4g, Fat: 9.4g"
          />
        </div>
        <div>
          <label className="add-image" htmlFor="fileUpload">
            Upload Image
          </label>
          <input
            id="fileUpload"
            type="file"
            onChange={handleFile}
            style={{ display: "none" }}
            placeholder="45"
          />
          {fileName && <p className="file_name">{fileName}</p>}
        </div>
        <div className="time-cat">
          <div>
            <label htmlFor="method">Category</label>
            <input
              id="method"
              {...register("category", {
                required: {
                  value: true,
                  message: " Enter a valid Name",
                },
              })}
              type="text"
              placeholder="Rice"
            />
          </div>
          <div>
            <label htmlFor="method">Time</label>
            <input
              id="method"
              {...register("time", {
                required: {
                  value: true,
                  message: " Enter a valid Name",
                },
              })}
              type="text"
              placeholder="45"
            />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Profile;
