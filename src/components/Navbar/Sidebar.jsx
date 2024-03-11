import React from "react";
import LogoLight from "../../assets/logo.png";
import LogoDark from "../../assets/test.png";
import "../../styles/sidebar.scss";
import { useSelector } from "react-redux";
import { NavItems } from "../../utils/NavItems";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const { isDark, collapse } = useSelector((state) => state.layout);

  return (
    <div
      className={
        isDark ? "sidebar-dark max-h-screen overflow-y-auto" : "sidebar-light"
      }
    >
      <div
        className={`nav-h flex align-items-center gap-3 sidebar-head-bg ${
          collapse && "justify-content-center"
        }`}
      >
        <div>
          <img
            src={isDark ? LogoDark : LogoLight}
            className="sidebar-logo cursor-pointer"
            alt="logo"
            onClick={() => navigate("/home")}
          />
        </div>
        {!collapse && (
          <div className="font-semibold my-col lg:text-xl md:text-sm">
            Insta Share
          </div>
        )}
      </div>
      <div className="sidebar-body">
        {NavItems.map((item, index) => (
          <div
            key={index}
            className={`flex align-items-center sidebar-body-content gap-4 p-3 ${
              collapse && "justify-content-center"
            }`}
            onClick={() => navigate(item.path)}
          >
            <div>
              <i className={`${item.icon} lg:text-xl md:text-sm my-col`} />
            </div>
            {!collapse && (
              <div className="font-semibold my-col lg:text-xl md:text-sm">
                {item.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
