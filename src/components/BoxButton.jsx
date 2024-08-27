import React from "react";

export default function BoxButton({value, onSquareClick}) {
  return (
    <button
      className="w-32 h-32 border border-white bg-gray-400 text-3xl text-white"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}