import React from "react";
import Header from "@/components/Header";
import { useForm } from "react-hook-form";

const Contact = () => {
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
    console.log(value);
  }
  return (
    <div>
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
  );
};

export default Contact;
