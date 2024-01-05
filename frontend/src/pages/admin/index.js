import React, { useEffect, useState, useRef } from "react";
import Layout from "./layout";
import Divider from "@/components/Divider";
import AxiosInstance from "@/axiosInstance";
import { resolve } from "styled-jsx/css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Table, Space } from "antd";
import { foodData } from "@/foodData";
import { message } from "antd";
import { Doughnut } from "react-chartjs-2";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
// import { html2pdf } from "html2pdf.js";
import Preloader from "@/components/Preloader";
import Chart from "chart.js/auto/auto";

const Index = () => {
  const [cuisines, setCuisines] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const chartRef = useRef(null);

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

  const printSec = useRef(null);
  const exportPdf = () => {
    html2canvas(printSec.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("information.pdf");
    });
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
        backgroundColor: "#e59700",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    rotation: 270,
    circumference: 270,
    responsive: true,
    maintainAspectRatio: true,
    width: "100",
    height: "100px",
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      {/* <div>You are yet to verify your account</div> */}
      {showLoader && <Preloader />}
      <div className="admin" ref={printSec}>
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
            <button
              className="p-[1rem] border-1 border-red-500 underline"
              onClick={exportPdf}
            >
              Export Pdf
            </button>
            <div className="table-display" id="table-display">
              {/* <button onClick={exportPdf}>Export</button> */}
              <Table dataSource={data} columns={columns} />
            </div>
            <div className="w-[300px] card-dou">
              <h2>Total Registered Users</h2>
              <Doughnut ref={chartRef} data={chartData} options={options} />
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Index;
