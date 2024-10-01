import React from 'react';
import "../Styles/CustomButton.css";

const CustomButton = ({ height, width, text,onClick }) => {
  return (
    <button
      className="custom-button"
      style={{
        height: height,
        width: width,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
