import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import "../styles/reels.scss";
import Jack from "../assets/jack.mp4";

const Reels = () => {
  return (
    <MainLayout>
      <div className="reels-main">
        <video className="reel" controls>
          <source src={Jack} type="video/mp4" />
        </video>
      </div>
    </MainLayout>
  );
};

export default Reels;
