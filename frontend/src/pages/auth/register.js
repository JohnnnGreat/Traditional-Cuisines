import React from "react";
import { auth } from "@/data/auth";
import Auth from "@/components/auth";

const { register } = auth;
const registerAuth = () => {
  return (
    <div>
      <Auth data={register} text="Register" registerSec={true} />
    </div>
  );
};

export default registerAuth;
