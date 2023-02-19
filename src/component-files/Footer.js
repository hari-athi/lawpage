import React from "react";
import "../styles/footer.css";
import { FiInstagram } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <div className="footdiv">
        <div className="left">
          <h4 className="headtag">Why Atlas Law Consultancy</h4>
          <p className="par">
            As a reputable law practise, we respond to this inquiry. We will do
            everything in our power to assist you because we are aware of the
            position you are in. We are your dependable partner in the defence
            against the accusations because we stick by our convictions. We'll
            give you the confidence to take on the accusation and come out with
            success.
          </p>
          
        </div>
        <div className="right">
          <p className="parright">
            123/A, Victoria Hostel Rd,
            <br />
            Chepauk, Triplicane, Chennai,
            <br />
            Tamil Nadu,
            <br />
            - 600005.
            <br />
            <br />
            <span className="headtag">
              1234456544 <span style={{ color: "white" }}>|</span>{" "}
              mailid@gmail.com
            </span>
          </p>
        </div>
      </div>
      <div className="iconfootdiv">
            <a href="insta.com" className="icon">
              <FiInstagram />
            </a>
            <a href="twitter.com" className="icon">
              <SlSocialTwitter />
            </a>
            <a href="facebook.com" className="icon">
              <ImFacebook2 />
            </a>
          </div>
      <div className="rights">
        <h5>© 2023, Techief Technologies. All Rights Reserved.</h5>
      </div>
    </>
  );
};

export default Footer;
