import React from "react";
import MainLayout from "../../components/Layout/MainLayout";

import Status from "./Status";
import Posts from "./Posts";

const Home = () => {
  return (
    <MainLayout>
      <Status />
      <Posts />
    </MainLayout>
  );
};

export default Home;
