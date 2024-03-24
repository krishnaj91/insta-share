import React, { useRef } from "react";

const CustomDialog = ({ visible, onHide, children }) => {
  const modalRef = useRef(null);

  return (
    <div>
      {visible && (
        <div ref={modalRef} className="modal-overlay" onClick={onHide}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDialog;