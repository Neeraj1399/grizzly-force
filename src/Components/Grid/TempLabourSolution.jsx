import React from "react";

const TempLabourSolution = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "570px 570px",
    gridTemplateRows: "406px 704.4px",
    width: "1140px",
    height: "720.44px",
    gap: "20px",
  };

  const leftColumnStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "24px",
    marginBottom: "10px",
  };

  const contentStyle = {
    fontSize: "15px",
    marginBottom: "20px",
  };

  const buttonStyle = {
    fontSize: "16px",
    margin: "5px 0",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const rightColumnStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "15px",
  };

  const imgStyle = {
    width: "153.56px",
    height: "153.56px",
    borderRadius: "50%",
    marginBottom: "15px",
  };

  const rightSideStyle = {
    padding: "15px",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={containerStyle}>
      {/* Left Column */}
      <div style={leftColumnStyle}>
        <h1 style={headingStyle}>Modern</h1>
        <h2 style={headingStyle}>Temp Labour</h2>
        <h3 style={headingStyle}>Solution</h3>
        <p style={contentStyle}>
          We're more than just a temp staffing agency, we break down the
          barriers between employers and labour-ready workers.
        </p>
        <button style={buttonStyle}>Find Workers</button>
        <button style={buttonStyle}>Find Jobs</button>
      </div>

      {/* Right Column */}
      <div style={rightColumnStyle}>
        {/* Top Left Circle Image */}
        <div
          style={{
            position: "relative",
            padding: "15px",
            width: "183.56px",
            height: "189.56px",
          }}
        >
          <img
            src="https://www.grizzlyforce.ca/_next/image?url=%2Fcol_1.webp&w=256&q=75"
            alt="Col 1"
            style={imgStyle}
          />
        </div>

        {/* Bottom Left Circle Image */}
        <div
          style={{
            position: "relative",
            padding: "15px",
            width: "153.56px",
            height: "153.56px",
          }}
        >
          <img
            src="https://www.grizzlyforce.ca/_next/image?url=%2Fcol_2.webp&w=256&q=75"
            alt="Col 2"
            style={imgStyle}
          />
        </div>

        {/* Bottom Left Circle Image */}
        <div
          style={{
            position: "relative",
            padding: "15px",
            width: "183.56px",
            height: "189.56px",
          }}
        >
          <img
            src="https://www.grizzlyforce.ca/_next/image?url=%2Fcol_3.webp&w=256&q=75"
            alt="Col 3"
            style={imgStyle}
          />
        </div>

        {/* Right Side Container */}
        <div style={rightSideStyle}>
          <div style={{ padding: "15px", width: "386.44px", height: "266px" }}>
            <img
              src="https://www.grizzlyforce.ca/_next/image?url=%2Fcol_4.webp&w=256&q=75"
              alt="Col 4"
              style={{ width: "164px", height: "196px", marginBottom: "15px" }}
            />
          </div>

          {/* Bottom Right Circle Image */}
          <div
            style={{ padding: "15px", width: "193.22px", height: "199.22px" }}
          >
            <img
              src="https://www.grizzlyforce.ca/_next/image?url=%2Fcol_5.webp&w=256&q=75"
              alt="Col 5"
              style={{
                width: "163.22px",
                height: "163.22px",
                borderRadius: "50%",
                marginBottom: "15px",
              }}
            />
          </div>

          {/* Bottom Right Circle Image */}
          <div
            style={{ padding: "15px", width: "193.22px", height: "199.22px" }}
          >
            <img
              src="https://www.grizzlyforce.ca/_next/image?url=%2Fcol_6.webp&w=256&q=75"
              alt="Col 6"
              style={{
                width: "163.22px",
                height: "163.22px",
                borderRadius: "50%",
                marginBottom: "15px",
              }}
            />
          </div>

          {/* Right Side of Col 4 */}
          <div style={{ padding: "15px", width: "190px", height: "196px" }}>
            <img
              src="https://www.grizzlyforce.ca/_next/image?url=%2Fcol_7.webp&w=256&q=75"
              alt="Col 7"
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                marginBottom: "15px",
              }}
            />
          </div>

          {/* Bottom Right Image */}
          <div
            style={{ padding: "15px", width: "193.22px", height: "398.44px" }}
          >
            <img
              src="https://www.grizzlyforce.ca/_next/image?url=%2Fcol_8.webp&w=256&q=75"
              alt="Col 8"
              style={{
                width: "193.22px",
                height: "199.22px",
                marginBottom: "15px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempLabourSolution;
