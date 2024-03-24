import React, { useRef } from "react";

const MobileDownViewer = ({ visible, onHide, children, height }) => {
  const modalRef = useRef(null);

  return (
    <div>
      {visible && (
        <div
          ref={modalRef}
          className="comments-mobile-overlay"
          onClick={onHide}
        >
          <div
            className={
              height
                ? "comments-mobile-content-full"
                : "comments-mobile-content"
            }
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDownViewer;
