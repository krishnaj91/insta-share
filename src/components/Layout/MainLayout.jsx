import React from "react";
import Sidebar from "../Navbar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "../../styles/layout.scss";
import { useSelector } from "react-redux";
import Footer from "../Navbar/Footer";

const MainLayout = ({ children }) => {
  const { collapse, isDark } = useSelector((state) => state.layout);
  
  return (
    <div className="grid w-screen overflow-hidden min-h-screen max-h-screen">
      <div
        className={`${
          collapse ? "collapsed-sidebar-width" : "w-20"
        } hidden md:block`}
      >
        <Sidebar />
      </div>
      <div
        className={`${collapse ? "collapsed-content-width" : "w-80"} h-full`}
      >
        <Navbar />
        <div
          className={`${
            isDark ? "layout-dark" : "layout-light"
          } layout-content`}
        >
          <div className="p-4">{children}</div>
        </div>
        <div className="sm:hidden block">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
