import React, { useState } from "react";
import claudio from "../../assets/claudio.png";
import daniel from "../../assets/daniel.png";
import grovemade from "../../assets/grovemade.png";
import marko from "../../assets/marko.png";
import "./style.css";
import Photo from "./Photo";
import Modal from "../Modal";

export default function Nermucum() {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = () => {
    console.log("Image clicked");
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="container">
        <h1 className="title">ներմուծում / արտահանում</h1>
        <span id="info">
          Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական
          արդյունաբերության ստանդարտ մոդելային տեքստ
        </span>
        <div className="photos">
          <div>
            <Photo
              handleModalOpen={handleModalOpen}
              // onClick={handleClick}
              photo={grovemade}
              descrition={"համակարգչային տեխնիկա"}
            />
            <Photo
              handleModalOpen={handleModalOpen}
              photo={daniel}
              descrition={"կենցաղային տեխնիկա"}
            />
          </div>
          <div>
            <Photo
              handleModalOpen={handleModalOpen}
              photo={claudio}
              descrition={"Հեռախոսներ և գաջետներ"}
            />
            <Photo
              handleModalOpen={handleModalOpen}
              photo={marko}
              descrition={"Ժամանակակից տեխնիկա"}
            />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="scroll-modal">
          <h2>համակարգչային տեխնիկա</h2>
          <div className="hr"></div>
          {Array.from({ length: 100 }, (_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              porttitor tellus
            </p>
          ))}
        </div>
      </Modal>
    </>
  );
}
