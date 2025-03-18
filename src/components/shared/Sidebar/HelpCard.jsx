import React from "react";
import { MdQuestionMark } from "react-icons/md";

function HelpCard() {
  return (
    <div className="relative bg-gradient-to-br from-[#0c22e3] to-[#0d1c29] px-2 py-4 rounded-2xl w-full shadow-lg  ">
      {/* Floating Icon */}
      <div className="absolute -top-5 left-5 bg-white p-2 rounded-full shadow-md mt-8">
        <div className="bg-blue-600 p-2 rounded-full flex items-center justify-center ">
          <MdQuestionMark className="text-white " />
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 text-white p-1">
        <h2 className="text-lg font-semibold">Need help?</h2>
        <p className="text-sm opacity-80">Please check our docs</p>
        <button className="mt-4 w-full bg-gradient-to-r from-[#1e3c72] to-[#2a5298] px-1 py-2 rounded-lg text-white font-medium shadow-md hover:scale-105 transition-transform  text-xs md:text-base">
          DOCUMENTATION
        </button>
      </div>
    </div>
  );
}

export default HelpCard;
