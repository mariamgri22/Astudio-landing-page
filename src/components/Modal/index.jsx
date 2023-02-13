import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./style.css";

const Modal = ({ children, isOpen, setIsOpen }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return createPortal(
    isOpen && (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100000,
        }}
      >
        <div ref={modalRef} className="modal-content">
          <style>
            {`
                ::-webkit-scrollbar {
                  width: 10px;
                  height: 5px;
                  background-color: #F5F5F5;
                }

                ::-webkit-scrollbar-thumb {
                  border-radius: 5px;
                
                  background-color: #000000;
                }
             
              `}
          </style>
          <span onClick={() => setIsOpen(false)}>X</span>
          {children}
        </div>
      </div>
    ),
    document.getElementById("modalik")
  );
};

export default Modal;
