import React, { useEffect } from "react";
import Divider from "@/components/Divider";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import AxiosInstance from "../axiosInstance";
import axios from "axios";
import { FcEmptyFilter } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Table, Space } from "antd";
import Preloader from "@/components/Preloader";

const Profile = () => {
  const [token, setToken] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [file, setFile] = useState({});
  const [fileName, setFileName] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [userAddedCuisines, setUserAddedCuisines] = useState([]);
  const [userCuisines, setUserCuisines] = useState([]);

  // const data =
  //   JSON.parse(localStorage.getItem("data")) &&
  //   JSON.parse(localStorage.getItem("data"));
  // const { _id } = data;

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
  }, []);
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

  const [imageUrl, setImageUrl] = useState(null);
  const handleFile = (e) => {
    setFile(e.target.files[0]);

    setFileName(e.target.files[0].name);

    const reader = new FileReader();

    reader.onload = (event) => {
      const objectURL = event.target.result;
      setImageUrl(objectURL);
      console.log(imageUrl);
    };
  };

  const submitHandler = async (values) => {
    setIsLoading(true);
    setShowForm(false);
    console.log(values);
    const data = JSON.parse(localStorage.getItem("data"));
    const { _id } = data;
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("method", values.method);
    formData.append("ingredients", values.ingredients);
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
      console.log(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
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
  });

  useEffect(() => {
    if (token) setIsValidated(true);
  });

  useEffect(() => {
    (async function () {
      try {
        if (localStorage.getItem("data")) {
          const dataContent = JSON.parse(localStorage.getItem("data"));
          const { _id } = dataContent;

          const response = await AxiosInstance.get(
            `/cuisines/getallprofilecuisines/${_id}`
          );

          const { data } = response;
          const { cuisines } = data;
          setUserCuisines(cuisines);
        }
      } catch (error) {}
    })();
  });

  const columns = [
    // {
    //   title: "ID",
    //   dataIndex: "id",
    //   //   render: (text) => <a>{text}</a>,
    // },
    {
      title: "Name",
      dataIndex: "name",
      //   render: (text) => <a>{text}</a>,
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Method",
      dataIndex: "method",
    },

    {
      title: "Ingredients",
      dataIndex: "ingredients",
    },

    {
      title: "Category",
      dataIndex: "category",
    },

    {
      title: "Time",
      dataIndex: "time",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            className="approve-food"
            onClick={() => {
              handleApprove(record);
            }}
          >
            Delete
          </button>
          <button
            className="view-food"
            // onClick={() => {
            //   handleApprove(record);
            // }}
          >
            Edit
          </button>
        </Space>
      ),
    },
  ];

  const data = [];

  const content = userCuisines?.map((item) => {
    data.push(item);
  });

  return (
    <>
      {isLoading && <Preloader />}
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
            <div className="display_table">
              <div className="display-table__wrapper">
                <button
                  className="add_cuisine_btn"
                  onClick={() => {
                    setShowForm(true);
                  }}
                >
                  Add a cuisine
                </button>
                <Table columns={columns} dataSource={data} />
              </div>
            </div>
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
      <img className="image-form" src={imagePath} alt="" />

      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit(submitHandler)}>
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
