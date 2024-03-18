import React, { useRef } from "react";
import StatusData from "../../assets/__mockData__/StatusData.json";

const Status = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -150, // adjust the value as needed for scrolling distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 150, // adjust the value as needed for scrolling distance
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex align-items-center">
      <i
        className="pi pi-angle-left my-page-icon cursor-pointer  hidden sm:block"
        onClick={scrollLeft}
      />
      <div className="status-container" ref={containerRef}>
        {StatusData.map((status) => (
          <div className="status-profile-pic-container" key={status.status_id}>
            <img className="status-profile-pic" src={status.userPic} />
          </div>
        ))}
      </div>
      <i
        className="pi pi-angle-right my-page-icon cursor-pointer  hidden sm:block"
        onClick={scrollRight}
      />
    </div>
  );
};

export default Status;
