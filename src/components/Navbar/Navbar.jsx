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
                />
              </span>
            </div>
            <div>
              <InputSwitch
                checked={isDark}
                onChange={() => dispatch(switchTheme(!isDark))}
                pt={{
                  slider: ({ props }) => ({
                    className: props.checked ? "surface-300" : "surface-900",
                  }),
                }}
                severity="help"
                size={size}
              />
            </div>
          </div>
        </div>
        <div className="md:hidden block h-full">
          <div className="flex justify-content-between align-items-center h-full px-3">
            <div className="flex align-items-center">
              <img
                src={isDark ? LogoDark : LogoLight}
                className="sidebar-logo cursor-pointer"
                alt="logo"
              />
              <div className="font-semibold my-col text-3xl">Insta Share</div>
            </div>
            <div className="flex gap-4">
              <i className="pi pi-bell text-3xl my-col font-normal cursor-pointer" />
              <i className="pi pi-comment text-3xl my-col font-normal cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
