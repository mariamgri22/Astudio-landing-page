import React from "react";
import logo from "../../assets/logo.svg";
import "./style.css";
import social from "../../assets/social.svg";
import social2 from "../../assets/social2.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <img id='footer-logo' src={logo} alt="" />
        <div className="icons">
          <div className="ic-circle">
            <img src={social} alt="" />
          </div>
          <div className="ic-circle">
            <img src={linkedin} alt="" />
          </div>
          <div className="ic-circle">
            <img src={social2} alt="" />
          </div>
          <div className="ic-circle">
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className="contact">
          <span>+374(55) 08 62 95</span>
          <span>Թումանյան 31/3</span>
          <span>Tradeinvestarm@gmail.com</span>
        </div>
        <div className="dev">
          <span>© Tradeinvestarm. Բոլոր իրավունքները պաշտպանված են</span>
          <span>Դիզայն և ծրագրավորում ԱՍՏՈՒԴԻՈ ՍՊԸ</span>
        </div>
      </div>
    </footer>
  );
}
