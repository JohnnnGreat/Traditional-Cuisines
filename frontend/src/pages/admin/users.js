import API from "@/axiosInstance";
import Layout from "./layout";
import React, { useEffect, useState } from "react";
import { Table } from "antd";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async function () {
      const response = await API.get("/users/getusers");
      setUsers(response.data.data);
      console.log(response);
    })();
  });
  const columns = [
    // {
    //   title: "ID",
    //   dataIndex: "id",
    //   //   render: (text) => <a>{text}</a>,
    // },
    {
      title: "id",
      dataIndex: "_id",
      //   render: (text) => <a>{text}</a>,
    },
    {
      title: "email",
      dataIndex: "email",
    },

    {
      title: "FullName",
      dataIndex: "fullName",
    },

    {
      title: "Verified",
      dataIndex: "verified",
      render: (verified) => {
        return verified ? (
          <span className="bg-green-200 p-[.5rem] text-green-500 rounded-md">
            Verified
          </span>
        ) : (
          <span className="bg-red-200 p-[.5rem] text-red-500 rounded-md">
            Not Verified
          </span>
        );
      },
      // {verified ? <span className="bg-red-200 p-[.5rem] text-red-500 rounded-md">
      // Verified    </span>: <>sss</
    },

    // {
    //     title: "Action",
    //     key: "action",
    //     render: (_, record) => (
    //       <Space size="middle">
    //         <button
    //           className="approve-food"
    //           onClick={() => {
    //             handleApprove(record);
    //           }}
    //         >
    //           Approve
    //         </button>
    //         <button
    //           className="view-food"
    //           onClick={() => {
    //             viewFood(record);
    //           }}
    //         >
    //           View
    //         </button>
    //       </Space>
    //     ),
    //   },

    ,
  ];

  const data = [];

  users?.map((item) => {
    data.push(item);
  });

  return (
    <div>
      <Layout>
        <h1>Registered Users</h1>
        <div className="table-display" id="table-display">
          <Table dataSource={data} columns={columns} />
        </div>
      </Layout>
    </div>
  );
};

export default Users;
