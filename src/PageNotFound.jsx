import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <h1 className="font-serif font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#0075FF] to-orange-500 tracking-wider capitalize mb-4">
        Page not Found
      </h1>
      <Link
        to="/"
        className="text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-orange-500 text-3xl font-bold border border-sky-700 p-3 rounded-lg mt-4 hover:text-white transition-all duration-300 hover:bg-clip-border shadow-sm shadow-white capitalize font-serif"
      >
        back to Dashboard
      </Link>
    </div>
  );
};

export default PageNotFound;
