import React from "react";

const downloadButton = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Download My Resume</h1>
      <a
        href="/assets/resume.pdf" // Path to your file in the public folder
        download="My_Resume.pdf" // Name of the file to download
        style={{
          display: "inline-block",
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#0070f3",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Download Resume
      </a>
    </div>
  );
};

export default downloadButton;
