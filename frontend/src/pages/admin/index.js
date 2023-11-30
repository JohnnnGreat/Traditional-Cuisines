import React, { useEffect, useState } from "react";
import Layout from "./layout";
import Divider from "@/components/Divider";
import AxiosInstance from "@/axiosInstance";
import { resolve } from "styled-jsx/css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Table, Space } from "antd";
import { foodData } from "@/foodData";
import { message } from "antd";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import  html2pdf  from "html2pdf.js";
import Preloader from "@/components/Preloader";

const Index = () => {
  const [cuisines, setCuisines] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const { _id } = JSON.parse(localStorage.getItem("data"));

    (async function () {
      try {
        const response = await AxiosInstance.get(
          `/cuisines/getunapprovedcuisines/`
        );

        const { data } = response;

        const { cuisines } = data;

        setCuisines(cuisines);
      } catch (error) {
        console.log(error);
      }
    })();
  });

  const handleApprove = async (record) => {
    setShowLoader(true);
    const { _id } = record;
    try {
      const response = await AxiosInstance.put(
        `/cuisines/verifycuisine/${_id}`
      );
      setShowLoader(false);
      const { data } = response;
      const { success, message } = data;
      if (success) {
        message.sucess(message);
      } else {
        message.error(message);
      }
    } catch (error) {
      message.error(message);
      setShowLoader(false);
    }
  };

  // const exportPdf = () => {
  //   const input = document.getElementById("table-display"); // replace with your HTML element ID
  //   // html2canvas(input).then((canvas) => {
  //   //   const pdf = new jsPDF("p", "mm", "a4");
  //   //   pdf.addImage(canvas.toDataURL("image/png")); // adjust size as needed
  //   //   pdf.save("your-file-name.pdf");
  //   // });
  //   html2pdf(input);
  // };

  const viewFood = () => {};
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
      title: "Category",
      dataIndex: "category",
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
            Approve
          </button>
          <button
            className="view-food"
            onClick={() => {
              viewFood(record);
            }}
          >
            View
          </button>
        </Space>
      ),
    },
  ];

  const data = [];

  cuisines?.map((item) => {
    data.push(item);
  });

  return (
    <>
      <div>You are yet to verify your account</div>
      {showLoader && <Preloader />}
      <div className="admin">
        <Layout>
          <div className="admin-wrapper">
            <h1 className="food-request">Food Requests</h1>
            <Divider />

            <div className="notification-container">
              <div className="notification-card">
                <IoIosNotificationsOutline fontSize={25} />
                {cuisines.length > 0 && (
                  <div className="notification-dot"></div>
                )}
                {/* <div className="notification-dot"></div> */}
              </div>
            </div>
            {/* <button onClick={exportPdf}>Export Pdf</button> */}
            <div className="table-display" id="table-display">
              <Table dataSource={data} columns={columns} />
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Index;
