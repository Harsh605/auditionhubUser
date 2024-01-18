import React from "react";
import "./Loading.css"; // Import a CSS file for your styles

const loadingContainerStyle = {
  position: "relative",
  top: "0",
  left: "0",
  width: "100%",
  height: "60vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent", // Semi-transparent white background
};

const spinnerStyle = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  border: "6px solid #3EA3F4", 
  borderTop: "6px solid transparent",
};

const Loading = () => {
  return (
    <div className="loading-container" style={loadingContainerStyle}>
      <div className="spinner" style={spinnerStyle}></div>
    </div>
  );
};

export default Loading;
