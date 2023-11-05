import Auth from "@/components/auth";
import React from "react";
import { auth } from "@/data/auth";

const { login } = auth;

const loginAuth = () => {
  return (
    <div>
      <Auth text="Login" data={login} values={null} />
    </div>
  );
};

export default loginAuth;
