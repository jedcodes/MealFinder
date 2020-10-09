import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
      <div className="footer__title">
        <h1>Contact Us</h1>
        <h1>About Us</h1>
        <h1>Sosial Media</h1>
      </div>
      <div className="footer__subscribe">
        <h3>Subscribe For Newsletter</h3>
        <form>
        <input type="text" placeholder="Enter Email...." />
        <button type="submit">Subscribe</button>
        </form>
      </div>
      </div>
    </div> 
  );
};

export default Footer;
