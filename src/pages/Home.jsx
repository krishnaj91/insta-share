import React from "react";
import MainLayout from "../components/Layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="flex align-items-center justify-content-center">
        <img
          src="https://i.pinimg.com/736x/8d/c7/7c/8dc77c32cbbe0966a30be49ffe6f8f38.jpg"
          alt="OM"
          className="ganesh"
        />
      </div>
    </MainLayout>
  );
};

export default Home;
