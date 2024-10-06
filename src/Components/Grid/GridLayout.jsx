import React from "react";
import "./GridLayout.css"; // Import the CSS file

const GridLayout = () => {
  return (
    <div className="grid-layout">
      {/* Left Column */}
      <div className="left-column">
        <h1 className="heading">
          <span>Modern</span>
          <span>Temp Labour</span>
          <span>Solutions</span>
        </h1>
        <p className="content">
          We're more than just a temp staffing agency, we break down the
          barriers between employers and labour-ready workers.
        </p>
        <div className="button-container">
          <button className="action-button">Find Workers</button>
          <button className="action-button">Find a Job</button>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        {/* Vertical Block */}
        <div className="vertical-block">
          <div className="block">
            <img
              src="https://www.grizzlyforce.ca/_next/image?url=%2Fcol_1.webp&w=256&q=75"
              alt="Image 1"
            />
          </div>
          <div className="block">
            <img
              src="https://www.grizzlyforce.ca/_next/image?url=%2Fcol_2.webp&w=256&q=75"
              alt="Image 2"
            />
          </div>
          <div className="block">
            <img
              src="https://www.grizzlyforce.ca/_next/image?url=%2Fcol_3.webp&w=256&q=75"
              alt="Image 3"
            />
          </div>
        </div>

        {/* Horizontal Block */}
        <div className="horizontal-block">
          <div className="col-4">
            <img
              src="https://www.grizzlyforce.ca/_next/image?url=%2Fcol_4.webp&w=256&q=75"
              alt="Image 4"
            />
          </div>
          <div className="col-7">
            <img
              src="https://www.grizzlyforce.ca/_next/image?url=%2Fcol_7.webp&w=256&q=75"
              alt="Image 7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
