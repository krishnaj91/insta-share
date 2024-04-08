import React, { useRef } from "react";

const CustomDialog = ({ visible, onHide, children }) => {
  const modalRef = useRef(null);

  return (
    <div>
      {visible && (
        <div ref={modalRef} className="modal-overlay" onClick={onHide}>
          <div className="fixed top-0 right-0">
            <i className="pi pi-times text-2xl p-5 cursor-pointer text-100" />
          </div>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDialog;
