import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Left Column */}
      <div className="footer-left-column">
        <img
          src="https://www.grizzlyforce.ca/GrizzlyForce_Logo-Horizontal_LightBackground.svg"
          alt="Grizzly Logo"
          className="footer-logo"
        />
        <p className="footer-description">
          Grizzly is a private virtual network that has unique features and high
          security.
        </p>
        <div className="footer-icons">
          <img
            src="https://www.grizzlyforce.ca/google.svg"
            alt="Google"
            className="footer-icon"
            style={{ width: "155px", height: "46px" }}
          />
          <img
            src="https://www.grizzlyforce.ca/app.svg"
            alt="App"
            className="footer-icon"
            style={{ width: "138px", height: "46px" }}
          />
        </div>
      </div>

      {/* Footer Columns */}
      <div className="footer-columns">
        {/* Second Column */}
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="footer-column">
          <h4>Engage</h4>
          <ul>
            <li>Grizzling</li>
            <li>FAQ</li>
            <li>Tutorials</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="footer-column">
          <h4>Earn Money</h4>
          <ul>
            <li>Affiliate</li>
            <li>Become Partner</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
