import React from "react";
import LogoLight from "../../assets/logo.png";
import LogoDark from "../../assets/test.png";
import "../../styles/sidebar.scss";
import { useSelector } from "react-redux";
import { NavItems } from "../../utils/NavItems";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const { isDark, collapse, postProfileSize } = useSelector(
    (state) => state.layout
  );

  return (
    <div
      className={
        isDark
          ? "sidebar-dark max-h-screen overflow-y-auto tes"
          : "sidebar-light sidebar-text"
      }
    >
      <div
        className={`nav-h flex align-items-center px-1 gap-2 sidebar-head-bg ${
          collapse && "justify-content-center"
        }`}
      >
        <div>
          <img
            src={isDark ? LogoDark : LogoLight}
            className="cursor-pointer hidden lg:block"
            alt="logo"
            style={{ width: postProfileSize }}
            onClick={() => navigate("/home")}
          />
        </div>
        {collapse && (
          <div>
            <img
              src={isDark ? LogoDark : LogoLight}
              className="cursor-pointer lg:hidden md:block"
              alt="logo"
              style={{ width: postProfileSize }}
              onClick={() => navigate("/home")}
            />
          </div>
        )}
        {!collapse && (
          <div className="font-semibold my-col pl-1">Insta Share</div>
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
              <i className={`${item.icon} my-col sidebar-text`} />
            </div>
            {!collapse && (
              <div className="font-semibold my-col">{item.name}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
