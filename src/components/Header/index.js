import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import logo from "./../../assets/logo.svg";
import logoName from "../../assets/logoName.svg";
import group from "../../assets/Group.svg";
import "./style.css";

export default function Header() {
  const [headerClass, setHeaderClass] = useState("");
  const [headerSvgClass, setHeaderSvgClass] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
;
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setHeaderClass("header-color");
      setHeaderSvgClass("header-color-blue");
    } else {
      setHeaderClass("");
      setHeaderSvgClass("");
    }
  };

  const handleModalOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = () => {
    setSubmit(true);
  };

  return (
    <>
      <header className={headerClass}>
        <div className="header-container">
          <img className={headerSvgClass} src={logo} alt="" />
          <div className="contact-info">
            <span>+374(55) 08 62 95</span>
            <span id="line" onClick={handleModalOpen}>
              Պատվիրել զանգ
            </span>
          </div>
        </div>
      </header>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="modal">
          <h2>Պատվիրել զանգ</h2>
          <div className="hr"></div>
          {!submit ? (
            <>
              <span>
                Պատվիրեք հետադարձ զանգ, և մենք կկապնվենք խորհրդատվության համար
              </span>
              <input type="text" placeholder="Անուն" />
              <input type="text" placeholder="Հեռախոսահամար" />
              <button onClick={handleSubmit} type="submit" id="modal-button">
                Ուղարկել
              </button>
            </>
          ) : (
            <>
              <div className="call-feedback">
                <div className="circle">
                  <img id="logoN" src={logoName} alt="" />
                </div>
                <img id="gr-img" src={group} alt="" />
              </div>
              <p>Շնորհակալության մենք կկապնվենք ձեզ հետ</p>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}
