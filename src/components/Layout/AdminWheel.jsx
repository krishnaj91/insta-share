import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  collapseSidebar,
  switchTheme,
} from "../../redux/actions/layoutActions";
import { Button } from "primereact/button";

const AdminWheel = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.layout);
  const [visible, setVisible] = useState(false);
  const colors = [
    { name: "Red", hexCode: "#FF5E5E" },
    { name: "Blue", hexCode: "#5E97FF" },
    { name: "Green", hexCode: "#5EFFA2" },
    { name: "Yellow", hexCode: "#FFFF5E" },
    { name: "Purple", hexCode: "#AE5EFF" },
    { name: "Orange", hexCode: "#FFB05E" },
    { name: "Cyan", hexCode: "#5EFFFF" },
    { name: "Magenta", hexCode: "#FF5EFF" },
    { name: "Teal", hexCode: "#5EFFD8" },
    { name: "Pink", hexCode: "#FF5EB0" },
  ];

  const handleSidebarOpen = () => {
    setVisible(true);
  };

  const handleSidebarClose = () => {
    setVisible(false);
  };

  const handleColor = (color) => {
    const root = document.documentElement;
    root.style.setProperty("--primaryColor", color);
    root.style.setProperty("--themeColor", color);
    root.style.setProperty("--themeColorSecondary", color);
    root.style.setProperty("--buttonColor", color);
  };

  return (
    <div>
      <div className="admin-wheel p-3" onClick={handleSidebarOpen}>
        <i className="pi pi-cog" />
      </div>
      <Sidebar
        visible={visible}
        onHide={handleSidebarClose}
        position="right"
        header="Admin Control"
        className={
          isDark
            ? "surface-800 text-200  md:w-4 sm:w-6"
            : " surface-200 text-800 md:w-4 sm:w-6"
        }
      >
        <div className="mb-3">
          <div className="text-3xl font-bold mb-2">Sidebar</div>
          <div className="flex gap-4">
            <Button
              onClick={() => dispatch(collapseSidebar(false))}
              size="small"
              className="my-bg border-none"
            >
              ON
            </Button>
            <Button
              onClick={() => dispatch(collapseSidebar(true))}
              size="small"
              className="my-bg border-none"
            >
              OFF
            </Button>
          </div>
        </div>

        <div className="mb-3">
          <div className="text-3xl font-bold mb-2">Theme</div>
          <div className="flex gap-4">
            <Button
              onClick={() => dispatch(switchTheme(false))}
              size="small"
              className="my-bg border-none"
            >
              LIGHT
            </Button>
            <Button
              onClick={() => dispatch(switchTheme(true))}
              size="small"
              className="my-bg border-none"
            >
              DARK
            </Button>
          </div>
        </div>

        <div className="mb-3">
          <div className="text-3xl font-bold mb-2">Color</div>
          <div className="flex flex-wrap gap-3">
            {colors.map((color, index) => (
              <Button
                key={index}
                onClick={() => handleColor(color.hexCode)}
                style={{ background: color.hexCode }}
                className="border-none"
              >
                {color.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <div className="text-3xl font-bold mb-2">SIZE</div>
          <div>Comming Soon ...</div>
        </div>
      </Sidebar>
    </div>
  );
};

export default AdminWheel;
