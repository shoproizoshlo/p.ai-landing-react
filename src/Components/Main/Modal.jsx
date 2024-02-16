import React from "react";
import "../../styles/Modal.css";

const Modal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <p>Sorry!</p>
          <p>This is just a sample website.</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    )
  );
};

export default Modal;
