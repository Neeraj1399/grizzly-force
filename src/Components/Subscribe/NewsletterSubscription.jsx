// NewsletterSubscription.js
import React from "react";
import "./NewsletterSubscription.css"; // Importing the CSS file for styling

const NewsletterSubscription = () => {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <h2 className="header">Subscribe to our newsletter.</h2>
      </div>
      <div className="sub-header-container">
        <p className="sub-header">Keep up with the Grizzly Force team!</p>
      </div>
      <div className="email-container">
        <input
          type="email"
          placeholder="Enter your email"
          className="email-input"
        />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
