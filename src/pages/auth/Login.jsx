import React from "react";
import LoginImg from "../../assets/login-img.png";
import Logo from "../../assets/logo.png";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmt = () => {
    navigate("/home");
  };

  return (
    <div className="h-screen max-w-screen overflow-x-hidden grid main">
      <div className="hidden md:block md:col-6">
        <div className="flex justify-content-center align-items-center h-full">
          <img src={LoginImg} alt="login" className="cm-width" />
        </div>
      </div>

      <div className="md:col-6 col-12">
        <div className="flex justify-content-center align-items-center h-full">
          <div className="md:w-9 sm:w-11 p-5">
            <div className="flex flex-column justify-content-center align-items-center mb-3">
              <img src={Logo} alt="logo" className="w-3" />
              <div className="text-2xl font-semibold mb-5 my-col">
                Insta Share
              </div>

              <div className="mb-3">
                <label>Username</label>
                <br />
                <InputText className="input-width h-2rem" />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <br />
                <InputText className="input-width h-2rem" />
                <div className="text-xs text-right mt-1 font-semibold my-link">
                  Forget Password
                </div>
              </div>
              <Button
                className="h-2rem input-width my-bg outline-none border-none"
                label="Login"
                onClick={handleSubmt}
              />
              <div className="text-center my-3">
                Don't have account?{" "}
                <span className="my-link font-semibold">Register</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
