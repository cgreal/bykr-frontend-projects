import React from "react";

const Button = ({ text, type }) => {
  if (!text) return;
  if (type === "ghost") {
    return (
      <button class="bg-transparent text-white border-solid border rounded-3xl border-white px-7 py-3 leading-none whitespace-nowrap">
        {text} <span className="pl-1">&#8599;</span>
      </button>
    );
  } else {
    return (
      <button class="bg-yellow text-black px-7 py-3 rounded-full leading-none whitespace-nowrap">
        {text} <span className="pl-1">&#8599;</span>
      </button>
    );
  }
};
export default Button;
