import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const CardPopup = ({ isOpen, onClose, children }) => {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fullscreen-popup-overlay" onClick={onClose}>
      <div
        className="fullscreen-popup-content"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    container
  );
};

export default CardPopup;
