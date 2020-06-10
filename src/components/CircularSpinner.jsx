import React from "react";

function CircularSpinner() {
  return (
    <svg
      className="spinner fill-current stroke-current text-black"
      viewBox="0 0 50 50"
    >
      <circle
        className="path"
        cx="25"
        cy="25"
        r="15"
        fill="none"
        strokeWidth="2"
      ></circle>
    </svg>
  );
}

export default CircularSpinner;
