import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footdiv">
        <div className="left">
          <h4 className="headtag">Why Our Law Consultancy</h4>
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
           145 Kadaliyar Rd,
            <br />
            Kovilpatti, Thoothukudi,
            <br />
            Tamil Nadu,
            <br />
            
            <br />
            <br />
            <span className="headtag">
              +91 9842980769 <span style={{ color: "white" }}>|</span>{" "}
              msivaadvocate2016@gmail.com
            </span>
          </p>
        </div>
      </div>
      <div className="iconfootdiv">
           
          </div>
      <div className="rights">
        <h5>© 2023, All Rights Reserved.</h5>
      </div>
    </>
  );
};

export default Footer;
