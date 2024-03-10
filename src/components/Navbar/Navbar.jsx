import React from "react";
import { InputSwitch } from "primereact/inputswitch";
import { useDispatch, useSelector } from "react-redux";
import {
  collapseSidebar,
  switchTheme,
} from "../../redux/actions/layoutActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isDark, collapse } = useSelector((state) => state.layout);

  return (
    <div className={isDark ? "nav-dark" : "nav-light"}>
      <div className="nav-h">
        <div className="md:block hidden h-full">
          <div className="flex align-items-center justify-content-between h-full px-3">
            <div className="flex align-items-center gap-3">
              <i
                className="pi pi-bars cursor-pointer"
                onClick={() => dispatch(collapseSidebar(!collapse))}
              />
              {collapse && (
                <div className="font-semibold my-col lg:text-xl md:text-sm">
                  Insta Share
                </div>
              )}
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
              />
            </div>
          </div>
        </div>
        <div className="sm:hidden block h-full">
          <div className="flex justify-content-between align-items-center h-full px-3">
            <div className="font-semibold my-col text-3xl">Insta Share</div>
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
