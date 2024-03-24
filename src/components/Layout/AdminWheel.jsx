import React, { useEffect, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  collapseSidebar,
  homeProfilePicSize,
  primeReactSizes,
  switchTheme,
} from "../../redux/actions/layoutActions";
import { Button } from "primereact/button";

const AdminWheel = () => {
  const dispatch = useDispatch();
  const { isDark, size } = useSelector((state) => state.layout);
  const [visible, setVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const colors = [
    // { name: "White", hexCode: "#fff" },
    // { name: "Black", hexCode: "#000000" },
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

  const bodyIcon = screenWidth >= 769 ? "26px" : "24px";

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSidebarOpen = () => {
    setVisible(true);
  };

  const handleSidebarClose = () => {
    setVisible(false);
  };

  const handleColor = (color) => {
    const root = document.documentElement;
    root.style.setProperty("--primaryColor", color);
    // root.style.setProperty("--themeColor", color);
    // root.style.setProperty("--themeColorSecondary", color);
    // root.style.setProperty("--buttonColor", color);
  };

  const handleSmallText = () => {
    const root = document.documentElement;
    root.style.setProperty("--status-size", "60px");
    const sidebarTextSize =
      screenWidth <= 768
        ? "20px"
        : screenWidth > 769 && screenWidth < 1024
        ? "18px"
        : "22px";
    root.style.setProperty("--sidebar-text", `calc(${sidebarTextSize} - 4px)`);
    root.style.setProperty(
      "--main-font-size",
      `calc(${sidebarTextSize} - 2px)`
    );
    root.style.setProperty(
      "--subheading-size",
      `calc(${sidebarTextSize} - 2px)`
    );
    root.style.setProperty(
      "--paragraph-size",
      `calc(${sidebarTextSize} - 6px)`
    );
    root.style.setProperty("--mobile-icon", "22px");
    root.style.setProperty("--page-icon-size", `calc(${bodyIcon} - 4px)`);
    dispatch(primeReactSizes("small"));
    dispatch(homeProfilePicSize("40px"));
  };

  const handleNormalText = () => {
    const root = document.documentElement;
    root.style.setProperty("--status-size", "70px");
    const sidebarTextSize =
      screenWidth <= 768
        ? "20px"
        : screenWidth > 769 && screenWidth < 1024
        ? "18px"
        : "22px";
    root.style.setProperty("--sidebar-text", sidebarTextSize);
    root.style.setProperty(
      "--main-font-size",
      `calc(${sidebarTextSize} + 2px)`
    );
    root.style.setProperty("--subheading-size", sidebarTextSize);
    root.style.setProperty(
      "--paragraph-size",
      `calc(${sidebarTextSize} - 4px)`
    );
    root.style.setProperty("--mobile-icon", "26px");
    root.style.setProperty("--page-icon-size", bodyIcon);
    dispatch(primeReactSizes("normal"));
    dispatch(homeProfilePicSize("45px"));
  };

  const handleLargeText = () => {
    const root = document.documentElement;
    root.style.setProperty("--subheading-size", "16px");
    root.style.setProperty("--status-size", "80px");
    const sidebarTextSize =
      screenWidth <= 768
        ? "20px"
        : screenWidth > 769 && screenWidth < 1024
        ? "18px"
        : "22px";
    root.style.setProperty("--sidebar-text", `calc(${sidebarTextSize} + 4px)`);
    root.style.setProperty(
      "--main-font-size",
      `calc(${sidebarTextSize} + 6px)`
    );
    root.style.setProperty(
      "--subheading-size",
      `calc(${sidebarTextSize} + 4px)`
    );
    root.style.setProperty("--paragraph-size", sidebarTextSize);
    root.style.setProperty("--mobile-icon", "30px");
    root.style.setProperty("--page-icon-size", `calc(${bodyIcon} + 4px)`);
    dispatch(primeReactSizes("large"));
    dispatch(homeProfilePicSize("50px"));
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
        blockScroll
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
              size={size}
              className="my-btn text-500"
            >
              ON
            </Button>
            <Button
              onClick={() => dispatch(collapseSidebar(true))}
              size={size}
              className="my-btn text-500"
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
              size={size}
              className="my-btn text-500"
            >
              LIGHT
            </Button>
            <Button
              onClick={() => dispatch(switchTheme(true))}
              size={size}
              className="my-btn text-500"
            >
              DARK
            </Button>
          </div>
        </div>

        <div className="mb-3">
          <div className="text-3xl font-bold mb-2">SIZE</div>
          <div className="flex flex-wrap gap-3">
            <Button
              label="SMALL"
              size={size}
              onClick={handleSmallText}
              className="my-btn text-500"
            />
            <Button
              label="NORMAL"
              size={size}
              onClick={handleNormalText}
              className="my-btn text-500"
            />
            <Button
              label="LARGE"
              size={size}
              onClick={handleLargeText}
              className="my-btn text-500"
            />
          </div>
        </div>

        <div className="mb-3">
          <div className="text-3xl font-bold mb-2">Color</div>
          <div className="flex flex-wrap gap-3">
            <Button
              label="White"
              onClick={() => handleColor("#fff")}
              style={{ background: "#fff" }}
              className="border-none text-900"
              size={size}
              disabled={!isDark}
            />
            <Button
              label="Black"
              onClick={() => handleColor("#000000")}
              style={{ background: "#000000" }}
              className="border-none"
              size={size}
              disabled={isDark}
            />
            {colors.map((color, index) => (
              <Button
                key={index}
                onClick={() => handleColor(color.hexCode)}
                style={{ background: color.hexCode }}
                className={
                  color.name === "White"
                    ? "border-none text-900"
                    : "border-none"
                }
                size={size}
              >
                {color.name}
              </Button>
            ))}
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default AdminWheel;
