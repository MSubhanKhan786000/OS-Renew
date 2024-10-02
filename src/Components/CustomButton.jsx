import React from "react";
import "../Styles/CustomButton.css";

const CustomButton = ({
  height,
  width,
  text,
  backgroundColor,
  hoverBackgroundColor,
  color,
  onClick,
}) => {
  return (
    <button
      className="custom-button"
      style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        color: color,
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onClick={onClick}
      onMouseOver={e => {
        e.target.style.backgroundColor = hoverBackgroundColor;
      }}
      onMouseOut={e => {
        e.target.style.backgroundColor = backgroundColor;
      }}
    >
      {text}
    </button>
  );
};

export default CustomButton;
