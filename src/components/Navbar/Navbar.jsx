import React from "react";
import { InputSwitch } from "primereact/inputswitch";
import { useDispatch, useSelector } from "react-redux";
import {
  collapseSidebar,
  switchTheme,
} from "../../redux/actions/layoutActions";
import { InputText } from "primereact/inputtext";
import LogoLight from "../../assets/logo.png";
import LogoDark from "../../assets/test.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isDark, collapse, size, postProfileSize } = useSelector(
    (state) => state.layout
  );
  const currentPath = window.location.pathname;

  const HomeNav = () => {
    return (
      <div className="flex justify-content-between align-items-center h-full pr-3">
        <div className="flex align-items-center">
          <img
            src={isDark ? LogoDark : LogoLight}
            className="sidebar-logo cursor-pointer"
            alt="logo"
          />
          <div className="font-semibold my-col main-text">Insta Share</div>
        </div>
        <div className="flex gap-4">
          <i className="pi pi-bell my-mobile-icon my-col font-normal cursor-pointer" />
          <i className="pi pi-comment my-mobile-icon my-col font-normal cursor-pointer" />
        </div>
      </div>
    );
  };

  const SearchNav = () => {
    return (
      <div className="flex justify-content-between align-items-center h-full pr-3">
        <div className="flex align-items-center gap-5">
          <img
            src={isDark ? LogoDark : LogoLight}
            className="sidebar-logo cursor-pointer"
            alt="logo"
          />
          <div>
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText
                placeholder="Search"
                className="p-inputtext-sm w-full"
                size={size}
                type="search"
              />
            </span>
          </div>
        </div>
      </div>
    );
  };

  const CreatePostNav = () => {
    return (
      <div className="flex justify-content-between align-items-center h-full pr-3">
        <div className="flex align-items-center gap-2">
          <img
            src={isDark ? LogoDark : LogoLight}
            className="sidebar-logo cursor-pointer"
            alt="logo"
          />
          <div className="font-semibold my-col main-text">Create Post</div>
        </div>
      </div>
    );
  };

  const ReelsNav = () => {
    return (
      <div className="flex justify-content-between align-items-center h-full pr-3">
        <div className="flex align-items-center gap-2">
          <img
            src={isDark ? LogoDark : LogoLight}
            className="sidebar-logo cursor-pointer"
            alt="logo"
          />
          <div className="font-semibold my-col main-text">Reels</div>
        </div>
        <div>
          <i className="pi pi-globe my-mobile-icon" />
        </div>
      </div>
    );
  };

  const ProfileNav = () => {
    return (
      <div className="flex justify-content-between align-items-center h-full border pl-2 pr-3">
        <div className="main-text">Krishna Goutham</div>
        <div className="flex gap-3">
          <i className="pi pi-bell my-mobile-icon" />
          <i className="pi pi-plus my-mobile-icon" />
          <i className="pi pi-bars my-mobile-icon" />
        </div>
      </div>
    );
  };

  return (
    <div className={isDark ? "nav-dark" : "nav-light"}>
      <div className="nav-h">
        <div className="md:block hidden h-full">
          <div className="flex align-items-center justify-content-between h-full px-3">
            <div className="flex align-items-center gap-3">
              <i
                className="pi pi-bars cursor-pointer sidebar-text"
                onClick={() => dispatch(collapseSidebar(!collapse))}
              />
              {!collapse && (
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
              {collapse && (
                <div className="font-semibold my-col sidebar-text">
                  Insta Share
                </div>
              )}
            </div>
            <div>
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  placeholder="Search"
                  className="p-inputtext-sm"
                  size={size}
                  type="search"
                />
              </span>
            </div>
            <div className="mr-1">
              {isDark && (
                <i
                  className="pi pi-sun cursor-pointer sidebar-text border-circle p-2 sun"
                  onClick={() => dispatch(switchTheme(false))}
                />
              )}
              {!isDark && (
                <i
                  className="pi pi-moon cursor-pointer sidebar-text border-circle p-2 moon"
                  onClick={() => dispatch(switchTheme(true))}
                />
              )}
            </div>
          </div>
        </div>
        <div className="md:hidden block h-full">
          {currentPath === "/home" && HomeNav()}
          {currentPath === "/search" && SearchNav()}
          {currentPath === "/create" && CreatePostNav()}
          {currentPath === "/reels" && ReelsNav()}
          {currentPath === "/profile" && ProfileNav()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
