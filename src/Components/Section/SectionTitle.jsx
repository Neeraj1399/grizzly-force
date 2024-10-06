import React from "react";
import "./SectionTitle.css"; // Import the CSS file

const SectionTitle = () => {
  return (
    <div className="section-container" style={{ backgroundColor: "azure" }}>
      <div className="section-header">
        <h2 className="section-title">How on-demand staffing works</h2>
      </div>

      <div className="section-content">
        {/* First Column */}
        <div className="section-column">
          <div className="section-item">
            <img
              src="https://www.grizzlyforce.ca/quick.svg"
              alt="Quick Sign Up"
              className="main-icon"
            />
            <img
              src="https://www.grizzlyforce.ca/staff.svg"
              alt="Staff"
              className="staff-icon"
            />
          </div>
          <div className="section-step">STEP 1</div>
          <div className="section-heading">Quick Sign Up</div>
          <div className="section-description">
            Grizzly Force makes it easy to sign up in minutes
          </div>
        </div>

        {/* Second Column */}
        <div className="section-column">
          <div className="section-item">
            <img
              src="https://www.grizzlyforce.ca/post-job.svg"
              alt="Post Jobs"
              className="main-icon"
            />
            <img
              src="https://www.grizzlyforce.ca/staff.svg"
              alt="Staff"
              className="staff-icon"
            />
          </div>
          <div className="section-step">STEP 2</div>
          <div className="section-heading">Post Jobs 24/7</div>
          <div className="section-description">
            Use our mobile app or web platform from the office or on the go, any
            time of day
          </div>
        </div>

        {/* Third Column */}
        <div className="section-column">
          <div className="section-item">
            <img
              src="https://www.grizzlyforce.ca/view-match.svg"
              alt="Fill in Real Time"
              className="main-icon"
            />
            <img
              src="https://www.grizzlyforce.ca/staff.svg"
              alt="Staff"
              className="staff-icon"
            />
          </div>
          <div className="section-step">STEP 3</div>
          <div className="section-heading">Fill in Real Time</div>
          <div className="section-description">
            With thousands of ready-to-go workers, you can watch your jobs being
            filled in real time
          </div>
        </div>

        {/* Fourth Column */}
        <div className="section-column">
          <div className="section-item">
            <img
              src="https://www.grizzlyforce.ca/we-do.svg"
              alt="We Do the Rest"
              className="main-icon"
            />
          </div>
          <div className="section-step">STEP 4</div>
          <div className="section-heading">We Do the Rest!</div>
          <div className="section-description">
            We take care of payroll, deductions, and insurance
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
