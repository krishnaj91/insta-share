import React from "react";
import { Route, Routes } from "react-router-dom";
import Test from "../pages/Test";
import Info from "../pages/Info";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Info />} />
      </Routes>
    </div>
  );
};

export default Router;
