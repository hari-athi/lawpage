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
       <div className="contactdiv">
          <a href="tel:99999999999" className="atag">
            {/* <button className="bannerbutton"> */}
              <h1><BsFillTelephoneFill/>    99999999999</h1>
            {/* </b/utton> */}
        </a>
        {/* <span>Law Consultancy</span> */}
          <a href="mailto:atlas@gmail.com" className="atag">
            {/* <button className="bannerbutton"> */}
              <h1><FiMail/>   as@gmail.com</h1>
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
                <div className="avatar"><img src="https://i.ibb.co/6nQP7Wm/pexels-vinicius-wiesehofer-1130626-1.jpgjpg" alt="Member" /></div>
                <div className="member-name"> <h2 align="center">Ketty Leroux</h2> </div>
                <div className="member-info"><p align="center">Lorem Ipsum is a simply dummy text of the printing and typesetting industry.</p></div>
                <div className="member-mail"> <p align="center"> <a href="mailto:kettyleroux@gmail.com">kettyleroux@gmail.com</a> </p> </div>
                <div className="member-social"> 
                  <ul className="social-listing">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-instagram" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  </ul> 
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
