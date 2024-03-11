import React, { useEffect } from "react";
import Sidebar from "../Navbar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "../../styles/layout.scss";
import "../../styles/pages.scss";
import { useSelector } from "react-redux";
import Footer from "../Navbar/Footer";

const MainLayout = ({ children }) => {
  const { collapse, isDark } = useSelector((state) => state.layout);

  // useEffect(() => {
  //   document.documentElement.style.setProperty(
  //     "--themeColor",
  //     isDark ? "#ffffff" : "#000000"
  //   );
  // }, [isDark]);
  // root.style.setProperty('--primaryColor', isDark ? '#ffffff' : '#e3437f');
 
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primaryColor', isDark ? '#ffffff' : '#000000');
    root.style.setProperty('--themeColor', isDark ? "#ffffff" : "#000000");
    root.style.setProperty('--themeColorSecondary', isDark ? "#F5F5F5" : "#222222");
  }, [isDark]);

  return (
    <div className="grid w-screen overflow-hidden min-h-screen max-h-screen my-col">
      <div
        className={`${collapse ? "collapsed-sidebar-width" : "w-20"
          } hidden md:block`}
      >
        <Sidebar />
      </div>
      <div
        className={`${collapse ? "collapsed-content-width" : "w-80"} h-full`}
      >
        <Navbar />
        <div
          className={`${isDark ? "layout-dark" : "layout-light"
            } layout-content`}
        >
          <div className="">{children}</div>
        </div>
        <div className="md:hidden block">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
