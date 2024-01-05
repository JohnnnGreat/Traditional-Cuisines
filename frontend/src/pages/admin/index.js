import React, { useEffect, useState, useRef } from "react";
import Layout from "./layout";
import Divider from "@/components/Divider";
import AxiosInstance from "@/axiosInstance";
import { resolve } from "styled-jsx/css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Table, Space } from "antd";
import { foodData } from "@/foodData";
import { message } from "antd";
import { Bar } from "react-chartjs-2";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import html2pdf from "html2pdf.js";
import Preloader from "@/components/Preloader";
import Chart from "chart.js/auto/auto";

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

  const exportPdf = () => {
    // const input = document.getElementById("table-display"); // replace with your HTML element ID
    // // html2canvas(input).then((canvas) => {
    // //   const pdf = new jsPDF("p", "mm", "a4");
    // //   pdf.addImage(canvas.toDataURL("image/png")); // adjust size as needed
    // //   pdf.save("your-file-name.pdf");
    // // });
    // html2pdf(input);
  };

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

  const chartRef = useRef(null);
  const [length, setLength] = useState(0);
  useEffect(() => {
    (async function () {
      const response = await AxiosInstance.get("/users/getusers");

      setLength(response.data.data.length);
      console.log(response.data.data.length);
    })();
  });

  const chartData = {
    labels: ["Total Users"],
    datasets: [
      {
        label: "Number of Registered Users",
        data: [length],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
        labels: ["Category 1", "Category 2", "Category 3"],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      {/* <div>You are yet to verify your account</div> */}
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
              {/* <button onClick={exportPdf}>Export</button> */}
              <Table dataSource={data} columns={columns} />
            </div>
            <div>
              <h2>Total Registered Users</h2>
              <Bar data={chartData} options={options} />
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Index;
