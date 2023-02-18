import React from "react";
import logo from "../resource/samplelogo.jpg";
import lawyer from "../resource/lawyer.jpg";
import "../styles/header.css";
import Animatedtext from "./Animatedtext";
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <div className="heading">
        <img className="images" src={logo} alt="Logo"></img>
        <h3>Atlas Law Consultancy</h3>
      </div>
      <div className="banner">
        <div className="divtag">
          <div className="divanime">
            <Animatedtext />
          </div>
          <div>
            <img src={lawyer} alt="Lawyer" className="lawyerimg"></img>
            <br />
          </div>
        </div>

        <div className="contactdiv">
          <a href="tel:99999999999">
            <button className="bannerbutton">
              <p>Contact Us <BsFillTelephoneFill/></p>
            </button>
          </a>
          <a href="mailto:mail@gmail.com">
            <button className="bannerbutton">
              <p>Send Mail <FiMail/></p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
