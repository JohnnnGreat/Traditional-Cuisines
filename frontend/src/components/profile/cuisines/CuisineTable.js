import React, { useEffect, useRef, useState } from "react";
import { Table, Space } from "antd";
import AxiosInstance from "@/axiosInstance";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

const CuisineTable = () => {
  // State to store cuisines
  const [userCuisines, setUserCuisines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [id, setPostId] = useState("");
  // The Columns for cuisine table

  const [isEdit, setIsEdit] = useState(false);
  const [record, setRecord] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const form = useRef(null);
  const [fileName, setFileName] = useState("");

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

  const columns = [
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
              handleDelete(record);
            }}
          >
            Delete
          </button>
          <button
            className="view-food"
            onClick={() => {
              handleEdit(record);
            }}
          >
            Edit
          </button>
        </Space>
      ),
    },
  ];

  // Fetched Data from the backend
  useEffect(() => {
    (async function () {
      try {
        if (localStorage.getItem("data")) {
          const dataContent = JSON.parse(localStorage.getItem("data"));
          const { _id } = dataContent;

          const response = await AxiosInstance.get(
            `/cuisines/getallprofilecuisines/${_id}`
          );
          console.log(response);
          const { data } = response;
          const { cuisines } = data;
          setUserCuisines(cuisines);
        }
      } catch (error) {}
    })();
  }, [userCuisines]);

  // Cuisine Information Fetched from the database are stored here
  const data = [];

  userCuisines?.map((item) => {
    data.push(item);
  });

  // Edit Added Cuisines Entries
  const handleEdit = (record) => {
    setPostId(record._id);

    setValue("name", record.name);
    setValue("description", record.description);
    setValue("method", record.method);
    setValue("ingredients", record.ingredients);
    setValue("category", record.category);
    setValue("time", record.time);
    setValue("image", record.imageUrl);

    setIsEdit(true);

    const formValues = getValues();

    setRecord(record);
    setShowForm(true);
  };

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

  const handleDelete = async (record) => {
    setIsLoading(true);
    try {
      const response = await AxiosInstance.delete(
        `/cuisines/delete/${record._id}`
      );
      setIsLoading(false);
      const { data } = response;
      const { success, message } = data;
      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <>
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

export default CuisineTable;
