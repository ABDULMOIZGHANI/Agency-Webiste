import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-body">
      <div className="main-footer">
        <div className="footer-top-cont">
          <h1>Build and monetize no-code products</h1>
          <div className="social-media-icons">
            <div className="social-icon">
              <i className="fa-brands fa-facebook-f facebook"></i>
            </div>
            <div className="social-icon">
              <i className="fa-brands fa-linkedin-in linkedin"></i>
            </div>
            <div className="social-icon">
              <i className="fa-brands fa-instagram insta"></i>
            </div>
            <div className="social-icon">
              <i className="fa-brands fa-youtube youtube"></i>
            </div>
          </div>
        </div>
        <div className="footer-headings">
          <div className="newsletter">
            <h2>Newsletter</h2>
            <input type="text" placeholder="Enter your E-mail address" />
            <button id="btn" type="email">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
            <p>
              Ocassional but very useful tips about building products and
              startups without code
            </p>
          </div>

          <div className="newsletter">
            <h2>Menu</h2>

            <p>Services</p>
            <p>Portfolio</p>
            <p>Resource</p>
            <p>LOGO</p>
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default Footer;
