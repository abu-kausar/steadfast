import React from "react";

const Button = ({ text, width, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`mt-4 bg-[#00B795] text-white cursor-pointer p-[10px] h-[48px] rounded-sm ${
        width === "full" ? "w-full" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;