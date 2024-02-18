import React from "react";
import "../../styles/Modal.css";

const Modal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div
        className="flex justify-center items-center fixed inset-0 w-full h-full z-30 modal-overlay"
        onClick={onClose}
      >
        <div
          className="p-8 bg-white rounded-xl text-center modal"
          onClick={(e) => e.stopPropagation()}
        >
          <p>Sorry!</p>
          <p>This is just a sample website.</p>
          <button
            className="mt-3 pt-1 pb-1 ps-5 pe-4 bg-black text-white rounded-xl"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default Modal;
