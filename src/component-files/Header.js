import React from "react";
// import logo from "../resource/samplelogo.jpg";
import lawyer from "../resource/lawyer.jpeg";
import "../styles/header.css";
import Animatedtext from "./Animatedtext";
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Header = () => {
  return (
    <div>
       <div className="contactdiv">
          <a href="tel:99999999999" className="atag">
            {/* <button className="bannerbutton"> */}
              <h1><BsFillTelephoneFill/>    +919842980769</h1>
            {/* </b/utton> */}
        </a>
        {/* <span>Law Consultancy</span> */}
          <a href="mailto:atlas@gmail.com" className="atag">
            {/* <button className="bannerbutton"> */}
              <h1><FiMail/>  msivaadvocate2016@gmail.com</h1>
            {/* </button> */}
          </a>
        </div>
      <div className="banner">
        <div className="divtag">
          <div className="divanime">
            <Animatedtext />
          </div>
          <div className="teamWrapper">
            <div className="container">
              <div className="teamcolinner">
                <div className="avatar"><img src={lawyer} alt="Member" /></div>
                <div className="member-name"> <h2 align="center">Siva</h2> </div>
                <div className="member-info"><p align="center">145 Kadaliyar Road, Kovilpatti </p></div>
                <div className="member-info"><p align="center">Thoothukudi, TamilNadu</p></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
