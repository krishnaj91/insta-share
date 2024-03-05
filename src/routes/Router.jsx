import React from "react";
import { Route, Routes } from "react-router-dom";
import Test from "../pages/Test";
import Info from "../pages/Info";
import Login from "../pages/auth/Login";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/info" element={<Info />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Router;
