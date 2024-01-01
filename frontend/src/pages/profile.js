import React, { useEffect, useRef } from "react";
import Divider from "@/components/Divider";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import AxiosInstance from "../axiosInstance";
import axios, { Axios } from "axios";
import { FcEmptyFilter } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { Table, Space } from "antd";
import Preloader from "@/components/Preloader";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import ProfileDisplay from "@/components/profile/ProfileDisplay";
import CuisineTable from "@/components/profile/cuisines/CuisineTable";

const Profile = () => {
  const [token, setToken] = useState("");
  const [isValidated, setIsValidated] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [file, setFile] = useState({});
  const [fileName, setFileName] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [userAddedCuisines, setUserAddedCuisines] = useState([]);

  const form = useRef(null);

  const [LinkSent, setLinkSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const [isVerified, setIsVerified] = useState(false);

  const [imageUrl, setImageUrl] = useState(null);
  const handleFile = (e) => {
    setFile(e.target.files[0]);

    setFileName(e.target.files[0].name);

    const reader = new FileReader();

    reader.onload = (event) => {
      const objectURL = event.target.result;
      setImageUrl(objectURL);
    };
  };
  // Verify profile
  const router = useRouter();

  const code = router?.query?.code;

  useEffect(() => {
    if (code) {
      console.log("Stt");
      if (JSON.parse(localStorage.getItem("data"))) {
        var data = JSON.parse(localStorage.getItem("data"));
      }
      const { _id, email } = data;
      (async function () {
        try {
          const response = await AxiosInstance.post("/users/verifyUser", {
            email,
            code,
          });

          console.log(response);

          setEmailVerified(true);
        } catch (error) {}
      })();
    }
  }, [code]);

  const GenerateToken = async () => {
    if (JSON.parse(localStorage.getItem("data"))) {
      var data = JSON.parse(localStorage.getItem("data"));
    }

    const { _id, email } = data;

    try {
      const response = await AxiosInstance.post("/users/generateCode", {
        _id,
        email,
      });
      console.log(response);

      const { data } = response;
      const { success } = data;
      console.log(success);
      if (success) {
        setLinkSent(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("data"))) {
      var data = JSON.parse(localStorage.getItem("data"));
    }

    const { _id } = data;
    (async function () {
      try {
        const response = await AxiosInstance.get(
          `/cuisines/getcuisines/${_id}`
        );

        const { data } = response;
        const { cuisines } = data;

        setUserAddedCuisines(cuisines);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userAddedCuisines]);

  const [isEdit, setIsEdit] = useState(false);
  const [record, setRecord] = useState(null);
  const {
    handleSubmit,
    register,
    formState: { errors, invalid },
    setValue,
    getValues,
    reset,
  } = useForm({
    defaultValues: isEdit
      ? record
      : {
          name: "",
          description: "",
          method: "",
          ingredients: "",
          time: "",
          category: "",
        },
    mode: "onChange",
  });
  const submitHandler = async (values) => {
    setIsLoading(true);
    setShowForm(false);
    const data = JSON.parse(localStorage.getItem("data"));
    const { _id } = data;
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("method", values.method);
    formData.append("ingredients", values.ingredients);
    formData.append("nutrition", values.nutrition);
    formData.append("time", values.time);
    formData.append("category", values.category);
    formData.append("image", file);
    formData.append("user", _id);

    try {
      const response = await AxiosInstance.post(
        "/cuisines/addcuisines",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setIsLoading(false);
      const { data } = response;
      const { file } = data;
      setImagePath(file);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const closeMo = () => {
    setShowForm(false);
  };
  //Check if the token is stored in the localstoreage
  useEffect(() => {
    if (localStorage.getItem("token")) {
      //access the token
      const token = localStorage.getItem("token");

      setToken(token);
    }
  }, []);

  useEffect(() => {
    if (token) setIsValidated(true);
  }, [token]);

  async function editHandler(record) {
    setIsLoading(true);
    setShowForm(false);
    try {
      const form = getValues();

      const response = await AxiosInstance.put(`/cuisines/update/${id}`, form);
      const { data } = response;

      const { success, message } = data;

      if (success) {
        setIsLoading(false);
        toast.success(message);
        reset();
      }
    } catch (error) {
      setIsLoading(false);
      toast.message(error.messag);
      reset();
    }
  }
  const [profileImage, setProfileImage] = useState("");

  const uploadProfileImage = async (e) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    if (JSON.parse(localStorage.getItem("data"))) {
      var data = JSON.parse(localStorage.getItem("data"));
    }

    const { _id } = data;
    try {
      const response = await AxiosInstance.put(
        `/users/updateprofile/${_id}`,
        formData
      );
      setIsLoading(false);
      const { data } = response;
      const { message } = data;
      toast.success(message);
    } catch (error) {
      setIsLoading(false);

      toast.error("An error occured");
    }
  };

  return (
    <>
      {isLoading && <Preloader />}
      <Toaster />
      {isValidated ? (
        <>
          {emailVerified ? (
            <div>
              <div className="max-w-[1100px] e mx-auto py-[.4rem] px-[.7rem] rounded-sm mt-[.8rem]">
                Account Status{" "}
                <span className="py-[.4rem] px-[.7rem] rounded-lg bg-green-600 text-white">
                  Verified
                </span>
              </div>
            </div>
          ) : (
            <div>
              {LinkSent ? (
                <div>A Link has been Sent to your registered email address</div>
              ) : (
                <div className="w-full">
                  <div className="max-w-[1000px] bg-red-100 p-[1.6rem] mx-auto flex gap-[.6rem] items-center">
                    <p className="text-red-500">
                      You are yet to verify your account
                    </p>
                    <button
                      onClick={GenerateToken}
                      className="border-[1px] border-red-500 py-[.6rem] px-[1rem]"
                    >
                      Click to Verify
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          <ProfileDisplay
            setEmailVerified={setEmailVerified}
            setIsVerified={setIsVerified}
          />

          {userAddedCuisines.length <= 0 ? (
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
                    Add A cuisine
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <CuisineTable setShowForm={setShowForm} />
            </>
          )}
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

      {showForm && (
        <div className="form-container">
          <div
            className="closebtn"
            onClick={() => {
              setShowForm(false);
            }}
          >
            <IoClose size={"40px"} color="fff" />
          </div>

          <form
            ref={form}
            onSubmit={handleSubmit(isEdit ? editHandler : submitHandler)}
          >
            <div className="time-cat">
              <div className="form-content">
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
              <div className="form-content">
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
            </div>

            <div className="form-content">
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

            <div className="time-cat">
              {" "}
              <div className="form-content">
                <label htmlFor="method">Nutrition</label>
                <input
                  id="method"
                  type="text"
                  {...register("nutrition", {
                    required: {
                      value: true,
                      message: " Enter a valid Name",
                    },
                  })}
                  placeholder="e.g. Calories: 333, Protein: 9.9g, Carbs: 53.4g, Fat: 9.4g"
                />
              </div>{" "}
              <div className="form-content">
                <label htmlFor="ingredient">Ingredients</label>
                <input
                  id="ingredient"
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
            </div>

            <div className="form-content">
              <label className="add-image" htmlFor="fileUpload">
                Upload Image
              </label>
              <input
                id="fileUpload"
                type="file"
                onChange={handleFile}
                accept="image/*"
                style={{ display: "none" }}
                placeholder="45"
              />
              {fileName && <p className="file_name">{fileName}</p>}
              {/* <img src={URL.createObjectURL(file)} /> */}
            </div>
            <div className="time-cat">
              <div className="form-content">
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
              <div className="form-content">
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
      )}
    </>
  );
};
export default Profile;
