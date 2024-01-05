import React, { useState } from "react";
import Header from "@/components/Header";
import { useForm } from "react-hook-form";
import API from "@/axiosInstance";
import { message } from "antd";
import Preloader from "@/components/Preloader";
import Head from "next/head";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      message: "",
    },

    mode: "onChange",
  });

  async function sendMessage(value) {
    setIsLoading(true);
    try {
      const response = await API.post("/users/sendmessage", value);
      const { data } = response;
      reset();
      setIsLoading(false);
      message.success(data.message);
    } catch (error) {
      setIsLoading(false);
      message.error(error.message);
      reset();
    }
  }
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div>
        {isLoading && <Preloader />}
        <Header text={"Contact Us"} />

        <div className="container-con">
          {" "}
          <form onSubmit={handleSubmit(sendMessage)}>
            <input
              type="text"
              placeholder="Email Address"
              {...register("email", {
                required: {
                  value: true,
                  message: " Enter a valid email address",
                },
              })}
            />
            {errors.email?.message && (
              <p className="error-txt">{errors.email.message}</p>
            )}
            <textarea
              placeholder="Want to send a message?...."
              {...register("message", {
                required: {
                  value: true,
                  message: " Enter a valid message",
                },
              })}
            ></textarea>
            {errors.message?.message && (
              <p className="error-txt">{errors.message.message}</p>
            )}
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
