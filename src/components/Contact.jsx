import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <div className="contact-deatils-child">
          <h4>OUR MAIN OFFICE</h4>
          <p>Lorem ipsum, dolor sit hhgfgfg. </p>
        </div>
        <div className="contact-deatils-child">
          <h4>PHONE NUMBER</h4>
          <p>6646443443,</p>
          <p>736463434-47545</p>
        </div>
        <div className="contact-deatils-child">
          <h4>FAX</h4>
          <p>6764863434</p>
        </div>
        <div className="contact-deatils-child">
          <h4>EMAIL</h4>
          <p>yqwtettwe@gmail.com</p>
        </div>
      </div>
      <h1 className="contact">CONTACT US</h1>
      <h3 className="contact">We are here to help you</h3>
        <form action="">
        <div className="contact-form">
          <p ><input type="text" className="each-form"  id="" placeholder="enter your name"/></p>
          <p ><input type="email" className="each-form" id="" placeholder="enter your email"/></p>
          <p ><input type="number" className="each-form" id="" placeholder="enter your contact.no" /></p>
          <p><textarea  id="w3review" name="w3review" rows="10" cols="81"placeholder="enter your queries"></textarea></p>
          <button className="send-btn">Send Us</button>
          </div>
        </form>
      </div>
    
  );
}

export default Contact;
