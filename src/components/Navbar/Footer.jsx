import React from "react";
import { FooterItems } from "../../utils/FooterItems";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { isDark } = useSelector((state) => state.layout);
  const navigate = useNavigate();

  return (
    <div className="footer fixed bottom-0 right-0 w-screen">
      <div
        className={isDark ? "footer-dark-bg h-full" : "footer-light-bg h-full"}
      >
        <div className="flex align-items-center justify-content-evenly h-full">
          {FooterItems.map((item, index) => (
            <div key={index} className="border">
              <div onClick={() => navigate(item.path)}>
                <i className={`${item.icon} my-col cursor-pointer my-mobile-icon`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
