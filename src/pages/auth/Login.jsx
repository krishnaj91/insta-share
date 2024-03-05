import React from "react";
import LoginImg from "../../assets/login.png";
import Logo from "../../assets/logo.png";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Login = () => {
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden grid">
      <div className="hidden md:block md:col-6">
        <div className="flex justify-content-center align-items-center h-full">
          <img src={LoginImg} alt="login" className="w-10" />
        </div>
      </div>

      <div className="md:col-6 col-12">
        <div className="flex justify-content-center align-items-center h-full">
          <div className="md:w-9 sm:w-11 p-5">
            <div className="flex flex-column justify-content-center align-items-center mb-3">
              <img src={Logo} alt="logo" className="w-2" />
              <div className="text-2xl font-semibold">Insta Share</div>
            </div>
            <div className="mb-3">
              <label>Username</label>
              <InputText className="w-full h-2rem" />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <InputText className="w-full h-2rem" />
              <div className="text-sm text-right mt-1">Forget Password</div>
            </div>
            <Button className="h-2rem w-full" label="Login" />
            <div className="text-center my-3">Dont have account Register</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
