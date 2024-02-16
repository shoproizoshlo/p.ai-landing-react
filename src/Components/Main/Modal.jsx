import React from "react";
import "../../styles/Modal.css";

const Modal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <p>Это только пример сайта</p>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    )
  );
};

export default Modal;
