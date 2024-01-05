import API from "@/axiosInstance";
import { message } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Login = () => {
  const navigate = useRouter();
  useEffect(() => {
    if (localStorage) {
      const value = localStorage.getItem("adminLoggedIn");
      if (value) {
        navigate.push("/admin");
      }
    }
  }, []);
  const [text, setText] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/admin/login", { text });
      message.success(response.data.message);

      if (response.data.success) {
        localStorage.setItem("adminLoggedIn", true);
        navigate.push("/admin");
      }
    } catch (error) {
      message.error(error.response.data.message);
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="bg-black opacity-60 flex h-screen items-center justify-center fixed top-0 bottom-0 z-50 w-full">
      <form>
        <input
          className="p-[1rem] outline-none"
          value={text}
          type="password"
          placeholder="Enter Admin Code"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={handleLogin}
          className="mt-[1rem] border-[1px] border-white block w-full p-[.7rem] text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
