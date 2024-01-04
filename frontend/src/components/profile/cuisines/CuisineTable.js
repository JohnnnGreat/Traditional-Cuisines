import React, { useEffect, useRef, useState } from "react";
import { Table, Space } from "antd";
import AxiosInstance from "@/axiosInstance";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

const CuisineTable = ({ showForm, setShowForm }) => {
  // State to store cuisines
  const [userCuisines, setUserCuisines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [id, setPostId] = useState("");
  // The Columns for cuisine table

  const [isEdit, setIsEdit] = useState(false);
  const [record, setRecord] = useState(null);
  //   const [showForm, setShowForm] = useState(false);
  const form = useRef(null);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState({});

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

          const { data } = response;
          const { cuisines } = data;

          setUserCuisines(cuisines);
        }
      } catch (error) {
        console.log(error);
      }
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
    </>
  );
};

export default CuisineTable;
